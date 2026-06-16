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
    | 'leadership'
    | 'java'
    | 'javascript'
    | 'sql'
    | 'terraform'
    | 'reactNative'
    | 'socketio'
    | 'd3'
    | 'jwt'
    | 'mongodb'
    | 'docker'
    | 'kubernetes'
    | 'android'
    | 'ios'
    | 'jenkins'
    | 'ubuntu'
    | 'logAnalysis'
    | 'fileSystem'
    | 'diagnostics'
    | 'ai';
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
      end: '2023-06-01',
      display: 'Jan 2022 – Jun 2023',
      bullets: [
        'Developed and executed 4 test plans and Python automations, identifying and documenting issues with detailed reports, leading to 60% improved lead times across 2 product lines.',
        'Conducted comprehensive testing of hardware components; collaborated with a cross-functional team of 3 engineers and 3 operation staff to troubleshoot and resolve hardware/software integration issues.',
      ],
      metrics: [
        { label: '60% faster lead times' },
        { label: '2 product lines' },
        { label: 'Python automation' },
      ],
    },
    {
      title: 'Network & Comms Technologies Supervisor',
      company: 'Israeli Air Force (IAF)',
      start: '2018-04-01',
      end: '2020-12-01',
      display: 'Apr 2018 – Dec 2020',
      bullets: [
        'Administered Ubuntu-based Linux and Windows network systems serving 100+ users, managing file systems, user permissions, and service configurations to ensure 99%+ uptime and seamless operational communication.',
        'Leveraged Docker to containerize 5+ internal network tools and developed Python/Bash scripts to automate routine system diagnostics and configuration tasks, reducing issue resolution time by 30%.',
        'Automated network performance monitoring by writing custom scripts to parse logs and alert on critical system faults, leading to 20% improvement in lead time.',
      ],
      metrics: [
        { label: '100+ users supported' },
        { label: '99%+ uptime' },
        { label: '30% faster resolution' },
      ],
    },
    {
      title: 'Editor in Chief',
      company: 'PCGalaxy.co.il',
      start: '2014-04-01',
      end: '2019-09-01',
      display: 'Apr 2014 – Sep 2019',
      bullets: [
        'Authored 1,000+ in-depth reviews and articles on PC games, growing to a readership of 100,000+ monthly visitors and improving overall site reach by 50%.',
        'Established business and press relations with 10+ game publishers and developers; planned and conducted 30+ written and voice-recorded interviews with industry experts.',
      ],
      metrics: [
        { label: '1,000+ articles published' },
        { label: '100,000+ monthly visitors' },
        { label: 'Publisher relations' },
      ],
    },
  ],
  education: [
    {
      institution: 'Holon Institute of Technology',
      degree: 'CS B.Sc. — Software Engineering Emphasis',
      start: '2023-01-01',
      end: '2026-01-01',
      display: '2023 – 2026',
      statValue: 'CS',
      statLabel: 'Degree',
    },
  ],
  skillGroups: [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: 'python' },
        { name: 'C#', icon: 'csharp' },
        { name: 'Java', icon: 'java' },
        { name: 'C++', icon: 'cplusplus' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'SQL', icon: 'sql' },
        { name: 'Bash', icon: 'bash' },
        { name: 'Terraform', icon: 'terraform' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: 'react' },
        { name: 'React Native', icon: 'reactNative' },
        { name: 'Node.js', icon: 'node' },
        { name: 'Socket.IO', icon: 'socketio' },
        { name: 'D3.js', icon: 'd3' },
        { name: 'JWT', icon: 'jwt' },
        { name: 'MongoDB', icon: 'mongodb' },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
        { name: 'Linux', icon: 'linux' },
        { name: 'Git', icon: 'git' },
        { name: 'Android', icon: 'android' },
        { name: 'iOS', icon: 'ios' },
        { name: 'Unity', icon: 'unity' },
        { name: 'Jenkins', icon: 'jenkins' },
      ],
    },
    {
      category: 'Linux & System Admin',
      skills: [
        { name: 'Ubuntu', icon: 'ubuntu' },
        { name: 'Bash Scripting', icon: 'bash' },
        { name: 'Log Analysis', icon: 'logAnalysis' },
        { name: 'File System Management', icon: 'fileSystem' },
        { name: 'System Diagnostics', icon: 'diagnostics' },
      ],
    },
    {
      category: 'AI-Assisted Dev',
      skills: [
        { name: 'Claude', icon: 'ai' },
        { name: 'Copilot', icon: 'ai' },
        { name: 'Cursor', icon: 'ai' },
      ],
    },
  ],
};
