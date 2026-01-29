import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Accept payments in seconds",
    description:
      "Integrate our payment gateway with just a few lines of code. Support for all major payment methods out of the box.",
    points: [
      "100+ payment methods supported",
      "Real-time payment tracking",
      "Automatic reconciliation",
      "Multi-currency support",
    ],
    image: "gradient-primary",
    reverse: false,
  },
  {
    title: "Enterprise-grade security",
    description:
      "PCI DSS Level 1 certified with advanced fraud detection. Your data and your customers' data are always protected.",
    points: [
      "PCI DSS Level 1 certified",
      "AI-powered fraud detection",
      "End-to-end encryption",
      "24/7 monitoring",
    ],
    image: "gradient-primary",
    reverse: false,
  },
];

const FeatureSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Features
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Why businesses{" "}
            <span className="gradient-text">choose us</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We provide the tools and infrastructure to help you build, scale, and succeed.
          </p>
        </motion.div>

        {/* Feature Blocks */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureBlockProps {
  feature: (typeof features)[0];
  index: number;
}

const FeatureBlock = ({ feature, index }: FeatureBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
        feature.reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: feature.reverse ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1"
      >
        <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          {feature.title}
        </h3>
        <p className="mb-8 text-lg text-muted-foreground">
          {feature.description}
        </p>

        <ul className="mb-8 space-y-3">
          {feature.points.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-foreground">{point}</span>
            </li>
          ))}
        </ul>

        <Button variant="gradient" size="lg" className="group">
          Get started
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>

      {/* Visual */}
      <motion.div
        style={{ y }}
        className="flex-1"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Main card */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-primary shadow-2xl">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Floating elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-8">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-20 w-full rounded-xl bg-white/20 backdrop-blur-sm"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -right-8 -top-8 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureSection;
