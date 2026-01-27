"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Sun, Moon, Star, ShoppingCart, Activity, Palette } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const phoneNumber = "2349132145326"; 
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center font-bold text-lg text-white group-hover:scale-105 transition-transform">
                OG
              </div>
              <span className="font-semibold text-lg tracking-wide hidden sm:block">GODSWILL</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
              <a href="#about" className="hover:text-primary transition-colors">ABOUT ME</a>
              <a href="#skills" className="hover:text-primary transition-colors">SKILLS</a>
              <a href="#projects" className="hover:text-primary transition-colors">PROJECTS</a>
              <Button asChild className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white hover:opacity-90 transition-opacity">
                <a href="#contact">CONTACT ME</a>
              </Button>
              
              {/* Theme Toggle */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-4">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-6 mt-10 text-center">
                    <a href="#about" className="text-lg font-medium hover:text-primary">ABOUT ME</a>
                    <a href="#skills" className="text-lg font-medium hover:text-primary">SKILLS</a>
                    <a href="#projects" className="text-lg font-medium hover:text-primary">PROJECTS</a>
                    <a href="#contact" className="text-lg font-medium text-primary">CONTACT ME</a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00d4ff]/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10">
          <p className="text-primary font-medium mb-8 tracking-widest text-sm uppercase animate-slide-up">
            Hello, I&apos;m
          </p>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
            <span className="gradient-text-cyan">Okenrenkporo Godswill</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Full Stack Developer
          </h2>
          
          <div className="relative inline-block">
            <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full p-2 border-2 border-primary/30 shadow-[0_0_100px_rgba(0,212,255,0.3)] bg-background">
               <div className="w-full h-full rounded-full overflow-hidden relative">
                   <Image 
                    src="/profile.jpeg" 
                    alt="Godswill" 
                    width={400} 
                    height={400}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                    priority
                  />
               </div>
            </div>

            <Card className="absolute top-0 -left-12 md:-left-48 p-4 hidden md:flex items-center gap-3 animate-float border-primary/20 bg-card/80 backdrop-blur-sm">
               <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Star className="h-6 w-6 fill-current" />
               </div>
               <div className="text-left">
                  <p className="text-xs text-muted-foreground">Client Review</p>
                  <p className="text-sm font-bold">5 Stars Rating</p>
               </div>
            </Card>

             <Card className="absolute bottom-0 -right-12 md:-right-48 p-5 hidden md:block text-left animate-float-delay border-primary/20 bg-card/80 backdrop-blur-sm">
               <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Expertise</p>
               <div className="space-y-3 w-52">
                  <div className="flex justify-between text-xs font-medium">
                     <span>Development</span>
                     <span className="text-primary">95%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                     <div className="h-full bg-primary w-[95%]"></div>
                  </div>
               </div>
            </Card>
            
             <Button asChild size="lg" className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 rounded-full px-8 shadow-[0_10px_40px_rgba(0,212,255,0.3)] z-20 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white border-0 hover:scale-105 transition-transform">
                <a href="#projects">MY PROJECTS</a>
             </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            WHO AM <span className="gradient-text-cyan">I ?</span>
          </h2>

          <Card className="p-10 md:p-16 border-primary/20 bg-card/60 backdrop-blur-sm">
             <p className="text-xl md:text-2xl leading-relaxed font-light">
               I am a <span className="text-primary font-semibold">Full Stack Developer</span> and Medical Laboratory Scientist. 
               I specialize in building scalable web applications using <span className="font-semibold">React, Next.js, and Node.js</span>. 
               I combine analytical precision with creative coding to build seamless digital experiences.
             </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative bg-accent/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">
            MY <span className="gradient-text-cyan">SKILLS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
               {[
                  { name: "React Native", icon: "📱" },
                  { name: "Next.js", icon: "▲" },
                  { name: "FastAPI", icon: "⚡" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "Prisma", icon: "💎" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Tailwind", icon: "🌊" },
                  { name: "TypeScript", icon: "📘" },
               ].map((skill, idx) => (
                  <Card key={idx} className="flex flex-col items-center justify-center gap-4 p-6 hover:border-primary transition-colors cursor-default h-40">
                     <span className="text-4xl">{skill.icon}</span>
                     <span className="text-sm font-semibold tracking-wider text-muted-foreground text-center">{skill.name}</span>
                  </Card>
               ))}
             </div>

             <Card className="md:col-span-4 p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-card to-secondary/20 border-primary/20 min-h-[300px]">
                <span className="text-7xl font-bold mb-2">4+</span>
                <span className="text-2xl font-medium text-primary mb-6">Years Experience</span>
                <Button asChild className="w-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white">
                   <a href="/CV.docx" download>DOWNLOAD MY CV</a>
                </Button>
             </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
               The work closest to <br/><span className="gradient-text-cyan">my heart</span>
             </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "LuxeNext",
                subtitle: "E-Commerce Platform",
                icon: <ShoppingCart className="h-12 w-12 text-white" />,
                image: "/luxenext_v2.png",
                link: "https://luxenext-f.vercel.app/",
                tags: ["Next.js", "Tailwind", "Stripe"]
              },
              {
                title: "Wills Health",
                subtitle: "Healthcare Dashboard",
                icon: <Activity className="h-12 w-12 text-white" />,
                image: "/wills_health.png",
                link: "https://wills-health.vercel.app/",
                tags: ["React", "Chart.js", "Firebase"]
              },
              {
                title: "Portfolio Website",
                subtitle: "Modern Design",
                icon: <Palette className="h-12 w-12 text-white" />,
                image: "/portfolio_mockup.png",
                link: "#",
                tags: ["Next.js", "Shadcn UI", "Framer"]
              }
            ].map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="relative h-[350px] overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                   {/* Background Image */}
                   <div className="absolute inset-0">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors" />
                   </div>
                   
                   {/* Content */}
                   <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <div className="mb-2 p-2 bg-white/10 w-fit rounded-lg backdrop-blur-md">
                            {project.icon}
                         </div>
                         <p className="text-[#00d4ff] text-xs font-bold tracking-wider uppercase mb-1">{project.subtitle}</p>
                         <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                         
                         {/* Tags */}
                         <div className="flex gap-2 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                           {project.tags.map((tag, i) => (
                             <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                               {tag}
                             </span>
                           ))}
                         </div>
                      </div>
                   </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative bg-accent/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            LET&apos;S HAVE A <span className="gradient-text-cyan">CHAT</span>
          </h2>

          <Card className="p-8 md:p-12 border-primary/20 bg-card/60 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">Your Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                 </div>
              </div>
              
              <div>
                 <label className="block text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
                 <Textarea
                   name="message"
                   rows={6}
                   value={formData.message}
                   onChange={handleInputChange}
                   required
                   className="resize-none"
                 />
              </div>

              <Button type="submit" size="lg" className="w-full uppercase tracking-widest font-bold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white">
                Submit Here
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Okenrenkporo Godswill. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4 opacity-50">
           <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-primary transition-colors">GitHub</a>
           <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
