'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's connect!</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>


            <div className="flex gap-4">
                <a
                href="mailto:r.sumaiya.set@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                <Mail size={28} />
                </a>
              <a
                href="https://github.com/R-Sumaiya-set"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumaiyarameen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows={6}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-blue-600 focus:outline-none transition resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}