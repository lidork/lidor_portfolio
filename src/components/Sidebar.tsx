import { ChevronDownIcon, MailIcon, LocationIcon, LinkedInIcon, GithubIcon } from './icons';
import { ASSET_PATHS } from '../config/assets';
import { EXTERNAL_LINKS } from '../config/links';

interface SidebarProps {
  isActive: boolean;
  onToggle: () => void;
}

export function Sidebar({ isActive, onToggle }: SidebarProps) {
  return (
    <aside className={['sidebar', isActive && 'active'].filter(Boolean).join(' ')} data-sidebar="">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={ASSET_PATHS.AVATAR} alt="Lidor Kalfon" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Lidor Kalfon">Lidor Kalfon</h1>
          <p className="title">Software Engineer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn="" onClick={onToggle}>
          <span>Show Contacts</span>
          <ChevronDownIcon />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box"><MailIcon /></div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${EXTERNAL_LINKS.EMAIL}`} className="contact-link">
                {EXTERNAL_LINKS.EMAIL}
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><LocationIcon /></div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <a href={EXTERNAL_LINKS.MAP_LOCATION} target="_blank" rel="noopener noreferrer" className="contact-link">
                Israel
              </a>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href={EXTERNAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-link">
              <LinkedInIcon />
            </a>
          </li>
          <li className="social-item">
            <a href={EXTERNAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="social-link">
              <GithubIcon />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
