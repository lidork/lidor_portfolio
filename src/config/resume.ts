// src/config/resume.ts

export interface ResumeMetric {
  label: string;
}

export interface ResumeRole {
  title: string;
  company: string;
  start: string;        // "YYYY-MM-DD"
  end: string;          // "YYYY-MM-DD" or "present"
  display: string;      // e.g. "2018 – 2020"
  bullets: string[];
  metrics: ResumeMetric[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  start: string;
  end: string;
  display: string;
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
      bullets: [
        'Conducted comprehensive testing of hardware components to ensure functionality and performance standards were met.',
        'Developed and executed test plans, identifying and documenting issues with detailed reports.',
        'Utilized Python and Bash scripts to automate testing processes, increasing efficiency and coverage.',
        'Collaborated with engineers to troubleshoot and resolve hardware and software integration issues.',
        'Maintained detailed documentation of test procedures, results, and best practices for future reference.',
      ],
      metrics: [
        { label: '30+ Issues Documented' },
        { label: 'Improved lead time by 60%' },
        { label: 'Manual, Automated Testing' },
      ],
    },
    {
      title: 'Network & Comms Supervisor',
      company: 'Israeli Air Force (IAF)',
      start: '2018-01-01',
      end: '2020-01-01',
      display: '2018 – 2020',
      bullets: [
        'Managed and maintained complex network systems, ensuring seamless communication and operational efficiency.',
        'Provided HelpDesk and IT support for more than 100 users.',
        'Developed automation scripts in Python and Bash to streamline issue resolution.',
        'Instructed and mentored new technicians on network protocols, troubleshooting techniques, and security best practices.',
        'Developed and maintained documentation for network configurations, procedures, and troubleshooting guides.',
      ],
      metrics: [
        { label: '100+ users supported' },
        { label: '50% reduction in resolution time' },
        { label: 'Python + Bash automation' },
      ],
    },
    {
      title: 'Editor in Chief',
      company: 'PCGalaxy.co.il',
      start: '2014-01-01',
      end: '2019-01-01',
      display: '2014 – 2019',
      bullets: [
        'Authored in-depth reviews and articles on various PC games, demonstrating a deep understanding of game mechanics and design.',
        'Conducted interviews with game developers and industry experts.',
        'Led a team of writers, providing editorial guidance and ensuring high-quality content.',
        'Managed social media accounts on several platforms, promoting content and engaging with the gaming community.',
        'Managed the publication schedule, coordinating with writers and editors to meet deadlines.',
        'Edited and proofread articles, ensuring accuracy and consistency.',
        'Established business and press relations with game publishers and developers.',
        'Organized and hosted gaming events, fostering community engagement and promoting the publication.',
      ],
      metrics: [
        { label: '2000+ articles published' },
        { label: 'Audited 1000+ articles' },
        { label: 'Developer and Publisher relations' },
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
