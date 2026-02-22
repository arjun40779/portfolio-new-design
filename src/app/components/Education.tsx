import { motion } from "motion/react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master in Computer Science and Technology",
    institution: "Mia Digital University",
    period: "Feb 2024",
    type: "Master's Degree",
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    institution: "Gauhati University",
    period: "Nov 2020",
    type: "Bachelor's Degree",
  },
];

export function Education() {
  return (
    <section className="py-20 bg-slate-50" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Education
          </h2>
          <p className="text-xl text-slate-600">
            My academic background
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-blue-600 mb-1">
                    {edu.type}
                  </div>
                  <h3 className="text-lg mb-2 text-slate-900">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-600 mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}