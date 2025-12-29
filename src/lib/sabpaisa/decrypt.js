import crypto from 'node:crypto'
import { parsePaymentResponse } from 'sabpaisa-pg-dev'; // This is a library that can parse the payment response

// npm install sabpaisa-pg-dev

/**
 * ============================================
 * SABPAISA PAYMENT RESPONSE DECRYPTION UTILITY
 * ============================================
 * Server-side utility for decrypting SabPaisa payment gateway responses
 * This function handles multiple decryption approaches for compatibility
 * 
 * WHY SERVER-SIDE ONLY:
 * - Payment gateway secrets (AUTH_KEY, AUTH_IV) should NEVER be exposed to client
 * - Client-side decryption breaks after HTTPS redirects (307) in production
 * - Server-side decryption works reliably in all environments
 */

/**
 * Decrypts SabPaisa encrypted response using AES-256-CBC
 * Tries multiple decryption approaches for compatibility with different SabPaisa formats
 * 
 * @param {string} encResponse - Encrypted response string (hex or base64)
 * @param {string} authKey - Base64 encoded AES key
 * @param {string} authIV - Base64 encoded initialization vector
 * @returns {object} Decrypted payment data object or error object
 * 
 */

export function decryptSabPaisaResponse(encResponse) {
  try {
    console.log('[DECRYPT] Decrypting payment response:', encResponse)
    return parsePaymentResponse(encResponse)
  } catch (error) {
    console.error('[DECRYPT] Decryption error:', error)
    return { status: 'error', message: `Failed to decrypt response: ${error.message}`, timestamp: new Date().toISOString() }
  }
}


// export function decryptSabPaisaResponse(encResponse, authKey, authIV) {
//   try {
//     // Decode base64 strings for key and IV
//     const key = Buffer.from(authKey || '', 'base64')
//     const fullIV = Buffer.from(authIV || '', 'base64')
    
//     // IV must be exactly 16 bytes for AES-256-CBC
//     const iv = fullIV.slice(0, 16)
    
//     // Validate inputs
//     if (!encResponse) {
//       console.log('[DECRYPT] No encrypted response provided')
//       return {
//         status: 'error',
//         message: 'No encrypted response provided',
//         timestamp: new Date().toISOString()
//       }
//     }

//     if (key.length === 0 || iv.length === 0) {
//       console.error('[DECRYPT] Invalid key or IV length')
//       return {
//         status: 'error',
//         message: 'Invalid encryption key or IV',
//         timestamp: new Date().toISOString()
//       }
//     }
    
//     // Log input details for debugging
//     console.log('[DECRYPT] Input details:', {
//       encResponseLength: encResponse.length,
//       keyLength: key.length,
//       ivLength: iv.length,
//       isHex: /^[0-9A-Fa-f]+$/.test(encResponse),
//     })
    
//     // APPROACH 1: Try with custom padding for SabPaisa format (hex encoded)
//     try {
//       const encryptedData = Buffer.from(encResponse, 'hex')
      
//       // Calculate padding needed for AES block size (16 bytes)
//       const blockSize = 16
//       const remainder = encryptedData.length % blockSize
//       const paddingNeeded = remainder === 0 ? 0 : blockSize - remainder
      
//       // Add padding if needed
//       let paddedData = encryptedData
//       if (paddingNeeded > 0) {
//         paddedData = Buffer.concat([encryptedData, Buffer.alloc(paddingNeeded, paddingNeeded)])
//         console.log('[DECRYPT] Added PKCS#7 padding:', paddingNeeded, 'bytes')
//       }
      
//       // Create decipher with manual padding handling
//       const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
//       decipher.setAutoPadding(false)
      
//       // Decrypt the data
//       let decrypted = decipher.update(paddedData)
//       decrypted = Buffer.concat([decrypted, decipher.final()])
      
//       // Remove PKCS#7 padding manually
//       const lastByte = decrypted[decrypted.length - 1]
//       if (lastByte <= blockSize) {
//         let validPadding = true
//         for (let i = 1; i <= lastByte; i++) {
//           if (decrypted[decrypted.length - i] !== lastByte) {
//             validPadding = false
//             break
//           }
//         }
        
//         if (validPadding) {
//           decrypted = decrypted.slice(0, decrypted.length - lastByte)
//         }
//       }
      
//       // Convert to string and clean up non-printable characters
//       let result = decrypted.toString('utf8')
//       console.log('[DECRYPT] Raw decrypted result (first 100 chars):', result.substring(0, 100))
      
//       // Clean the result by removing non-printable characters
//       const cleanedResult = result.replace(/[\x00-\x1F\x7F-\x9F]/g, '')
      
//       // Try to find a valid JSON object in the result
//       const jsonMatch = cleanedResult.match(/\{[^\{\}]*(?:\{[^\{\}]*\}[^\{\}]*)*\}/)
//       if (jsonMatch) {
//         console.log('[DECRYPT] Found JSON object in decrypted data')
//         try {
//           const parsedJson = JSON.parse(jsonMatch[0])
//           console.log('[DECRYPT] Successfully parsed JSON from decrypted data')
//           return parsedJson
//         } catch (jsonError) {
//           console.log('[DECRYPT] Found JSON-like content but failed to parse:', jsonError.message)
//         }
//       }
      
