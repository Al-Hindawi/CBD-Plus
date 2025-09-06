import Link from 'next/link'
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="max-w-4xl p-8">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img src="/logo-black.png" alt="CBD Plus" className="h-12" />
            <h1 className="text-2xl font-bold">CBD Plus</h1>
          </div>
          <div className="flex gap-4">
            <Link href="/login"><a className="px-4 py-2 border">Admin Login</a></Link>
          </div>
        </header>
        <main>
          <h2 className="text-xl font-semibold mb-4">مرحبًا بكم في CBD Plus</h2>
          <p className="mb-6">منصة تطوير المدربين لقسم بناء القدرات - IFMSA Iraq.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">Navigation</div>
            <div className="p-4 border rounded">Lab</div>
            <div className="p-4 border rounded">Academy</div>
          </div>
        </main>
      </div>
    </div>
  )
}
