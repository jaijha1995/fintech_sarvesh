import { motion } from "framer-motion";

const logos = [
  "TechCorp",
  "GlobalPay",
  "CloudFirst",
  "DataFlow",
  "SecureBank",
  "FastTrack",
  "NeoCommerce",
  "SmartBiz",
  "PayEase",
  "FinanceHub",
];

const trustStatements = [
  "Trusted by Fortune 500 companies",
  "99.99% uptime guaranteed",
  "PCI DSS Level 1 certified",
  "24/7 dedicated support",
  "SOC 2 Type II compliant",
  "ISO 27001 certified",
  "$500B+ processed annually",
  "180+ countries supported",
];

const MarqueeSection = () => {
  return (
    <section className="section-padding overflow-hidden bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-lg font-semibold text-muted-foreground">
            Trusted by industry leaders worldwide
          </h2>
        </motion.div>
      </div>

      {/* Logo Marquee */}
      <div className="relative mb-12">
        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex shrink-0 items-center gap-16 pr-16"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-12 w-40 items-center justify-center rounded-lg bg-secondary/50 px-6 font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trust Statements Marquee - Opposite Direction */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", 0] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex shrink-0 items-center gap-8 pr-8"
          >
            {[...trustStatements, ...trustStatements].map((statement, index) => (
              <div
                key={`${statement}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card px-6 py-3 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
              >
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="text-sm font-medium text-foreground">
                  {statement}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
