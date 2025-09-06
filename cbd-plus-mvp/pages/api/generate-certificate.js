// API stub for certificate generation.
// In production, use a secure service role key (SUPABASE_SERVICE_KEY) or serverless function
// that renders your certificate template to PDF (using Puppeteer or PDF libraries).
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { trainerName, courseTitle, code } = req.body || {}
  // TODO: Implement PDF generation using a template and save to Supabase Storage.
  // For now, return a JSON response stub.
  return res.status(200).json({ ok: true, message: 'Certificate generation stub', trainerName, courseTitle, code })
}
