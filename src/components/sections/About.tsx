import { MailIcon, LocationIcon, LinkedInIcon, GithubIcon } from '../icons';
import { EXTERNAL_LINKS } from '../../config/links';
import { trackEvent } from '../../utils/analytics';

interface AboutProps {
  isActive: boolean;
  isExiting?: boolean;
}

const DISCIPLINES = [
  {
    title: 'Backend Development',
    description: 'Scalable backend services using Node.js and Python.',
  },
  {
    title: 'Game Development',
    description: 'PC and Mobile using Godot and Unity.',
  },
  {
    title: 'Mobile Apps',
    description: 'Android and iOS development.',
  },
  {
    title: 'Fullstack Development',
    description: 'Building scalable web applications with modern technologies.',
  },

];

export function About({ isActive, isExiting }: AboutProps) {
  const cls = ['about', isActive ? 'active' : '', isExiting ? 'exiting' : '']
    .filter(Boolean).join(' ');
  const hidden = !isActive && !isExiting;
  return (
    <article
      className={cls}
      data-page="about"
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
    >
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          Fullstack, Backend and game developer focused on clean architecture and high-end
          experiences. Building toward product leadership — where engineering judgment
          meets user clarity.
        </p>
        <p>
          Open to full-time roles at teams where engineers shape the product.
          Reach out via LinkedIn or email.
        </p>
      </section>

      <section className="about-disciplines">
        <p className="disciplines-label">Disciplines</p>
        <ol className="discipline-list">
          {DISCIPLINES.map(({ title, description }, i) => (
            <li key={title} className="discipline-item">
              <span className="discipline-number">0{i + 1}</span>
              <span className="discipline-title">{title}</span>
              <span className="discipline-desc">{description}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-contact">
        <p className="disciplines-label">Contact</p>
        <div className="separator" />
        <ul className="contacts-list about-contact-list">
          <li className="contact-item">
            <MailIcon size={13} className="contact-icon" />
            <a href={`mailto:${EXTERNAL_LINKS.EMAIL}`} className="contact-link">
              {EXTERNAL_LINKS.EMAIL}
            </a>
          </li>
          <li className="contact-item">
            <LocationIcon size={13} className="contact-icon" />
            <a
              href={EXTERNAL_LINKS.MAP_LOCATION}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Israel
            </a>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list about-social-list">
          <li className="social-item">
            <a
              href={EXTERNAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onClick={() => trackEvent('/link/linkedin')}
            >
              <LinkedInIcon size={15} />
            </a>
          </li>
          <li className="social-item">
            <a
              href={EXTERNAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onClick={() => trackEvent('/link/github')}
            >
              <GithubIcon size={15} />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
