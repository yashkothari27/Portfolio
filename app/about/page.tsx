import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="container py-12 space-y-16 animate-fade-in">
      {/* Hero Section */}
      <div className="space-y-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text animate-title-slide">About Me</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 animate-slide-up">
            <p className="text-lg leading-relaxed">
              I'm a blockchain developer with extensive experience in building
              decentralized systems and Web3 applications. My journey in the
              blockchain space began with a fascination for its potential to
              revolutionize traditional systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in computer science and years of hands-on
              experience, I specialize in developing secure smart contracts,
              implementing DeFi protocols, and creating innovative blockchain
              solutions.
            </p>
            {/* Resume Download Section */}
            <div className="pt-6">
              <Button asChild size="lg" className="group animate-scale-up">
                <Link href="/YashKothari_Resume.pdf" target="_blank">
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Link>
              </Button>
            </div>
          </div>
          <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-primary/5">
            <h2 className="text-xl font-semibold mb-6 gradient-text">Key Achievements</h2>
            <ul className="space-y-4">
              {[
                "Developed multiple DeFi protocols with $1M+ TVL",
                "Successfully audited and secured smart contracts",
                "Built private blockchain solutions for enterprises",
                "Set up and maintained Ethereum validator nodes"
              ].map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className="text-primary text-xl">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Languages & Technologies Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-8 gradient-text text-center">Languages & Technologies</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { name: "Solidity", color: "from-blue-500/20 to-purple-500/20" },
            { name: "JavaScript", color: "from-yellow-500/20 to-orange-500/20" },
            { name: "TypeScript", color: "from-blue-500/20 to-cyan-500/20" },
            { name: "Python", color: "from-blue-500/20 to-green-500/20" },
            { name: "React", color: "from-cyan-500/20 to-blue-500/20" },
            { name: "Node.js", color: "from-green-500/20 to-emerald-500/20" },
            { name: "Web3.js", color: "from-orange-500/20 to-red-500/20" },
            { name: "Hardhat", color: "from-yellow-500/20 to-amber-500/20" }
          ].map((tech, index) => (
            <Card 
              key={tech.name}
              className={`p-6 hover:scale-105 transition-all duration-300 cursor-default
                bg-gradient-to-br ${tech.color} hover:shadow-lg
                animate-slide-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-center font-semibold">{tech.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}