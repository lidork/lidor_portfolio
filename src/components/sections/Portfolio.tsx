import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '../../utils/analytics';
import { EyeIcon, ChevronDownIcon } from '../icons';
import { PROJECT_ITEMS, type ProjectCategory, type ProjectItem } from '../../config/projects';
import { ProjectDetailModal } from './ProjectDetailModal';

interface PortfolioProps {
  isActive: boolean;
  isExiting?: boolean;
}

type Category = 'All' | ProjectCategory;

const CATEGORY_OPTIONS: Category[] = ['All', 'Mobile Apps', 'Game development', 'Full Stack'];

export function Portfolio({ isActive, isExiting }: PortfolioProps) {
  const cls = ['portfolio', isActive ? 'active' : '', isExiting ? 'exiting' : '']
    .filter(Boolean).join(' ');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedProject && lastTriggerRef.current) {
      lastTriggerRef.current.focus();
    }
  }, [selectedProject]);

  const handleProjectOpen = (project: ProjectItem, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setSelectedProject(project);
    trackEvent(`/project/${project.id}`, project.title);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECT_ITEMS
      : PROJECT_ITEMS.filter(p => p.categories.includes(selectedCategory));

  return (
    <article className={cls} data-page="portfolio">
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
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item active">
              <button
                type="button"
                className="project-card-btn"
                onClick={(event) => handleProjectOpen(project, event.currentTarget)}
                aria-label={`Open details for ${project.title}`}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box"><EyeIcon /></div>
                  <img src={project.gridImage} alt={project.title} loading="lazy" style={{ objectFit: project.imageFit ?? 'cover' }} />
                </figure>
                <div className="project-content">
                  <p className="project-category">{project.categories.join(' · ')}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <ProjectDetailModal project={selectedProject} onClose={handleProjectClose} />
    </article>
  );
}
