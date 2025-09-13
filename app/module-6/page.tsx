import { BrandingHeader } from "@/components/branding-header"
import { CourseHero } from "@/components/course-hero"
import { Module6TOC } from "@/components/module6-toc"
import { Module6Sections } from "@/components/module6-sections"

export default function Module6Page() {
  return (
    <main className="min-h-screen">
      <BrandingHeader />
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <CourseHero />
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-pretty text-2xl font-semibold text-gray-900">Module 6: Deployment & Monitoring</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
            Learn how to take models from notebooks to production-grade services with FastAPI, containerize them with
            Docker, monitor with Evidently AI, and automate with CI/CD. This page provides a structured,
            student-friendly walkthrough.
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="lg:sticky lg:top-6 lg:h-fit">
              <Module6TOC />
            </aside>
            <article className="max-w-3xl">
              <Module6Sections />
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
