import { ASSET_PATHS } from './assets';
import { EXTERNAL_LINKS } from './links';

export type ProjectCategory = 'Mobile Apps' | 'Game development' | 'Full Stack' | 'Backend';

export interface ProjectItem {
  id: string;
  title: string;
  categories: ProjectCategory[];
  shortDescription: string;
  challenge: string;
  approach: string;
  outcome: string;
  gridImage: string;
  heroImage: string;
  githubUrl: string;
  demoUrl?: string;
  techStack: string[];
  imageFit?: 'cover' | 'contain';
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'pain-project',
    title: 'Pain Project',
    categories: ['Mobile Apps', 'Full Stack'],
    shortDescription:
      'A pain tracking and analysis app focused on intuitive daily logging and useful trend visualization.',
    challenge:
      'Chronice Pain is a debilitating condition that affects millions of people worldwide, and affects their quality of life. We wanted to tackle the challenge of finding patterns that could be helpful to patients.',
    approach:
      'Built an Android app around a minimal logging flow: symptom selection, a pain-level slider, and a timestamp — three steps. Firebase Firestore handles persistence so data syncs across sessions. A TensorFlow Lite model runs on-device to predict pain levels based on day, month, and symptom type, keeping inference private and instant. Interactive charts let users filter by date range or symptom to find recurring triggers and patterns.',
    outcome:
      'A working end-to-end pain tracker with on-device ML interface, real-time cloud sync, and trend visualization — built collaboratively by a three-person team. The core loop (log → predict → chart) was shipped fully functional under a time constraint, with a focus on usability and polished interactions.',
    gridImage: ASSET_PATHS.PAIN_PROJECT,
    heroImage: ASSET_PATHS.PAIN_PROJECT_HERO,
    githubUrl: EXTERNAL_LINKS.PAIN_PROJECT,
    techStack: ['Android', 'Java', 'Firebase', 'TensorFlow Lite', 'AAChart'],
    imageFit: 'contain',
  },
  {
    id: 'suika-dungeon',
    title: 'Suika Dungeon',
    categories: ['Game development'],
    shortDescription:
      'Arcade-style game loop with balanced progression and lightweight visual effects.',
    challenge:
      'Suika-style games live or die by game feel — the physics, merge feedback, and pacing need to create a satisfying loop from the first drop. All developed and tuned from scratch.',
    approach:
      'Built in Godot, the game replaces the original fruit theme with monster sprites from the 0x72 dungeon tileset, recontextualising the merge mechanic as combining monsters in a dungeon. Physics tuning and visual feedback were iterated on until the core loop felt responsive and readable across sessions.',
    outcome:
      'A fully playable browser game on itch.io. Second shipped game project — an exercise in game feel, asset integration, and getting a polished loop out the door. ',
    gridImage: ASSET_PATHS.SUIKA,
    heroImage: ASSET_PATHS.SUIKA,
    githubUrl: EXTERNAL_LINKS.SUIKA,
    demoUrl: EXTERNAL_LINKS.SUIKA_DEMO,
    techStack: ['Godot', 'GDScript', 'Game Design'],
  },
  {
    id: 'crypto-clicker',
    title: 'Crypto Clicker',
    categories: ['Game development', 'Full Stack'],
    shortDescription:
      'A blockchain idle clicker with on-chain NFT assets, deflationary tokenomics, and cryptographic anti-cheat.',
    challenge:
      'Idle clickers are trivial to cheat — any client-side click counter can be spoofed. Adding a real token economy (with actual on-chain value) meant cheating had direct financial consequences. The design needed a way to make click rewards trustworthy without requiring every interaction to hit the blockchain.',
    approach:
      'Deployed an ERC-20 token (CLK) and ERC-721 NFT contracts on Sepolia testnet. An Express backend signs reward claims with ECDSA — the smart contract verifies the signature before minting tokens, so only server-validated clicks earn rewards. Deflationary tokenomics burn 90% of every purchase, with 10% routed to the owner. NFT agents follow an ERC-8004 Lite identity pattern: mutable on-chain stats (level, mining rate, quest history) that persist through transfers.',
    outcome:
      'A full-stack Web3 game with functioning anti-cheat, a P2P marketplace, agent NFTs with quest systems, and an owner admin panel. Demonstrates end-to-end dApp architecture: React frontend → Express signer → Solidity contracts on Sepolia.',
    gridImage: ASSET_PATHS.CRYPTO_CLICKER,
    heroImage: ASSET_PATHS.CRYPTO_CLICKER_HERO,
    githubUrl: EXTERNAL_LINKS.CRYPTO_CLICKER,
    techStack: ['Solidity', 'React', 'TypeScript', 'Node.js', 'Ethers.js', 'Hardhat', 'ERC-8004', 'ERC-721', 'ERC-20'],
  },
  {
    id:"enhanced-budyy",
    title: 'Enhanced Buddy',
    categories: ['Backend', 'Game development'],
    shortDescription:
      'A fork of save-buddy - meant to enhance the lost /buddy feature from Anthropic\'s Claude',
    challenge:
      'The original save-buddy project was a great starting point, but I felt that only bringing back your lost buddy leaves a lot of potential on the table. I wanted to create a more comprehensive solution that not only restores the lost buddy but also provides users with a way to manage and interact with their buddies more effectively.',
    approach:
      'I started by forking the original save-buddy repository and then added new features such as buddy management, option to customize buddy attributes, and more graphical attributes to choose from.',
    outcome:
      'The result is a more robust buddy system that builds upon the original concepts, is easily deplyoable inside Claude Code\'s CLI interface, and is fun to interact with and look at.',
    gridImage: ASSET_PATHS.ENHANCED_BUDDY,
    heroImage: ASSET_PATHS.ENHANCED_BUDDY,
    githubUrl: EXTERNAL_LINKS.ENHANCED_BUDDY,
    techStack: ['Javascript', 'node.js', 'MCP Server', 'Claude Code'],
    imageFit: 'contain',

  },
  /*{
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    categories: ['Web & UI Design', 'Full Stack'],
    shortDescription:
      'A personal portfolio website showcasing projects, experience, and contact info with a focus on clean design and accessibility.',
    challenge:
      'Creating a portfolio that stands out while maintaining a clean, professional aesthetic. The design needed to be responsive, accessible, and easy to navigate, with a focus on showcasing projects effectively.',
    approach:
      'Built with React and TypeScript, the site features a custom layout with smooth transitions between sections. The design emphasizes readability and visual hierarchy, using a minimalist color palette and clear typography. Accessibility was a key focus, with semantic HTML, ARIA attributes, and keyboard navigation support implemented throughout.',
    outcome:
      'A polished personal portfolio that effectively showcases projects and experience. The site is fully responsive and meets accessibility standards, providing a seamless user experience across devices.',
    gridImage: ASSET_PATHS.PORTFOLIO,
    heroImage: ASSET_PATHS.PORTFOLIO_HERO,
    githubUrl: EXTERNAL_LINKS.PORTFOLIO,
    techStack: ['React', 'TypeScript', 'CSS', 'Accessibility'],
  },*/
];
