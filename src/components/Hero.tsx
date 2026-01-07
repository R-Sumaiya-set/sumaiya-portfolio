'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { loadLinksPreset } from '@tsparticles/preset-links';
import type { Engine } from '@tsparticles/engine';

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    preset: 'links' as const,
    background: { color: { value: 'transparent' } },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: '#3b82f6' },
      links: { color: '#3b82f6', distance: 150, enable: true, opacity: 0.3 },
      move: { enable: true, speed: 1 },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.6 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 100 } },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0"
        />
      )}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
         Sumaiya Rameen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6"
        >
          Aspiring Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Crafting beautiful, performant web experiences with React, Next.js and modern UI practices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600  dark:text-blue-400 rounded-full font-medium text-lg shadow-lg hover:bg-blue-700 hover:text-white transition"
          >
            See My Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-medium text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Skill Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion','Node.js','MySQL'].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="px-5 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium shadow-md"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}