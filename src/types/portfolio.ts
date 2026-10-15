export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface ArchitectureNode {
  title: string;
  description: string;
  tech: string;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  architectureFlow: {
    steps: {
      step: string;
      title: string;
      details: string;
    }[];
  };
  coreImplementation: string[];
  mlMethodology?: {
    overview: string;
    models: string[];
    metrics: string[];
    evaluationDetails: string;
  };
  challengesAndTradeoffs: string[];
  verifiedResults: string[];
  futureImprovements: string[];
}

export interface Project {
  id: string;
  name: string;
  dimensionTitle: string;
  category: string;
  domainFilter: 'all' | 'ai-workflows' | 'security' | 'realtime' | 'decision-ml' | 'voice';
  summary: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  screenshots: ProjectScreenshot[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
    gradient: string;
    borderGlow: string;
    badgeBg: string;
    badgeText: string;
  };
  caseStudy: CaseStudy;
}

export interface SkillItem {
  name: string;
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
  color: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  roleOrResult: string;
  organization: string;
  date: string;
  badge: string;
  description: string;
  category: 'hackathon' | 'leadership' | 'competitive-programming' | 'publication' | 'academics';
}
