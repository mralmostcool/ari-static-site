import { ProductType } from "./productType";

export const PRODUCTS: ProductType[] = [
  // Aerospace Products
  {
    title: "Flight Training Device (FTD) Solution",
    description: "High-fidelity pilot and mission training in an immersive virtual flight environment.",
    imageSrc: "/placeholder-image.png",
    groups: ["aerospace"],
    content: [
      "Flight Training Device (FTD) Solution",
      "High-fidelity pilot and mission training in an immersive virtual flight environment. The Flight Training Device (FTD) Solution delivers a high-fidelity and mission-orientated simulation environment for modern aerospace training. Built on advanced real-time simulation technologies, the platform combines immersive cockpit systems, realistic aircraft dynamics, tactical operational scenarios, intelligent instructor controls, and scalable architecture to support pilot conversion, recurrent training, emergency procedures, and mission rehearsal in a safe and repeatable environment.",
      "The Flight Training Device (FTD) Solution delivers a high-fidelity and mission-orientated simulation environment for modern aerospace training. Built on advanced real-time simulation technologies, the platform combines immersive cockpit systems, realistic aircraft dynamics, tactical operational scenarios, intelligent instructor controls, and scalable architecture to support pilot conversion, recurrent training, emergency procedures, and mission rehearsal in a safe and repeatable environment.",
      [
        {
          title: "High-Fidelity Cockpit Simulation",
          description: "Immersive cockpit environment with realistic aircraft systems and flight dynamics."
        },
        {
          title: "Advanced Control Loading",
          description: "Authentic aircraft handling characteristics for realistic pilot response training."
        },
        {
          title: "Mission Rehearsal Training",
          description: "Supports tactical mission rehearsal and mission-orientated operational readiness."
        },
        {
          title: "Instructor Scenario Management",
          description: "Real-time instructor monitoring and dynamic scenario control capabilities."
        },
        {
          title: "Emergency Procedure Training",
          description: "Safe simulation of aircraft malfunctions and emergency response procedures."
        },
        {
          title: "Scalable Modular Architecture",
          description: "Upgradeable platform with interoperability and hardware-in-the-loop integration support."
        }
      ]
    ]
  },
  {
    title: "Aircraft Maintenance & Technical Training Simulator",
    description: "Immersive AR/VR/MR-based aircraft maintenance and technical training.",
    imageSrc: "/placeholder-image.png",
    groups: ["aerospace"],
    content: [
      "Aircraft Maintenance & Technical Training Simulator",
      "Immersive AR/VR/MR-based aircraft maintenance and technical training. The Aircraft Maintenance & Technical Training Simulator delivers immersive and interactive technical learning through high-fidelity 3D environments powered by AR, VR, and Mixed Reality technologies. Designed for maintenance personnel, technical trainees, and operational teams, the platform supports realistic hands-on maintenance workflows, guided inspection procedures, troubleshooting, and mission-orientated technical readiness in a safe and scalable virtual environment.",
      "The Aircraft Maintenance & Technical Training Simulator delivers immersive and interactive technical learning through high-fidelity 3D environments powered by AR, VR, and Mixed Reality technologies. Designed for maintenance personnel, technical trainees, and operational teams, the platform supports realistic hands-on maintenance workflows, guided inspection procedures, troubleshooting, and mission-orientated technical readiness in a safe and scalable virtual environment.",
      [
        {
          title: "Immersive AR/VR/MR Training",
          description: "Advanced 3D simulation environments for realistic maintenance training."
        },
        {
          title: "Interactive Aircraft Familiarisation",
          description: "Hands-on learning for aircraft systems and maintenance procedures."
        },
        {
          title: "Fault Diagnosis Training",
          description: "Virtual troubleshooting and fault analysis in a safe digital environment."
        },
        {
          title: "Collaborative Learning Environment",
          description: "Supports remote assistance and multi-user technical training sessions."
        },
        {
          title: "Performance Assessment",
          description: "Integrated digital monitoring and trainee performance evaluation tools."
        },
        {
          title: "Scalable Aviation Training Platform",
          description: "Designed for aircraft, helicopter, and aviation support system training."
        }
      ]
    ]
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
    groups: ["maritime"],
    includedSimulators: [
      "Tug Simulator",
      "VTS Simulator",
      "RADAR / ARPA Simulator",
      "GMDSS & Communications Simulator"
    ],
    content: [
      "Navigation Simulator",
      "Full-mission ship manoeuvring for navigation and ship handling. The ARI Full Mission Ship Manoeuvring Simulator is designed in line with IMO and STCW 2010 requirements and approved by DNV to the highest Class A standards. It delivers complete maritime navigation and ship-handling training with integrated RADAR/ARPA, ECDIS, and bridge equipment across configurations ranging from tabletop trainers to large 360-degree full-mission installations.",
      "The ARI Navigation Simulator is a premier full-mission ship manoeuvring platform designed to meet the rigorous standards of the International Maritime Organization (IMO) and STCW 2010. Approved by DNV to the highest Class A standards, it provides a comprehensive training ecosystem for all aspects of ship handling and navigation. The simulator is highly versatile, offering configurations that range from simple tabletop trainers for basic skill acquisition to massive, full-scale installations with a 360-degree field of view. By integrating critical hardware like RADAR-ARPA and ECDIS, the system ensures that trainees are proficient with the exact tools they will encounter on a real vessel, reducing the learning curve and increasing operational safety.",
      [
        {
          title: "DNV Class A Certified",
          description: "Built and installed according to IMO and STCW 2010 requirements."
        },
        {
          title: "Scalable Configurations",
          description: "Ranges from desktop trainers to large-scale 360 Degree field of view installations."
        },
        {
          title: "Integrated Equipment",
          description: "Includes RADAR-ARPA, ECDIS and other critical navigational tools."
        },
        {
          title: "Specialised Operations",
          description: "Supports ice navigation, SBM operations, and integrated bridge systems."
        },
        {
          title: "Immersive Atmosphere",
          description: "Full visual, instrumental, and aural clues for high-fidelity training."
        },
        {
          title: "VTIS Operations",
          description: "Training for vessel traffic information systems and port management."
        }
      ]
    ]
  },
  {
    title: "Engine Room Simulator",
    description: "Multi-functional training for maritime engineers across all operational levels.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"],
    content: [
      "Engine Room Simulator",
      "Multi-functional training for maritime engineers across all operational levels. The ARI Full Mission Engine Room Simulator trains maritime engineers across watchkeeping, operational, and management levels. It models multiple propulsion and engine room types, including diesel, electric propulsion, azimuth, and waterjet systems, and supports specialised training modules such as power management, high-voltage, firefighting, and offshore sub-systems.",
      "The ARI Full Mission Engine Room Simulator is a sophisticated training platform designed to equip maritime engineers with the skills required at the watchkeeping, operational, and management levels. It provides a comprehensive recreation of the vessel's engineering heart, from the main engine control room to the electrical switchboard and simulated machinery space. The simulator supports a vast array of propulsion systems, including slow and high-speed diesel engines, electric propulsion, and waterjet engines. This diversity ensures that trainees are familiar with the various mechanical and electrical configurations they will encounter across different types of commercial and naval vessels.",
      [
        {
          title: "Diverse Propulsion Models",
          description: "Includes slow, medium, and high-speed diesel, electric, and azimuth propulsion."
        },
        {
          title: "Complete Machinery Space",
          description: "Simulates the main engine control room, electrical switchboard, and mimic panels."
        },
        {
          title: "Specialised Systems",
          description: "Training for high voltage, power management, and firefighting systems."
        },
        {
          title: "Offshore Subsystems",
          description: "Includes specialised handling for mud, brine, and cement in offshore vessels."
        },
        {
          title: "Full-Mission Fidelity",
          description: "Recreates the entire engineering environment for immersive learning."
        },
        {
          title: "Multi-Level Training",
          description: "Suitable for watchkeeping, operational, and management levels."
        }
      ]
    ]
  },
  {
    title: "Process & Cargo Handling Simulator",
    description: "Real-time flow control simulation for hazardous bulk liquid transfer.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"],
    content: [
      "Process & Cargo Handling Simulator",
      "Real-time flow control simulation for hazardous bulk liquid transfer. The ARI Liquid Cargo Handling Simulator replicates real process-flow control systems used for shore-to-ship and ship-to-shore transfer of hazardous bulk liquids. It scales from instructor-less single-PC setups to full-mission installations and supports training for both routine operations and high-consequence emergency scenarios.",
      "The ARI Liquid Cargo Handling Simulator is a world-leading tool for training officers in the high-stakes environment of hazardous bulk liquid transfer. The simulator focuses on the real-time process flow control systems used to move substances from shore to ship and vice versa. It is built upon a powerful mathematical model that accurately predicts fluid behaviour, ensuring that trainees experience realistic results regardless of the cargo type or environmental conditions. The platform is exceptionally versatile, offering detailed models for oil tankers (including VLCCs), product tankers, chemical tankers, and both LPG and LNG carriers, making it a one-stop solution for all liquid bulk transport training.",
      [
        {
          title: "Multi-Cargo Support",
          description: "Models for oil, LPG, LNG, and chemical tankers of various sizes."
        },
        {
          title: "Dynamic Fluid Modelling",
          description: "Powerful mathematical models ensuring accurate fluid behaviour under all conditions."
        },
        {
          title: "Full Operational Range",
          description: "Covers everything from routine loading to catastrophic emergency scenarios."
        },
        {
          title: "Integrated Load Calculator",
          description: "Every simulated vessel includes a fully functional load calculator."
        },
        {
          title: "Scalable Implementation",
          description: "Ranging from instructorless PC solutions to full consoles and mimic panels."
        },
        {
          title: "Advanced Safety Training",
          description: "Includes inerting, purging, and gas-freeing protocols for hazardous cargo."
        }
      ]
    ]
  },
  {
    title: "LNG Bunkering",
    description: "Advanced training for liquefied natural gas and methanol bunkering operations.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"],
    content: [
      "LNG Bunkering",
      "Advanced training for liquefied natural gas and methanol bunkering operations. This training module is designed to improve operator capability in LNG and methanol bunkering through realistic process simulation, procedure rehearsal, and safer operational decision making in fuel transfer activities.",
      "The ARI LNG Bunkering simulator is a specialised training solution developed to meet the rising demand for liquefied natural gas (LNG) and Methanol as cleaner maritime fuels. These fuels require vastly different handling procedures than traditional heavy fuel oils, primarily due to the extreme cryogenic temperatures and the high volatility of the substances. The simulator provides a safe, virtual environment where operators can master the intricate process of connecting, transferring, and disconnecting bunkering arms and hoses. By simulating the precise pressures and temperatures required for a safe transfer, the platform ensures that crews are fully prepared for the physical and technical challenges of gas bunkering.",
      [
        {
          title: "LNG Specialisation",
          description: "Dedicated training for the complexities of liquefied natural gas transfer."
        },
        {
          title: "Methanol Operations",
          description: "Includes training for the growing use of methanol as a maritime fuel."
        },
        {
          title: "Safety-First Approach",
          description: "Focuses on preventing leaks and managing cryogenic temperatures."
        },
        {
          title: "Operational Efficiency",
          description: "Training in optimising the bunkering process to reduce turnaround time."
        },
        {
          title: "Regulatory Compliance",
          description: "Aligned with the latest international safety standards for gas bunkering."
        }
      ]
    ]
  },
  {
    title: "Offshore Simulator",
    description: "Immersive virtual reality for the operation of complex offshore vessels.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"],
    content: [
      "Offshore Simulator",
      "Immersive virtual reality for the operation of complex offshore vessels. The ARI Offshore Bridge Simulator recreates offshore bridge operations with high-fidelity visuals and realistic control behaviour. It supports a broad range of offshore vessel models and propulsion/control systems including conventional telegraphs, azimuth controls, Z-drives, thrusters, and joystick operation.",
      "The ARI Offshore Bridge Simulator is a sophisticated training platform designed to replicate the unique operational challenges of offshore vessels. Unlike standard merchant ships, offshore vessels like platform supply vessels (PSVs) and anchor handling tug supply vessels (AHTSVs) require precise manoeuvring in close proximity to oil rigs and platforms. This simulator provides a complete virtual environment, including both fore- and aft-bridge stations, allowing trainees to practise the coordination required for complex offshore tasks. By utilising a high-fidelity visual system and realistic vessel dynamics, the simulator ensures that operators can develop the precision needed for station-keeping and dynamic positioning.",
      [
        {
          title: "Multifunctional Fleet",
          description: "Supports PSVs, AHTSVs, MPSVs, MSVs and other offshore vessel types."
        },
        {
          title: "Advanced Propulsion",
          description: "Simulates azimuth controls, Z-drives, thrusters, and joystick controls."
        },
        {
          title: "VR Integration",
          description: "Delivers an immersive virtual reality experience for maximum realism."
        },
        {
          title: "Fore and Aft Stations",
          description: "Complete replication of both bridge stations for total vessel control."
        },
        {
          title: "High-Fidelity Visuals",
          description: "Extremely realistic visual systems for accurate environmental awareness."
        },
        {
          title: "Vessel Dynamics",
          description: "Accurate physics modelling for different offshore vessel hulls and loads."
        }
      ]
    ]
  },
  {
    title: "Ports & Terminals",
    description: "Realistic operational training for all types of industrial and offshore cranes.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"],
    content: [
      "Ports & Terminals",
      "Realistic operational training for all types of industrial and offshore cranes. The ARI Crane Simulators provide a realistic reproduction of the visual, behavioural, and operational characteristics of multiple crane types while keeping simulator operation simple and intuitive for trainees and instructors. ARI offers a broad range of crane simulators for operational training in all essential aspects of container, offshore, and bulk handling operations across QC (Quay Crane), RTG (Rubber Tyred Gantry), RMG (Rail Mounted Gantry), SG (Ship Gantry), PC (Pedestal Crane), SC (Straddle Carrier), Mobile Telescopic Boom Crane, Tower Type Construction Crane, Floating Barge Crane, Offshore Pedestal Crane, Knuckle Boom Crane, Vessel Mounted Crane, and other client-specific crane and equipment types. Solutions range from low-cost desktop installations through kit-based portable multipurpose trainers to multi-PC, instructor-controlled full-mission systems.",
      "The ARI Crane Simulators provide an essential training bridge between theory and the high-risk operation of heavy lifting equipment. By replicating the visual, behavioural, and operational characteristics of various crane types, ARI allows operators to develop their skills in a completely safe environment. The range is extensive, covering everything from Quay Cranes (QC) and Rubber Tyred Gantries (RTG) to specialised Offshore Pedestal Cranes and Vessel Mounted Cranes. This breadth ensures that whether an operator is working in a container terminal or on a remote offshore rig, they have access to training that matches their specific equipment and operational needs.",
      [
        {
          title: "Comprehensive Range",
          description: "Supports QC, RTG, RMG, SG, PC, SC, and various specialised crane types."
        },
        {
          title: "Replica Control Consoles",
          description: "Plug-and-play consoles that emulate real crane makes and models."
        },
        {
          title: "Immersive Visuals",
          description: "Multi-channel visual system providing a realistic out-of-cabin view."
        },
        {
          title: "Motion Integration",
          description: "Operator cabins can be installed on motion platforms for physical realism."
        },
        {
          title: "Scalable Solutions",
          description: "From low-cost desktop trainers to multi-PC full mission solutions."
        },
        {
          title: "Intuitive Interface",
          description: "Simple and intuitive operation for both trainees and instructors."
        }
      ]
    ]
  },
  {
    title: "Tug Simulator",
    description: "Advanced training for tug handling and emergency response manoeuvres.",
    imageSrc: "/placeholder-image.png",
    groups: ["maritime"],
    content: [
      "Tug Simulator",
      "Advanced training for tug handling and emergency response manoeuvres. The ARI Tug Handling Simulator provides a practical and realistic training platform for tug operators to improve handling skills and rehearse emergency manoeuvres. It supports multiple tug configurations, including ASD tug types, and accurately reproduces complex tug behaviour under varying environmental and operational conditions.",
      "The ARI Tug Handling Simulator is a specialised training tool designed to bring precision and safety to one of the most challenging roles in maritime operations. By providing an authentic recreation of a modern tug's manoeuvring station and navigation bridge, the simulator allows both novice and experienced operators to hone their skills without risking expensive assets. A core strength of the platform is its sophisticated behavioural model, which ensures that the physics of tug movements - including the complex dynamics of ASD tugs - are replicated with extreme accuracy. This allows operators to experience how different environmental variables, such as wind and current, affect the vessel's responsiveness during critical manoeuvres.",
      [
        {
          title: "Diverse Vessel Library",
          description: "Includes multiple tug types, such as ASD tugs, for varied training."
        },
        {
          title: "Sophisticated Behavioural Model",
          description: "High accuracy in replicating complex tug manoeuvres under various conditions."
        },
        {
          title: "Realistic Layout",
          description: "Closely resembles modern tug manoeuvring stations and navigation bridges."
        },
        {
          title: "Emergency Response",
          description: "Dedicated scenarios for practising critical emergency manoeuvres."
        },
        {
          title: "Configuration Flexibility",
          description: "Available in multiple configurations to suit different training needs."
        }
      ]
    ]
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
    groups: ["maritime", "defence"],
    content: [
      "GMDSS & Communications Simulator",
      "Operational training for sea-going vessel communication systems. The ARI Communications Simulator provides complete operational communication training using shipboard equipment. It complies with STCW simulator performance standards and DNV Class A requirements, with AMERC-approved configurations available. It recreates modern communication station operations for training personnel at all levels in distress and routine maritime communications.",
      "The ARI GMDSS Simulator is a critical component of maritime safety training, focusing on the Global Maritime Distress and Safety System. It is designed to provide a comprehensive operating environment that replicates a modern ship's communication station, ensuring that navigators at all levels are proficient in handling both routine and emergency communications. The simulator is rigorously certified, meeting the STCW 2010 requirements and DNV's Class A standards. This ensures that the training is globally recognised, providing a certified path for personnel to master the equipment and protocols necessary for maintaining a vital link between the vessel and shore-based rescue centres.",
      [
        {
          title: "STCW 2010 Compliance",
          description: "Meets performance standards defined in Sections A-I/12 and B-I/12."
        },
        {
          title: "DNV Class A Standard",
          description: "Certified to the highest industry standard for simulation quality."
        },
        {
          title: "AMERC Approval",
          description: "Specific configurations are approved by AMERC for official certification."
        },
        {
          title: "Full-Spectrum Comms",
          description: "Covers both satellite and terrestrial communication systems."
        },
        {
          title: "Distress Handling",
          description: "Specialised training for managing emergency signals and rescue coordination."
        },
        {
          title: "Symmetric Environment",
          description: "Replicates the actual GMDSS station found on modern ships."
        }
      ]
    ]
  },
  {
    title: "RADAR / ARPA Simulator",
    description: "IMO-compliant training for radar and automatic radar plotting aids.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "RADAR / ARPA Simulator",
      "IMO-compliant training for radar and automatic radar plotting aids. The RADAR/ARPA simulator is built to comply with IMO performance standards for radar equipment on seagoing vessels and designed to meet IMO model courses 1.07 and 1.08. It supports simulator-based training and assessment in line with STCW 2010 requirements and can be configured with real OEM systems or emulated radar sets.",
      "The RADAR/ARPA simulator is a specialised training tool engineered to ensure that naval and maritime personnel are fully competent in the use of radio detecting and ranging (RADAR) and automatic radar plotting aids (ARPA). Compliance is at the heart of this system, as it is built to strictly adhere to the IMO performance standards for equipment used on seagoing vessels. By aligning with IMO Model Courses 1.07 and 1.08, the simulator provides a structured path for trainees to achieve the certification required by STCW 2010. This ensures that operators can accurately detect, track, and avoid collisions in all weather and visibility conditions.",
      [
        {
          title: "IMO compliance",
          description: "Fully compliant with IMO performance standards for seagoing vessels."
        },
        {
          title: "STCW Certification",
          description: "Meets STCW 2010 simulator based training requirements."
        },
        {
          title: "Diverse Equipment",
          description: "Choice of real OEM equipment or high-fidelity emulated radars."
        },
        {
          title: "Competence Assessment",
          description: "Built-in tools for testing and assessing operator proficiency."
        },
        {
          title: "Model Course Alignment",
          description: "Directly supports IMO Model Courses 1.07 and 1.08."
        },
        {
          title: "Realistic Plotting",
          description: "Accurate ARPA plotting for target tracking and collision avoidance."
        }
      ]
    ]
  },
  {
    title: "ECDIS Simulator",
    description: "Comprehensive training for Electronic Chart Display and Information Systems.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "ECDIS Simulator",
      "Comprehensive training for Electronic Chart Display and Information Systems. A high-fidelity solution complying with the latest STCW Manila amendments and IMO Model Course 1.27, offering both standalone and integrated navigation training.",
      "The ARI Electronic Chart Display and Information System (ECDIS) Simulator is a comprehensive training solution designed to modernise the way navigators interact with digital charts. In an era where traditional paper charts are being replaced, this simulator provides the essential skills needed to operate electronic charting systems with precision. It is rigorously designed to comply with the latest STCW Manila Amendments, specifically targeting the requirements of sections A-I/12, A-II/1, and A-II/2. By fulfilling the mandates of IMO Model Course 1.27, the simulator ensures that trainees are not just familiar with the software but are competent in the legal and operational standards of digital navigation.",
      [
        {
          title: "STCW Compliance",
          description: "Meets latest Manila amendments under sections A-I/12, A-II/1, and A-II/2."
        },
        {
          title: "IMO Model Course 1.27",
          description: "Fully fulfils the requirements for simulation-based ECDIS training."
        },
        {
          title: "Flexible Modes",
          description: "Operates in standalone training mode or integrated with other navigation aids."
        },
        {
          title: "Digital Charting",
          description: "Realistic representation of electronic navigational charts (ENC)."
        },
        {
          title: "Navigation Integration",
          description: "Can be combined with Radar and Bridge systems for full-mission training."
        },
        {
          title: "Competency-Based",
          description: "Designed for the assessment of electronic navigation proficiency."
        }
      ]
    ]
  },
  {
    title: "Bridge Operations Simulator",
    description: "Total recreation of the naval bridge for fleet and convoy management.",
    imageSrc: "/placeholder-image.png",
    productsIncluded: [
      "ECDIS Simulator",
      "GMDSS & Communications Simulator",
      "RADAR / ARPA Simulator"
    ],
    groups: ["defence"],
    includedSimulators: [
      "ECDIS Simulator",
      "GMDSS & Communications Simulator",
      "RADAR / ARPA Simulator"
    ],
    content: [
      "Bridge Operations Simulator",
      "Total recreation of the naval bridge for fleet and convoy management. The ARI vessel bridge simulator recreates the environment of a naval vessel bridge down to the last detail. Combined with state-of-the-art visualisation systems and motion platform capability, it provides a fully realistic training environment for ship handling, convoy operations, and fleet operations management.",
      "The Naval Bridge Operations Simulator is designed to provide a completely immersive recreation of a naval vessel's bridge, capturing every detail from the instrumentation to the spatial layout. By combining state-of-the-art visualisation systems with accurate vessel dynamics, it creates a training environment where officers can practise the complexities of ship, convoy, and fleet operations. The simulator is capable of being mounted on a high-performance motion platform, ensuring that trainees experience the physical sensations of manoeuvring a massive naval vessel, which is critical for developing the kinaesthetic intuition required for safe and effective navigation.",
      [
        {
          title: "Total Environment Recreation",
          description: "Detailed replication of the naval vessel bridge layout and equipment."
        },
        {
          title: "State-of-the-art Visualisation",
          description: "Immersive visual systems for maximum situational awareness."
        },
        {
          title: "Motion Platform Support",
          description: "Can be mounted on motion bases for realistic physical feedback."
        },
        {
          title: "Fleet Operations",
          description: "Training for managing complex ship, convoy, and fleet movements."
        },
        {
          title: "High Fidelity Modelling",
          description: "Accurate ship dynamics and environmental interaction."
        },
        {
          title: "Operational Management",
          description: "Focus on the command and control of naval vessel operations."
        }
      ]
    ]
  },
  {
    title: "Fast Attack Craft (FAC) Simulator",
    description: "Immersive training for ship handling and combat tactics in modern FACs.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Fast Attack Craft (FAC) Simulator",
      "Immersive training for ship handling and combat tactics in modern FACs. The FAC Simulator is engineered for realism, safety, and repeatability, enabling operators to rehearse mission-critical skills in a non-destructive immersive environment. It combines high-fidelity 360-degree visuals, realistic HMI vessel controls, optional remote weapon station integration, MMG simulation, and synchronised six-axis motion for tactical and operational readiness training.",
      "The Fast Attack Craft (FAC) Simulator is a high-fidelity training solution designed to replicate the fast-paced and high-stress operational environment of modern FACs. It provides naval operators and combat crews with an immersive platform to master ship handling, combat tactics, and navigation. The simulator is engineered for safety and repeatability, allowing crews to rehearse mission-critical skills - such as collision avoidance and Search and Rescue (SAR) - without the risks associated with real-world manoeuvres. By combining realistic vessel dynamics with sophisticated scenario rendering, it ensures that operators are conditioned for the physical and mental demands of high-speed naval operations.",
      [
        {
          title: "360° Visualisation",
          description: "Full horizontal field of view with dynamic maritime scenario rendering."
        },
        {
          title: "Realistic HMI",
          description: "Authentic vessel control interfaces for propulsion and steering."
        },
        {
          title: "Weapon Simulation",
          description: "Integrated stabilised weapon stations and MMG recoil kits."
        },
        {
          title: "6-DOF Motion",
          description: "Synchronised six-axis motion system for a fully immersive experience."
        },
        {
          title: "Combat Readiness",
          description: "Training in target acquisition and engagement under rules of engagement."
        },
        {
          title: "Tactical Drills",
          description: "Close-range defence and asymmetric threat response profiles."
        }
      ]
    ]
  },
  {
    title: "Action Speed Tactical Trainer (ASTT)",
    description: "High-fidelity tactical training for naval, submarine, and aircraft command teams.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Action Speed Tactical Trainer (ASTT)",
      "High-fidelity tactical training for naval, submarine, and aircraft command teams. The ASTT delivers immersive, high-fidelity naval training for ships, submarines, and aircraft command teams. It enables forces to practise, refine, and test tactics across Anti-Submarine, Anti-Air, Mine, Amphibious, and Electronic Warfare domains, improving readiness, coordination, and combat effectiveness in a true-to-mission environment. It supports real-time combat simulation with situation assessment, information analysis, command decision-making, reporting workflows, integrated communications, air operations, sonobuoy monitoring, AIS/ADS/IFF tracking, and replenishment and logistics functions.",
      "The Action Speed Tactical Trainer (ASTT) is a sophisticated simulation platform engineered for ships, submarines, and aircraft command teams. It focuses on enhancing combat effectiveness by providing a realistic, multi-threat environment where naval forces can practise and test tactics across critical domains such as Anti-Submarine Warfare, Anti-Air Warfare, and Electronic Warfare. The system integrates complex data and voice communications, sonobuoy monitoring, and identification tracking (AIS/ADS/IFF), ensuring that personnel can handle real-time combat situations involving deep situational assessment and command decision-making. By mirroring actual naval operations, the ASTT prepares crews for the high-stress environment of modern maritime conflict through repeatable, high-fidelity scenarios.",
      [
        {
          title: "Multi-Domain Training",
          description: "Comprehensive coverage of ASW, AAW, Mine, Amphibious, and Electronic Warfare."
        },
        {
          title: "3D Maritime Environment",
          description: "Authentic environment with accurate coastlines, depth contours, and seabed profiles."
        },
        {
          title: "Advanced Sensor Modelling",
          description: "Physics-based radar, sonar, ESM, and variable depth sonar (VDS) simulation."
        },
        {
          title: "Combat Modelling",
          description: "Realistic weapon and countermeasure simulation including torpedoes, missiles, and decoys."
        },
        {
          title: "Tactical Decision Tools",
          description: "Real-time decision-making tools with integrated briefing and debriefing facilities."
        },
        {
          title: "Environmental Simulation",
          description: "Simulates hydrological effects, damage assessment, and battle survivability."
        }
      ]
    ]
  },
  {
    title: "Combat Information Centre (CIC) Simulator",
    description: "Immersive combat information centre training for modern naval warfare.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Combat Information Centre (CIC) Simulator",
      "Immersive combat information centre training for modern naval warfare. Purpose-built for warfare training centres and active-duty surface combat units, the combat information centre simulator replicates the complexity of modern naval combat in a realistic, high-fidelity environment. It enables personnel to train in real-world tactics, threat responses, and combat system operations with precision. The simulator supports multi-domain engagements, including fast surface threats; incoming missiles and aircraft; long-range strikes against surface, subsurface, and airborne targets; and underwater threat neutralisation using realistic launch and guidance models.",
      "The CIC Simulator is purpose-built for warfare training centres and active-duty surface combat units to replicate the intense environment of a modern naval combat information centre. It provides a high-fidelity, immersive space where operators can refine their skills in real-world tactics, threat responses, and combat system operations. By integrating advanced surface radar and sonar modules, the simulator allows for precise multi-target tracking and the classification of underwater threats, which are critical for maintaining situational awareness in dynamic maritime conditions. The focus is on reducing the time between detection and decision, ensuring that crews can react with unmatched precision under pressure.",
      [
        {
          title: "Surface Radar Modules",
          description: "Advanced simulation for multi-target tracking and air/surface surveillance."
        },
        {
          title: "Sonar Module",
          description: "Acoustic detection and classification of underwater threats in dynamic conditions."
        },
        {
          title: "Electronic Warfare Suite",
          description: "Real-time signal interception, ESM, jamming, and countermeasure simulation."
        },
        {
          title: "Fire Control System",
          description: "Comprehensive shipborne weapon coordination and target designation."
        },
        {
          title: "Precision Targeting",
          description: "Training for rapid-reaction targeting against incoming missiles and aircraft."
        },
        {
          title: "Underwater Neutralisation",
          description: "Realistic launch and guidance models for neutralising subsurface threats."
        }
      ]
    ]
  },
  {
    title: "Submarine Operations and Navigation Simulator",
    description: "High-fidelity training for the unique challenges of submarine missions.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Submarine Operations and Navigation Simulator",
      "High-fidelity training for the unique challenges of submarine missions. The Submarine Operations and Navigation Simulator is a high-fidelity platform built for the operational and instructional needs of modern submarines. Developed with experienced naval inputs, it replicates mission dynamics from navigation and propulsion to sonar tracking and emergency handling in a safe and immersive virtual environment.",
      "The Submarine Operations & Navigation Simulator is an advanced training platform specifically engineered to meet the rigorous instructional needs of modern submarine crews. Because submarine missions are characterised by extreme isolation and high stakes, this simulator replicates the complex dynamics of subsurface navigation, propulsion, and sonar tracking with absolute realism. Developed with direct input from experienced naval personnel, it allows command teams to rehearse mission-critical operations – such as stealthy infiltration and target tracking – within a safe, virtual environment. The focus is on empowering the crew to master the unique pressures of the undersea domain.",
      [
        {
          title: "Sonar Tracking",
          description: "High-fidelity simulation of acoustic detection and underwater tracking."
        },
        {
          title: "Periscope Simulation",
          description: "Realistic visual and tactical periscope operations."
        },
        {
          title: "PMS Integration",
          description: "Full platform management system simulation for internal vessel control."
        },
        {
          title: "Emergency Procedures",
          description: "Safe environment to rehearse critical submarine failure responses."
        },
        {
          title: "Position Plotting",
          description: "Precision underwater navigation and position tracking systems."
        },
        {
          title: "Crew Coordination",
          description: "Training focused on the synergy of the command team under pressure."
        }
      ]
    ]
  },
  {
    title: "Deep Submergence Rescue Vehicle (DSRV) Simulator",
    description: "Specialised training for high-risk deep-sea rescue operations.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Deep Submergence Rescue Vehicle (DSRV) Simulator",
      "Specialised training for high-risk deep-sea rescue operations. The Deep Submergence Rescue Vehicle (DSRV) Simulator is a state-of-the-art training solution designed to enhance the skills required for critical underwater rescue operations. Built with high-fidelity hydrodynamic modelling and immersive visualisation, the simulator accurately replicates real-world submersible dynamics, mission scenarios, and environmental conditions. It enables operators to train in deploying, manoeuvring, and recovering the DSRV in challenging deep-sea rescue situations. With advanced control interfaces, realistic mission planning, and emergency response training, ARI’s DSRV Simulator ensures that naval and maritime personnel are prepared for high-risk underwater rescue missions with precision and confidence.",
      "The Deep Submergence Rescue Vehicle (DSRV) Simulator is a state-of-the-art solution engineered to enhance the critical skills required for underwater rescue operations. These missions are among the most dangerous in the naval domain, requiring absolute precision and a deep understanding of submersible dynamics. The simulator utilises high-fidelity hydrodynamic modelling to recreate the physical forces acting on a rescue vehicle, allowing operators to experience realistic manoeuvring and stability challenges. By simulating diverse environmental conditions, from extreme depths to turbulent currents, the platform ensures that personnel can safely navigate the complexities of the deep ocean.",
      [
        {
          title: "Hydrodynamic Modelling",
          description: "Accurate replication of submersible dynamics and water resistance."
        },
        {
          title: "Immersive Visualisation",
          description: "Realistic representation of deep-sea environmental conditions."
        },
        {
          title: "Mission Planning",
          description: "Tools for designing and evaluating complex rescue mission profiles."
        },
        {
          title: "Emergency Response",
          description: "Training for critical failures and high-pressure rescue scenarios."
        },
        {
          title: "Precision Manoeuvring",
          description: "Advanced control interfaces for accurate vehicle deployment."
        }
      ]
    ]
  },
  {
    title: "Domain Awareness & Coastal Security System",
    description: "A unified surveillance and command solution for persistent naval awareness.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Domain Awareness & Coastal Security System",
      "A unified surveillance and command solution for persistent naval awareness. The system fuses data from coastal sensors, naval platforms, tracking systems, and intelligence sources to generate a single, integrated operational picture. Designed to support naval operations, it enables early threat detection, faster decision-making, and effective mission execution across coastal and extended maritime areas. The system enhances operational readiness, supports 24×7 monitoring, and strengthens maritime security and sea control.",
      "The Domain Awareness & Coastal Security System is a unified, real-time naval surveillance and command solution delivering comprehensive awareness across maritime, air, subsurface, cyber, and space domains. The system fuses data from coastal sensors, naval platforms, tracking systems, and intelligence sources to generate a single, integrated operational picture. Designed to support naval operations, it enables early threat detection, faster decision-making, and effective mission execution across coastal and extended maritime areas. The system enhances operational readiness, supports 24 x 7 monitoring, and strengthens maritime security and sea control.",
      [
        {
          title: "Real-time Multi-domain Situational Awareness",
          description: "Delivers a single operational picture across maritime, air, subsurface, cyber, and space domains."
        },
        {
          title: "Multi-sensor and intelligence fusion",
          description: "Combines coastal sensors, naval platforms, tracking systems, and intelligence sources into a unified command view."
        },
        {
          title: "Early Threat Detection and Identification",
          description: "Supports timely detection, classification, and prioritisation of threats across coastal and extended maritime areas."
        },
        {
          title: "Anomaly and Behaviour Analysis",
          description: "Detects unusual patterns and behaviours to improve monitoring, response, and maritime security posture."
        },
        {
          title: "Integrated Naval Command and Control",
          description: "Enables coordinated command workflows for surveillance, mission execution, and sea control operations."
        },
        {
          title: "Predictive Analytics and Real-time Alerts",
          description: "Provides forward-looking insights and actionable alerts for faster, better-informed decisions."
        },
        {
          title: "Secure Information Sharing",
          description: "Supports trusted dissemination of operational information across connected security and naval stakeholders."
        },
        {
          title: "Scalable, Interoperable Architecture",
          description: "Designed for modular growth and seamless integration with evolving defence and coastal security ecosystems."
        },
        {
          title: "Mission Planning, Rehearsal, and Response Tools",
          description: "Supports planning, drill preparation, and coordinated action for surveillance and mission-driven response."
        }
      ]
    ]
  },
  {
    title: "Helicopter Control Simulation",
    description: "High-fidelity naval aviation training for ship-helicopter mission coordination.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Helicopter Control Simulation",
      "High-fidelity naval aviation training for ship-helicopter mission coordination. The Helicopter Control Simulation module is a high-fidelity naval aviation training system designed to support ship-helicopter coordination and operations in complex maritime environments. The simulator enables helicopter controllers, pilots, and aircrew to plan, coordinate, and execute ship-borne helicopter missions under realistic sea, weather, and operational conditions. The system allows crews to rehearse time-critical and multi-asset naval missions, including deck operations, airborne coordination, and mission execution. By replicating real operational workflows and safety constraints, the simulator enhances mission readiness, operational safety, and crew coordination without the risks and costs of live flying.",
      "The Helicopter Control Simulation module is a high-fidelity naval aviation training system designed to support ship-helicopter coordination and operations in complex maritime environments. The simulator enables helicopter controllers, pilots, and aircrew to plan, coordinate, and execute ship-borne helicopter missions under realistic sea, weather, and operational conditions. The system allows crews to rehearse time-critical and multi-asset naval missions, including deck operations, airborne coordination, and mission execution. By replicating real operational workflows and safety constraints, the simulator enhances mission readiness, operational safety, and crew coordination without the risks and costs of live flying.",
      [
        {
          title: "Controller and Aircrew Training",
          description: "Supports coordinated training for helicopter controllers, pilots, and aircrew involved in naval aviation missions."
        },
        {
          title: "Integrated Ship-Helicopter Operations",
          description: "Simulates deck procedures, airborne coordination, and operational workflows between ship and helicopter assets."
        },
        {
          title: "Ship Controlled Approach and SAR",
          description: "Supports ship-controlled approach, search and rescue, and maritime search planning in realistic operational conditions."
        },
        {
          title: "ASW and Mission Scenarios",
          description: "Enables anti-submarine warfare, weapons delivery, reconnaissance, and other mission-specific naval aviation scenarios."
        },
        {
          title: "High-Fidelity Maritime Environment",
          description: "Recreates sea state, weather, and operational constraints for safe, repeatable, and effective mission rehearsal."
        }
      ]
    ]
  },
  {
    title: "Machinery Operations Simulator",
    description: "Full-mission training for naval vessel engineering and machinery management.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Machinery Operations Simulator",
      "Full-mission training for naval vessel engineering and machinery management. The ARI full-mission machinery operations simulator recreates a naval vessel machinery operations centre with detailed engineering systems and high-fidelity visualisation. It includes high-speed engines, turbines, waterjets, machinery automation, power management, weapon control, and vessel utility systems, with built-in fault and malfunction insertion for advanced operator training and assessment.",
      "The Machinery Operations Simulator is a comprehensive training platform that recreates the internal environment of a naval vessel's machinery operations centre with absolute precision. It is designed to provide maritime engineers and senior operators with a high-fidelity space to manage complex propulsion and power systems. The simulation covers a vast array of critical components, including high-speed engines, turbine systems, waterjet propulsors, and automated machinery control systems. By integrating the entire power plant and power management system, the simulator ensures that trainees can manage the delicate balance of energy distribution and propulsion required for operational success.",
      [
        {
          title: "Full System Replication",
          description: "Includes high speed engines, turbine systems, and waterjet propulsors."
        },
        {
          title: "Automation Control",
          description: "Simulates machinery control systems and power plant management."
        },
        {
          title: "Fault Injection",
          description: "Built-in facility to create abnormal conditions and malfunctions for assessment."
        },
        {
          title: "Instructor Toolset",
          description: "Comprehensive tools for creation, control, and monitoring of complex scenarios."
        },
        {
          title: "Full Reconfigurability",
          description: "Supports various vessel configurations to match different ship types."
        },
        {
          title: "Utility Simulation",
          description: "Includes complete sets of domestic and utility equipment for vessel operation."
        }
      ]
    ]
  },
  {
    title: "Integrated Naval Simulation Complex",
    description: "A unified ecosystem for joint training across all naval force elements.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Integrated Naval Simulation Complex",
      "A unified ecosystem for joint training across all naval force elements. ARI’s Multi-Simulator Simulation Complex integrates multiple high-fidelity simulators into a unified training ecosystem for naval, air, land, and subsurface forces. With real-time data exchange, synchronised operations, and dynamic threat modelling, it strengthens decision-making, tactical coordination, and mission readiness while supporting scalability and interoperability.",
      "The Integrated Naval Simulation Complex represents the most advanced stage of training infrastructure, moving beyond individual simulators to create a unified, multi-simulator ecosystem. This complex is designed to bridge the gap between different naval disciplines by seamlessly integrating the bridge, engine room, command & control, and platform management simulators. By doing so, it enables high-fidelity joint training across naval, air, land, and subsurface forces, ensuring that each element understands its role within a larger, synchronised operation. This holistic approach is critical for modern naval warfare, where success depends on the seamless interoperability of diverse force elements.",
      [
        {
          title: "Multi-Force Integration",
          description: "Joint training connecting naval, air, land, and subsurface forces."
        },
        {
          title: "Unified Ecosystem",
          description: "Seamless connection between Bridge, Engine, and C2 simulators."
        },
        {
          title: "Real-time Data Exchange",
          description: "Dynamic threat modelling, synchronised operations across platforms."
        },
        {
          title: "Tactical Coordination",
          description: "Enhances decision-making and operational readiness for complex missions."
        },
        {
          title: "Scalable Architecture",
          description: "Built to expand as the needs of modern defence forces evolve."
        },
        {
          title: "Mission-Orientated Exercises",
          description: "Realistic scenarios tailored for evolving naval warfare needs."
        }
      ]
    ]
  },
  {
    title: "Cyber Warfare Simulator",
    description: "Advanced simulation for digital combat and cyber defence training.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Cyber Warfare Simulator",
      "Advanced simulation for digital combat and cyber defence training. The ARI Cyber Warfare Simulator is an advanced mission-orientated training and analysis platform designed to model cyber threats, vulnerabilities, and defensive operations across naval networks, platforms, and combat systems. It enables realistic simulation of cyber-attacks on shipborne systems, shore-based infrastructure, command-and-control networks, and maritime communication links, supporting both operational readiness and strategic planning. By integrating scenario-based training, threat emulation, and decision support, the simulator enhances cyber situational awareness, strengthens the resilience of naval assets, and prepares personnel to operate effectively in contested cyber-maritime environments across peacetime and conflict operations.",
      "The ARI Cyber Warfare Simulator is an advanced mission-orientated training and analysis platform designed to model cyber threats, vulnerabilities, and defensive operations across naval networks, platforms, and combat systems. It enables realistic simulation of cyber-attacks on shipborne systems, shore-based infrastructure, command-and-control networks, and maritime communication links, supporting both operational readiness and strategic planning. By integrating scenario-based training, threat emulation, and decision support, the simulator enhances cyber situational awareness, strengthens the resilience of naval assets, and prepares personnel to operate effectively in contested cyber-maritime environments across peacetime and conflict operations.",
      [
        {
          title: "Threat Simulation",
          description: "Replication of real-world cyber attack vectors and methodologies."
        },
        {
          title: "Network Defence",
          description: "Training in securing critical infrastructure and detecting intrusions."
        },
        {
          title: "Offensive Operations",
          description: "Practice in penetration testing and targeted digital disruption."
        },
        {
          title: "Incident Response",
          description: "Simulated emergency scenarios for rapid recovery and mitigation."
        },
        {
          title: "Secure Environment",
          description: "Isolated sandbox for safe execution of cyber warfare tactics."
        }
      ]
    ]
  },
  {
    title: "Joint Military Operations",
    description: "Interoperable simulation for multi-force, fleet, and force-level training.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Joint Military Operations",
      "Interoperable simulation for multi-force, fleet, and force-level training. ARI uses common databases and high-level architecture systems to enable interoperability across simulator types and forces for platform, fleet, and force-level scenarios. The framework supports synchronised recording and replay of operations, sensors, CCTV, and communications for debrief and evaluation and includes advanced exercise design, modelling, assessment, and debriefing tools compatible with secured defence-grade networks.",
      "Joint military operations simulation represents the pinnacle of interoperability in defence training. By leveraging common databases and High Level Architecture (HLA) systems, ARI enables the synchronisation of multiple simulator types – across land, sea, and air – into a single, unified training ecosystem. This allows for the execution of complex, large-scale scenarios that span from individual platform operations to entire fleet and force-level manoeuvres. The infrastructure is designed to be fully compatible with secured defence-grade networks, ensuring that sensitive operational data remains protected while allowing diverse forces to train together in a cohesive virtual environment.",
      [
        {
          title: "HLA Integration",
          description: "High-level architecture for seamless interoperability between simulator types."
        },
        {
          title: "Full Session Recording",
          description: "Synchronised recording of equipment, visuals, sensor data, and voice comms."
        },
        {
          title: "Variable Speed Replay",
          description: "Ability to replay recordings at different speeds for detailed debriefing."
        },
        {
          title: "Secure Networking",
          description: "Distributed simulation infrastructure compatible with defence-grade networks."
        },
        {
          title: "Advanced Exercise Management",
          description: "Tools for scenario design, object modelling, and weather simulation."
        },
        {
          title: "Curriculum Integration",
          description: "Training can be directly integrated into official service curricula."
        }
      ]
    ]
  },
  {
    title: "Anti-Drone Simulator",
    description: "Advanced counter-drone training for detection, tracking, and threat neutralisation.",
    imageSrc: "/placeholder-image.png",
    groups: ["defence"],
    content: [
      "Anti-Drone Simulator",
      "Advanced counter-drone training for detection, tracking, and threat neutralisation. The ARI Anti-Drone Simulator is a cutting-edge training and testing platform engineered to equip defence, security, and critical infrastructure teams against the rapidly evolving threat of unauthorised and hostile drones. Powered by advanced simulation technology, it recreates real-world operational scenarios including urban environments, restricted zones, and high-risk areas. Operators can practise detecting, tracking, analysing, and neutralising aerial threats with precision and confidence through immersive mission-based exercises. The simulator supports both single-drone intrusions and coordinated swarm attack scenarios while improving tactical awareness, team coordination, and rapid decision-making under pressure.",
      "The ARI Anti-Drone Simulator is a cutting-edge training and testing platform engineered to equip defence, security, and critical infrastructure teams against the rapidly evolving threat of unauthorised and hostile drones. Powered by advanced simulation technology, it recreates real-world operational scenarios including urban environments, restricted zones, and high-risk areas. Operators can practise detecting, tracking, analysing, and neutralising aerial threats with precision and confidence through immersive mission-based exercises. The simulator supports both single-drone intrusions and coordinated swarm attack scenarios while improving tactical awareness, team coordination, and rapid decision-making under pressure. With a fully customisable and cost-effective framework, the system enables safe, repeatable, and risk-free training tailored to mission-specific operational requirements.",
      [
        {
          title: "Advanced Counter-Drone Training",
          description: "Provides realistic operational training for identifying, tracking, and neutralising hostile aerial drone threats."
        },
        {
          title: "Immersive Virtual Environment",
          description: "Recreates urban, restricted, and high-risk operational zones in a highly realistic simulation environment."
        },
        {
          title: "Single Drone & Swarm Attack Scenarios",
          description: "Supports training against both isolated drone intrusions and coordinated multi-drone swarm attacks."
        },
        {
          title: "Mission-Based Tactical Exercises",
          description: "Strengthens tactical awareness, operational coordination, and rapid decision-making through scenario-driven exercises."
        },
        {
          title: "Flexible Scenario Configuration",
          description: "Allows adjustable threat levels, environmental conditions, and mission-specific scenario customisation."
        },
        {
          title: "Safe & Repeatable Training",
          description: "Enables cost-effective, risk-free operator training without the dangers associated with live-drill environments."
        }
      ]
    ]
  },
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

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")           // Replace spaces with -
    .replace(/[^\w\-]+/g, "")       // Remove all non-word chars
    .replace(/\-\-+/g, "-")         // Replace multiple - with single -
    .replace(/^-+/, "")             // Trim - from start of text
    .replace(/-+$/, "");            // Trim - from end of text
}