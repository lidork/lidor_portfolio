import { ASSET_PATHS } from './assets';
import { EXTERNAL_LINKS } from './links';

export type ProjectCategory = 'Mobile Apps' | 'Game development' | 'Full Stack';

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
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'pain-project',
    title: 'Pain Project',
    categories: ['Mobile Apps', 'Full Stack'],
    shortDescription:
      'A pain tracking and analysis app focused on intuitive daily logging and useful trend visualization.',
    challenge:
      'Pain management apps tend to fail at the point of entry — bloated forms that patients skip because logging takes too long. The goal was to make daily tracking fast enough that users actually do it, while still capturing enough data to surface meaningful patterns.',
    approach:
      'Built an Android app around a minimal logging flow: symptom selection, a pain-level slider, and a timestamp — three steps. Firebase Firestore handles persistence so data syncs across sessions. A TensorFlow Lite model runs on-device to predict pain levels based on day, month, and symptom type, keeping inference private and instant. Interactive charts let users filter by date range or symptom to find recurring triggers.',
    outcome:
      'A working end-to-end pain tracker with on-device ML inference, real-time cloud sync, and trend visualization — built collaboratively by a three-person team. The core loop (log → predict → chart) was shipped fully functional.',
    gridImage: ASSET_PATHS.PAIN_PROJECT,
    heroImage: ASSET_PATHS.PAIN_PROJECT_HERO,
    githubUrl: EXTERNAL_LINKS.PAIN_PROJECT,
    techStack: ['Android', 'Java', 'Firebase', 'TensorFlow Lite', 'AAChart'],
  },
  {
    id: 'suika-dungeon',
    title: 'Suika Dungeon',
    categories: ['Game development'],
    shortDescription:
      'Arcade-style game loop with balanced progression and lightweight visual effects.',
    challenge:
      'Suika-style games live or die by game feel — the physics, merge feedback, and pacing need to create a satisfying loop from the first drop. Reskinning the format with a dungeon theme meant the new aesthetic had to reinforce the mechanics, not just replace assets.',
    approach:
      'Built in Godot, the game replaces the original fruit theme with monster sprites from the 0x72 dungeon tileset, recontextualising the merge mechanic as combining monsters in a dungeon. Physics tuning and visual feedback were iterated on until the core loop felt responsive and readable across sessions.',
    outcome:
      'A fully playable browser game on itch.io. Second shipped game project — an exercise in game feel, asset integration, and getting a polished loop out the door.',
    gridImage: ASSET_PATHS.SUIKA,
    heroImage: ASSET_PATHS.SUIKA,
    githubUrl: EXTERNAL_LINKS.SUIKA,
    demoUrl: EXTERNAL_LINKS.SUIKA_DEMO,
    techStack: ['Godot', 'GDScript', 'Physics Design', 'Game Feel'],
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
    techStack: ['Solidity', 'React', 'TypeScript', 'Ethers.js', 'Hardhat', 'ERC-721', 'ERC-20'],
  },
];
