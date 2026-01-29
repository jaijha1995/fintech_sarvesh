import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactCards = [
  {
    icon: MessageSquare,
    title: "Chat with us",
    description: "Get instant answers from our support team",
    cta: "Start chat",
  },
  {
    icon: Mail,
    title: "Email support",
    description: "Send us an email and we'll respond within 24 hours",
    cta: "Send email",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Speak directly with our experts",
    cta: "Schedule call",
  },
];

const DeveloperSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container relative mx-auto container-padding">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              We're here to help you succeed
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Choose how you'd like to connect with our team
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/50 to-accent/50">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary-foreground">
                  {card.title}
                </h3>
                <p className="mb-6 text-primary-foreground/70">
                  {card.description}
                </p>
                <Button
                  variant="outline"
                  className="group border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  {card.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
