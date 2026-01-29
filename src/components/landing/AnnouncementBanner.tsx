import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift"
    >
      <div className="container-padding mx-auto flex items-center justify-center gap-2 py-2.5 text-sm text-primary-foreground">
        <Sparkles className="h-4 w-4" />
        <span className="font-medium">
          Introducing the next generation of payment solutions
        </span>
        <a
          href="#"
          className="ml-2 inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline"
        >
          Learn more
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default AnnouncementBanner;
