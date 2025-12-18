import { NavItem } from './types';

export const NAV_ITEMS: (NavItem & { labelEn?: string, labelJp?: string, labelIn?: string, descriptionEn?: string, descriptionJp?: string, descriptionIn?: string })[] = [
  { 
    id: 'collab', 
    symbol: '×', 
    label: 'Collaborate', 
    labelEn: 'Collaborate',
    labelJp: 'Collaborate',
    labelIn: 'Kolaborasi',
    description: '제안 및 콜라보',
    descriptionEn: 'Collaboration & Proposal',
    descriptionJp: '提案とコラボレーション',
    descriptionIn: 'Kolaborasi & Proposal'
  },
  { 
    id: 'programs', 
    symbol: '+', 
    label: 'Programs', 
    labelEn: 'Programs',
    labelJp: 'Programs',
    labelIn: 'Program',
    description: '성장 프로그램',
    descriptionEn: 'Growth Programs',
    descriptionJp: '成長プログラム',
    descriptionIn: 'Program Pertumbuhan'
  },
  { 
    id: 'benefits', 
    symbol: '-', 
    label: 'Benefits', 
    labelEn: 'Benefits',
    labelJp: 'Benefits',
    labelIn: 'Manfaat',
    description: '제휴 및 혜택',
    descriptionEn: 'Perks & Benefits',
    descriptionJp: '特典とパートナーシップ',
    descriptionIn: 'Keuntungan & Manfaat'
  },
  { 
    id: 'reviews', 
    symbol: '%', 
    label: 'Reviews', 
    labelEn: 'Reviews',
    labelJp: 'Reviews',
    labelIn: 'Ulasan',
    description: '고민 및 리뷰',
    descriptionEn: 'Concerns & Reviews',
    descriptionJp: '悩み相談とレビュー',
    descriptionIn: 'Kekhawatiran & Ulasan'
  },
];

export const VIDEO_BG_URL = "https://assets.mixkit.co/videos/preview/mixkit-night-sky-over-a-city-4065-large.mp4"; // Loopable city night