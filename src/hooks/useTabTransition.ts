import { useState, useRef, useCallback, useEffect } from 'react';
import type { Page } from '../components/NavigationTabs';

const EXIT_DURATION  = 240; // matches .exiting CSS transition duration
const BLANK_PAUSE    = 100;
const ENTER_DURATION = 400; // matches tab-enter @keyframes duration in App.css

interface TabTransitionState {
  activePage: Page | null;
  exitingPage: Page | null;
}

export function useTabTransition(initial: Page) {
  const [state, setState] = useState<TabTransitionState>({
    activePage: initial,
    exitingPage: null,
  });
  const busy   = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => { timers.current.forEach(clearTimeout); };
  }, []);

  const navigate = useCallback((next: Page) => {
    // Guard BEFORE creating any timeouts — blocked clicks must not schedule timers
    if (busy.current) return;

    setState(s => {
      if (next === s.activePage) return s;
      busy.current = true;
      return { activePage: null, exitingPage: s.activePage };
    });

    const t1 = setTimeout(() => {
      setState(s => ({ ...s, exitingPage: null }));

      const t2 = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setState({ activePage: next, exitingPage: null });

        // Hold busy through the enter animation so a click mid-enter
        // doesn't start an exit from a partially-visible state.
        const t3 = setTimeout(() => {
          busy.current = false;
          timers.current = [];
        }, ENTER_DURATION);

        timers.current.push(t3);
      }, BLANK_PAUSE);

      timers.current.push(t2);
    }, EXIT_DURATION);

    timers.current.push(t1);
  }, []);

  return {
    activePage: state.activePage,
    exitingPage: state.exitingPage,
    navigate,
  };
}
