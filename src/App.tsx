import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { NavigationTabs } from './components/NavigationTabs';
import { About } from './components/sections/About';
import { Resume } from './components/sections/Resume';
import { Portfolio } from './components/sections/Portfolio';

export default function App() {
  const [activePage, setActivePage] = useState<'about' | 'resume' | 'portfolio'>('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content">
        <Sidebar isActive={isSidebarOpen} onToggle={() => setIsSidebarOpen(prev => !prev)} />
        <div className="main-content">
          <NavigationTabs activePage={activePage} onPageChange={setActivePage} />
          <About isActive={activePage === 'about'} />
          <Resume isActive={activePage === 'resume'} />
          <Portfolio isActive={activePage === 'portfolio'} />
        </div>
      </main>
      <footer className="a11y-footer" aria-label="Accessibility statement">
        <p className="a11y-footer-statement">
          <a href="https://www.isoc.org.il/freedom-of-internet/accessibility/rules-and-regulations-accessibility-internet" target="_blank" rel="noreferrer">
            IS 5568
          </a>{' '}
          (WCAG 2.0 AA){' '}
          </p>
      </footer>
    </>
  );
}
