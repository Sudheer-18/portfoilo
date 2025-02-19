"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import router
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); // Initialize Next.js router

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId.toLowerCase());
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-foreground'
            }`}
          >
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground/80' : 'text-foreground/90'
                }`}
              >
                {item}
              </a>
            ))}
            <Button 
              variant={isScrolled ? "default" : "outline"} 
              className={!isScrolled ? "border-primary hover:bg-primary/10" : ""}
              onClick={() => router.push("/resume")}
            >
              Resume
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? '' : 'text-foreground'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item}
              </a>
            ))}
            <Button className="w-full mt-2" onClick={() => router.push("/resume")}>
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
