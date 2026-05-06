export const projects = [
  {
    id: "northern-metropolis",
    title: "Northern Metropolis Spatial Analysis",
    type: "Spatial analytics",
    role: "Lead Spatial Analyst",
    year: "2025",
    period: "Sep 2025 - Dec 2025",
    methods: ["GWR", "POI fusion", "Scenario forecast"],
    technologies: ["Python", "GeoPandas", "Statsmodels", "ArcGIS Pro", "QGIS", "Foursquare API"],
    outcome: "Explained employment distribution patterns with R² > 0.5 and produced 2033 job forecasts.",
    problem: "Planning decisions for the Northern Metropolis need evidence that connects employment demand, land use, census patterns, and emerging activity centers.",
    method: "Integrated census demographics with Foursquare POI data, cleaned spatial units, and applied geographically weighted regression to capture local variation that global OLS models flatten.",
    evidence: [
      "Combined traditional census data with digital activity signals.",
      "Compared local GWR performance against global model baselines.",
      "Mapped predicted 2033 job distribution to support planning discussion."
    ],
    summary: "Modeled employment categories with census and POI data to make future job distribution easier to explain, compare, and map.",
    links: {}
  },
  {
    id: "accident-early-warning",
    title: "Accident Early Warning System",
    type: "Computer vision safety",
    role: "Core Developer and Hardware Integrator",
    year: "2022-2023",
    period: "June 2022 - May 2023",
    methods: ["OpenCV", "Edge device", "TTC warning"],
    technologies: ["Python", "OpenCV", "TensorFlow Lite", "Raspberry Pi", "Arduino"],
    outcome: "Built a real-time warning prototype and secured a utility model patent for the hardware-software system.",
    problem: "Secondary highway crashes can happen when approaching drivers miss stopped vehicles or emergency response activity after an initial incident.",
    method: "Designed a low-latency computer vision pipeline that detects approaching traffic, estimates risk with time-to-collision logic, and triggers warning hardware on compact edge devices.",
    evidence: [
      "Connected camera input, inference, and warning output in one deployable prototype.",
      "Optimized the pipeline for limited power and compute resources.",
      "Tested robustness considerations for weather, lighting, and roadside deployment."
    ],
    summary: "Created an edge-computing warning device that uses computer vision to reduce the risk of secondary traffic accidents.",
    links: {}
  },
  {
    id: "freight-tire-classification",
    title: "Freight Tire Classification",
    type: "Vision-based freight analysis",
    role: "Algorithm Engineer",
    year: "2023-2024",
    period: "Jul 2023 - Apr 2024",
    methods: ["YOLOv8", "ResNet", "Feature extraction"],
    technologies: ["YOLOv8", "ResNet", "PyTorch", "CUDA", "Digital Image Processing"],
    outcome: "Developed a non-contact tire classification workflow for weight-estimation research in complex road scenes.",
    problem: "Overloaded freight vehicles damage roads and raise safety risk, but direct weighing infrastructure is expensive and not always available.",
    method: "Combined YOLOv8 tire localization with ResNet-based feature extraction to classify tires and support deformation-based load inference.",
    evidence: [
      "Built a pipeline for tire detection in uncontrolled outdoor imagery.",
      "Prepared classification logic across truck types, brands, and viewing angles.",
      "Studied tire contact area and deformation as signals for axle-load estimation."
    ],
    summary: "Used deep learning to classify freight tires and support a non-contact truck weight estimation workflow.",
    links: {}
  },
  {
    id: "traffic-signal-optimization",
    title: "Traffic Signal Optimization",
    type: "Traffic simulation",
    role: "Simulation Analyst",
    year: "2023",
    period: "Oct 2023 - Dec 2023",
    methods: ["VISSIM", "Synchro", "Delay analysis"],
    technologies: ["VISSIM", "Synchro", "Python", "Signal 4.0"],
    outcome: "Reduced average simulated vehicle delay by 18% during peak-hour testing.",
    problem: "A major arterial corridor suffered from queue spillback and uneven progression caused by suboptimal signal timing.",
    method: "Modeled the corridor in VISSIM, calibrated local behavior assumptions, revised timing in Synchro, and compared delay, queue length, and throughput before and after optimization.",
    evidence: [
      "Identified bottlenecks in peak-hour movement patterns.",
      "Validated a revised signal plan in microsimulation.",
      "Improved arterial progression while reducing queue spillback."
    ],
    summary: "Optimized corridor signal timing with traffic simulation and before-after performance comparison.",
    links: {}
  },
  {
    id: "yuxiang-gate-design",
    title: "Yuxiang Gate Intersection Design",
    type: "Intersection design",
    role: "Traffic Designer",
    year: "2024",
    period: "May 2024 - June 2024",
    methods: ["CAD", "Channelization", "Street safety"],
    technologies: ["AutoCAD", "Civil 3D", "Traffic Simulation Software"],
    outcome: "Produced an intersection layout balancing vehicle flow, pedestrian safety, and tight historic-core constraints.",
    problem: "The Yuxiang Gate intersection needed a safer, clearer layout while preserving surrounding urban fabric and meeting road engineering standards.",
    method: "Used CAD-based layout iteration to adjust lane channelization, pedestrian crossings, bus movement, and turning geometry within fixed spatial constraints.",
    evidence: [
      "Reduced vehicle conflict points through channelization.",
      "Improved pedestrian crossing clarity and accessibility.",
      "Coordinated design constraints around dense existing street conditions."
    ],
    summary: "Designed a constrained urban intersection plan with clearer movement, safer crossings, and standard-compliant geometry.",
    links: {}
  }
];
