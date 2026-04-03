import { useState } from 'react';
import { EyeIcon, ChevronDownIcon } from '../icons';
import { ASSET_PATHS } from '../../config/assets';
import { EXTERNAL_LINKS } from '../../config/links';

interface PortfolioProps {
  isActive: boolean;
}

type Category = 'All' | 'Mobile Apps' | 'Game development' | 'Full Stack';

const CATEGORY_OPTIONS: Category[] = ['All', 'Mobile Apps', 'Game development', 'Full Stack'];

const PROJECT_ITEMS = [
  {
    title: 'Pain Project',
    category: 'Mobile Apps' as Category,
    description: 'A Pain tracking and analysis app with a focus on intuitive data entry and insightful visualizations. Designed to help users identify patterns and triggers in their pain experience.',
    image: ASSET_PATHS.PAIN_PROJECT,
    link: EXTERNAL_LINKS.PAIN_PROJECT,
  },
  {
    title: 'Suika Dungeon',
    category: 'Game development' as Category,
    description: 'Arcade-style game loop with balanced progression and lightweight visual effects. Built to keep sessions engaging while preserving smooth performance.',
    image: ASSET_PATHS.SUIKA,
    link: EXTERNAL_LINKS.SUIKA,
  },
  {
    title: 'Crypto Clicker',
    category: 'Game development' as Category,
    description: 'Crypto currency themed incremental clicker game with a focus on satisfying feedback loops and engaging progression. Designed to be accessible while offering depth through strategic upgrades.',
    image: ASSET_PATHS.CRYPTO_CLICKER,
    link: EXTERNAL_LINKS.CRYPTO_CLICKER,
  },
  {
    title: 'Web Platform',
    category: 'Full Stack' as Category,
    description: 'A clean interface system with reusable components and scalable page structures. Prioritizes clarity, accessibility, and fast content scanning.',
    image: ASSET_PATHS.TEMPLATE,
    link: EXTERNAL_LINKS.GITHUB,
  },
  {
    title: 'Mobile App Two',
    category: 'Mobile Apps' as Category,
    description: 'Focused on retention with a polished onboarding sequence and smarter task grouping. Includes responsive feedback patterns that improve completion rates.',
    image: ASSET_PATHS.TEMPLATE,
    link: EXTERNAL_LINKS.GITHUB,
  },
];

export function Portfolio({ isActive }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECT_ITEMS
      : PROJECT_ITEMS.filter(p => p.category === selectedCategory);

  return (
    <article className={`portfolio${isActive ? ' active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {CATEGORY_OPTIONS.map(option => (
            <li key={option} className="filter-item">
              <button
                className={selectedCategory === option ? 'active' : undefined}
                onClick={() => setSelectedCategory(option)}
                data-filter-btn=""
              >
                {option}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select${isSelectOpen ? ' active' : ''}`}
            onClick={() => setIsSelectOpen(prev => !prev)}
            data-select=""
          >
            <div className="select-value" data-selecct-value="">{selectedCategory}</div>
            <div className="select-icon"><ChevronDownIcon /></div>
          </button>
          <ul className="select-list">
            {CATEGORY_OPTIONS.map(option => (
              <li key={option} className="select-item">
                <button
                  onClick={() => { setSelectedCategory(option); setIsSelectOpen(false); }}
                  data-select-item=""
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="project-item active">
              <a href={project.link} target="_blank" rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box"><EyeIcon /></div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
