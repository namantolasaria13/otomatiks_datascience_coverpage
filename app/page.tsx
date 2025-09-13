import Link from "next/link"

export default function HomePage() {
  const moduleUrls = {
    1: "https://v0-otomatiksmod1.vercel.app",
    2: "https://v0-otomatiksmod2.vercel.app/",
    3: "https://v0-mod3final.vercel.app/",
    4: "https://v0-nlpfoundationsmodule.vercel.app/",
    5: "https://v0-refine-ui-code.vercel.app/",
    6: "https://otomatiks-datascience-mod6.vercel.app/",
  }

  return (
    <main className="min-h-dvh bg-white text-zinc-900">
      <header className="border-b border-zinc-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-qH6zmS6goTBLIEmVrdCY8mBESYBTyA.png"
            alt="Otomatiks logo"
            className="h-10 w-auto"
          />
          <div className="flex-1">
            <h1 className="text-pretty font-semibold text-2xl md:text-3xl">Data Science Course by Otomatiks</h1>
            <p className="text-zinc-600 text-sm md:text-base">
              Level 1: Core Machine Learning & Development — Theme: model development, evaluation, and deployment
              pipelines
            </p>
          </div>
          <Link
            href="#enroll"
            className="hidden md:inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Get syllabus
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-zinc-100 p-5">
            <h2 className="font-semibold text-lg">Capstone</h2>
            <p className="text-zinc-600 mt-1">Astronomical Event Classifier (Imbalanced time-series)</p>
          </div>
          <div className="rounded-lg border border-zinc-100 p-5">
            <h2 className="font-semibold text-lg">Duration</h2>
            <p className="text-zinc-600 mt-1">8–10 weeks</p>
          </div>
          <div className="rounded-lg border border-zinc-100 p-5">
            <h2 className="font-semibold text-lg">Objectives</h2>
            <ul className="text-zinc-600 mt-2 list-disc pl-5 space-y-1">
              <li>Train models with real-world constraints</li>
              <li>Master the full ML lifecycle</li>
              <li>Practice reproducibility with MLOps tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modules grid */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12" id="modules">
        <h2 className="text-pretty font-semibold text-xl md:text-2xl">Modules</h2>
        <p className="text-zinc-600 mt-1">Explore the six modules in this level.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { id: 1, title: "ML Lifecycle", subtitle: "DVC, reproducibility, supervised/unsupervised" },
            { id: 2, title: "Data Engineering", subtitle: "Missing data, imbalance, feature stores" },
            { id: 3, title: "Model Building", subtitle: "F1/ROC/PR, Optuna tuning" },
            { id: 4, title: "NLP Foundations", subtitle: "Text prep, TF‑IDF, POS, transformers" },
            { id: 5, title: "Intro to MLOps", subtitle: "MLflow, CI/CD, Model Registry" },
            { id: 6, title: "Deployment & Monitoring", subtitle: "FastAPI, Docker, Evidently" },
          ].map((m) => (
            <Link
              key={m.id}
              href={moduleUrls[m.id as keyof typeof moduleUrls]} // Updated to use actual deployed URLs
              className="group rounded-lg border border-zinc-100 p-5 hover:border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  {m.id}. {m.title}
                </h3>
                <span className="rounded-full bg-amber-500/10 text-amber-700 text-xs px-2 py-1">Open</span>
              </div>
              <p className="text-zinc-600 mt-1">{m.subtitle}</p>
              <div className="mt-3 inline-flex items-center text-sky-700 text-sm group-hover:underline">
                View module
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Syllabus */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12" id="enroll">
        <h2 className="text-pretty font-semibold text-xl md:text-2xl">Syllabus</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-100">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-zinc-700">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Module</th>
                <th className="text-left px-4 py-3 font-medium">Topics</th>
                <th className="text-left px-4 py-3 font-medium">Tools/Skills</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "1. ML Lifecycle",
                  "Data discovery, versioning (DVC), reproducibility; supervised & unsupervised",
                  "Scikit-learn, DVC",
                ],
                [
                  "2. Data Engineering",
                  "Missing data, imbalanced datasets, feature stores",
                  "Pandas, Imblearn, Featuretools",
                ],
                [
                  "3. Model Building",
                  "F1, ROC/PR curves, hyperparameter tuning (Optuna)",
                  "Scikit-learn, XGBoost, Optuna",
                ],
                ["4. NLP Foundations", "Preprocessing, TF-IDF, POS, intro to transformers", "NLTK, SpaCy, HuggingFace"],
                ["5. MLOps Intro", "MLflow, CI/CD workflows, Model Registry", "MLflow, GitHub Actions"],
                ["6. Deployment & Monitoring", "FastAPI APIs, Docker, monitoring", "Docker, FastAPI, Evidently"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-zinc-100">
                  <td className="px-4 py-3 font-medium">{row[0]}</td>
                  <td className="px-4 py-3 text-zinc-700">{row[1]}</td>
                  <td className="px-4 py-3 text-zinc-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12" id="prerequisites">
        <h2 className="text-pretty font-semibold text-xl md:text-2xl">Prerequisites</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-100 p-5">
            <h3 className="font-semibold">Core</h3>
            <ul className="text-zinc-600 mt-2 list-disc pl-5 space-y-1">
              <li>Python basics (functions, lists, dicts, modules)</li>
              <li>ML algorithm basics (classification, regression, evaluation)</li>
              <li>Hands-on: train/test split, fit/predict in scikit‑learn</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-100 p-5">
            <h3 className="font-semibold">Suggested packages</h3>
            <ul className="text-zinc-600 mt-2 list-disc pl-5 space-y-1">
              <li>NumPy, Pandas, Matplotlib/Seaborn</li>
              <li>Scikit-learn; optional: XGBoost, Optuna</li>
              <li>Git & GitHub basics; command-line familiarity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Marketing highlights */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12" id="why">
        <h2 className="text-pretty font-semibold text-xl md:text-2xl">Why this course</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["End-to-end practice", "From problem framing to production monitoring with real constraints."],
            ["Career-ready skills", "Pipelines, MLOps, reproducibility, model registry, CI/CD."],
            ["Capstone portfolio", "Ship an Astronomical Event Classifier for rare events."],
          ].map((card, i) => (
            <div key={i} className="rounded-lg border border-zinc-100 p-5">
              <h3 className="font-semibold">{card[0]}</h3>
              <p className="text-zinc-600 mt-2">{card[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12" id="roadmap">
        <h2 className="text-pretty font-semibold text-xl md:text-2xl">Roadmap (8–10 weeks)</h2>
        <ol className="mt-4 space-y-3">
          <li className="rounded-lg border border-zinc-100 p-4">
            <span className="font-semibold">Weeks 1–2:</span> ML Lifecycle (Module 1) → Data Engineering (Module 2)
          </li>
          <li className="rounded-lg border border-zinc-100 p-4">
            <span className="font-semibold">Weeks 3–4:</span> Model Building (Module 3) → NLP Foundations (Module 4)
          </li>
          <li className="rounded-lg border border-zinc-100 p-4">
            <span className="font-semibold">Weeks 5–6:</span> Intro to MLOps (Module 5)
          </li>
          <li className="rounded-lg border border-zinc-100 p-4">
            <span className="font-semibold">Weeks 7–8:</span> Deployment & Monitoring (Module 6)
          </li>
          <li className="rounded-lg border border-zinc-100 p-4">
            <span className="font-semibold">Weeks 9–10:</span> Capstone: Astronomical Event Classifier, report &
            presentation
          </li>
        </ol>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Questions?</p>
            <p className="text-zinc-600">Review the syllabus and click any module to dive in.</p>
          </div>
          <a
            href="#modules"
            className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Explore modules
          </a>
        </div>
      </footer>
    </main>
  )
}
