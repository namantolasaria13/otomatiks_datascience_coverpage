declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export function Module6Sections() {
  return (
    <div className="space-y-12">
      <Section
        id="intro"
        title="Introduction to Deployment in Data Science"
        points={[
          "Deployment integrates trained models into applications so they can serve real data.",
          "Common patterns: Batch (scheduled predictions) and Real-Time (on-demand inference).",
          "Business users access predictions via APIs, dashboards, or batch jobs—not notebooks.",
        ]}
      />

      <Section
        id="fastapi"
        title="Serving ML Models with FastAPI"
        points={[
          "Fast, type-safe API framework ideal for ML inference services.",
          "Steps: train & save model → define Pydantic input schema → load model → expose /predict → run with Uvicorn.",
          `Example I/O: Input {"age": 32, "income": 45000} → Output {"churn_probability": 0.82}.`,
        ]}
        codeTitle="Pydantic schema + predict route (sketch)"
        code={`from fastapi import FastAPI
from pydantic import BaseModel
import joblib

class Features(BaseModel):
    age: int
    income: float

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
def predict(f: Features):
    x = [[f.age, f.income]]
    proba = float(model.predict_proba(x)[0][1])
    return {"churn_probability": round(proba, 4)}
`}
      />

      <Section
        id="docker"
        title="Containerization with Docker"
        points={[
          "Encapsulate code + dependencies for consistent, portable deployments.",
          "Typical workflow: write Dockerfile → docker build → docker run -p 8000:8000 image.",
          "Great for microservices architectures and scaling on any cloud.",
        ]}
        codeTitle="Sample Dockerfile (Python + FastAPI)"
        code={`# syntax=docker/dockerfile:1
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
# Example: uvicorn main:app --host 0.0.0.0 --port 8000
CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
`}
      />

      <Section
        id="evidently"
        title="Monitoring ML Models with Evidently AI"
        points={[
          "Track data drift, target drift, data quality, and performance over time.",
          "Compare live traffic against training baseline; generate HTML/JSON reports.",
          "Use scheduled jobs to produce drift reports and alert on threshold breaches.",
        ]}
        codeTitle="Evidently drift report (sketch)"
        code={`from evidently.report import Report
from evidently.metrics import DataDriftPreset
report = Report(metrics=[DataDriftPreset()])
report.run(reference_data=ref_df, current_data=live_df)
report.save_html("drift_report.html")
`}
      />

      <Section
        id="cicd"
        title="CI/CD for ML (End-to-End Automation)"
        points={[
          "Automate testing, building, and deployment of models/APIs via GitHub Actions.",
          "Typical steps: checkout → setup Python → install deps → run tests → build image → push → deploy.",
          "Integrate with Model Registry and gating rules (promote only if metrics improve).",
        ]}
        codeTitle="GitHub Actions (simplified)"
        code={`name: mlops-pipeline
on: { push: { branches: ["main"] } }
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.11" }
      - run: pip install -r requirements.txt
      - run: pytest -q
      - run: docker build -t myorg/churn-api:latest .
      - run: echo '\${{ secrets.DOCKER_PAT }}' | docker login -u myorg --password-stdin
      - run: docker push myorg/churn-api:latest
`}
      />

      <Section
        id="mini-project"
        title="Mini-Project: Real-Time Churn Prediction API"
        points={[
          "Train classifier (e.g., XGBoost) on Telco Customer Churn.",
          "Serve /predict via FastAPI, containerize with Docker.",
          "Log requests; generate daily Evidently drift report; automate with GitHub Actions.",
        ]}
      />

      <Section
        id="lab"
        title="Interactive Lab: Deployment Dashboards"
        points={[
          "API Logs Dashboard: requests, latency, error rate.",
          "Drift Monitoring: visualize Evidently reports and feature shifts.",
          "Performance Dashboard: precision/recall/F1 if labels are available; alert on drops.",
        ]}
      />

      <Assignments />
    </div>
  )
}

function Section({
  id,
  title,
  points,
  code,
  codeTitle,
}: {
  id: string
  title: string
  points: string[]
  codeTitle?: string
  code?: string
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h3 className="text-pretty text-xl font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-gray-700">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {code && (
        <div className="mt-4 rounded-md border border-gray-200 bg-white">
          <div className="border-b border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
            {codeTitle || "Example"}
          </div>
          <pre className="overflow-x-auto p-3 text-xs leading-5 text-gray-900">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </section>
  )
}

function Assignments() {
  return (
    <section id="assignments" className="scroll-mt-20">
      <h3 className="text-pretty text-xl font-semibold text-gray-900">Assignments</h3>
      <div className="mt-3 space-y-4">
        <Assignment
          title="Assignment 1: FastAPI Deployment"
          items={[
            "Train a Logistic Regression model on Telco dataset.",
            "Expose /predict endpoint with FastAPI.",
            "Submit API code + screenshot of a successful prediction.",
          ]}
        />
        <Assignment
          title="Assignment 2: Docker Containerization"
          items={[
            "Containerize your FastAPI app.",
            "Run locally with port mapping.",
            "Submit Dockerfile + container run logs screenshot.",
          ]}
        />
        <Assignment
          title="Assignment 3: Data Drift Monitoring"
          items={[
            "Use Evidently to compare training vs test/live data.",
            "Generate and submit an HTML drift report + short summary.",
          ]}
        />
        <Assignment
          title="Assignment 4: CI/CD Pipeline (Capstone)"
          items={[
            "Create a GitHub Actions workflow to build and push Docker images on push.",
            "Submit repo link + screenshot of a successful Action run.",
          ]}
        />
      </div>
    </section>
  )
}

function Assignment({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-4">
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-gray-700">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  )
}
