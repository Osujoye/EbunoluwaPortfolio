import { Button } from './ui/button';
import { Github, Linkedin, Mail, Download, Medium } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">Hello, I'm</p>
            
                <h1 className="text-4xl md:text-5xl text-primary">Ebunoluwa Osujoye</h1>
            
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  A Full-Stack Software Engineer & A Data Analyst
                </h2>
              </div>
              
             
              <p className="text-lg text-muted-foreground max-w-2xl">
               I build responsive, user-friendly web applications and deliver
          data-driven insights using tools like React, Tailwind, R, and Excel.
          Passionate about clean code, clear visuals, and creative solutions.
                     </p>

              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToContact}>
                  Get In Touch with me
                </Button>

                <a 
                  href="public/Ebunoluwa-OsujoyeCV.pdf"
                  download 
                  className="flex items-center gap-2" >
                  <Button variant="outline" 
                  className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download my CV
                  </Button>
                </a>
              </div>

              <div className="flex space-x-4">
                
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0" asChild>
                  <a href="https://github.com/Osujoye" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0" asChild>
                  <a href="https://www.linkedin.com/in/ebunosujoye/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0" asChild>
                  <a href="mailto:ebunosujoye@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0" asChild>
                  <a href="https://medium.com/@Omovigho">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-border">
                
                <ImageWithFallback
                  src="public/mypic.jpg"
                  alt="ebunoluwa"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}