import { MobileIcon, GameIcon, DesignIcon, BackendIcon } from '../icons';

interface AboutProps {
  isActive: boolean;
}

const SERVICES = [
  {
    Icon: MobileIcon,
    title: 'Mobile Apps',
    description: 'Android and iOS development.',
  },
  {
    Icon: GameIcon,
    title: 'Game development',
    description: 'PC and Mobile using Godot and Unity.',
  },
  {
    Icon: DesignIcon,
    title: 'Web and UI Design',
    description: 'Responsive and accessible web designs using React.',
  },
  {
    Icon: BackendIcon,
    title: 'Backend Development',
    description: 'Scalable backend services using Node.js and python.',
  },
];

export function About({ isActive }: AboutProps) {
  return (
    <article className={`about${isActive ? ' active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Fullstack and game developer focused on clean architecture and high-end experiences.
          Currently enjoying the fascinating journey to product leadership and management.
        </p>
        <p>
          If you're reading this, let's partner up! Don't hesitate to reach out with any inquiry
          on my official professional channels.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {SERVICES.map(({ Icon, title, description }) => (
            <li key={title} className="service-item">
              <div className="service-icon-box">
                <Icon size={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{title}</h4>
                <p className="service-item-text">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
