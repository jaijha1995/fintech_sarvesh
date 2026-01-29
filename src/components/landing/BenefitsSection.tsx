import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Plug,
  Clock,
  Shield,
  BarChart3,
  HeadsetIcon,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Reach your Customers easily",
    description:
      "Collect via our network of 700+ digital and 5+ lakh physical channels.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Zap,
    title: "Optimise the collection process",
    description:
      "Digitalise your collection process with us.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Plug,
    title: "One simple integration",
    description:
      "Go live on all OMShrikanthfinance enabled collection channels.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Clock,
    title: "Fast settlements",
    description:
      "Collect your dues faster than ever with multiple settlement cycles per day.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Shield,
    title: "Trusted platform",
    description:
      "Over 1.2 crore unique transactions for 25+ categories are routed via OMShrikanthfinance per month.",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    icon: BarChart3,
    title: "Access rich insights",
    description:
      "Discover your Customers' preferred payment channels, modes and other performance insights on the Biller dashboard.",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: Shield,
    title: "Secure system",
    description:
      "Operating at the highest compliance standards, regularly updated by the OMShrikanthfinance Central Unit.",
    gradient: "from-cyan-500 to-blue-400",
  },
  {
    icon: HeadsetIcon,
    title: "Complaints or refund requests?",
    description:
      "Get access to a centralised dispute management portal.",
    gradient: "from-pink-500 to-rose-400",
  },
];

const BenefitsSection = () => {
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
    <section className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
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
            Why Choose OMShrikanthfinance
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="gradient-text">Benefits</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            8+ crore Customers have used OMShrikanthfinance for bill payments
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-3`}
                />

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${benefit.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>

                {/* Corner glow effect */}
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${benefit.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
