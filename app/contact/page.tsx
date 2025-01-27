"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kothariyash2711@gmail.com', // Add your email here
        }
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-12 space-y-16 animate-fade-in">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold gradient-text animate-title-slide">Get in Touch</h1>
        <p className="text-muted-foreground text-lg max-w-2xl animate-slide-up">
          Have a project in mind? Let&apos;s discuss how we can work together.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center gap-2">
                Sending... <span className="animate-spin">⏳</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>

        <div className="space-y-6">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">kothariyash2711@gmail.com</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Social Media</h3>
                <div className="flex gap-4 mt-2">
                  <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
                    <a href="https://www.linkedin.com/in/kyash27/" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
                    <a href="https://github.com/yashkothari27" target="_blank">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}