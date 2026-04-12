import { useState, useRef, useCallback } from 'react';
import type { Page } from '../components/NavigationTabs';

const EXIT_DURATION = 240;
const BLANK_PAUSE   = 100;

interface TabTransitionState {
  activePage: Page | null;   // null during blank pause (no article in flow)
  exitingPage: Page | null;
}

export function useTabTransition(initial: Page) {
  const [state, setState] = useState<TabTransitionState>({
    activePage: initial,
    exitingPage: null,
  });
  const busy = useRef(false);

  const navigate = useCallback((next: Page) => {
    setState(s => {
      // Guard: ignore if same page or mid-transition
      if (next === s.activePage || busy.current) return s;
      busy.current = true;
      // Single setState: clear activePage AND set exitingPage atomically.
      // This ensures the outgoing article goes from .active → .exiting
      // in ONE React render — no intermediate flash to the default (no-transition) state.
      return { activePage: null, exitingPage: s.activePage };
    });

    // After exit animation completes, clear the exiting article (blank stage)
    setTimeout(() => {
      setState(s => ({ ...s, exitingPage: null }));

      // After blank pause, bring in the new content
      setTimeout(() => {
        setState({ activePage: next, exitingPage: null });
        busy.current = false;
      }, BLANK_PAUSE);

    }, EXIT_DURATION);
  }, []);

  return {
    activePage: state.activePage,
    exitingPage: state.exitingPage,
    navigate,
  };
}
