export interface NavigationItem {
  name: string
  href: string
  external?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'tools'
}
