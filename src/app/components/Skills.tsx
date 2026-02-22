import { motion } from "motion/react";
import { Code2, Database, Cloud, Shield, Wrench, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "TypeScript", "Java"],
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-cyan-600 to-cyan-400",
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "Spring Boot (REST APIs)"],
    color: "from-teal-600 to-teal-400",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
    color: "from-indigo-600 to-indigo-400",
  },
  {
    title: "Authentication & Authorization",
    icon: Shield,
    skills: ["JWT", "Role-Based Access Control (RBAC)"],
    color: "from-sky-600 to-sky-400",
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    skills: ["Vercel", "AWS (EC2, S3 - working knowledge)"],
    color: "from-blue-700 to-blue-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Jira", "Postman"],
    color: "from-cyan-700 to-cyan-500",
  },
  {
    title: "Development Practices",
    icon: GitBranch,
    skills: ["Agile/Scrum", "API Integration", "Clean Architecture"],
    color: "from-teal-700 to-teal-500",
  },
];

export function Skills() {
  return (
    <section className="py-20 bg-slate-50" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-3 text-slate-900">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-600 text-sm flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}