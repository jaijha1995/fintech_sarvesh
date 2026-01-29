import { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const contactCards = [
  {
    icon: MessageSquare,
    title: "Chat with us",
    description: "Get instant answers from our support team",
    cta: "Start chat",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Mail,
    title: "Email support",
    description: "Send us an email and we'll respond within 24 hours",
    cta: "Send email",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Speak directly with our experts",
    cta: "Schedule call",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const StackedContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // GSAP ScrollTrigger for stacking effect
  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".stack-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100 * (index + 1),
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/5 to-transparent" />
      </div>

      <div className="container relative mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Get in touch
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            We're here to{" "}
            <span className="gradient-text">help you succeed</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose how you'd like to connect with our team
          </p>
        </motion.div>

        {/* Stacked Cards */}
        <div ref={cardsRef} className="grid gap-6 lg:grid-cols-3">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="stack-card group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:shadow-card-hover hover:border-primary/20"
              style={{
                transformOrigin: "center bottom",
              }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} shadow-lg`}
              >
                <card.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mb-6 text-muted-foreground">{card.description}</p>

              <Button variant="gradient" className="group/btn">
                {card.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>

              {/* Corner glow */}
              <div
                className={`absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br ${card.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-12">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <h3 className="mb-2 text-2xl font-bold text-primary-foreground md:text-3xl">
                  Ready to get started?
                </h3>
                <p className="text-primary-foreground/80">
                  Create your account in minutes and start accepting payments today.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg">
                  Start free trial
                </Button>
                <Button variant="heroOutline" size="lg">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StackedContactSection;
