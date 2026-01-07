'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'FloaChat',
      desc: 'Real-time AI customer support widget — instant answers, beautiful UI, powered by Groq ',
      gif: '/gifs/floachat.gif', //GIFs in public/gifs/
      thumbnail: '/thumbnails/FloaChat.png',
      tech: ['Next.js', 'TailwindCSS', 'Framer Motion', 'API (Llama 3)', 'Vercel'],
      live: 'https://floachat.vercel.app/',
      github: 'https://github.com/R-Sumaiya-set/floachat',
    },
    {
      title: 'ScriptZen-AI',
      desc: 'Generative AI Content Optimizer',
      gif: '/gifs/tasks.gif',
      thumbnail:'/thumbnails/ScriptZen.png', 
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Hono framework', 'RESTful API'],
      github: 'https://github.com/R-Sumaiya-set/ScriptZen-ai',
    },
    /*{
      title: 'AI Dashboard',
      desc: 'Analytics dashboard with beautiful charts and dark mode',
      gif: '/gifs/dashboard.gif',
      thumbnail: '/thumbnails/dashboard.jpg',
      tech: ['Next.js', 'Chart.js', 'TypeScript', 'Tailwind'],
      live: 
      github: 
    }*/
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={800}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer h-full flex flex-col"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Floating GIF Overlay */}
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              left: mousePos.x + 20,
              top: mousePos.y + 20,
              pointerEvents: 'none',
              zIndex: 9999,
            }}
            className="shadow-2xl rounded-lg overflow-hidden border-4 border-white dark:border-gray-800"
          >
            <img
              src={projects[hoveredIndex].gif}
              alt="Project demo"
              className="w-96 h-auto max-h-64 object-contain bg-black"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <p className="font-semibold">{projects[hoveredIndex].title}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}