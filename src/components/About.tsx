
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Redux",
    "Next.js",
    "Node.js",
    "UI/UX Design",
    "Figma",
    "RESTful APIs",
    "Git & GitHub",
  ];

  return (
    <section id="about" className="section bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey</h3>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                I'm a passionate frontend developer and UI/UX designer with a strong focus on creating beautiful, functional, and accessible web applications.
              </p>
              <p>
                With 5+ years of experience in web development, I've worked with various technologies and frameworks, always staying updated with the latest industry trends and best practices.
              </p>
              <p>
                My approach combines technical expertise with an eye for design, allowing me to build solutions that are not only technically sound but also visually appealing and user-friendly.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating responsive designs that work seamlessly across all devices and platforms.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Skills & Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Card key={skill} className="card-hover">
                  <CardContent className="p-4 text-center">
                    <span className="font-medium">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
