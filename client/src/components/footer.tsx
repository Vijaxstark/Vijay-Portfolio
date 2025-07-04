import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[hsl(232,13%,12%)] py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[hsl(210,40%,89%)] mb-2">
            © 2024 Vijay Krishna R V. All rights reserved.
          </p>
          <p className="text-[hsl(210,40%,89%)] text-sm">
            Built with passion and precision.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
