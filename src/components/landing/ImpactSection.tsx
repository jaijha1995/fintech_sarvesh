import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const impactStats = [
  {
    icon: Users,
    stat: "22,616",
    label: "Billers have joined OMShrikanthfinance",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: TrendingUp,
    stat: "70%",
    label: "Digital collections increase",
    description: "Power Corp case study",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Zap,
    stat: "52%",
    label: "Recurring payment reduction",
    description: "Power Corp case study",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const ImpactSection = () => {
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
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
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
            Real Results
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="gradient-text">Impact</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See how OMShrikanthfinance is transforming bill payments for businesses
          </p>
        </motion.div>

        {/* Impact Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {impactStats.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.stat}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-3`}
                />

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Stat */}
                <h3 className="mb-2 text-4xl font-bold text-foreground">
                  {item.stat}
                </h3>

                {/* Label */}
                <p className="mb-3 text-lg font-semibold text-foreground">
                  {item.label}
                </p>

                {/* Description */}
                {item.description && (
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}

                {/* Corner glow effect */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur-sm"
        >
          <h3 className="mb-4 text-2xl font-bold text-foreground">
            Ready to transform your bill collection?
          </h3>
          <p className="mb-8 max-w-md text-muted-foreground">
            Join thousands of billers who are already using OMShrikanthfinance to
            reach their customers wherever they prefer to pay.
          </p>
          <Button size="lg" className="group">
            Inquire now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
