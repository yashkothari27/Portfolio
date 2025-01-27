"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket, Shield, Code, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Todo DApp",
    description: "A decentralized todo application built on Ethereum that allows users to create, manage and track tasks while earning yield through DeFi integrations. Features include task categories, deadlines, and reward mechanisms.",
    tech: ["Solidity", "React", "Web3.js", "Hardhat", "IPFS"],
    github: "https://github.com/yashkothari27/Todo_dapp",
    demo: "https://todo-list-dapp-block.netlify.app/",
    icon: <Rocket className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    stats: {
      users: "500+",
      tasks: "2.5k+",
      tvl: "$50k+"
    }
  },
  {
    title: "Voting DApp",
    description: "A secure and transparent voting system built on Ethereum that enables decentralized decision-making. Features include voter verification, real-time vote counting, and tamper-proof results.",
    tech: ["Solidity", "React", "Web3.js", "Hardhat", "TheGraph"],
    github: "https://github.com/yashkothari27/Voting_system", 
    demo: "https://voting-system-test.netlify.app/",
    icon: <Code className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2832&auto=format&fit=crop",
    stats: {
      votes: "10k+",
      proposals: "100+",
      success: "99.9%"
    }
  },
  {
    title: "Auction DApp",
    description: "A decentralized auction platform enabling transparent bidding and selling of digital assets. Features include automated settlements, escrow services, and support for multiple asset types.",
    tech: ["Solidity", "React", "Web3.js", "Hardhat", "Chainlink"],
    github: "https://github.com/yashkothari27/Auction",
    demo: "https://auction-testing.netlify.app/",
    icon: <Shield className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1633250587603-42e4fd67f5a2?q=80&w=2832&auto=format&fit=crop",
    stats: {
      auctions: "200+",
      volume: "$100k+",
      users: "1k+"
    }
  },
];

const useParallax = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return { handleMouseMove, handleMouseLeave };
};

export default function Projects() {
  const { handleMouseMove, handleMouseLeave } = useParallax();

  return (
    <div className="container py-12 space-y-16 animate-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 
                      blur-3xl opacity-50 animate-gradient-shift pointer-events-none" />
      
      <div className="relative z-10">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold gradient-text animate-title-slide">Featured Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl animate-slide-up">
            Explore my latest blockchain projects, showcasing innovative solutions in DeFi, governance, and digital asset management.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Card 
              key={project.title}
              className="group relative overflow-hidden border border-border/50 hover:border-primary/50 
                         transition-all duration-500 animate-slide-up backdrop-blur-sm
                         bg-gradient-to-br from-background/50 via-background/80 to-primary/5
                         hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${idx * 100}ms` }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10 
                                opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 
                               group-hover:rotate-1 will-change-transform"
                />
              </div>
              
              <div className="relative z-20 p-6 -mt-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg 
                                  group-hover:bg-primary/10 group-hover:scale-110 
                                  transition-all duration-500">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent 
                                 bg-gradient-to-r from-foreground to-foreground/80
                                 group-hover:from-primary group-hover:to-primary/80 
                                 transition-all duration-500">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-background/50 backdrop-blur-sm rounded-lg">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-primary font-semibold">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/5 text-primary/80 px-3 py-1 rounded-full text-sm font-medium
                                 hover:bg-primary/10 hover:scale-105 hover:text-primary
                                 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="group/btn flex-1">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        View Code
                      </Link>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="group/btn flex-1">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}