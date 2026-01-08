import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

/**
 * Minimal header inspired by alexanderglucina.com
 * Fixed position, clean typography, subtle interactions
 */
export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isHomepage = location.pathname === '/';
  const showSolidBg = isScrolled || !isHomepage;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          showSolidBg
            ? 'bg-background/95 backdrop-blur-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container-editorial">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo / Brand */}
            <Link
              to="/"
              className={cn(
                'group flex flex-col transition-colors duration-300',
                showSolidBg
                  ? 'text-foreground'
                  : 'text-white'
              )}
            >
              <span className="text-lg md:text-xl font-sans font-semibold tracking-[0.2em] uppercase">
                PUNEET BAKSHI
              </span>
              <span className="text-[10px] md:text-xs font-sans font-light tracking-[0.15em] text-current/70">
                Video Editor | Motion Graphic Designer | Cinematographer
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative text-sm font-sans font-medium tracking-[0.15em] uppercase transition-colors duration-300',
                    showSolidBg
                      ? 'text-foreground hover:text-muted-foreground'
                      : 'text-white hover:text-white/70',
                    location.pathname === link.path && 'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-current'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'md:hidden p-2 -mr-2 transition-colors duration-300',
                showSolidBg
                  ? 'text-foreground'
                  : 'text-white'
              )}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-3xl font-display font-light tracking-wide transition-colors',
                      location.pathname === link.path
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
                className="mt-4"
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
