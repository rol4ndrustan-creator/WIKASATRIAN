export interface Program {
  id: string;
  title: string;
  narration?: string;
  items: string[];
  cta: string;
}

export const programs: Program[] = [
  {
    id: 'leadership-development',
    title: 'Leadership Development',
    narration: 'A leader is not born. A leader is forged through experience.',
    items: [
      'Leadership Development',
      'Manager Development',
      'Future Leader Program',
      'Executive Development',
      'Corporate Leadership',
    ],
    cta: 'Discuss Your Leadership Challenge',
  },
  {
    id: 'corporate-academy',
    title: 'Corporate Academy',
    items: [
      'Customized Learning',
      'Corporate Academy',
      'Future Skill',
      'Learning Roadmap',
      'Capability Development',
    ],
    cta: 'Request Custom Program',
  },
  {
    id: 'executive-retreat',
    title: 'Executive Retreat',
    items: [
      'Executive Retreat',
      'Board Retreat',
      'Strategic Alignment',
      'Leadership Reflection',
    ],
    cta: 'Book Executive Discussion',
  },
  {
    id: 'corporate-consulting',
    title: 'Corporate Consulting',
    items: [
      'Organization Development',
      'Culture Transformation',
      'Leadership Transformation',
      'Strategic Advisory',
    ],
    cta: 'Talk to Consultant',
  },
  {
    id: 'assessment-center',
    title: 'Assessment Center',
    items: [
      'Leadership Assessment',
      'Talent Mapping',
      'Competency Assessment',
      '360 Feedback',
      'Development Center',
    ],
    cta: 'Explore Assessment Program',
  },
  {
    id: 'innovation-center',
    title: 'Innovation Center',
    items: [
      'Digital Learning',
      'AI',
      'Future Leadership',
      'Innovation',
      'Research',
      'Future Workforce',
    ],
    cta: 'Explore Innovation Program',
  },
];
