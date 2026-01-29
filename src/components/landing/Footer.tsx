import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Company: [
    "About Us",
    "Careers",
    "Blog",
    "Press",
    "Partners",
  ],
  Legal: [
    "Terms & Conditions",
    "Privacy Policy",
    "Refund Policy",
    "User Policy",
    "Copyrights",
    "Cookies",
    "Account & Billing",
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-7">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <a href="#" className="mb-6 flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl gradient-primary" />
                <span className="text-2xl font-bold">OMShrikanthfinance</span>
              </a>

              <p className="mb-6 text-primary-foreground/70">
                India's leading bill payment platform connecting 700+ digital channels and 5 lakh+ physical outlets for seamless bill payments.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-5">
            {Object.entries(footerLinks).slice(0, 1).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="mb-4 font-semibold text-primary-foreground">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => {
                    let href = "#";
                    if (link === "About Us") href = "/about-us";
                    return (
                      <li key={link}>
                        <Link
                          to={href}
                          className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/60">
              © 2026 OMShrikanthfinance. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.Legal.map((link) => {
                let href = "/privacy-policy";
                if (link === "Terms & Conditions") href = "/privacy-policy#terms";
                if (link === "Privacy Policy") href = "/privacy-policy#privacy";
                if (link === "Refund Policy") href = "/privacy-policy#refund";
                if (link === "User Policy") href = "/privacy-policy#user";
                if (link === "Copyrights") href = "/privacy-policy#copyrights";
                if (link === "Cookies") href = "/privacy-policy#cookies";
                if (link === "Account & Billing") href = "/privacy-policy#billing";
                return (
                  <Link
                    key={link}
                    to={href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
