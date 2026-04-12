import { useRef, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { NavigationTabs } from './components/NavigationTabs';
import { About } from './components/sections/About';
import { Resume } from './components/sections/Resume';
import { Portfolio } from './components/sections/Portfolio';
import { useTabTransition } from './hooks/useTabTransition';
import type { Page } from './components/NavigationTabs';

export default function App() {
  const { activePage, exitingPage, isBusy, navigate } = useTabTransition('about');

  // Update ref synchronously in render (no useEffect delay).
  // lastActivePage stays on the last known page during the 100ms blank
  // when activePage is null, keeping the nav highlight stable.
  const lastActivePage = useRef<Page>('about');
  if (activePage !== null) lastActivePage.current = activePage;

  // Lock .main-content height at transition start to prevent collapse
  // when no article is in normal flow during the blank pause.
  const contentRef = useRef<HTMLDivElement>(null);

  const handleNavigate = useCallback((next: Page) => {
    // Only lock height if a transition will actually start (not mid-transition)
    if (!isBusy && contentRef.current) {
      contentRef.current.style.minHeight = contentRef.current.offsetHeight + 'px';
    }
    navigate(next);
  }, [navigate, isBusy]);

  // Clear locked height once the new page is active
  useEffect(() => {
    if (activePage !== null && contentRef.current) {
      contentRef.current.style.minHeight = '';
    }
  }, [activePage]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content">
        <Sidebar />
        <div className="main-content" ref={contentRef}>
          <NavigationTabs
            activePage={lastActivePage.current}
            onPageChange={handleNavigate}
          />
          <About
            isActive={activePage === 'about'}
            isExiting={exitingPage === 'about'}
          />
          <Resume
            isActive={activePage === 'resume'}
            isExiting={exitingPage === 'resume'}
          />
          <Portfolio
            isActive={activePage === 'portfolio'}
            isExiting={exitingPage === 'portfolio'}
          />
        </div>
      </main>
      <footer className="a11y-footer" aria-label="Accessibility statement">
        <p className="a11y-footer-statement">
          <a href="https://www.isoc.org.il/freedom-of-internet/accessibility/rules-and-regulations-accessibility-internet" target="_blank" rel="noreferrer">
            IS 5568
          </a>
          (WCAG 2.0 AA)
        </p>
      </footer>
    </>
  );
}
