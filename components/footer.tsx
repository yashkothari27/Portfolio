"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yash Kothari. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/yashkothari27"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/kyash27/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
} 