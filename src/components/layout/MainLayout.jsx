import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../../utils/ScrollToTop';
import CommandPalette from '../common/CommandPalette';

export default function MainLayout() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onOpenSearch={() => setIsCommandOpen(true)} />
      <main className="pt-16 md:pt-18 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      
      {/* Global Command Palette */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </>
  );
}
