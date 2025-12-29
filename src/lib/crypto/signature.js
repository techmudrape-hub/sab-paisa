import crypto from 'crypto'

export function createHmacSha256Signature(payloadObject) {
  if (!process.env.SHARED_SECRET) {
    throw new Error('Missing SHARED_SECRET environment variable')
  }

  const json = JSON.stringify(payloadObject)
  const hmac = crypto.createHmac('sha256', process.env.SHARED_SECRET)
  hmac.update(json, 'utf8')
  const signatureHex = hmac.digest('hex')
  return { json, signatureHex }
}


