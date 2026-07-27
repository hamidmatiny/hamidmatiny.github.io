export const site = {
  name: 'Mohammadreza "Hamid" Matiny',
  shortName: 'Hamid Matiny',
  title: 'AI Infrastructure & MLOps Engineer',
  description:
    'AI Infrastructure & MLOps Engineer specializing in LLM serving, GPU orchestration, and production observability. Building platforms for reliable model serving at scale.',
  url: 'https://hamidmatiny.github.io',
  email: 'hamidmatiny@gmail.com',
  github: 'https://github.com/hamidmatiny',
  githubUser: 'hamidmatiny',
  linkedin: 'https://www.linkedin.com/in/mohammadreza-matiny-46812121a',
  roleNote: 'Torc Robotics · Data Quality Assurance ML Pipeline',
  location: 'Available globally · open to remote',
  yearsExperience: '~6',
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
      'Tagged v1.0.0 at phase-15. Main has since completed phases 16–22 (advisor, training, LoRA/PEFT, DVC, tracking) — CHANGELOG records 1.2.0; no v1.1.0/v1.2.0 Git tag yet.',
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
      "Vulcan's sibling — unified fleet telemetry, data-quality, MLOps, and observability with an AI copilot.",
    status:
      'Architecture / early-build phase. Pipeline topology and contracts are defined; not a finished production system yet.',
    statusTone: 'building',
    url: 'https://github.com/hamidmatiny/Argus',
    architecture:
      'Kafka/Redpanda ingest → Ray processing → Flink QA gate → Iceberg lakehouse → Dagster orchestration → drift-monitor → OPA-backed incident engine → OpenTelemetry → dashboard, plus a read-only AI copilot. Same containers run via Docker Compose locally or Terraform/Helm/Argo CD on EKS.',
    decisions: [
      'Contract-first streaming path with an explicit Flink QA gate before lakehouse writes',
      'Iceberg + Dagster for reproducible lakehouse materialization',
      'OPA policy for incident decisions — not prompt-only automation',
      'Copilot is read-only against telemetry and runbooks',
      'One image set for local Compose and EKS GitOps',
    ],
    stack: [
      'Kafka',
      'Redpanda',
      'Ray',
      'Flink',
      'Iceberg',
      'Dagster',
      'OpenTelemetry',
      'OPA',
      'Argo CD',
      'Terraform',
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
