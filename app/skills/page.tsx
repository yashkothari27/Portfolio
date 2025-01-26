import { Card } from "@/components/ui/card";
import { 
  Circle,
  Code,
  Wrench
} from "lucide-react";

const skills = {
  Blockchain: {
    icon: <Circle className="h-8 w-8 text-primary" />,
    description: "Expertise in blockchain development and smart contract implementation",
    skills: [
      { 
        name: "Solidity", 
        level: 95, 
        color: "from-[#6E56CF] via-primary to-[#7B61FF]" 
      },
      { 
        name: "Web3.js", 
        level: 90, 
        color: "from-[#7B61FF] via-primary to-[#6E56CF]" 
      },
      { 
        name: "Ethereum", 
        level: 92, 
        color: "from-[#6E56CF] via-[#7B61FF] to-primary" 
      },
      { 
        name: "Smart Contracts", 
        level: 95, 
        color: "from-primary via-[#6E56CF] to-[#7B61FF]" 
      },
    ]
  },
  "Web Development": {
    icon: <Code className="h-8 w-8 text-primary" />,
    description: "Full-stack development with modern frameworks and technologies",
    skills: [
      { 
        name: "JavaScript", 
        level: 90, 
        color: "from-[#6E56CF] via-primary to-[#7B61FF]" 
      },
      { 
        name: "TypeScript", 
        level: 85, 
        color: "from-[#7B61FF] via-primary to-[#6E56CF]" 
      },
      { 
        name: "React", 
        level: 88, 
        color: "from-[#6E56CF] via-[#7B61FF] to-primary" 
      },
      { 
        name: "Node.js", 
        level: 85, 
        color: "from-primary via-[#6E56CF] to-[#7B61FF]" 
      },
    ]
  },
  Tools: {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    description: "Proficiency in development tools and deployment platforms",
    skills: [
      { 
        name: "Hardhat", 
        level: 90, 
        color: "from-[#6E56CF] via-primary to-[#7B61FF]" 
      },
      { 
        name: "Truffle", 
        level: 85, 
        color: "from-[#7B61FF] via-primary to-[#6E56CF]" 
      },
      { 
        name: "Git", 
        level: 88, 
        color: "from-[#6E56CF] via-[#7B61FF] to-primary" 
      },
      { 
        name: "Docker", 
        level: 80, 
        color: "from-primary via-[#6E56CF] to-[#7B61FF]" 
      },
    ]
  },
};

export default function Skills() {
  return (
    <div className="container py-12 space-y-16 animate-fade-in">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold gradient-text animate-title-slide">Skills & Expertise</h1>
        <p className="text-muted-foreground text-lg max-w-2xl animate-slide-up">
          A comprehensive overview of my technical expertise and proficiency levels in blockchain and web development.
        </p>
      </div>

      <div className="grid gap-8">
        {Object.entries(skills).map(([category, { icon, description, skills: skillList }], categoryIdx) => (
          <Card 
            key={category} 
            className="p-8 hover:shadow-xl transition-all duration-500 animate-slide-up bg-gradient-to-br from-background via-background to-primary/5 group"
            style={{ animationDelay: `${categoryIdx * 200}ms` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                {icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold gradient-text">{category}</h2>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {skillList.map((skill, idx) => (
                <div 
                  key={skill.name}
                  className="animate-slide-up group/skill"
                  style={{ animationDelay: `${(categoryIdx * 4 + idx) * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover/skill:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground group-hover/skill:text-primary transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                    <div 
                      className={`absolute h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out
                        group-hover/skill:shadow-lg group-hover/skill:shadow-primary/20 skill-bar`}
                      style={{ 
                        width: `${skill.level}%`,
                        filter: 'saturate(1.2) brightness(1.1)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}