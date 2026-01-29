import { motion } from "framer-motion";
import { Zap, Code, Link2, BarChart3, CheckCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const services = [
  {
    icon: Zap,
    title: "Technology Consulting",
    description:
      "We analyze your business needs and provide expert guidance on selecting the right technology stack, architecture, and development roadmap aligned with your goals.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "From Fintech and Travel platforms to ERP, School Management, Billing and BBPS systems — we build secure, scalable, and custom digital solutions tailored to your business.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Link2,
    title: "API & System Integration",
    description:
      "We integrate Banking APIs, Payment Gateways, Travel APIs, BBPS, UPI, AEPS, and enterprise software to create seamless and automated workflows.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Support",
    description:
      "We provide 24/7 monitoring, SLA‑based support, regular updates, and performance optimization to ensure your systems run smoothly at scale.",
    gradient: "from-orange-500 to-amber-400",
  },
];

const steps = [
  {
    number: "01",
    title: "Establish the Outlet",
    description:
      "Choose a strategic location for your outlet that is accessible to your target customers. Ensure the physical setup includes all necessary equipment such as computers, secure internet connections, and payment processing terminals.",
  },
  {
    number: "02",
    title: "Implement KYC Procedures",
    description:
      "Establish a KYC framework in accordance with local regulations. This usually includes collecting and verifying personal identification details from customers, such as government-issued ID, address proof, and possibly biometric data.",
  },
  {
    number: "03",
    title: "Start Transactions",
    description:
      "Integrate a transaction management system that can handle bill payments securely and efficiently. This system should be able to track all transactions, issue receipts, and support reconciliation processes with billers.",
  },
];

const AboutUs = () => {
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
    <div className="min-h-screen overflow-x-hidden">
      <div className="gradient-hero">
        <Navbar />

        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                <span className="gradient-text">About OMShrikanthfinance</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                We are a leading technology provider delivering innovative solutions in Travel
                Platforms, Fintech Services, ERP Development, School Management Systems, Billing
                & GST Software, and BBPS Software. Our mission is to empower businesses with
                secure, scalable, and future-ready digital products designed to streamline
                operations and accelerate growth.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive solutions to power your business transformation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-3`}
                  />

                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  <div
                    className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              How It <span className="gradient-text">Works?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need on creating a business process.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="relative"
              >
                <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300">
                  {/* Step Number */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Step Title */}
                  <h3 className="mb-4 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mb-6 text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Checkmark */}
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-20 hidden h-1 w-8 bg-gradient-to-r from-primary/50 to-transparent md:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="container relative mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card/50 p-12 text-center backdrop-blur-sm"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join thousands of businesses using OMShrikanthfinance to streamline their operations
              and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
