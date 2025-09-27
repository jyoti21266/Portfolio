import { Settings, Code, Activity, Briefcase } from "lucide-react";

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Experience</span>
                </h2>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
          </div> */}

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> SDE-1 @ Rakuten Payments</h4>
                                <p className="text-muted-foreground text-sm mb-2">
                                    Aug 2023 – Present (2+ YOE)
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    <li>Built scalable eKYC APIs, reducing processing time from 5 days to under 10 minutes.</li>
                                    <li>Engineered minimal(less than 2s) failover DB switch system using etcd for 10+ critical services.</li>
                                    <li>Automated 25+ batch jobs with Apache Airflow, improving operational efficiency by 20%.</li>
                                    <li>Led migration from Java 8 to Java 21 and Payara Micro 5 to 6 for enterprise apps.</li>
                                    <li>Developed test automation suite using Chai and Gatling, benchmarking 5M+ records.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">SDE Intern @ Rakuten India</h4>
                                <p className="text-muted-foreground text-sm mb-2">
                                    Feb 2023 – Jul 2023 (6 Months)
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    <li>Built a data syncing platform for custom MySQL-to-MariaDB migrations, saving 32% of manual effort.</li>
                                    <li>Developed “Test Kanri”, an internal test case management app to replace third-party tools.</li>
                                    <li>Worked extensively with Python, FastAPI, GraphQL (Strawberry), and PostgreSQL.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Summer Intern @ DELL</h4>
                                <p className="text-muted-foreground text-sm mb-2">
                                    Apr 2022 – Jun 2022 (2 Months)
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    <li>Automated qTest test case updates using Python scripts, improving efficiency by 40%.</li>
                                    <li>Reduced manual QA efforts and improved team productivity through scripting tools.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    );
};
