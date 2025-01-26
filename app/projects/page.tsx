import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket, Shield, Code, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "DeFi Lending Protocol",
    description: "A decentralized lending platform built on Ethereum with support for multiple assets and yield farming capabilities.",
    tech: ["Solidity", "React", "Web3.js", "Hardhat"],
    github: "https://github.com/yashkothari/defi-lending",
    demo: "https://defi-lending.example.com",
    icon: <Rocket className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
  },
  {
    title: "NFT Marketplace",
    description: "A full-featured NFT marketplace supporting multiple collections, bidding, and royalties.",
    tech: ["Solidity", "Next.js", "IPFS", "Ethers.js"],
    github: "https://github.com/yashkothari/nft-marketplace",
    demo: "https://nft-marketplace.example.com",
    icon: <Code className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
  },
  {
    title: "Private Blockchain Solution",
    description: "Enterprise blockchain solution for supply chain management using Hyperledger Fabric.",
    tech: ["Hyperledger Fabric", "Node.js", "Docker", "MongoDB"],
    github: "https://github.com/yashkothari/private-blockchain",
    icon: <Shield className="h-8 w-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <div className="container py-12 space-y-16 animate-fade-in">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold gradient-text animate-title-slide">Featured Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl animate-slide-up">
          Explore my latest blockchain projects, from DeFi protocols to enterprise solutions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <Card 
            key={project.title}
            className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 animate-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="relative z-20 p-6 -mt-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-background rounded-xl shadow-lg">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild className="group/btn">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}