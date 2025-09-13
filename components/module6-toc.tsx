const items = [
  { href: "#intro", label: "Introduction to Deployment" },
  { href: "#fastapi", label: "Serving with FastAPI" },
  { href: "#docker", label: "Containerization with Docker" },
  { href: "#evidently", label: "Monitoring with Evidently AI" },
  { href: "#cicd", label: "CI/CD for ML" },
  { href: "#mini-project", label: "Mini-Project: Churn API" },
  { href: "#lab", label: "Interactive Lab: Dashboards" },
  { href: "#assignments", label: "Assignments" },
]

export function Module6TOC() {
  return (
    <nav aria-label="Table of contents" className="rounded-md border border-gray-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-gray-900">Module Sections</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block rounded px-2 py-1 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-700"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
