import { TimelineIcon, DownloadIcon } from '../icons';
import { EXTERNAL_LINKS } from '../../config/links';

interface ResumeProps {
  isActive: boolean;
}

function calculateDuration(startDate: string, endDate: string | 'present'): string {
  const start = new Date(startDate);
  const end = endDate === 'present' ? new Date() : new Date(endDate);
  const totalDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  if (years > 0) {
    return months > 0 ? `${years} yr ${months} mo` : `${years} yr`;
  }
  return `${months} mo`;
}

export function Resume({ isActive }: ResumeProps) {
  return (
    <article className={`resume${isActive ? ' active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><TimelineIcon /></div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Holon Institute of Technology</h4>
            <p className="timeline-text">Computer Science B.Sc. (Software Engineering Emphasis)</p>
            <span>
              2024 - 2026 •{' '}
              <span className="duration">{calculateDuration('2024-01-01', '2026-01-01')}</span>
            </span>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><TimelineIcon /></div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">QA Tester</h4>
            <p className="timeline-text">Microchip</p>
            <span>
              2022 - 2023 •{' '}
              <span className="duration">{calculateDuration('2022-01-01', '2023-01-01')}</span>
            </span>
            <ul className="timeline-text">
              <li>Conducted comprehensive testing of hardware components to ensure functionality and performance standards were met.</li>
              <li>Developed and executed test plans, identifying and documenting issues with detailed reports.</li>
              <li>Collaborated with engineers to troubleshoot and resolve hardware and software integration issues.</li>
            </ul>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Network and Communication System Supervisor</h4>
            <p className="timeline-text">Israeli Air Force (IAF)</p>
            <span>
              2018 - 2020 •{' '}
              <span className="duration">{calculateDuration('2018-01-01', '2020-01-01')}</span>
            </span>
            <ul className="timeline-text">
              <li>Managed and maintained complex network systems, ensuring seamless communication and operational efficiency.</li>
              <li>Provided HelpDesk and IT support for more than 100 users.</li>
              <li>Developed automation scripts in Python and Bash to streamline issue resolution.</li>
            </ul>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Editor in Chief</h4>
            <p className="timeline-text">PCGalaxy.co.il</p>
            <span>
              2014 - 2019 •{' '}
              <span className="duration">{calculateDuration('2014-01-01', '2019-01-01')}</span>
            </span>
            <ul className="timeline-text">
              <li>Authored in-depth reviews and articles on various PC games, demonstrating a deep understanding of game mechanics and design.</li>
              <li>Conducted interviews with game developers and industry experts.</li>
              <li>Established business and press relations with game publishers and developers.</li>
            </ul>
          </li>
        </ol>
      </section>

      <button
        className="form-btn"
        type="button"
        data-form-btn=""
        onClick={() => window.open(EXTERNAL_LINKS.CV)}
      >
        <DownloadIcon />
        <span>Download CV</span>
      </button>
    </article>
  );
}
