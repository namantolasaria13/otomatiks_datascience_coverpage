import Link from "next/link"

export default function ModulePage({ params }: { params: { id: string } }) {
  const map: Record<string, { title: string; summary: string }> = {
    "1": { title: "ML Lifecycle", summary: "DVC, reproducibility; supervised & unsupervised learning." },
    "2": { title: "Data Engineering", summary: "Missing data, imbalanced datasets, feature stores." },
    "3": { title: "Model Building", summary: "Metrics (F1/ROC/PR) and hyperparameter tuning with Optuna." },
    "4": { title: "NLP Foundations", summary: "Text preprocessing, TF‑IDF, POS tagging, transformers." },
    "5": { title: "Intro to MLOps", summary: "MLflow, CI/CD workflows, Model Registry." },
    "6": { title: "Deployment & Monitoring", summary: "FastAPI, Docker, Evidently; production monitoring." },
  }
  const m = map[params.id] || { title: "Module", summary: "Details coming soon." }

  return (
    <main className="min-h-dvh bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link href="/" className="text-sky-700 hover:underline">
          &larr; Back to cover page
        </Link>
        <h1 className="mt-4 text-pretty font-semibold text-2xl md:text-3xl">
          Module {params.id}: {m.title}
        </h1>
        <p className="text-zinc-600 mt-2">{m.summary}</p>
        <div className="mt-6 rounded-lg border border-zinc-100 p-5">
          <p className="text-zinc-700">This is a placeholder page. Replace with your full module content when ready.</p>
        </div>
      </div>
    </main>
  )
}
