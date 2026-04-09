import { ASSET_PATHS } from './assets';
import { EXTERNAL_LINKS } from './links';

export type ProjectCategory = 'Mobile Apps' | 'Game development' | 'Full Stack';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string[];
  gridImage: string;
  heroImage: string;
  githubUrl: string;
  demoUrl?: string;
  techStack: string[];
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'pain-project',
    title: 'Pain Project',
    category: 'Mobile Apps',
    shortDescription:
      'A pain tracking and analysis app focused on intuitive daily logging and useful trend visualization.',
    fullDescription: [
      'Pain Project was designed to simplify symptom tracking while still giving users clear long-term insight. The core UX prioritizes fast entry, so users can log pain details in seconds instead of dealing with bloated forms.',
      'The project combines practical data collection through Firebase with graphing abilities. Instead of showing raw data alone, it emphasizes recurring patterns and potential triggers through an AI model, helping users better understand their pain management journey and find meaningful patterns.',
    ],
    gridImage: ASSET_PATHS.PAIN_PROJECT,
    heroImage: ASSET_PATHS.PAIN_PROJECT_HERO,
    githubUrl: EXTERNAL_LINKS.PAIN_PROJECT,
    techStack: ['React Native', 'TypeScript', 'Charts', 'Mobile UX'],
  },
  {
    id: 'suika-dungeon',
    title: 'Suika Dungeon',
    category: 'Game development',
    shortDescription:
      'Arcade-style game loop with balanced progression and lightweight visual effects.',
    fullDescription: [
      'Suika Dungeon focuses on short, rewarding sessions built around strong gameplay feedback loops. The mechanics were tuned to feel responsive from the first interaction while preserving room for player mastery over time.',
      'The implementation balances engagement and performance, keeping visuals readable and smooth across devices. The result is a compact game experience that stays fun even during repeated sessions.',
    ],
    gridImage: ASSET_PATHS.SUIKA,
    heroImage: ASSET_PATHS.SUIKA,
    githubUrl: EXTERNAL_LINKS.SUIKA,
    demoUrl: EXTERNAL_LINKS.SUIKA_DEMO,
    techStack: ['Unity', 'C#', 'Gameplay Systems', 'Performance Tuning'],
  },
  {
    id: 'crypto-clicker',
    title: 'Crypto Clicker',
    category: 'Game development',
    shortDescription:
      'Crypto-themed incremental game with satisfying progression, upgrades, and user feedback pacing.',
    fullDescription: [
      'Crypto Clicker was built as an idle clicker that meets crypto currency gameplay needs. The design challenge was to create a progression system that feels rewarding but doesn\'t favor the players too much.',
      'The game introduces strategic upgrade paths, agentic upgrades (using the new-ish ERC-8004 as insparation), all using a special crypto-currency called CLK. Each item acts as a seperate tradeable NFT, giving players the option to buy, sell, or trade their progress.',
    ],
    gridImage: ASSET_PATHS.CRYPTO_CLICKER,
    heroImage: ASSET_PATHS.CRYPTO_CLICKER_HERO,
    githubUrl: EXTERNAL_LINKS.CRYPTO_CLICKER,
    techStack: ['Unity', 'C#', 'Economy Design', 'Progression Systems'],
  },
];