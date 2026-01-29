import { motion } from "framer-motion";
import { ArrowRight, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    icon: Zap,
    title: "New categories",
    subtitle: "National Common Mobility Card (NCMC) and National Pension Scheme (NPS)",
    description:
      "Will soon be supported on OMShrikanthfinance platform. Expand your bill payment options.",
    cta: "See all categories",
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    icon: Smartphone,
    title: "UPI 123Pay",
    subtitle: "Voice-based payment channel",
    description:
      "No smartphone? No problem. Introducing a voice-based payment channel for seamless transactions.",
    cta: "Learn more",
    gradient: "from-blue-500 to-cyan-400",
  },
];

const WhatsNewSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            What's <span className="gradient-text">new?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover the latest features and services on OMShrikanthfinance
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {newsItems.map((news) => {
            const Icon = news.icon;
            return (
              <motion.div
                key={news.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${news.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-3`}
                />

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${news.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-2xl font-semibold text-foreground">
                  {news.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-primary/70">
                  {news.subtitle}
                </p>
                <p className="mb-6 text-muted-foreground">
                  {news.description}
                </p>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="group/btn border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                >
                  {news.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>

                {/* Corner glow effect */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${news.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsNewSection;
