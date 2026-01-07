import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:r.sumaiya.set@gmail.com" className="hover:text-blue-600 transition">
            <Mail size={28} />
          </a>
          <a href="https://github.com/R-Sumaiya-set" className="hover:text-blue-600 transition">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/sumaiyarameen" className="hover:text-blue-600 transition">
            <Linkedin size={28} />
          </a>
          
        </div>

        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Sumaiya Rameen. All rights reserved.
        </p>

      </div>
    </footer>
  );
}