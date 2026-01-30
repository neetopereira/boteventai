import { motion } from "framer-motion";
import {
  Bot,
  Ticket,
  Banknote,
  FileCheck,
  BarChart3,
  Shield,
  Zap,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Atendimento Automatizado",
    description: "WhatsApp inteligente que responde instantaneamente, 24 horas por dia",
  },
  {
    icon: Ticket,
    title: "Venda de Ingressos 100% Automática",
    description: "Do interesse à compra sem intervenção humana",
  },
  {
    icon: Banknote,
    title: "Geração de PIX Instantânea",
    description: "QR Code único gerado em segundos para cada transação",
  },
  {
    icon: FileCheck,
    title: "Envio Automático de Comprovantes",
    description: "Ingresso digital entregue imediatamente após confirmação",
  },
  {
    icon: BarChart3,
    title: "Controle de Pedidos e Status",
    description: "Painel completo com todas as vendas em tempo real",
  },
  {
    icon: Shield,
    title: "Segurança e Confiabilidade",
    description: "Infraestrutura robusta com criptografia de ponta",
  },
  {
    icon: Zap,
    title: "Alta Performance em Pico",
    description: "Suporta milhares de acessos simultâneos sem travar",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Nunca perde uma venda, mesmo de madrugada",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.8,
    rotateX: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const Features = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-20"
          style={{ background: "var(--gradient-primary)", filter: "blur(80px)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full opacity-20"
          style={{ background: "hsl(280 70% 50%)", filter: "blur(80px)" }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
            Recursos Completos
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Funcionalidades <span className="gradient-text">Poderosas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para automatizar a venda de ingressos do seu evento
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative perspective-1000"
              variants={cardVariants}
            >
              <motion.div 
                className="h-full card-gradient rounded-2xl p-6 border border-border transition-colors duration-300"
                whileHover={{ 
                  y: -12,
                  borderColor: "hsl(322 80% 55% / 0.5)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    background: "hsl(322 80% 55% / 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>

                {/* Hover glow effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ 
                    background: "radial-gradient(ellipse at 50% 0%, hsl(322 80% 55% / 0.15) 0%, transparent 60%)",
                    filter: "blur(20px)"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
