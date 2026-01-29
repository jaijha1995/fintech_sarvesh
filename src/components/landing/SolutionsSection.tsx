import { motion } from "framer-motion";
import { Plug, Cog, BarChart3, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Plug,
    title: "OMShrikanthfinance Platform",
    description:
      "One simple integration to go live on all OMShrikanthfinance enabled collection channels.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description:
      "OMShrikanthfinance offers custom tech solutions to integrate every kind of Biller.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Zap,
    title: "UPMS",
    description:
      "Optimise recurring payments for your Customers with auto-reminders, auto-debit mandates and elimination of repeat reminders from other live channels.",
    gradient: "from-emerald-500 to-teal-400",
    cta: "Learn more",
  },
  {
    icon: BarChart3,
    title: "Biller Dashboard",
    description:
      "Discover rich insights like your business performance, Operating Units' performance, Customers' preferred payment modes, channels and more.",
    gradient: "from-orange-500 to-amber-400",
    badge: "Coming soon",
  },
];

const SolutionsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
          <p className="mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            What's in it for Billers?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive solutions to streamline your bill collection process
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                {/* Badge */}
                {solution.badge && (
                  <div className="absolute right-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 border border-amber-500/20">
                      {solution.badge}
                    </span>
                  </div>
                )}

                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-3`}
                />

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${solution.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-semibold text-foreground">
                  {solution.title}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {solution.description}
                </p>

                {/* CTA Button */}
                {solution.cta && (
                  <Button
                    variant="outline"
                    className="group/btn border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                )}

                {/* Corner glow effect */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${solution.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* See all solutions button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button className="group" size="lg">
            See all solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
