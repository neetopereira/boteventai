import { motion } from "framer-motion";
import { Clock, UserX, AlertTriangle, Users, Eye, Trophy } from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "Funciona 24/7",
    description: "Vendas acontecem mesmo quando você está dormindo",
    highlight: true,
  },
  {
    icon: UserX,
    title: "Elimina Atendimento Manual",
    description: "Sem precisar de equipe para responder mensagens",
    highlight: false,
  },
  {
    icon: AlertTriangle,
    title: "Reduz Erros Humanos",
    description: "Sem confusão de lotes, valores ou informações",
    highlight: false,
  },
  {
    icon: Users,
    title: "Escala para Milhares",
    description: "Atenda 10 ou 10.000 pessoas ao mesmo tempo",
    highlight: true,
  },
  {
    icon: Eye,
    title: "Visual Profissional",
    description: "Seu evento transmite credibilidade desde o primeiro contato",
    highlight: false,
  },
  {
    icon: Trophy,
    title: "Pronto para Grandes Eventos",
    description: "Infraestrutura que não trava em dias de pico",
    highlight: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.7,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "var(--gradient-glow)" }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            Vantagens Exclusivas
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Por que <span className="gradient-text">Este Bot?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem a diferença na hora de vender seus ingressos
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
            >
              <motion.div
                className={`h-full p-6 rounded-2xl border transition-colors duration-300 ${
                  item.highlight
                    ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30"
                    : "card-gradient border-border"
                }`}
                whileHover={{ 
                  y: -10,
                  borderColor: item.highlight ? "hsl(322 80% 55% / 0.7)" : "hsl(322 80% 55% / 0.4)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    item.highlight ? "bg-primary/20" : "bg-muted"
                  }`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: item.highlight ? -10 : 10,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <item.icon className={`w-7 h-7 ${item.highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"}`} />
                </motion.div>
                <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>

                {/* Highlight badge */}
                {item.highlight && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    <span className="text-xs">✦</span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/50"
            whileHover={{ scale: 1.05, borderColor: "hsl(322 80% 55% / 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-sm"
                  style={{ background: `hsl(${322 + i * 30} 60% ${45 + i * 10}%)` }}
                  initial={{ scale: 0, x: 20 }}
                  whileInView={{ scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                >
                  {["🎵", "🎭", "🎪"][i]}
                </motion.div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Utilizado por produtores de eventos em todo Brasil
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;
