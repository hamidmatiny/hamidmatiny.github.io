export const site = {
  name: 'Mohammadreza "Hamid" Matiny',
  shortName: 'Hamid Matiny',
  title: 'AI Infrastructure & MLOps Engineer',
  description:
    'AI Infrastructure & MLOps Engineer specializing in LLM serving, GPU orchestration, and production observability. 30 public repositories spanning LLM infra, data engineering, and computer vision.',
  url: 'https://hamidmatiny.github.io',
  email: 'hamidmatiny@gmail.com',
  github: 'https://github.com/hamidmatiny',
  githubUser: 'hamidmatiny',
  linkedin: 'https://www.linkedin.com/in/mohammadreza-matiny-46812121a',
  roleNote: 'Shipping AI infrastructure and data platforms across 30 public repositories.',
  location: 'Available globally · open to remote',
  yearsExperience: '12',
} as const;

export type FeaturedProject = {
  id: string;
  name: string;
  tagline: string;
  status: string;
  statusTone: 'live' | 'building' | 'validated';
  url: string;
  architecture: string;
  decisions: string[];
  stack: string[];
};

export const featured: FeaturedProject[] = [
  {
    id: 'vulcan',
    name: 'Vulcan',
    tagline:
      'Multi-backend LLM serving and GPU-orchestration platform — one contract across vLLM, Triton, Ray Serve, KServe, and BentoML.',
    status:
      'Tagged v1.2.0 across 22 phases: advanced GPU serving (GPTQ/AWQ/FP8, TensorRT-LLM templates), cost-per-token tracking, training backends, LoRA/PEFT, DVC exports, pluggable MLflow/W&B tracking, and a tool-grounded LangGraph advisor with non-fabrication CI.',
    statusTone: 'live',
    url: 'https://github.com/hamidmatiny/Vulcan',
    architecture:
      'Clients and a LangGraph advisor hit a routing gateway that speaks a unified model-serving contract (/health, /metrics, /v1/infer). Backends — BentoML, Ray Serve, Triton (+ TensorRT-LLM), vLLM (+ GPTQ/AWQ/FP8 packs), KServe — plug in behind that contract. Training jobs (Ray Train, FSDP/DDP, DeepSpeed, LoRA/PEFT) share a TrainingJobSpec; MLflow and W&B track runs; DVC versions exports. GPU infra (Kueue / Karpenter / MIG) is validated in CI without burning real GPU cost. SageMaker and Bedrock are selectable managed paths. Observability (Prometheus, Grafana, Tempo, cost-per-token) grounds every advisor number in real evidence.',
    decisions: [
      'Unified serving contract instead of per-backend APIs (ADR-001)',
      'GPU cost-safety: validate-only infra in CI; no invented tokens/s (ADR-002, ADR-007)',
      'Kueue multi-tenant scheduling + MIG partitioning strategy (ADR-003, ADR-004)',
      'LangGraph advisor is tool-grounded — every stated number must appear in Prometheus/benchmark evidence (ADR-014)',
      'Pluggable experiment tracking: MLflow self-hosted + W&B offline-only in CI (ADR-013)',
    ],
    stack: [
      'vLLM',
      'Triton',
      'Ray Serve',
      'KServe',
      'BentoML',
      'Kueue',
      'Karpenter',
      'TensorRT-LLM',
      'LoRA/PEFT',
      'DVC',
      'MLflow',
      'W&B',
      'LangGraph',
      'SageMaker',
      'Bedrock',
    ],
  },
  {
    id: 'argus',
    name: 'Argus',
    tagline:
      "Production-shaped fleet telemetry platform — Kafka/Ray/Flink ingest, Iceberg + Dagster lakehouse, drift detection, OPA-backed incidents, and a read-only AI copilot.",
    status:
      "Tagged v1.0.0 — CHANGELOG calls it the first production-shaped release (Phases 0–15). 45 Docker Compose services, 41 test files (including Kafka integration tests), and 6 active CI workflows (ci, docker-build, semgrep, e2e-nightly, load-nightly, chaos-nightly).",
    statusTone: 'live',
    url: 'https://github.com/hamidmatiny/Argus',
    architecture:
      'Redpanda/MSK → Ray ingest → stream-processor QA gate (Flink option) → Iceberg + Trino lakehouse → Dagster/MLflow orchestration → drift-monitor (KS tests, embeddings, Evidently) → OPA-backed incident-engine (circuit breakers) → api-gateway (OIDC/Keycloak, OPA RBAC) → Next.js dashboard, plus a read-only Qdrant-RAG AI copilot with its own eval harness. Same container images run via Docker Compose locally or Terraform + Helm (one chart per service) + Argo CD app-of-apps on EKS.',
    decisions: [
      'Contract-first streaming path with an explicit QA gate before lakehouse writes',
      'Iceberg + Dagster for reproducible lakehouse materialization',
      'OPA policy for incident decisions — not prompt-only automation',
      'Copilot is read-only against telemetry and runbooks, backed by an eval harness',
      'Documented scope cuts (KNOWN_GAPS.md) instead of overclaiming — no service mesh/mTLS, Vault-backed secrets, or column-level lineage yet',
    ],
    stack: [
      'Kafka',
      'Redpanda',
      'Ray',
      'Flink',
      'Iceberg',
      'Trino',
      'Dagster',
      'OpenTelemetry',
      'OPA',
      'Argo CD',
      'Terraform',
      'Next.js',
      'Qdrant',
    ],
  },
  {
    id: 'prism',
    name: 'PRISM',
    tagline:
      'Multi-warehouse fleet-intelligence platform — camera/sensor ingest, a PySpark lakehouse with dbt gold models, and OpenCV/ONNX defect detection with human review.',
    status:
      'Tagged v1.2.0 — all 20 phases (0–19) complete, including a golden-path chaos e2e test against the live Compose stack. 17-service Docker Compose stack, 19 test files, 2 CI workflows (lint/test, Terraform validate + release packaging).',
    statusTone: 'live',
    url: 'https://github.com/hamidmatiny/PRISM',
    architecture:
      'Camera/sensor ingest lands in a bronze zone, then splits: a PySpark medallion lakehouse (bronze → silver → gold, dbt-modeled) on one side, an OpenCV/ONNX YOLO-family CV service on the other, routing low-confidence findings to a Django control-plane review queue. Gold data fans out through one activation contract to both Redshift and Snowflake, mirrors to Azure Databricks/ADLS for DR, and feeds a Vue 3 + Three.js digital-twin cockpit. An incident-engine runs per-asset circuit breakers on OPA/Rego trip policies; Dagster orchestrates the lakehouse and drift-monitor; a tool-grounded AI copilot answers only from evidence it can cite.',
    decisions: [
      'Two-layer Pydantic → Pandera validation gate before any bronze promotion',
      'Per-asset circuit breakers driven by OPA/Rego trip policies, not hardcoded thresholds',
      'Drift-monitor baselines never build from synthetic scenario data — health stays non-ready until a real baseline earns it',
      'Copilot is tool-grounded — every answer must cite real evidence (ADR-004)',
      'Cloud paths (AWS + Azure Terraform) are plan/validate/checkov-only in CI; human apply only (ADR-001)',
    ],
    stack: [
      'PySpark',
      'Databricks',
      'dbt',
      'OpenCV',
      'ONNX / YOLO',
      'Django',
      'Vue 3 + Three.js',
      'OPA / Rego',
      'Dagster',
      'Terraform',
      'Snowflake',
      'Redshift',
    ],
  },
  {
    id: 'forge',
    name: 'FORGE',
    tagline:
      'Offline AV perception & auto-labeling platform — 2D/3D detection, tracking, sensor fusion, and active-learning pseudo-labeling over a versioned Parquet data lake.',
    status:
      'Tagged v0.2.0 — all 11 phases complete (ingest through visualize plus productionization). 15 test files, 2 CI workflows. Detection heads are randomly initialized research baselines, not trained on real labels — documented honestly in KNOWN_GAPS.md rather than overclaimed.',
    statusTone: 'live',
    url: 'https://github.com/hamidmatiny/FORGE',
    architecture:
      'The forge CLI runs an 8-stage pipeline end to end locally: ingest (nuScenes → Parquet lake, DVC, Hydra configs) → detect2d (Faster R-CNN) and detect3d (PointNet-style) → track (SORT: Kalman + Hungarian IoU) → fuse (calibrated projection + IoU) → label (trust scoring + active learning) → evaluate (BEV distance, mAP against held-out ground truth) → curate (LanceDB dedup) → visualize (rerun.io / Foxglove MCAP). A parallel cloud path — S3 → Lambda → SQS → DynamoDB → EventBridge → Step Functions → ECS Fargate → Glue (11 tables) → Athena — is Terraform-defined and structurally verified in CI, but intentionally never applied against live AWS.',
    decisions: [
      'Ground-truth labels used only for evaluation, never as a pipeline input — no label leakage',
      'Every pipeline stage round-trips through a versioned Parquet lake instead of ad hoc intermediate files',
      'Cloud orchestration built and CI-verified as code, deliberately never deployed — same cost-safety policy as Vulcan, PRISM, and hydra-data-factory',
      'Ray distributed execution wired for the two heaviest stages (detect2d/detect3d); the rest run local by design',
      'Random-init detectors are labeled as smoke-tested baselines, not tuned models — no inflated accuracy claims',
    ],
    stack: [
      'PyTorch Lightning',
      'Faster R-CNN',
      'SORT',
      'Ray',
      'LanceDB',
      'MLflow',
      'W&B',
      'DVC',
      'Hydra',
      'Terraform',
      'Parquet',
    ],
  },
  {
    id: 'hydra',
    name: 'hydra-data-factory',
    tagline:
      'Production-validated AV telemetry lakehouse — contract validation, DLQ isolation, Terraform-provisioned AWS path.',
    status:
      'Production-validated pipeline with measured run results: 42,972 records ingested · 91.8% acceptance · 0% post-gate rejections.',
    statusTone: 'validated',
    url: 'https://github.com/hamidmatiny/hydra-data-factory',
    architecture:
      'Ingest mock fleet JSON → Pydantic + Pandera contract validation with DLQ isolation for rejects → PyArrow/Parquet (Snappy, Hive partitioning) into S3 → Glue catalog. Dual orchestration: local Airflow + MLflow, and AWS Step Functions + Lambda. Infra fully provisioned with Terraform (S3, Glue, IAM).',
    decisions: [
      'Dual-path orchestration (Airflow local / Step Functions cloud) sharing one transformation core',
      'Hard contract gate with DLQ isolation — rejects never contaminate the lake',
      'Hive-partitioned Parquet for query-friendly AV telemetry',
      'Everything provisioned as Terraform — no console-only resources',
    ],
    stack: [
      'Pydantic',
      'Pandera',
      'PyArrow',
      'Parquet',
      'Terraform',
      'S3',
      'Glue',
      'Airflow',
      'Step Functions',
      'MLflow',
    ],
  },
];

