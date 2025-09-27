import { Settings, Code, Activity } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Backend Developer
            </h3>

            <p className="text-muted-foreground">
              With over 2 years of experience in backend development, 
              I specialize in building scalable, reliable, and high-performance web services
              and infrastructure using modern technologies such as Java, Python, Spring Boot, FastAPI, Kubernetes, and Redis.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about designing clean architectures and solving complex system-level problems.
              I thrive on optimizing backend performance, automating workflows, and continuously learning new 
              technologies to stay ahead in the rapidly evolving backend ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Users/jyotikumari/Documents/beautiful-react-tailwind-portfolio/public/JyotiKumari_25.pdf"
                download="Jyoti_Kumari_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable, secure, and high-performance APIs and services using Java, Python, and modern backend frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">System Design</h4>
                  <p className="text-muted-foreground">
                    Designing fault-tolerant, distributed systems with a focus on performance, availability, and scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps & Automation</h4>
                  <p className="text-muted-foreground">
                    Automating workflows and deployments using Kubernetes, Docker, Airflow, and observability tools like Grafana and Prometheus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
