import { Link } from 'react-router-dom';

/**
 * Minimal footer with centered logos between brand and navigation
 * Clean, editorial aesthetic
 */

const footerLogos = [
  { name: 'SaaSGuru', src: 'https://i.ibb.co/q33qc4W5/1674821857-saasguru-logo.png' },
  { name: 'Blue Pink', src: 'https://i.ibb.co/yBh5Nt7D/blue-pink.png' },
  { name: 'Salesforce', src: 'https://i.ibb.co/9mZZFB9p/salesfroce.png' },
  { name: 'MGT Commerce', src: 'https://i.ibb.co/8nFtGpfz/MGT.jpg' },
  { name: 'TMB Media', src: 'https://i.ibb.co/hxQvLnSJ/TMB-Media-modified.webp' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-editorial py-12 md:py-16">

        {/* MAIN FOOTER ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT: Brand */}
<div className="space-y-2 text-center md:text-left shrink-0">
  <Link
    to="/"
    className="text-sm font-sans font-semibold tracking-[0.2em] uppercase"
  >
    ADVANCE CINEMATICS
  </Link>

  <p className="text-xs text-muted-foreground font-sans">
    © {currentYear} All rights reserved.
  </p>

  {/* Project Credit */}
   <a
  href="https://hussainiitservices.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-xs font-sans text-muted-foreground hover:text-foreground transition mt-1"
>
  Project designed & developed by <span className="font-medium">Hussaini IT Services</span>
</a> 

</div>


          {/* CENTER: Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 flex-1">
            {footerLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="
                  h-8            /* 🔧 LOGO SIZE (mobile) */
                  md:h-10        /* 🔧 LOGO SIZE (desktop) */
                  lg:h-12        /* 🔧 LOGO SIZE (large screens) */
                  w-auto
                  opacity-80
                  hover:opacity-100
                  transition-opacity
                "
              />
            ))}
          </div>

          {/* RIGHT: Navigation */}
          <nav className="flex gap-8 text-center md:text-right shrink-0">
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
