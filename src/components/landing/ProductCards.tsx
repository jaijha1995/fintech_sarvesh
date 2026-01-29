import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Home,
  Smartphone,
  Plane,
  DollarSign,
  Tv,
  Gamepad2,
  ArrowRight,
  Sparkles,
  Zap,
  Droplet,
  Building2,
  Flame,
  Percent,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mainCategories = [
  {
    id: "housing",
    icon: Home,
    title: "Housing & Utilities",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "communication",
    icon: Smartphone,
    title: "Communication",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: "travel",
    icon: Plane,
    title: "Travel",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: "finance",
    icon: DollarSign,
    title: "Finance",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: "entertainment",
    icon: Tv,
    title: "Entertainment",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    id: "leisure",
    icon: Gamepad2,
    title: "Leisure",
    gradient: "from-indigo-500 to-blue-400",
  },
];

const subcategories: Record<string, { icon: any; title: string; gradient: string }[]> = {
  housing: [
    { icon: Zap, title: "Electricity", gradient: "from-yellow-500 to-orange-400" },
    { icon: Flame, title: "LPG", gradient: "from-red-500 to-pink-400" },
    { icon: Droplet, title: "Water", gradient: "from-blue-400 to-cyan-300" },
    { icon: Building2, title: "Municipal Taxes", gradient: "from-slate-500 to-gray-400" },
    { icon: Home, title: "Housing Society Maintenance", gradient: "from-amber-500 to-yellow-400" },
    { icon: Flame, title: "Piped Gas", gradient: "from-orange-500 to-red-400" },
    { icon: DollarSign, title: "Rent", gradient: "from-green-500 to-emerald-400" },
    { icon: Percent, title: "Prepaid Meter", gradient: "from-indigo-500 to-purple-400" },
  ],
  communication: [
    { icon: Smartphone, title: "Mobile Prepaid", gradient: "from-blue-500 to-cyan-400" },
    { icon: Smartphone, title: "Mobile Postpaid", gradient: "from-purple-500 to-indigo-400" },
    { icon: Zap, title: "Landline Postpaid", gradient: "from-green-500 to-emerald-400" },
    { icon: Smartphone, title: "Broadband", gradient: "from-orange-500 to-yellow-400" },
  ],
  travel: [
    { icon: Plane, title: "FASTag", gradient: "from-yellow-500 to-orange-400" },
    { icon: Plane, title: "National Common Mobility Card (NCMC)", gradient: "from-blue-500 to-cyan-400" },
    { icon: Plane, title: "eChallan", gradient: "from-red-500 to-pink-400" },
    { icon: Plane, title: "EV Recharge", gradient: "from-green-500 to-emerald-400" },
  ],
  finance: [
    { icon: DollarSign, title: "Fleet Card Recharge", gradient: "from-indigo-500 to-blue-400" },
    { icon: DollarSign, title: "Forex", gradient: "from-orange-500 to-amber-400" },
    { icon: DollarSign, title: "Insurance Premium", gradient: "from-rose-500 to-pink-400" },
    { icon: DollarSign, title: "Loan EMI", gradient: "from-cyan-500 to-blue-400" },
  ],
  entertainment: [
    { icon: Tv, title: "DTH Recharge", gradient: "from-purple-500 to-indigo-400" },
    { icon: Tv, title: "Movie Tickets", gradient: "from-rose-500 to-pink-400" },
    { icon: Tv, title: "Streaming Services", gradient: "from-blue-500 to-cyan-400" },
    { icon: Tv, title: "Gaming", gradient: "from-amber-500 to-yellow-400" },
  ],
  leisure: [
    { icon: Gamepad2, title: "Online Gaming", gradient: "from-indigo-500 to-purple-400" },
    { icon: Gamepad2, title: "Fitness Memberships", gradient: "from-green-500 to-emerald-400" },
    { icon: Gamepad2, title: "Event Tickets", gradient: "from-orange-500 to-yellow-400" },
    { icon: Gamepad2, title: "Hobby Classes", gradient: "from-cyan-500 to-blue-400" },
  ],
};

const ProductCards = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">25+ Categories</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Pay your <span className="gradient-text">every bill</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            More categories coming soon.
          </p>
        </motion.div>

        {/* Main Categories Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8"
        >
          {mainCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                variants={cardVariants}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 p-6 text-left ${
                  selectedCategory === category.id
                    ? "border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${selectedCategory === category.id ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </div>

                {/* Corner glow effect */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${category.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Subcategories for selected category */}
        {selectedCategory && subcategories[selectedCategory]?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12"
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              {mainCategories.find(c => c.id === selectedCategory)?.title}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {subcategories[selectedCategory].map((subcategory, index) => {
                const SubIcon = subcategory.icon;
                return (
                  <motion.div
                    key={subcategory.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                  >
                    {/* Gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${subcategory.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                    />

                    {/* Icon */}
                    <div
                      className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${subcategory.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <SubIcon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h4 className="text-base font-semibold text-foreground flex items-center justify-between">
                      {subcategory.title}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>

                    {/* Corner glow effect */}
                    <div
                      className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${subcategory.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductCards;
