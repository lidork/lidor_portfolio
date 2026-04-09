// src/config/resume.ts

export interface ResumeMetric {
  icon: string;
  label: string;
}

export interface ResumeRole {
  title: string;
  company: string;
  start: string;        // "YYYY-MM-DD"
  end: string;          // "YYYY-MM-DD" or "present"
  display: string;      // e.g. "2018 – 2020"
  accent: string;       // CSS color string
  bullets: string[];
  metrics: ResumeMetric[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  start: string;
  end: string;
  display: string;
  accent: string;
  statValue?: string;    // e.g. "CS"
  statLabel?: string;    // e.g. "Degree WIP"
}

export interface ResumeSkill {
  name: string;
  icon?:
    | 'react'
    | 'typescript'
    | 'html'
    | 'vite'
    | 'python'
    | 'node'
    | 'bash'
    | 'unity'
    | 'unreal'
    | 'csharp'
    | 'cplusplus'
    | 'git'
    | 'linux'
    | 'jira'
    | 'cicd'
    | 'problemSolving'
    | 'storytelling'
    | 'selfLearning'
    | 'leadership';
}

export interface ResumeSkillGroup {
  category: string;
  skills: ResumeSkill[];
}

export interface ResumeConfig {
  roles: ResumeRole[];
  education: ResumeEducation[];
  skillGroups: ResumeSkillGroup[];
}

export const RESUME_DATA: ResumeConfig = {
  roles: [
    {
      title: 'QA Tester',
      company: 'Microchip',
      start: '2022-01-01',
      end: '2023-01-01',
      display: '2022 – 2023',
      accent: '#4ade80',
      bullets: [
        'Conducted comprehensive testing of hardware components to ensure functionality and performance standards were met.',
        'Developed and executed test plans, identifying and documenting issues with detailed reports.',
        'Collaborated with engineers to troubleshoot and resolve hardware and software integration issues.',
      ],
      metrics: [
        { icon: '🐛', label: 'Documented 30+ Hardware/Software Issues' },
        { icon: '📋', label: 'Full test plan coverage' },
        { icon: '⚙️', label: 'Manual and Automated Testing' },
      ],
    },
    {
      title: 'Network & Comms Supervisor',
      company: 'Israeli Air Force (IAF)',
      start: '2018-01-01',
      end: '2020-01-01',
      display: '2018 – 2020',
      accent: '#60a5fa',
      bullets: [
        'Managed and maintained complex network systems, ensuring seamless communication and operational efficiency.',
        'Provided HelpDesk and IT support for more than 100 users.',
        'Developed automation scripts in Python and Bash to streamline issue resolution.',
      ],
      metrics: [
        { icon: '👥', label: '100+ users supported' },
        { icon: '⚡', label: '50% reduction in resolution time' },
        { icon: '🤖', label: 'Python + Bash automation' },
      ],
    },
    {
      title: 'Editor in Chief',
      company: 'PCGalaxy.co.il',
      start: '2014-01-01',
      end: '2019-01-01',
      display: '2014 – 2019',
      accent: '#f59e0b',
      bullets: [
        'Authored in-depth reviews and articles on various PC games, demonstrating a deep understanding of game mechanics and design.',
        'Conducted interviews with game developers and industry experts.',
        'Established business and press relations with game publishers and developers.',
      ],
      metrics: [
        { icon: '✍️', label: '2000+ articles published' },
        { icon: '🎙️', label: 'Audited 1000+ articles' },
        { icon: '🤝', label: 'Developer and Publisher relations' },
      ],
    },
  ],
  education: [
    {
      institution: 'Holon Institute of Technology',
      degree: 'CS B.Sc. — Software Engineering Emphasis',
      start: '2024-01-01',
      end: '2026-01-01',
      display: '2024 – 2026',
      accent: '#a78bfa',
      statValue: 'CS',
      statLabel: 'Degree',
    },
  ],
  skillGroups: [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: 'react' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'HTML/CSS', icon: 'html' },
        { name: 'Vite', icon: 'vite' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Python', icon: 'python' },
        { name: 'Node.js', icon: 'node' },
        { name: 'Bash', icon: 'bash' },
      ],
    },
    {
      category: 'Game Dev',
      skills: [
        { name: 'Unity', icon: 'unity' },
        { name: 'Unreal Engine', icon: 'unreal' },
        { name: 'C#', icon: 'csharp' },
        { name: 'C++', icon: 'cplusplus' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'Linux', icon: 'linux' },
        { name: 'Jira/Monday', icon: 'jira' },
        { name: 'CI/CD', icon: 'cicd' },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', icon: 'problemSolving' },
        { name: 'Storytelling', icon: 'storytelling' },
        { name: 'Self Learning', icon: 'selfLearning' },
        { name: 'Leadership', icon: 'leadership' },
      ],
    },
  ],
};
