import React, { useState } from "react";
import { Outlet } from "react-router";
import { Button, Menu } from "@mui/material";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MenuIcon,
  Phone,
  Play,
  Twitter,
  X,
} from "lucide-react";

import { Link } from "react-router";
import { motion } from "framer-motion";
const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const footerLinks = {
    platform: [
      { name: "Асоси", href: "/" },
      { name: "Ихтисосҳо", href: "/careers" },
      { name: "Дараҷабанди", href: "/my-apprankings" },
      { name: "Дарбораи мо", href: "/about" },
    ],
  };
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[30px] text-[blue]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                        />
                      </svg>
                    </span>
                    <span className="font-bold text-2xl text-foreground">
                      Ихтисоси ман
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link
                    to="/"
                    className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Асоси
                  </Link>
                  <Link
                    to="/careers"
                    className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Ихтисосҳо
                  </Link>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Дар бораи мо
                  </Link>
                </div>
              </div>

              <div className="hidden md:block">
                <Button variant="contained">Шуруъ кардан</Button>
              </div>

              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-[20px] w-[20px] text-[grey]" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          <div>
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
                  <Link
                    href="/"
                    className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="#specialties"
                    className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                  >
                    Ихтисосҳо
                  </Link>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                  >
                    Дар бораи мо
                  </Link>
                  <div className="pt-4 pb-3 border-t border-border">
                    <div className="flex items-center px-3 space-x-3">
                      <Button className="w-full">Шуруъ кардан</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="relative py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[blue]">Ихтисоси Ман</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Дастгирии донишҷӯён ва ҷӯяндагони кор дар Тоҷикистон барои
                ёфтани роҳи беҳтари касбӣ бо истифода аз маълумоти таҳлилӣ ва
                роҳнамоиҳои ҳамаҷониба.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Душанбе,Тоҷикистон
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    +992 123 456 789
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    info@ихтисосиМан.tj
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Платформа
              </h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-muted-foreground text-sm">
              © 2025 Ихтисоси ман. Ҳамаи ҳуқуқҳо ҳифз шудаанд..
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      </footer>
    </div>
  );
};

export default Layout;
