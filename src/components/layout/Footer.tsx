import { Link } from 'react-router-dom';

/**
 * Minimal footer with centered logos between brand and navigation
 * Clean, editorial aesthetic
 */

// const footerLogos = [
//   { name: 'Logo 1', src: 'https://i.ibb.co/WpGdYF0L/1674821857-saasguru-logo.png' },
//   { name: 'Logo 2', src: 'https://i.ibb.co/n8fFnPcH/blue-pink.jpg' },
//   { name: 'Logo 3', src: 'https://i.ibb.co/3YcdM1w3/download.png' },
//   { name: 'Logo 4', src: 'https://i.ibb.co/zWzkdkfX/logo.png' },
//   { name: 'Logo 5', src: 'https://i.ibb.co/DPQwNG4z/logo-nav.jpg' },
// ];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-editorial py-12 md:py-16">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT: Brand */}
          <div className="space-y-2 text-center md:text-left">
            <Link
              to="/"
              className="text-sm font-sans font-semibold tracking-[0.2em] uppercase"
            >
              ADVANCE CINEMATICS
            </Link>
            <p className="text-xs text-muted-foreground font-sans">
              © {currentYear} All rights reserved.
            </p>
          </div>

          

          {/* RIGHT: Navigation */}
          <nav className="flex gap-8 text-center md:text-right">
            <Link
              to="/work"
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </footer>
  );
}
