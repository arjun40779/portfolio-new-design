import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer (Frontend / Full Stack)",
    company: "Incero.ai",
    period: "March 2024 - Aug 2025",
    highlights: [
      "Built and shipped production-ready web applications using React, Next.js, and TypeScript, serving 5K+ monthly active users",
      "Led frontend development for an e-commerce and CMS-driven platform, improving page load performance by 40% through code splitting and optimized rendering",
      "Integrated frontend applications with REST APIs built using Node.js and Spring Boot, handling authentication, data caching, and business logic workflows",
      "Designed and implemented JWT-based authentication and role-based access control across multiple applications",
      "Developed production-ready UI components and design system, reducing UI inconsistencies and enhancing user experience",
      "Collaborated with backend and product teams in an Agile setup using GitHub and Jira, delivering features in bi-weekly sprint releases",
    ],
  },
  {
    title: "Software Engineer (Frontend / Full Stack)",
    company: "Keys IT Design LLP - SaaS Platform (SCAPE MFT)",
    period: "Aug 2025 - Dec 2025",
    highlights: [
      "Contributed to a SaaS-based Managed File Transfer (MFT) web application used by enterprise clients, built with React for the frontend and Java (Spring-based services) on the backend",
      "Led the development of a new modern frontend application to replace a legacy UI, redesigning 20+ screens and delivering a complete UX overhaul",
      "Collaborated with backend engineers to design and extend 10+ REST API endpoints to support new UI workflows and enhanced user experiences",
      "Built responsive layouts and reusable UI components, reducing UI inconsistencies and improving code completion speed by 25%",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Experience
          </h2>
          <p className="text-xl text-slate-600">
            My professional journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg" />
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-slate-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start">
                        <span className="mr-2 text-blue-500 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}