export type SecondaryProject = {
  name: string;
  blurb: string;
  url: string;
};

export const alsoBuilding: SecondaryProject[] = [
  {
    name: 'aegis',
    blurb:
      'LLM/agent security gateway — prompt-injection defense, policy-as-code, tamper-evident audit trails, human approval for high-risk actions.',
    url: 'https://github.com/hamidmatiny/aegis',
  },
  {
    name: 'AegisFlow',
    blurb:
      'Multi-agent incident response on Temporal, PydanticAI, and OpenTelemetry — triage, plan with approval, verify, compensate.',
    url: 'https://github.com/hamidmatiny/AegisFlow',
  },
  {
    name: 'edgevision',
    blurb:
      'Edge CV anomaly detection for existing camera fleets — VMS-agnostic threat analytics (YOLO + ByteTrack lineage).',
    url: 'https://github.com/hamidmatiny/edgevision',
  },
  {
    name: 'smart-assistant',
    blurb: 'Personal knowledge and workflow agent for local context and task automation.',
    url: 'https://github.com/hamidmatiny/smart-assistant',
  },
  {
    name: 'terra-OBIA',
    blurb:
      'Object-based image analysis for forestry stand delineation, wetland classification, and land-cover mapping at province scale.',
    url: 'https://github.com/hamidmatiny/terra-OBIA',
  },
  {
    name: 'terra-obia-etl',
    blurb:
      'ETL for GeoNB / GNB open data — harmonized labeled stand polygons feeding terra-OBIA classifiers.',
    url: 'https://github.com/hamidmatiny/terra-obia-etl',
  },
];

