'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg text-black dark:text-white'
    : 'bg-transparent text-white dark:text-white'
}`}
    >
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tight"
        >
          <a href="#home">R.Sumaiya</a>
        </motion.div>

        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <motion.li key={link} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-lg font-medium hover:text-blue-500 transition-colors"
              >
                {link}
              </a>
            </motion.li>
          ))}
        

        <motion.button
  whileHover={{ rotate: 180 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
  className="relative p-3 rounded-full bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm"
  aria-label="Toggle theme"
>
  <Sun className="absolute inset-0 m-auto h-5 w-5 text-yellow-500 transition-all duration-300 dark:opacity-0 dark:scale-0" />
  <Moon className="absolute inset-0 m-auto h-5 w-5 text-gray-700 transition-all duration-300 opacity-0 scale-0 dark:opacity-100 dark:scale-100" />
</motion.button>
</ul>
      {/* Mobile Right Side: Theme Toggle + Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Theme Toggle */}
          <motion.button
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-3 rounded-full bg-muted/80 backdrop-blur-sm"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 text-yellow-500 absolute inset-0 m-auto transition-all duration-300 dark:opacity-0 dark:scale-0" />
            <Moon className="h-5 w-5 text-gray-700 absolute inset-0 m-auto transition-all duration-300 opacity-0 scale-0 dark:opacity-100 dark:scale-100" />
          </motion.button>

          {/* Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-lg">
              <div className="flex flex-col gap-8 mt-16 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-2xl font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}