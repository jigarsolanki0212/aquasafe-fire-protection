import React from 'react';
import { Shield, Droplets, Bell, Camera, Construction, Map, Disc, PenTool, FileCheck, ShieldAlert, GraduationCap, PhoneCall, Cog } from 'lucide-react';

// ── Product Images ──────────────────────────────────────────
import imgFireExtinguisher from '../assets/images/fire_extinguisher.png';
import imgFireHydrant      from '../assets/images/fire_hydrant.png';
import imgSprinkler        from '../assets/images/sprinkler_system.png';
import imgAlarmPanel       from '../assets/images/fire_alarm_panel.png';
import imgCCTV             from '../assets/images/cctv_camera.png';
import imgRoadSafety       from '../assets/images/road_safety.png';
import imgAmc              from '../assets/images/amc_maintenance.png';

// ── Service Images ──────────────────────────────────────────
import imgRefilling        from '../assets/images/refilling_service.png';
import imgTraining         from '../assets/images/safety_training.png';


// ════════════════════════════════════════════════════════════
// PRODUCTS
// ════════════════════════════════════════════════════════════
export const productsData = [
  {
    id: 'fire-extinguishers',
    icon: <Shield size={32} />,
    title: 'Fire Extinguishers',
    shortDesc: 'ABC, CO2, Water & Foam. Complete refilling, pressure testing & servicing at your premises.',
    description:
      'Our range of fire extinguishers includes CO2, Dry Powder (ABC), Water, and Foam variants. Specially designed to combat various types of fire emergencies swiftly and efficiently. Every unit is rigorously tested to meet all national safety standards before dispatch.',
    image: imgFireExtinguisher,
    features: ['ISO Certified', '10-Year Casing Warranty', 'Quick Refilling Available', 'Easy Pin System'],
  },
  {
    id: 'hydrant-systems',
    icon: <Droplets size={32} />,
    title: 'Hydrant Systems',
    shortDesc: 'Single & double hydrant valves, hose reels, pipes, branch nozzles & full setup.',
    description:
      'We provide end-to-end installation of fire hydrant systems including pumping mains, ring mains, standposts, single/double way valves, fire hoses, and hose reels. Engineered to deploy high-pressure water during major fire outbreaks with minimal response time.',
    image: imgFireHydrant,
    features: ['High-Pressure Testing', 'Anti-Corrosive Coating', 'ISI Marked Valves', 'Complete Network Installation'],
  },
  {
    id: 'sprinkler-systems',
    icon: <Disc size={32} />,
    title: 'Sprinkler Systems',
    shortDesc: 'GM Sprinklers, 2-way valves, water monitors, sprinkler nozzles & flexible fittings.',
    description:
      'An automatic water-based suppression system designed for wide-area coverage. It reacts automatically to heat and extinguishes fire before it spreads, minimizing damage to life and property. Ideal for commercial, industrial, and residential installations.',
    image: imgSprinkler,
    features: ['Quick Response Bulbs', 'Concealed Options', 'Wide Area Coverage', 'Automated Detection'],
  },
  {
    id: 'alarm-detection',
    icon: <Bell size={32} />,
    title: 'Alarm & Detection',
    shortDesc: 'Smoke detectors, alarm panels, manual call points, hooters & full wireless systems.',
    description:
      'Protect your premises with intelligent alarm and detection setups. From basic smoke detectors to advanced Addressable Fire Alarm Panels, we deliver an early-warning system that saves lives and minimises property loss.',
    image: imgAlarmPanel,
    features: ['Addressable Panels', 'Photoelectric Smoke Sensors', 'Thermal Heat Detectors', 'Instant Mobile Alerts'],
  },
  {
    id: 'cctv-automation',
    icon: <Camera size={32} />,
    title: 'CCTV & Automation',
    shortDesc: 'High-res security cameras, smart home automation & connected safety solutions.',
    description:
      'Round-the-clock surveillance with IP cameras, PTZ cameras, and smart DVR/NVR systems. Integrate your fire safety with security to provide a robust unified command mechanism for any premises size.',
    image: imgCCTV,
    features: ['4K Resolution', 'Night Vision IR', 'Cloud Backup Integration', 'Face Tracking'],
  },
  {
    id: 'road-safety',
    icon: <Construction size={32} />,
    title: 'Road Safety Products',
    shortDesc: 'Cones, studs, speed breakers, safety jackets, convex mirrors & barricade tapes.',
    description:
      'Premium road safety and traffic management products made from durable, weather-resistant materials to ensure organised vehicular movement and pedestrian safety at construction sites, parking lots, and road works.',
    image: imgRoadSafety,
    features: ['High Visibility Reflectors', 'UV Resistant', 'Impact Proof', 'Easy Portability'],
  },
  {
    id: 'safety-signage',
    icon: <Map size={32} />,
    title: 'Safety Signage',
    shortDesc: 'Exit signs, hydrant markers, extinguisher location boards & custom compliance signs.',
    description:
      'Photoluminescent (glow-in-the-dark) safety markers and standard signage specifically made to guide people safely through dark or smoke-filled corridors during emergency evacuations. Fully compliant with NBC norms.',
    image: imgAlarmPanel,
    features: ['Glow in the Dark', 'Weatherproof Acrylic', 'Customization Available', 'Standardized Icons'],
  },
  {
    id: 'fire-balls',
    icon: <Droplets size={32} />,
    title: 'Fire Balls & More',
    shortDesc: 'AFO fire balls, dry riser inlets, flexible joints & specialized equipment accessories.',
    description:
      'Advanced fire extinguishing balls that burst automatically upon contact with flames, dispersing dry chemical powder instantly over the surrounding area. No training required — place them near fire risks and let physics do the rest.',
    image: imgFireExtinguisher,
    features: ['Automatic Activation', 'No Training Needed', 'Lightweight (<1.5 kg)', 'Safe for Humans'],
  },
];

