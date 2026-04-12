import { MailIcon, LocationIcon, LinkedInIcon, GithubIcon } from './icons';
import { ASSET_PATHS } from '../config/assets';
import { EXTERNAL_LINKS } from '../config/links';
import { trackEvent } from '../utils/analytics';
import { NavigationTabs } from './NavigationTabs';
import type { Page } from './NavigationTabs';

interface SidebarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

export function Sidebar({ activePage, onPageChange }: SidebarProps) {
  return (
    <aside className="sidebar" data-sidebar="">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={ASSET_PATHS.AVATAR} alt="Lidor Kalfon" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Lidor Kalfon">Lidor Kalfon</h1>
          <p className="title">Software Engineer</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <MailIcon size={13} className="contact-icon" />
            <a href={`mailto:${EXTERNAL_LINKS.EMAIL}`} className="contact-link">
              {EXTERNAL_LINKS.EMAIL}
            </a>
          </li>
          <li className="contact-item">
            <LocationIcon size={13} className="contact-icon" />
            <a href={EXTERNAL_LINKS.MAP_LOCATION} target="_blank" rel="noopener noreferrer" className="contact-link">
              Israel
            </a>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href={EXTERNAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-link" onClick={() => trackEvent('/link/linkedin')}>
              <LinkedInIcon size={15} />
            </a>
          </li>
          <li className="social-item">
            <a href={EXTERNAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="social-link" onClick={() => trackEvent('/link/github')}>
              <GithubIcon size={15} />
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop-only vertical nav — hidden on mobile/tablet via CSS */}
      <div className="sidebar-nav">
        <div className="separator" />
        <NavigationTabs activePage={activePage} onPageChange={onPageChange} />
      </div>
    </aside>
  );
}
