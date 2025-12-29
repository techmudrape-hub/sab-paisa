import { NextResponse } from 'next/server'
import { createHmacSha256Signature } from '@/lib/crypto/signature'
import { saveTransaction, getAllTransactions, getTransaction } from '@/lib/database'

export async function POST(request) {
  try {
    console.log('API route called - checking environment variables')
    console.log('SITE_B_ENDPOINT:', process.env.SITE_B_ENDPOINT)
    console.log('SHARED_SECRET exists:', !!process.env.SHARED_SECRET)
    
    if (!process.env.SITE_B_ENDPOINT) {
      console.error('Missing SITE_B_ENDPOINT environment variable')
      return NextResponse.json({ error: 'Missing SITE_B_ENDPOINT' }, { status: 500 })
    }

    const body = await request.json()
    console.log('Received transaction data:', body)

    const requiredFields = ['referenceId', 'amount', 'type', 'description', 'metadata', 'createdAt']
    for (const field of requiredFields) {
      if (!(field in body)) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 })
      }
    }

    // Save transaction to local database first
    console.log('Saving transaction to local database...')
    const dbSuccess = saveTransaction(body)
    if (!dbSuccess) {
      console.error('Failed to save transaction to local database')
      return NextResponse.json({ error: 'Failed to save transaction locally' }, { status: 500 })
    }
    console.log('Transaction saved to local database successfully')

    const { json, signatureHex } = createHmacSha256Signature(body)
    console.log('Generated signature:', signatureHex)
    console.log('Sending to Site B:', process.env.SITE_B_ENDPOINT)

    const upstreamHeaders = {
      'Content-Type': 'application/json',
      'X-Signature': signatureHex,
    }

    // Prefer Authorization header from incoming request; else use env token if present
    const incomingAuth = request.headers.get('authorization')
    const envAuthToken = process.env.SITE_B_BEARER_TOKEN
    if (incomingAuth) {
      upstreamHeaders['Authorization'] = incomingAuth
    } else if (envAuthToken) {
      upstreamHeaders['Authorization'] = `Bearer ${envAuthToken}`
    }

    if (!upstreamHeaders['Authorization']) {
      console.warn('No Authorization header provided for Site B request')
    }

    // For testing: Skip Site B call and return success
    if (process.env.NODE_ENV === 'development' && !process.env.SITE_B_ENDPOINT) {
      console.log('Development mode: Skipping Site B call')
      return NextResponse.json({ 
        success: true, 
        message: 'Transaction saved (development mode)',
        transactionId: body.referenceId 
      }, { status: 200 })
    }

    const res = await fetch(process.env.SITE_B_ENDPOINT, {
      method: 'POST',
      headers: upstreamHeaders,
      body: json,
      cache: 'no-store',
    })

    const text = await res.text()
    let parsed
    try { parsed = text ? JSON.parse(text) : null } catch (e) { parsed = { raw: text } }

    console.log('Site B response status:', res.status)
    console.log('Site B response:', parsed)

    if (!res.ok) {
      console.error('Site B returned error:', { status: res.status, data: parsed })
      return NextResponse.json({ error: 'Upstream error', status: res.status, data: parsed }, { status: 502 })
    }

    return NextResponse.json(parsed ?? null, { status: 200 })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json({ error: 'Unexpected error', message: error?.message ?? String(error) }, { status: 500 })
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const txnId = searchParams.get('txnId')
    
    // If txnId is provided, return specific transaction
    if (txnId) {
      console.log(`GET /api/transactions?txnId=${txnId} - fetching transaction`)
      const transaction = getTransaction(txnId)
      if (!transaction) {
        return NextResponse.json({ error: 'Transaction not found' }, { status: 404 })
      }
      console.log(`Found transaction: ${txnId}`)
      return NextResponse.json(transaction, { status: 200 })
    }
    
    // Otherwise return all transactions
    console.log('GET /api/transactions - fetching all transactions')
    const transactions = getAllTransactions()
    console.log(`Found ${transactions.length} transactions`)
    return NextResponse.json(transactions, { status: 200 })
  } catch (error) {
    console.error('Error fetching transactions:', error)
    return NextResponse.json({ error: 'Failed to fetch transactions', message: error?.message ?? String(error) }, { status: 500 })
  }
}


