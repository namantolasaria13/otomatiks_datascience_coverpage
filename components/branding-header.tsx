export function BrandingHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {/* Note: Using the provided Source URL directly per user request */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-Nd5O537RUVzW8Y6vALK3pzdVdGS4rc.png"
            alt="Otomatiks logo"
            className="h-8 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-pretty text-base font-semibold text-gray-900">Data Science Course by Otomatiks</span>
            <span className="text-xs text-gray-600">Level 1: Core Machine Learning & Development</span>
          </div>
        </div>
        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">8–10 weeks</span>
      </div>
    </header>
  )
}
