'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail,
  Library,
  GraduationCap,
  Briefcase,
  Calendar

} from 'lucide-react';

export default function About() {
  const frontendSkills = ['HTML','CSS','JavaScript','React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];
  const backendSkills = [ 'Node.js','MySql','REST APIs','Hono'];
  const toolsSkills = ['Git','GitHub', 'Figma', 'Vercel','API'];

  const timeline = [
    { year: '2016', title: 'Educator', desc: 'Helping others understand technology', icon: Library},
    { year: '2024', title: 'Bachelor of Information Technology', desc: 'Undergraduate - 2nd Year', icon: GraduationCap },
    { year: '2024', title: 'Independent Frontend Engineer (Academic & Personal Projects)', desc: 'Building production-ready frontend projects, integrating APIs, deploying with Vercel, and using GitHub workflows', icon: Code2 },
    { year: '2025', title: 'Open Source Contributor (Learning & Participation)', desc: 'Exploring contributions, issues, and community workflows in JavaScriptReact & Next.js repositories', icon: Github },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="thumbnails/avatar.jpg"
                alt="Sumaiya"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Hi, I'm an <span className="font-semibold text-blue-600 dark:text-blue-400">aspiring Software Engineer</span> passionate about building impactful, full-stack web solutions that solve real-world problems. 
              With expertise in modern React ecosystems,while confidently handling backend development using Node.js, I focus on building fast, accessible, and visually stunning applications while continuously growing my skills.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge through blog posts and mentoring.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="mailto:r.sumaiya.set@email.com" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <Mail size={24} />
              </a>
              <a href="https://github.com/R-Sumaiya-set" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sumaiyarameen" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <Linkedin size={24} />
              </a>
              
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Skills & Technologies
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-600" size={28} />
                <h4 className="text-xl font-semibold">Frontend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-green-600" size={28} />
                <h4 className="text-xl font-semibold">Backend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-purple-600" size={28} />
                <h4 className="text-xl font-semibold">Tools & Others</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Journey
          </motion.h3>

          <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-700 md:before:left-1/2 md:before:-ml-0.5">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-6 relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1"></div>
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg z-10">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-gray-800/70 rounded-2xl p-6 shadow-md">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Calendar size={16} />
                    {item.year}
                  </div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}