import { useRouter } from 'next/router'
export default function CoursePage() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className="min-h-screen p-8 bg-white text-black">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Course: {slug}</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="border rounded p-4">Video Player (Vimeo)</div>
          <div className="mt-4 p-4 border">Lesson content and resources</div>
        </div>
        <aside className="p-4 border rounded">Course outline / Progress</aside>
      </div>
    </div>
  )
}
