import { trackEvent } from '../utils/analytics';

export type Page = 'about' | 'resume' | 'portfolio';

interface NavigationTabsProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const NAV_ITEMS: { label: string; key: Page }[] = [
  { label: 'About', key: 'about' },
  { label: 'Resume', key: 'resume' },
  { label: 'Portfolio', key: 'portfolio' },
];

export function NavigationTabs({ activePage, onPageChange }: NavigationTabsProps) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {NAV_ITEMS.map(({ label, key }) => (
          <li key={key} className="navbar-item">
            <button
              className={activePage === key ? 'navbar-link active' : 'navbar-link'}
              onClick={() => { onPageChange(key); trackEvent(`/tab/${key}`, label); }}
              data-nav-link=""
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
