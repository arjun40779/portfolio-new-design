import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-5xl">
              AS
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl mb-4"
          >
            Arjun Singh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-blue-200 mb-6"
          >
            Full Stack Software Engineer
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Results-driven Software Engineer specializing in modern frontend ecosystems 
            (React, Next.js, TypeScript). Led and contributed to large-scale ecommerce and 
            CMS-driven platforms with a focus on performance, UX, and scalability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <a
              href="mailto:arjun40779@gmail.com"
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>arjun40779@gmail.com</span>
            </a>
            <a
              href="tel:+917770068348"
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 77700 68348</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>India (Open to Relocation / Remote)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/arjun-singh-541554117"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/arjun-singh-541554117"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}