const requiredFields = ['referenceId', 'amount', 'type', 'description', 'metadata', 'createdAt']

function validateTransaction(txn) {
  for (const field of requiredFields) {
    if (!(field in txn)) {
      throw new Error(`Missing field: ${field}`)
    }
  }
}

export async function sendTransactionToSiteB(transactions) {
  validateTransaction(transactions)

  if (typeof window === 'undefined') {
    if (!process.env.SITE_B_ENDPOINT) {
      throw new Error('Missing SITE_B_ENDPOINT environment variable')
    }
    // Dynamic import for server-only crypto module
    const { createHmacSha256Signature } = await import('@/lib/crypto/signature')
    const { json, signatureHex } = createHmacSha256Signature(transactions)
    const serverHeaders = {
      'Content-Type': 'application/json',
      'X-Signature': signatureHex,
    }
    if (process.env.SITE_B_BEARER_TOKEN) {
      serverHeaders['Authorization'] = `Bearer ${process.env.SITE_B_BEARER_TOKEN}`
    }
    const res = await fetch(process.env.SITE_B_ENDPOINT, {
      method: 'POST',
      headers: serverHeaders,
      body: json,
      cache: 'no-store',
    })
    const text = await res.text()
    let parsed
    try { parsed = text ? JSON.parse(text) : null } catch (e) { parsed = { raw: text } }
    if (!res.ok) {
      const err = new Error('Upstream error')
      err.status = res.status
      err.data = parsed
      throw err
    }
    return parsed
  }

  const clientHeaders = { 'Content-Type': 'application/json' }
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_BEARER_TOKEN) {
    clientHeaders['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
  }
  const res = await fetch('/api/transactions', {
    method: 'POST',
    headers: clientHeaders,
    body: JSON.stringify(transactions),
    cache: 'no-store',
  })
  const text = await res.text()
  let parsed
  try { parsed = text ? JSON.parse(text) : null } catch (e) { parsed = { raw: text } }
  if (!res.ok) {
    const err = new Error(`Proxy error: ${res.status} - ${parsed?.error || text}`)
    err.status = res.status
    err.data = parsed
    console.error('API route error:', { status: res.status, text, parsed })
    throw err
  }
  return parsed
}


