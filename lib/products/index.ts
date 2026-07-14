import { ProductType } from "./productType";

export const PRODUCTS: ProductType[] = [
  // Aerospace Products
  {
    title: "Flight Training Device (FTD)",
    description: "High Fidelity pilot and mission training in an immersive virtual flight environment.",
    imageSrc: "/placeholder-image.png",
    groups: ["aerospace"]
  },
  {
    title: "Aircraft Maintenance & Technical Training",
    description: "Immersive AR/VR/MR-based aircraft maintenance and technical training.",
    imageSrc: "/placeholder-image.png",
    groups: ["aerospace"]
  },

  // Maritime Products
  {
    title: "Navigation Simulator",
    description: "Full-mission ship manoeuvring for navigation and ship handling.",
    imageSrc: "/placeholder-image.png",
    productsIncluded: [
      "Tug Simulator",
      "VTS Simulator",
      "RADAR / ARPA Simulator",
      "GMDSS & Communications Simulator"
    ],
    groups: ["maritime"]
  },
  {
    title: "Engine Room Simulator",
    description: "Multi-functional training for maritime engineers across all operational levels.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"]
  },
  {
    title: "Process & Cargo Handling Simulator",
    description: "Real-time flow control simulation for hazardous bulk liquid transfer.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"]
  },
  {
    title: "LNG Bunkering",
    description: "Advanced training for liquefied natural gas and methanol bunkering operations.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"]
  },
  {
    title: "Offshore Simulator",
    description: "Immersive virtual reality for the operation of complex offshore vessels.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"]
  },
  {
    title: "Ports & Terminals",
    description: "Realistic operational training for all types of industrial and offshore cranes.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"]
  },
  {
    title: "Tug Simulator",
    description: "Advanced training for tug handling and emergency response manoeuvres.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"]
  },
  {
    title: "VTS Simulator",
    description: "Professional training for Vessel Traffic Service operating personnel.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"]
  },

  // Shared Maritime & Defence Products
  {
    title: "GMDSS & Communications Simulator",
    description: "Operational training for sea-going vessel communication systems.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime", "defence"]
  },
  {
    title: "RADAR / ARPA Simulator",
    description: "IMO-compliant training for radar and automatic radar plotting aids.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence", "maritime"]
  },
  {
    title: "ECDIS Simulator",
    description: "Comprehensive training for Electronic Chart Display and Information Systems.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence", "maritime"]
  },

  // Defence Products
  {
    title: "Bridge Operations Simulator",
    description: "Total recreation of the naval bridge for fleet and convoy management.",
    imageSrc: "/placeholder-image.png",
    productsIncluded: [
      "ECDIS Simulator",
      "GMDSS & Communications Simulator",
      "RADAR / ARPA Simulator"
    ],
    groups: ["defence"]
  },
  {
    title: "Fast Attack Craft (FAC) Simulator",
    description: "Immersive training for ship handling and combat tactics in modern FACs.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Action Speed Tactical Trainer (ASTT)",
    description: "High-fidelity tactical training for naval, submarine, and aircraft command teams.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Combat Information Centre (CIC) Simulator",
    description: "Immersive combat information centre training for modern naval warfare.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Submarine Operations and Navigation Simulator",
    description: "High-fidelity training for the unique challenges of submarine missions.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Deep Submergence Rescue Vehicle (DSRV) Simulator",
    description: "Specialised training for high-risk deep-sea rescue operations.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Domain Awareness & Coastal Security System",
    description: "A unified surveillance and command solution for persistent naval awareness.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Helicopter Control Simulation",
    description: "High-fidelity naval aviation training for ship-helicopter mission coordination.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Machinery Operations Simulator",
    description: "Full-mission training for naval vessel engineering and machinery management.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Integrated Naval Simulation Complex",
    description: "A unified ecosystem for joint training across all naval force elements.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Cyber Warfare Simulator",
    description: "Advanced simulation for digital combat and cyber defence training.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Joint Military Operations",
    description: "Interoperable simulation for multi-force, fleet, and force-level training.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  },
  {
    title: "Anti-Drone Simulator",
    description: "Advanced counter-drone training for detection, tracking, and threat neutralisation.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"]
  }
];

// Helper filtered arrays to ensure backward compatibility and page functionality
export const AEROSPACE_PRODUCTS: ProductType[] = PRODUCTS.filter((p) =>
  p.groups.includes("aerospace")
);

export const MARITIME_PRODUCTS: ProductType[] = PRODUCTS.filter((p) =>
  p.groups.includes("maritime")
);

export const DEFENCE_PRODUCTS: ProductType[] = PRODUCTS.filter((p) =>
  p.groups.includes("defence")
);