export type RobotCategory = 
  | 'All' 
  | 'Interactive' 
  | 'Humanoid' 
  | 'Reception' 
  | 'Quadruped' 
  | 'Educational' 
  | 'Research' 
  | 'Industrial';

export interface RobotSpecification {
  height: string;
  weight: string;
  batteryLife: string;
  maxSpeed?: string;
  payloadCapacity?: string;
  aiProcessor: string;
  sensors: string;
  connectivity: string;
  operatingTemp: string;
  warranty: string;
  degreeOfFreedom?: string;
}

export interface Robot {
  id: string;
  idNumber: string; // e.g., '07', '04', '05', '10', '01', '02', '03', '06'
  name: string;
  subtitle: string;
  category: RobotCategory;
  categoryTag: string; // e.g. INTERACTIVE, EVENT ROBOT, HUMANOID, RESEARCH, QUADRUPED, RECEPTION
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
  availability: 'BUY_AND_RENT' | 'BUY_ONLY';
  priceText: string;
  specifications: RobotSpecification;
  accentColor: string;
  popular?: boolean;
}

export interface Enquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  robotId: string;
  robotName: string;
  intent: 'Buy' | 'Rent' | 'Both' | 'Custom Solution';
  purpose: string;
  message: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'Closed';
  createdAt: string;
  ip?: string;
}

export interface RentalPackage {
  id: string;
  name: string;
  duration: string;
  discountBadge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  recommendedFor: string;
  priceEstimate: string;
}

export interface Testimonial {
  id: string;
  author: string;
  designation: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  robotModel: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  popularRobots: string[];
  useCases: string[];
}
