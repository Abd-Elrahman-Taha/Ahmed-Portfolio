export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  githubUrl: string;
  demoUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  color?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface TimelineEntry {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'course' | 'project' | 'internship';
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}