//       // If we couldn't find valid JSON, try to extract key-value pairs
//       const keyValuePairs = cleanedResult.match(/([\w]+)=([^&]+)&?/g)
//       if (keyValuePairs && keyValuePairs.length > 0) {
//         console.log('[DECRYPT] Found key-value pairs in decrypted data')
//         const resultObj = {}
//         keyValuePairs.forEach(pair => {
//           const [key, value] = pair.replace('&', '').split('=')
//           if (key && value) {
//             resultObj[key] = value
//           }
//         })
        
//         if (Object.keys(resultObj).length > 0) {
//           console.log('[DECRYPT] Created object from key-value pairs')
//           return resultObj
//         }
//       }
//     } catch (approachError) {
//       console.log('[DECRYPT] Custom padding approach failed:', approachError.message)
//     }
    
//     // APPROACH 2: Try direct hex decoding with auto padding
//     try {
//       const encryptedData = Buffer.from(encResponse, 'hex')
//       const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
//       let decrypted = decipher.update(encryptedData)
//       decrypted = Buffer.concat([decrypted, decipher.final()])
      
//       const result = decrypted.toString('utf8')
//       console.log('[DECRYPT] Direct hex approach succeeded')
      
//       // Try JSON parsing first
//       try {
//         return JSON.parse(result)
//       } catch (jsonError) {
//         console.log('[DECRYPT] JSON parsing failed, trying key-value pairs')
        
//         // Try to parse as key-value pairs (URL-encoded format)
//         const cleanedResult = result.replace(/[\x00-\x1F\x7F-\x9F]/g, '')
//         const keyValuePairs = cleanedResult.match(/([\w]+)=([^&]+)&?/g)
//         if (keyValuePairs && keyValuePairs.length > 0) {
//           console.log('[DECRYPT] Found key-value pairs in decrypted data')
//           const resultObj = {}
//           keyValuePairs.forEach(pair => {
//             const [key, value] = pair.replace('&', '').split('=')
//             if (key && value) {
//               resultObj[key] = decodeURIComponent(value)
//             }
//           })
          
//           if (Object.keys(resultObj).length > 0) {
//             console.log('[DECRYPT] Created object from key-value pairs')
//             return resultObj
//           }
//         }
        
//         // If all parsing fails, return error
//         console.log('[DECRYPT] All parsing attempts failed')
//         return { rawResponse: result, status: 'error', message: 'Failed to parse decrypted response' }
//       }
//     } catch (directError) {
//       console.log('[DECRYPT] Direct hex approach failed:', directError.message)
//     }
    
//     // APPROACH 3: Try base64 decoding
//     try {
//       const encryptedData = Buffer.from(encResponse, 'base64')
//       const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
//       let decrypted = decipher.update(encryptedData)
//       decrypted = Buffer.concat([decrypted, decipher.final()])
      
//       const result = decrypted.toString('utf8')
//       console.log('[DECRYPT] Base64 approach succeeded')
      
//       // Try JSON parsing first
//       try {
//         return JSON.parse(result)
//       } catch (jsonError) {
//         console.log('[DECRYPT] JSON parsing failed, trying key-value pairs')
        
//         // Try to parse as key-value pairs (URL-encoded format)
//         const cleanedResult = result.replace(/[\x00-\x1F\x7F-\x9F]/g, '')
//         const keyValuePairs = cleanedResult.match(/([\w]+)=([^&]+)&?/g)
//         if (keyValuePairs && keyValuePairs.length > 0) {
//           console.log('[DECRYPT] Found key-value pairs in decrypted data')
//           const resultObj = {}
//           keyValuePairs.forEach(pair => {
//             const [key, value] = pair.replace('&', '').split('=')
//             if (key && value) {
//               resultObj[key] = decodeURIComponent(value)
//             }
//           })
          
//           if (Object.keys(resultObj).length > 0) {
//             console.log('[DECRYPT] Created object from key-value pairs')
//             return resultObj
//           }
//         }
        
//         // If all parsing fails, return error
//         console.log('[DECRYPT] All parsing attempts failed')
//         return { rawResponse: result, status: 'error', message: 'Failed to parse decrypted response' }
//       }
//     } catch (base64Error) {
//       console.log('[DECRYPT] Base64 approach failed:', base64Error.message)
//     }
    
//     // APPROACH 4: Return a fallback response with the error
//     console.log('[DECRYPT] All decryption approaches failed, returning fallback response')
//     return {
//       status: 'error',
//       message: 'Failed to decrypt the payment response',
//       encryptedResponse: encResponse.substring(0, 50) + '...',
//       timestamp: new Date().toISOString()
//     }
//   } catch (error) {
//     console.error('[DECRYPT] Decryption error:', error)
//     return {
//       status: 'error',
//       message: `Failed to decrypt response: ${error.message}`,
//       timestamp: new Date().toISOString()
//     }
//   }
// }

