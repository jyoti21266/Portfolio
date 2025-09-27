import { useState } from "react";
import { cn } from "@/lib/utils";
import { SiPython } from "react-icons/si"

const skills = [
  // Programming Languages
  { name: "Java", logo: <img src="/assets/java.webp" alt="Python" className="w-12 h-12" />, category: "language" },
  { name: "Python", logo: <img src="/assets/Python.svg" alt="Python" className="w-12 h-12" />,category: "language" },
  { name: "C++", logo: <img src="/assets/Cpp.png" alt="Python" className="w-12 h-12" />, category: "language" },

  // // Databases
  { name: "MongoDB", logo: <img src="/assets/mongodb.png" alt="Python" className="w-12 h-12" />, category: "database" },
  { name: "MariaDB", logo: <img src="/assets/maria.png" alt="Python" className="w-12 h-12" />, category: "database" },
  { name: "MySQL", logo: <img src="/assets/mysql.png" alt="Python" className="w-12 h-12" />, category: "database" },
  { name: "Redis", logo: <img src="/assets/redis.png" alt="Python" className="w-12 h-12" />, category: "database" },

  // // DevOps Tools
  { name: "Apache Airflow", logo: <img src="/assets/airflow.png" alt="Python" className="w-12 h-12" />, category: "devops" },
  { name: "Kong", logo: <img src="/assets/kong.jpeg" alt="Python" className="w-12 h-12" />, category: "devops" },
  { name: "Kubernetes", logo: <img src="/assets/kubernetes.png" alt="Python" className="w-12 h-12" />, category: "devops" },
  { name: "Docker", logo: <img src="/assets/docker.jpeg" alt="Python" className="w-12 h-12" />, category: "devops" },

  // // Tools
  { name: "Postman", logo: <img src="/assets/postman.webp" alt="Python" className="w-12 h-12" />, category: "tools" },
  { name: "Git", logo: <img src="/assets/git.png" alt="Python" className="w-12 h-12" />, category: "tools" },
  { name: "Elasticsearch", logo: <img src="/assets/elastic.png" alt="Python" className="w-12 h-12" />, category: "tools" },
  { name: "Kibana", logo: <img src="/assets/kibana.png" alt="Python" className="w-12 h-12" />, category: "tools" },
  { name: "Grafana", logo: <img src="/assets/grafana.svg" alt="Python" className="w-12 h-12" />, category: "tools" },
  { name: "Prometheus", logo: <img src="/assets/prom.png" alt="Python" className="w-12 h-12" />, category: "tools" },

  // // Frameworks
  { name: "FastAPI", logo: <img src="/assets/fastapi.svg" alt="Python" className="w-12 h-12" />, category: "framework" },
  { name: "Spring Boot", logo: <img src="/assets/spring.svg" alt="Python" className="w-12 h-12" />, category: "framework" },
  { name: "Hibernate", logo: <img src="/assets/hibernate.png" alt="Python" className="w-12 h-12" />, category: "framework" },
  { name: "Gatling", logo: <img src="/assets/gatling.png" alt="Python" className="w-12 h-12" />, category: "framework" },
  { name: "GraphQL", logo: <img src="/assets/graphql.png" alt="Python" className="w-12 h-12" />, category: "framework" },
];

const categories = ["all",
  "language",
  "database",
  "devops",
  "tools",
  "framework",];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {filteredSkills.map((skill, idx) => (
    <div
      key={idx}
      title={skill.name}
      className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md transition-transform transform hover:scale-105"
      style={{
        backgroundColor: skill.bgColor || "#f4f4f5", // fallback light gray
      }}
    >
      <div className="text-5xl mb-2">{skill.logo}</div>
      <span className="text-sm font-medium text-[#a78bfa] mt-2">
        {skill.name}
      </span>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};