
export interface NavItem {
  id: string;
  symbol: string;
  label: string;
  description: string;
}

export interface ProgramDetails {
  coreValue: string;
  structure: {
    title: string;
    items: string[];
  }[];
  differentiation?: string[]; // Optional
  marketingPoint?: {
    label: string;
    url?: string;
  };
  philosophies?: string[]; // For Re:bound
  references?: {
    title: string;
    url: string;
  }[];
}

export interface Program {
  title: string;
  subtitle: string;
  purpose: string;
  method: string;
  effects: string[];
  details: ProgramDetails;
}

export interface Partner {
  name: string;
  description: string;
  benefit: string;
}

export interface ReviewCase {
  title: string;
  tags: string[];
  summary: string;
  image: string;
}

export type PageView = 'home' | 'survivors_apply' | 'aiming_detail' | 'rebound_detail' | 'participants_list' | 'house_jeju_detail';

export interface NavigationProps {
  onNavigate: (page: PageView) => void;
}

export interface CrewMember {
  id: string;
  name: string;
  company: string;
  role: string;
  industry: string;
  stage: string;
  country: string;
  bio: string;
}
