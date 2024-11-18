"use server"

export async function getApiKeys() {
  return {
    publicKey: process.env.NEXT_PUBLIC_METER_API_KEY || '',
    secretKey: process.env.METER_SECRET_KEY || ''
  };
}
