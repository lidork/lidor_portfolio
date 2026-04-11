import { useEffect } from 'react';
import { EyeIcon, GithubIcon } from '../icons';
import type { ProjectItem } from '../../config/projects';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('no-scroll');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="modal-container active" aria-hidden={false}>
      <div className="overlay active" onClick={onClose} />

      <section
        className="project-detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn project-modal-close-btn"
          aria-label="Close project details"
          onClick={onClose}
        >
          ×
        </button>

        <div className="project-detail-hero">
          <img src={project.heroImage} alt={project.title} loading="lazy" style={{ objectFit: project.imageFit ?? 'cover' }} />
        </div>

        <div className="project-detail-content">
          <p className="project-detail-category">{project.categories.join(' · ')}</p>
          <h3 id={`project-modal-title-${project.id}`} className="project-detail-title">
            {project.title}
          </h3>

          <div className="project-detail-copy">
            <div className="project-detail-section">
              <h4 className="project-detail-section-label">Challenge</h4>
              <p>{project.challenge}</p>
            </div>
            <div className="project-detail-section">
              <h4 className="project-detail-section-label">Approach</h4>
              <p>{project.approach}</p>
            </div>
            <div className="project-detail-section">
              <h4 className="project-detail-section-label">Outcome</h4>
              <p>{project.outcome}</p>
            </div>
          </div>

          <ul className="project-detail-stack" aria-label="Project tech stack">
            {project.techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="project-detail-actions">
            <a
              className="project-detail-action project-detail-action--primary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>

            {project.demoUrl && (
              <a
                className="project-detail-action"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <EyeIcon size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}