import { Robot } from '../types';

export const ROBOTS_DATA: Robot[] = [
  {
    id: 'nila-photo-robot',
    idNumber: '07',
    name: 'Nila – Interactive Photo Robot',
    subtitle: 'Interactive Photo & Media Engagement Robot',
    category: 'Interactive',
    categoryTag: 'INTERACTIVE',
    description: 'Designed for engaging guest experiences, instant on-site photo capture and printing, and smart autonomous navigation. Widely deployed at exhibitions, malls, and corporate events. Available for purchase and rental.',
    longDescription: 'Nila is ROBOTECH’s flagship interactive photo booth robot. Engineered with an ultra-high resolution DSLR camera, LED ring light, and dual high-speed photo printing module, Nila roams autonomously through venues, engaging attendees, taking studio-quality photos, applying custom branded frames, and delivering instant prints or digital QR transfers.',
    features: [
      'Instant On-Site Photo Printing & QR Digital Transfer',
      'Autonomous LiDAR & Ultrasonic Obstacle Avoidance',
      'Interactive Touch Screen Interface with Custom Branding',
      'Voice Assistant & Custom Dialogue Audio',
      'Integrated LED Ring Light & Professional Flash',
      '12 Hours Continuous Battery Runtime with Auto-Dock'
    ],
    applications: [
      'Corporate Events & Product Launches',
      'Shopping Malls & Retail Activations',
      'Trade Shows, Expos & Exhibitions',
      'Weddings, Galas & VIP Parties',
      'Museums & Theme Parks'
    ],
    availability: 'BUY_AND_RENT',
    priceText: 'PRICE ON REQUEST • BUY OR RENT',
    accentColor: '#00E5FF',
    popular: true,
    specifications: {
      height: '155 cm',
      weight: '45 kg',
      batteryLife: '12-14 Hours (Auto Docking)',
      maxSpeed: '1.2 m/s',
      payloadCapacity: '15 kg',
      aiProcessor: 'NVIDIA Jetson Orin Nano + Intel Core i7',
      sensors: '3D LiDAR, Dual Depth RGB Camera, Ultrasonic Array',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.2',
      operatingTemp: '0°C to 45°C',
      warranty: '2 Years Comprehensive + 24/7 Remote Tech Support'
    }
  },
  {
    id: 'aurra-event-robot',
    idNumber: '04',
    name: 'Aurra – AI Event Robot',
    subtitle: 'AI-Powered Event Host & Activation Specialist',
    category: 'Interactive',
    categoryTag: 'EVENT ROBOT',
    description: 'Built for exhibitions, product launches, mall activations, and corporate events. Features real-time AI interaction, performance management, and seamless brand integration. Available for purchase and rental.',
    longDescription: 'Aurra is an energetic, highly expressive AI event robot designed to captivate crowds and manage event activations. Powered by multi-modal Generative AI, Aurra can engage in natural conversations in multiple languages, display dynamic brand videos, deliver announcements, gather attendee analytics, and perform custom choreographies.',
    features: [
      'Multi-Lingual Generative Voice & Conversational AI',
      'Expressive LED Face & Gesture Choreography',
      'High-Brightness Chest Display for Video Ads & Surveys',
      'Lead Generation & Visitor Analytics Gathering',
      'Custom Voice & Mascot Branding Capabilities',
      'Auto-Patrol Mode with Custom Interactive Triggers'
    ],
    applications: [
      'Exhibitions & Convention Centers',
      'Product Launch Ceremonies',
      'Brand Activations in Malls',
      'Corporate Symposia & Conferences',
      'Stage Presentations & Showcases'
    ],
    availability: 'BUY_AND_RENT',
    priceText: 'PRICE ON REQUEST • BUY OR RENT',
    accentColor: '#8B5CF6',
    popular: true,
    specifications: {
      height: '130 cm',
      weight: '32 kg',
      batteryLife: '10 Hours (Hot-Swappable Battery)',
      maxSpeed: '1.0 m/s',
      payloadCapacity: '8 kg',
      aiProcessor: 'NVIDIA Jetson Orin NX (100 TOPS)',
      sensors: '360° LiDAR, Wide-Angle Camera Array, Far-Field Mic Array',
      connectivity: '5G LTE, Wi-Fi 6, Bluetooth 5.3',
      operatingTemp: '-5°C to 45°C',
      warranty: '2 Years Comprehensive'
    }
  },
  {
    id: 'nexus-a1-reception-robot',
    idNumber: '05',
    name: 'Nexus A1 – Humanoid Reception Robot',
    subtitle: 'Humanoid Front-Desk Automation & Greeting Robot',
    category: 'Reception',
    categoryTag: 'HUMANOID',
    description: 'Advanced AI humanoid built for natural guest interaction and seamless reception at hotels, hospitals, corporate offices, and exhibitions. Trusted by leading organizations for front-desk automation.',
    longDescription: 'Nexus A1 represents the pinnacle of hospitality and front-desk automation. With humanoid upper body aesthetics, dual dexterous arms, facial recognition, and automated badge issuance capabilities, Nexus A1 manages guest check-ins, provides indoor location navigation, handles queue management, and connects visitors directly with hosts.',
    features: [
      'Biometric Facial Recognition & Instant Guest Check-In',
      'Indoor Escort & Multi-Floor Elevator Navigation',
      'Badge / Visitor Pass Printing & QR Verification',
      'Integration with Enterprise PMS, CRM, & Calendar Systems',
      'Dual Articulated Arms for Gestures & Greetings',
      'Active Noise-Canceling Microphone Array'
    ],
    applications: [
      'Hotel & Resort Lobbies',
      'Hospitality & Healthcare Waiting Areas',
      'Corporate Headquarters & Innovation Hubs',
      'Luxury Residential & Commercial Towers',
      'Government Front Offices'
    ],
    availability: 'BUY_AND_RENT',
    priceText: 'PRICE ON REQUEST • BUY OR RENT',
    accentColor: '#00E5FF',
    popular: true,
    specifications: {
      height: '165 cm',
      weight: '58 kg',
      batteryLife: '14 Hours (Automatic Fast Charging)',
      maxSpeed: '1.2 m/s',
      payloadCapacity: '10 kg per arm',
      aiProcessor: 'Intel Xeon + Dual NVIDIA RTX 4060 GPU',
      sensors: 'Solid-State LiDAR, Binaural Mic, Dual Depth Camera',
      connectivity: 'Dual SIM 5G, Wi-Fi 6E, Ethernet',
      operatingTemp: '0°C to 50°C',
      warranty: '3 Years Full Warranty & On-Site SLA'
    }
  },
  {
    id: 'nova-a1-educational-robot',
    idNumber: '10',
    name: 'Nova A1 – Educational Research Robot',
    subtitle: 'STEM Development & Advanced Robotics Platform',
    category: 'Educational',
    categoryTag: 'RESEARCH',
    description: 'Smart, compact humanoid robot purpose-built for AI research, robotics education, and STEM development. Designed for schools, colleges, and innovation labs — bridging academic robotics and real-world AI.',
    longDescription: 'Nova A1 is an open-source modular humanoid research platform created specifically for universities, STEM institutes, research labs, and robotics students. Featuring ROS2 (Robot Operating System), Python & C++ SDKs, exposed sensor pipelines, and custom kinematics engines, Nova A1 empowers students and scientists to develop computer vision, reinforcement learning, and autonomous walking algorithms.',
    features: [
      'Native ROS2 & Python / C++ Full SDK Access',
      'Full Kinematic Simulation Models in Gazebo / Isaac Sim',
      'Exposed Sensor Nodes (Depth, IMU, Joint Encoders)',
      'Modular Servo Actuators for High-Precision Manipulation',
      'Complete STEM Curriculum & Laboratory Courseware',
      'Compact & Rugged Transport Chassis'
    ],
    applications: [
      'Universities & Engineering Colleges',
      'Robotics & AI Innovation Labs',
      'STEM Schools & Technical Academies',
      'Government & Defense Research Centers',
      'Autonomous Systems R&D Teams'
    ],
    availability: 'BUY_ONLY',
    priceText: 'PRICE ON REQUEST • BUY',
    accentColor: '#00FFA3',
    popular: false,
    specifications: {
      height: '110 cm',
      weight: '22 kg',
      batteryLife: '8 Hours (Quick Swap)',
      maxSpeed: '0.8 m/s',
      degreeOfFreedom: '22 DOF High Precision Servos',
      aiProcessor: 'NVIDIA Jetson Orin AGX 64GB',
      sensors: 'Intel RealSense D435i, 9-Axis IMU, Joint Torque Sensors',
      connectivity: 'Wi-Fi 6, USB 3.2, CAN Bus, Ethernet',
      operatingTemp: '0°C to 40°C',
      warranty: '2 Years Academic Warranty'
    }
  },
  {
    id: 'unitree-g1-humanoid',
    idNumber: '01',
    name: 'Unitree G1 Humanoid Robot',
    subtitle: 'Full-Sized High-Mobility Bipedal Humanoid Robot',
    category: 'Humanoid',
    categoryTag: 'HUMANOID',
    description: 'One of the most advanced AI-powered humanoid robots available in India. Engineered for human-like mobility, precision manipulation, and real-time environmental perception — ideal for research labs and industrial automation.',
    longDescription: 'The Unitree G1 Humanoid Robot delivers breakthrough agile bipedal locomotion, dynamic balance recovery, and dexterous force-controlled manipulation. Capable of standing up after falls, walking across uneven outdoor terrain, carrying heavy tools, and executing complex physical tasks, the G1 is widely adopted for advanced industrial automation and academic research.',
    features: [
      'Dynamic Biped Locomotion & High Torque Joint Motors (Up to 120N.m)',
      '3D 360° LiDAR Environmental Mapping & Real-Time Path Planning',
      'Force-Sensitive Force-Controlled Manipulators & Hands',
      'Reinforcement Learning Neural Motion Controller',
      'Rugged Lightweight Aluminum Alloy & Carbon Fiber Frame',
      'Supports Heavy Payload Carrying & Tool Operation'
    ],
    applications: [
      'Advanced Industrial Automation Labs',
      'Dangerous Environment Inspection',
      'Robotics Research & AI Benchmark Labs',
      'Smart Warehouse Logistics & Material Handling',
      'High-Tech Defense & Emergency Response'
    ],
    availability: 'BUY_AND_RENT',
    priceText: 'PRICE ON REQUEST • BUY OR RENT',
    accentColor: '#00E5FF',
    popular: true,
    specifications: {
      height: '132 cm',
      weight: '35 kg',
      batteryLife: '3-5 Hours Active High-Power Locomotion',
      maxSpeed: '2.0 m/s (7.2 km/h)',
      payloadCapacity: '12 kg',
      degreeOfFreedom: '23-43 DOF depending on arm setup',
      aiProcessor: 'NVIDIA Orin AGX + High-Performance Microcontrollers',
      sensors: '3D LiDAR, RealSense Depth Cameras, Foot Force Sensors',
      connectivity: 'Wi-Fi 6, 5G, High-Speed EtherCAT',
      operatingTemp: '-10°C to 50°C',
      warranty: '2 Years Authorized Distributor Warranty'
    }
  },
  {
    id: 'unitree-go2-pro',
    idNumber: '02',
    name: 'Unitree Go2 Pro – Quadruped Robot',
    subtitle: '4D LiDAR Quadruped Robot for Inspection & Security',
    category: 'Quadruped',
    categoryTag: 'QUADRUPED',
    description: 'Advanced AI quadruped with 4D LiDAR for intelligent autonomous navigation, all-terrain mobility, and real-time obstacle avoidance. Perfect for security surveillance, inspection, and outdoor deployments.',
    longDescription: 'Unitree Go2 Pro is an industry-leading quadruped robotic dog equipped with an ultra-wide 4D LiDAR system. It navigates staircases, rocky paths, steep inclines, and dense environments with agility. Ideal for perimeter security patrol, industrial plant inspection, disaster reconnaissance, and agricultural monitoring.',
    features: [
      'Ultra-Wide 4D LiDAR System with 360° x 90° FOV',
      'All-Terrain Mobility (Stairs, Grass, Gravel, Rocks, Mud)',
      'ISS 2.0 Intelligent Side-Follow System for Personal/Security Companion',
      'Integrated HD Camera & Real-Time Video Streaming',
      'Built-In Loudspeaker, Spotlight & Payload Mount System',
      'Remote Controller & Autonomous Waypoint Mission Scripting'
    ],
    applications: [
      'Factory & Warehouse Security Patrol',
      'Construction Site & Power Plant Inspection',
      'Search & Rescue / Disaster Reconnaissance',
      'Agriculture & Infrastructure Monitoring',
      'Public Demonstrations & Tech Showcases'
    ],
    availability: 'BUY_AND_RENT',
    priceText: 'PRICE ON REQUEST • BUY OR RENT',
    accentColor: '#00FFA3',
    popular: true,
    specifications: {
      height: '40 cm (Standing)',
      weight: '15 kg',
      batteryLife: '4 Hours (8000mAh Lithium Battery)',
      maxSpeed: '3.7 m/s (13.3 km/h)',
      payloadCapacity: '8 kg',
      aiProcessor: '8-core High Performance CPU + AI Neural Processing Engine',
      sensors: '4D LiDAR L1, HD Wide Camera, Foot Force Sensors, IMU',
      connectivity: 'Wi-Fi 6, 4G LTE, Bluetooth, USB-C',
      operatingTemp: '-15°C to 50°C',
      warranty: '2 Years On-Site / Replacement Warranty'
    }
  },
  {
    id: 'go2-air-lightweight',
    idNumber: '03',
    name: 'Go2 Air – Lightweight Quadruped Robot',
    subtitle: 'Compact Quadruped Robot for STEM & Live Demos',
    category: 'Quadruped',
    categoryTag: 'QUADRUPED',
    description: 'A lightweight, AI-powered quadruped designed for agile movement across complex environments. Its compact form factor and intuitive controls make it ideal for education, research, and live demonstrations.',
    longDescription: 'Go2 Air is a compact, ultra-agile 4-legged robotic platform engineered for effortless deployment. Weighing under 15kg, it performs backflips, agile jumps, stair climbing, and dynamic poses. Its approachable design and intuitive mobile app controls make it the favorite quadruped for STEM academies, event shows, and university labs.',
    features: [
      'High-Torque Knee Joint Motors for Dynamic Acrobatics',
      'Intuitive Smartphone / Tablet App Remote & Gesture Control',
      'Front Optical Sensor Array & Real-Time Obstacle Avoidance',
      'Ultra-Quiet Low-Noise Drive System',
      'Compact Lightweight Frame with Integrated Transport Handle',
      'Customizable SDK for Student Programming'
    ],
    applications: [
      'School & College STEM Labs',
      'Exhibitions, Science Fairs & Event Demos',
      'Robotics Competitions & Hackathons',
      'Media, Film Shoots & VIP Shows',
      'Light Inspection Tasks'
    ],
    availability: 'BUY_AND_RENT',
    priceText: 'PRICE ON REQUEST • BUY OR RENT',
    accentColor: '#8B5CF6',
    popular: false,
    specifications: {
      height: '38 cm',
      weight: '14 kg',
      batteryLife: '2.5 - 3.5 Hours',
      maxSpeed: '2.5 m/s (9 km/h)',
      payloadCapacity: '5 kg',
      aiProcessor: 'Quad-Core AI Processor',
      sensors: 'Front Wide Depth Camera, Foot Pressure Sensors, 6-Axis IMU',
      connectivity: 'Wi-Fi 5, Bluetooth 5.0',
      operatingTemp: '-10°C to 40°C',
      warranty: '1.5 Years Parts & Service Warranty'
    }
  },
  {
    id: 'recepto-ai-receptionist',
    idNumber: '06',
    name: 'Recepto – AI Receptionist Robot',
    subtitle: 'Smart Desktop/Countertop AI Visitor Console',
    category: 'Reception',
    categoryTag: 'RECEPTION',
    description: 'Purpose-built for hospitals, hotels, corporate offices, and government institutions. Autonomously welcomes visitors, provides information, manages queues, and integrates with existing systems.',
    longDescription: 'Recepto is a compact yet highly effective countertop AI receptionist robot designed for front-desk reception counters, information desks, and check-in kiosks. Featuring a dual-screen architecture (an expressive top face unit + a large lower multi-touch interactive display), Recepto greets visitors, registers appointments, prints badges, issues queue tokens, and answers FAQs with multi-lingual AI.',
    features: [
      'Dual-Display Design (Expressive AI Face Screen + Interactive Touch Console)',
      'Multi-Lingual Voice AI with Natural Conversation Capabilities',
      'Automated Queue Management & Token Generation System',
      'QR Code Check-In, Document Scanner & Thermal Badge Printer Support',
      'Integration with Google Calendar, Outlook, HMS, & Hotel PMS',
      '24/7 Continuous Operation with Plug-and-Play Setup'
    ],
    applications: [
      'Hospital & Clinic Front Desks',
      'Hotel Concierge & Reception Counters',
      'Corporate Office Security Gates',
      'Government Service Centers',
      'Banking & Financial Branch Lobbies'
    ],
    availability: 'BUY_AND_RENT',
    priceText: 'PRICE ON REQUEST • BUY OR RENT',
    accentColor: '#00E5FF',
    popular: true,
    specifications: {
      height: '52 cm (Countertop Form Factor)',
      weight: '12 kg',
      batteryLife: 'Continuous AC Mains Power + 4-Hour Battery Backup',
      aiProcessor: 'Octa-Core Neural Processing Engine',
      sensors: 'Full HD Wide Angle Camera, Facial Recognition, Array Microphone',
      connectivity: 'Wi-Fi 6, Gigabit Ethernet, Bluetooth 5.1, USB 3.0',
      operatingTemp: '0°C to 45°C',
      warranty: '2 Years Comprehensive Warranty'
    }
  }
];

