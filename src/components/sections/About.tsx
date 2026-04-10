interface AboutProps {
  isActive: boolean;
}

const DISCIPLINES = [
  {
    title: 'Mobile Apps',
    description: 'Android and iOS development.',
  },
  {
    title: 'Game Development',
    description: 'PC and Mobile using Godot and Unity.',
  },
  {
    title: 'Web & UI Design',
    description: 'Responsive and accessible web designs using React.',
  },
  {
    title: 'Backend Development',
    description: 'Scalable backend services using Node.js and Python.',
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
          Fullstack and game developer focused on clean architecture and high-end
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
    </article>
  );
}
