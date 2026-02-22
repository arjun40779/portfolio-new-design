import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-200">
            Let's work together on your next project
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl mb-6">Contact Information</h3>
              
              <a
                href="mailto:arjun40779@gmail.com"
                className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group"
              >
                <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Email</div>
                  <div>arjun40779@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+917770068348"
                className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group"
              >
                <div className="p-2 bg-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Phone</div>
                  <div>+91 77700 68348</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="p-2 bg-teal-500 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Location</div>
                  <div>India (Open to Relocation / Remote)</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/arjun-singh-541554117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all hover:scale-110 flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/arjun-singh-541554117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all hover:scale-110 flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-blue-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-blue-200/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-blue-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-blue-200/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-blue-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-blue-200/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}