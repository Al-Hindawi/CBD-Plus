import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnon)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    // Sign in with email + password (admin-provisioned accounts)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMsg(error.message)
    } else {
      setMsg('تم تسجيل الدخول')
      // redirect to dashboard
      window.location.href = '/admin'
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <form onSubmit={handleSubmit} className="p-6 border rounded max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">تسجيل دخول المدربين</h2>
        <label className="block mb-2">Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full mb-3 p-2 border" />
        <label className="block mb-2">Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full mb-3 p-2 border" />
        <button type="submit" className="px-4 py-2 bg-black text-white">دخول</button>
        <p className="mt-3 text-sm">{msg}</p>
      </form>
    </div>
  )
}
