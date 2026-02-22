import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => scrollToSection("#home")}
              className={`text-xl transition-colors ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Arjun Singh
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors hover:text-blue-600 ${
                    isScrolled ? "text-slate-700" : "text-white/90"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl text-white hover:text-blue-300 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}