export function CourseHero() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <h1 className="text-balance text-2xl font-semibold text-gray-900">
              Level 1: Core Machine Learning & Development
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Theme: Model development, evaluation, and deployment pipelines
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-gray-200 p-4">
                <h3 className="text-sm font-medium text-gray-900">Pre-requisites</h3>
                <ul className="mt-1 list-disc pl-5 text-sm leading-6 text-gray-600">
                  <li>Python Basics</li>
                  <li>ML Algorithm Basics with hands-on implementation</li>
                  <li>Packages: NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter</li>
                </ul>
              </div>
              <div className="rounded-md border border-gray-200 p-4">
                <h3 className="text-sm font-medium text-gray-900">Duration</h3>
                <p className="mt-1 text-sm text-gray-600">8–10 weeks</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <h3 className="text-sm font-semibold text-gray-900">Objectives</h3>
              <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-gray-700">
                <li>Train models using real-world constraints</li>
                <li>Learn the full ML lifecycle: problem framing → monitoring</li>
                <li>Practice reproducibility with MLOps tools</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <InfoPill title="Module 1" text="ML Lifecycle · Scikit-learn, DVC" />
          <InfoPill title="Module 2" text="Data Engineering · Imblearn, Pandas, Featuretools" />
          <InfoPill title="Module 3" text="Model Building · Metrics, XGBoost, Optuna" />
          <InfoPill title="Module 4" text="NLP Foundations · NLTK, SpaCy, HF" />
          <InfoPill title="Module 5" text="MLOps Intro · MLflow, CI/CD" />
          <InfoPill title="Module 6" text="Deployment & Monitoring · FastAPI, Docker, Evidently" />
        </div>
      </div>
    </div>
  )
}

function InfoPill({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-3">
      <div className="text-xs font-semibold uppercase tracking-wide text-sky-700">{title}</div>
      <div className="mt-1 text-sm text-gray-700">{text}</div>
    </div>
  )
}