// ════════════════════════════════════════════════════════════
// SERVICES
// ════════════════════════════════════════════════════════════
export const servicesData = [
  {
    id: 'refilling-servicing',
    icon: <PenTool size={28} />,
    title: 'Refilling & Servicing',
    shortDesc: 'Expert refilling of all fire extinguishers with certified pressure testing and rapid turnaround.',
    description:
      'Our top-tier refilling plant ensures every fire extinguisher is refilled efficiently and quickly. Each cylinder is pressure-tested to confirm structural integrity before the service seal is applied. We offer on-site and off-site options.',
    image: imgRefilling,
    features: ['On-site & Off-site Refilling', 'Hydrostatic Testing', 'Same-day Turnaround', 'Detailed Log Tagging'],
  },
  {
    id: 'noc-documentation',
    icon: <FileCheck size={28} />,
    title: 'NOC & Documentation',
    shortDesc: 'End-to-end guidance for fire safety NOC from local authorities with full compliance checks.',
    description:
      'We handle the full complexity of fire safety legalities. Our experts liaise with local fire authorities to organise site inspections, run system tests, and secure your No Objection Certificate without delays.',
    image: imgAmc,
    features: ['Consultation', 'Drawing Approvals', 'Final Inspection Support', 'Yearly NOC Renewals'],
  },
  {
    id: 'amc-maintenance',
    icon: <Cog size={28} />,
    title: 'AMC Maintenance',
    shortDesc: 'Reliable Annual Maintenance Contracts to ensure your safety systems are always mission-ready.',
    description:
      'Comprehensive AMC packages keep every corner of your property covered. We conduct quarterly inspections to clean, test, and calibrate all installed safety devices — fire alarms, extinguishers, hydrant systems and more.',
    image: imgAmc,
    features: ['Scheduled Quarterly Visits', 'Emergency Outbound Repairs', 'Part Replacements', 'Detailed Audit Reports'],
  },
  {
    id: 'system-installation',
    icon: <ShieldAlert size={28} />,
    title: 'System Installation',
    shortDesc: 'Professional installation of hydrants, alarms, and sprinklers following strict safety norms.',
    description:
      'From CAD blueprint design to flawless on-site execution, our licensed engineering team installs intricate fire pipelines, pump rooms, sprinkler networks, and electronic alarm grids — all per NBC regulations.',
    image: imgFireHydrant,
    features: ['End-to-end Contract', 'Licensed Engineers', 'NBC Certified Work', 'Timely Project Delivery'],
  },
  {
    id: 'training-drills',
    icon: <GraduationCap size={28} />,
    title: 'Training & Drills',
    shortDesc: 'Expert-led fire safety training, demonstrations, and emergency evacuation drills for staff.',
    description:
      'A system is only as good as the people who use it. We conduct fully orchestrated mock drills, live fire extinguisher demonstrations, classroom theory on fire behaviour, and emergency evacuation planning for your entire team.',
    image: imgTraining,
    features: ['Live Fire Demo', 'Evacuation Planning', 'First Aid Basics', 'Certificate for Staff'],
  },
  {
    id: 'emergency-support',
    icon: <PhoneCall size={28} />,
    title: 'Emergency Support',
    shortDesc: '24/7 technical support and rapid site visits across Ahmedabad.',
    description:
      'Fire safety doesn\'t sleep, and neither do we. Whether a pump fault occurs at midnight or a false alarm rings on a Sunday, our dedicated breakdown team addresses issues instantly with spare parts on the van.',
    image: imgRefilling,
    features: ['24/7 Hotline', 'Rapid Response Team', 'Spare Part Guarantee', 'Direct Technician Contact'],
  },
];
