import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "What's new?",
    children: ["New Categories", "UPI 123Pay"],
  },
  { label: "Benefits" },
  { label: "Categories" },
  {
    label: "Solutions",
    children: ["Bharat Connect Platform", "Custom Solutions", "UPMS", "Biller Dashboard"],
  },
  { label: "Impact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-dark border-b border-primary-foreground/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity min-w-fit">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg gradient-primary" />
            <span className="text-base sm:text-lg md:text-xl font-bold text-primary-foreground hidden sm:inline">
              OMShrikanthfinance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 sm:gap-1 lg:flex">
            <Link
              to="/"
              className="flex items-center gap-1 px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              title="Back to Home"
            >
              <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-card p-2 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block rounded-lg px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                        >
                          {child}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2 sm:gap-2.5 md:gap-3 lg:flex">
            <Button variant="nav" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary-foreground lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-dark border-t border-primary-foreground/10 lg:hidden"
          >
            <div className="container mx-auto container-padding py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block py-3 text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="heroOutline" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
