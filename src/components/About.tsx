import { Card, CardContent } from './ui/card';
import { Code, Database } from 'lucide-react';

export function About() {
  const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Skilled in building complete web applications using modern tech like MERN stack, TailwindCSS, and REST APIs."
  },
  {
    icon: Database,
    title: "Data Analyst",
    description: "Experienced in R programming, interpretation of graph using spss, database models."
  },
];


  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
          I’m a passionate Frontend Web Developer and Data
      Analyst with a unique blend of creativity and analytical thinking. I love
      turning ideas into responsive, user-friendly websites while also making
      sense of data through clean visualizations and insights. With a background
      in fashion design and a strong love for teaching math, I bring a diverse
      perspective to every project. Whether I’m coding a modern web interface or
      analyzing datasets, I’m driven by curiosity, problem-solving, and
      continuous growth. Currently exploring opportunities where I can build
      impactful digital experiences, collaborate with forward-thinking teams,
      and keep learning.
          </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
         
            </div>

            <div className="space-y-4">
              <h4 className="text-lg text-primary">What I Bring!</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  A strong vision for building products that solve real problems
                </li>
                <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Versatility as a full stack developer with hands-on experience across the entire development cycle
                </li>
                <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  A collaborative mindset that values communication, growth, and shared success
                </li>
                <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                  A product-driven approach to problem-solving — always focused on user experience and efficiency
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-primary">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}