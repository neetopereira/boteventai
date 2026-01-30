import { motion } from "framer-motion";
import { Server, Lock, Gauge } from "lucide-react";

const trustPoints = [
  {
    icon: Server,
    title: "Arquitetura Robusta",
    description: "Infraestrutura em nuvem com redundância e alta disponibilidade",
  },
  {
    icon: Lock,
    title: "Segurança de Ponta",
    description: "Criptografia end-to-end e proteção de dados em conformidade com LGPD",
  },
  {
    icon: Gauge,
    title: "Alto Volume",
    description: "Desenvolvido para suportar milhares de requisições simultâneas",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const Trust = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "var(--gradient-glow)" }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Confiança & Tecnologia
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
              Tecnologia <span className="gradient-text">Pensada</span>
              <br />para Eventos Reais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não é um projeto genérico. É uma solução especializada, 
              construída por quem entende os desafios de vender ingressos.
            </p>
          </motion.div>

          {/* Trust points */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 border border-primary/20"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    borderColor: "hsl(322 80% 55% / 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: -10 }}
                  >
                    <point.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold font-display mb-3 group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            className="mt-20 p-8 rounded-2xl card-gradient border border-border text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            whileHover={{ borderColor: "hsl(322 80% 55% / 0.3)" }}
          >
            {/* Decorative quotes */}
            <motion.div
              className="absolute top-4 left-6 text-6xl text-primary/10 font-serif"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              "
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-6 text-6xl text-primary/10 font-serif rotate-180"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              "
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl font-display text-foreground/80 italic mb-4 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              A melhor tecnologia é aquela que você não percebe — 
              ela simplesmente funciona.
            </motion.p>
            <motion.p 
              className="text-sm text-primary font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              — Filosofia do Produto
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