export const RENTAL_PACKAGES = [
  {
    id: 'daily',
    name: 'Daily Event Package',
    duration: '1 to 3 Days',
    discountBadge: 'Ideal for Expos',
    popular: false,
    description: 'Perfect for trade shows, product launches, weddings, and short activations requiring maximum crowd attention.',
    features: [
      'On-site Technical Operator & Handler',
      'Custom Robot Branding & Screen Setup',
      'Fully Charged Backup Batteries included',
      'Delivery, Setup & Pickup included',
      'Zero Maintenance Liability'
    ],
    recommendedFor: 'Event Organizers, Expos, Product Launches & Weddings',
    priceEstimate: 'Custom Daily Quote'
  },
  {
    id: 'weekly',
    name: 'Weekly Activation Package',
    duration: '1 to 4 Weeks',
    discountBadge: 'Save 20%',
    popular: true,
    description: 'Designed for mall campaigns, pop-up stores, festival sales, and temporary front-desk automation.',
    features: [
      'Complete On-site Operator Training',
      'Custom AI Dialogue & Scripting setup',
      'Weekly On-site Maintenance Checks',
      'Priority Spare Unit Replacement',
      'Lead Generation Dashboard Access'
    ],
    recommendedFor: 'Shopping Malls, Retail Pop-ups, Trade Fairs',
    priceEstimate: 'Custom Weekly Rate'
  },
  {
    id: 'monthly',
    name: 'Monthly Corporate Package',
    duration: '1 to 11 Months',
    discountBadge: 'Save 35%',
    popular: false,
    description: 'Seamless deployment for corporate lobbies, hospitals, and ongoing security patrols without capital expenditure.',
    features: [
      'Zero Capex – Pure Operating Expense',
      'Dedicated Account Manager & Remote Support',
      'Free Software & AI Firmware Updates',
      'Free Replacement in case of Hardware Fault',
      'Option to Upgrade Model every 6 Months'
    ],
    recommendedFor: 'Hospitals, Hotels, Corporate Offices & Warehouses',
    priceEstimate: 'Flexible Monthly Subscription'
  },
  {
    id: 'yearly',
    name: 'Yearly Enterprise Lease',
    duration: '12+ Months',
    discountBadge: 'Best Value (Save 50%)',
    popular: false,
    description: 'Long-term enterprise deployment with comprehensive SLA, custom software integration, and full fleet management.',
    features: [
      'Full Custom Software Development & PMS/ERP Integration',
      '24/7 On-Call Technical SLA Guarantee',
      'Annual Hardware Refresh Option',
      'Dedicated Custom Branding & Hardware Enclosure',
      'Lowest Effective Daily Cost'
    ],
    recommendedFor: 'Enterprises, Government Facilities, Airports & Universities',
    priceEstimate: 'Enterprise Lease Plan'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Rajesh Malhotra',
    designation: 'General Manager',
    company: 'The Grand Luxe Hotel & Resort',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    content: 'Nexus A1 has transformed our hotel check-in experience! Guests love interacting with the robot, and queue times at our front desk dropped by 65%. ROBOTECH provided flawless installation and 24/7 support.',
    rating: 5,
    robotModel: 'Nexus A1 Humanoid'
  },
  {
    id: '2',
    author: 'Dr. Ananya Sharma',
    designation: 'Dean of Robotics Research',
    company: 'National Institute of Technology',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    content: 'We purchased the Nova A1 and Unitree G1 for our robotics innovation lab. The open-source SDKs and ROS2 integration allowed our research scholars to publish ground-breaking papers in bipedal balance controllers.',
    rating: 5,
    robotModel: 'Nova A1 & Unitree G1'
  },
  {
    id: '3',
    author: 'Vikramaditya Roy',
    designation: 'VP of Event Operations',
    company: 'Apex Global Expos & Media',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    content: 'Renting Nila and Aurra for our 3-day tech summit was the best decision! Over 4,000 guests took photos with Nila, and Aurra led our main product launch ceremony. Flawless execution by the ROBOTECH team!',
    rating: 5,
    robotModel: 'Nila & Aurra'
  },
  {
    id: '4',
    author: 'Suresh Patel',
    designation: 'Head of Facility Security',
    company: 'LogiX Logistics & Warehousing',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'Unitree Go2 Pro handles night patrols across our 20-acre automated warehouse seamlessly. The 4D LiDAR detection catches perimeter anomalies instant and alerts our security desk. Highly recommended!',
    rating: 5,
    robotModel: 'Unitree Go2 Pro'
  }
];

