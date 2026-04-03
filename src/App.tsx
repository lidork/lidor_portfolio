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
    <main>
      <Sidebar isActive={isSidebarOpen} onToggle={() => setIsSidebarOpen(prev => !prev)} />
      <div className="main-content">
        <NavigationTabs activePage={activePage} onPageChange={setActivePage} />
        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
        <Portfolio isActive={activePage === 'portfolio'} />
      </div>
    </main>
  );
}
