import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';

/**
 * Minimal footer with essential links and social icons
 * Clean, editorial aesthetic
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-editorial py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand & Copyright */}
          <div className="space-y-2">
            <Link to="/" className="text-sm font-sans font-semibold tracking-[0.2em] uppercase">
              PUNEET BAKSHI
            </Link>
            <p className="text-xs text-muted-foreground font-sans">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
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

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {photographerInfo.socialLinks.instagram && (
              <a
                href={photographerInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
            )}
            {photographerInfo.socialLinks.linkedin && (
              <a
                href={photographerInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
            )}
            <a
              href={`mailto:${photographerInfo.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