export const FAQS = [
  {
    id: '1',
    category: 'Rental',
    question: 'How does the robot rental process work?',
    answer: 'Renting a robot from ROBOTECH is simple: 1) Select your preferred robot model, 2) Choose your rental duration (Daily, Weekly, Monthly, or Yearly), 3) Receive a custom quotation, 4) Our team handles on-site delivery, setup, custom branding, operator deployment, and post-event pickup!'
  },
  {
    id: '2',
    category: 'Sales',
    question: 'Can we request a live demonstration before buying or renting?',
    answer: 'Absolutely! We offer both virtual live interactive video demonstrations and on-site physical demonstrations at our robotics centers or your company premises anywhere across India and international regions.'
  },
  {
    id: '3',
    category: 'Customization',
    question: 'Can the robots be customized with our company branding and software?',
    answer: 'Yes! All ROBOTECH robots can be custom-wrapped with your brand colors and logo. Furthermore, our in-house engineering team can develop custom AI conversations, screen layouts, PMS/CRM integration, and specific task workflows tailored to your business.'
  },
  {
    id: '4',
    category: 'Support',
    question: 'What technical support and maintenance is provided after purchasing?',
    answer: 'Every purchased robot includes a comprehensive 2 to 3-year hardware warranty, 24/7 remote diagnostic support, software OTA updates, and on-site technician SLA support with options for annual maintenance contracts (AMC).'
  },
  {
    id: '5',
    category: 'Delivery',
    question: 'What is the standard delivery timeline for purchased robots?',
    answer: 'Standard robot models in stock are delivered and installed within 5–7 business days. Custom-manufactured or heavily integrated enterprise units take between 2 to 4 weeks including software configuration and testing.'
  },
  {
    id: '6',
    category: 'Technical',
    question: 'How long do the robot batteries last and how do they charge?',
    answer: 'Most ROBOTECH service and reception robots feature continuous 10 to 14-hour battery runtimes and come with autonomous self-docking charging stations. Quadruped models feature quick-swap battery modules.'
  }
];
