"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MenuIcon, XIcon } from "lucide-react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      scrolled && "shadow-sm"
    )}>
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl gradient-text">
          YK
        </Link>

        <div className="hidden md:flex md:gap-x-8 md:items-center">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary relative py-1.5",
                pathname === route.href
                  ? "text-primary"
                  : "text-foreground/60",
                pathname === route.href &&
                  "after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full after:transition-transform after:duration-300"
              )}
            >
              {route.label}
            </Link>
          ))}
          <ModeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </Button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b md:hidden animate-slide-up">
            <nav className="container py-6 flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 hover:text-primary px-4 py-2 rounded-lg",
                    pathname === route.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground/60"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}