export const foundations: SecondaryProject[] = [
  {
    name: 'vit-fastapi-cloud-deploy',
    blurb: 'ViT classification service on FastAPI + Docker + GCP',
    url: 'https://github.com/hamidmatiny/vit-fastapi-cloud-deploy',
  },
  {
    name: 'object-detection',
    blurb: 'End-to-end OD train → track → serve → CI/CD',
    url: 'https://github.com/hamidmatiny/object-detection',
  },
  {
    name: 'multi-modal-od',
    blurb: 'Radar + LiDAR + camera fusion for AV detection',
    url: 'https://github.com/hamidmatiny/multi-modal-od',
  },
  {
    name: 'cuda-optimization',
    blurb: 'PyTorch optimization playbook (AMP, compile, MPS)',
    url: 'https://github.com/hamidmatiny/cuda-optimization',
  },
  {
    name: 'lstm-attention-transformers',
    blurb: 'Sequence models, attention viz, seq2seq workflows',
    url: 'https://github.com/hamidmatiny/lstm-attention-transformers',
  },
  {
    name: 'task-master',
    blurb: 'FastAPI + PostgreSQL + Docker + Actions API',
    url: 'https://github.com/hamidmatiny/task-master',
  },
  {
    name: 'bert-inference',
    blurb: 'Containerized DistilBERT sentiment inference',
    url: 'https://github.com/hamidmatiny/bert-inference',
  },
  {
    name: 'NEXUS-CV',
    blurb: 'Real-time multi-modal CV platform with MLOps',
    url: 'https://github.com/hamidmatiny/NEXUS-CV',
  },
  {
    name: 'sentinel-ray',
    blurb: 'Ray ingest + Pandera QA + drift + incidents',
    url: 'https://github.com/hamidmatiny/sentinel-ray',
  },
  {
    name: 'vanguard-telemetry-monitor',
    blurb: 'Fleet telemetry sim, anomalies, Prometheus/Grafana',
    url: 'https://github.com/hamidmatiny/vanguard-telemetry-monitor',
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'LLM Serving & Inference',
    items: [
      'vLLM',
      'Triton Inference Server',
      'TensorRT-LLM',
      'Ray Serve',
      'KServe',
      'BentoML',
      'GPTQ / AWQ / FP8',
      'LoRA / PEFT',
      'Bedrock',
      'SageMaker',
    ],
  },
  {
    category: 'GPU Orchestration & Cloud',
    items: [
      'Kubernetes',
      'Kueue',
      'Karpenter',
      'NVIDIA MIG',
      'AWS',
      'GCP',
      'Terraform',
      'Helm',
      'Argo CD',
      'Docker',
    ],
  },
  {
    category: 'MLOps & Experiment Tracking',
    items: [
      'MLflow',
      'Weights & Biases',
      'DVC',
      'GitHub Actions',
      'Dagster',
      'Kubeflow',
      'Prometheus',
      'Grafana',
      'OpenTelemetry',
    ],
  },
  {
    category: 'Computer Vision & Perception',
    items: [
      'OpenCV',
      'ONNX',
      'YOLO / ByteTrack',
      '2D/3D detection & tracking',
      'Sensor fusion (radar / LiDAR / camera)',
      'PyTorch',
      'Active learning / pseudo-labeling',
      'Edge AI',
    ],
  },
  {
    category: 'Data & Streaming Systems',
    items: [
      'Kafka / Redpanda',
      'Apache Flink',
      'Apache Iceberg',
      'PyArrow / Parquet',
      'Pandera',
      'Pydantic',
      'Airflow',
      'Step Functions',
      'Ray',
      'PySpark / Databricks',
      'dbt',
    ],
  },
  {
    category: 'Security & Agentic Systems',
    items: [
      'Prompt-injection defense',
      'Policy-as-code (OPA)',
      'LangGraph',
      'PydanticAI',
      'Temporal',
      'Audit trails',
      'Red-teaming patterns',
    ],
  },
];
