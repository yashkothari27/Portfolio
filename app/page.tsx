import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container min-h-screen py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div className="space-y-6">
          <div className="space-y-4 stagger-animation">
            <p className="text-primary font-medium animate-fade-in">Hi there, I'm</p>
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text animate-title-slide">
                Yash Kothari
              </h1>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground/90">
              Blockchain Developer & Web3 Enthusiast
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Crafting the future of decentralized systems with innovative solutions and secure smart contracts
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="group animate-scale-up">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="animate-scale-up">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.linkedin.com/in/kyash27/" target="_blank">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://github.com/yashkothari27" target="_blank">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-square animate-float">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-3xl animate-pulse" />
            <Image
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
              alt="Blockchain Technology"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/80 to-background/0" />
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Expertise</h2>
        <div className="grid gap-8 md:grid-cols-3 stagger-animation">
          <Card className="p-8 card-hover group">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
              Blockchain Development
            </h3>
            <p className="text-muted-foreground">
              Specialized in Ethereum ecosystem, building secure smart contracts and DeFi protocols
            </p>
          </Card>
          <Card className="p-8 card-hover">
            <h3 className="text-xl font-semibold mb-4">Web3 Architecture</h3>
            <p className="text-muted-foreground">
              Designing and implementing scalable decentralized applications
            </p>
          </Card>
          <Card className="p-8 card-hover">
            <h3 className="text-xl font-semibold mb-4">Smart Contract Security</h3>
            <p className="text-muted-foreground">
              Auditing and securing blockchain applications against vulnerabilities
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}