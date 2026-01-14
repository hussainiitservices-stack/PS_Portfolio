import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes('showWorkIntro=true')) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main
        id="main-content"
        className="flex-1 pt-20 md:pt-24"
        tabIndex={-1}
      >
        {children}
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
