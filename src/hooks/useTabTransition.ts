import { useState, useRef, useCallback, useEffect } from 'react';
import type { Page } from '../components/NavigationTabs';

const EXIT_DURATION = 240; // matches .exiting CSS transition duration
const BLANK_PAUSE   = 100;

interface TabTransitionState {
  activePage: Page | null;
  exitingPage: Page | null;
}

export function useTabTransition(initial: Page) {
  const [state, setState] = useState<TabTransitionState>({
    activePage: initial,
    exitingPage: null,
  });
  const busy     = useRef(false);
  const timers   = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => { timers.current.forEach(clearTimeout); };
  }, []);

  const navigate = useCallback((next: Page) => {
    setState(s => {
      if (next === s.activePage || busy.current) return s;
      busy.current = true;
      return { activePage: null, exitingPage: s.activePage };
    });

    const t1 = setTimeout(() => {
      setState(s => ({ ...s, exitingPage: null }));

      const t2 = setTimeout(() => {
        setState({ activePage: next, exitingPage: null });
        busy.current = false;
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
