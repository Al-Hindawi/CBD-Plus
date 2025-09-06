import Link from 'next/link'
export default function Admin() {
  return (
    <div className="min-h-screen p-8 bg-white text-black">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">لوحة إدارة CBD Plus</h1>
        <Link href="/"><a className="underline">الصفحة الرئيسية</a></Link>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">Manage Trainers</div>
        <div className="p-4 border rounded">Manage Courses</div>
        <div className="p-4 border rounded">Generate Certificates</div>
      </main>
    </div>
  )
}
