
export enum ToolId {
  DASHBOARD = 'DASHBOARD',
  GROWTH_BLUEPRINT = 'GROWTH_BLUEPRINT',
  TRENDING_HUB = 'TRENDING_HUB',
  MR_FREETOOLS = 'MR_FREETOOLS',
  COPYWRITER = 'COPYWRITER',
  IMAGE_GEN = 'IMAGE_GEN',
  VIDEO_GEN = 'VIDEO_GEN',
  SPEECH_GEN = 'SPEECH_GEN',
  SOCIAL_MEDIA_HUB = 'SOCIAL_MEDIA_HUB',
  MARKETING_HUB = 'MARKETING_HUB',
  CYBER_CAFE = 'CYBER_CAFE',
  CHAT = 'CHAT',
  TOOL_EXPLORER = 'TOOL_EXPLORER',
  FREE_TOOLS = 'FREE_TOOLS',
  AIXPLORIA = 'AIXPLORIA',
  GOOGLE_HUB = 'GOOGLE_HUB',
  OFFICE_HUB = 'OFFICE_HUB',
  WEBSITE_HUB = 'WEBSITE_HUB',
  FREELANCE_HUB = 'FREELANCE_HUB',
  AI_AGENT_HUB = 'AI_AGENT_HUB',
  PROJECT_MANAGER = 'PROJECT_MANAGER',
  ANALYTICS = 'ANALYTICS',
  VFX_HUB = 'VFX_HUB',
  VIDEO_EDITING_HUB = 'VIDEO_EDITING_HUB',
  EDUCATION_HUB = 'EDUCATION_HUB',
  AFFILIATE = 'AFFILIATE',
  CONTACT = 'CONTACT',
}

export interface NavItem {
  id: ToolId;
  label: string;
  icon: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  createdAt: Date;
}

export interface GeneratedVideo {
  url: string;
  prompt: string;
  createdAt: Date;
  aspectRatio: string;
}

export interface AiTool {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  promptTemplate: string;
  inputs: {
    key: string;
    label: string;
    placeholder: string;
  }[];
}

export interface ExternalTool {
  name: string;
  company: string;
  category: string;
  description: string;
  url: string;
  icon: string;
  color: string;
  badge?: string;
}

export interface WebsiteResource {
  name: string;
  type: 'Builder' | 'Hosting' | 'Learning' | 'Domain' | 'Commerce' | 'Analytics' | 'Design';
  description: string;
  url: string;
  icon: string;
  color: string;
  features: string[];
}

declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
}
