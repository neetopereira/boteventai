import { motion } from "framer-motion";
import { MessageSquare, Bot, CreditCard, CheckCircle, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Usuário chama o WhatsApp",
    description: "Cliente envia mensagem para seu número e é atendido instantaneamente",
    color: "hsl(142 70% 45%)",
  },
  {
    icon: Bot,
    title: "Bot apresenta opções",
    description: "Menu inteligente com eventos, lotes e informações disponíveis",
    color: "hsl(322 80% 55%)",
  },
  {
    icon: CreditCard,
    title: "Pagamento PIX automático",
    description: "QR Code gerado na hora, pagamento confirmado em segundos",
    color: "hsl(280 70% 50%)",
  },
  {
    icon: CheckCircle,
    title: "Ingresso digital enviado",
    description: "Comprovante e ingresso entregues automaticamente no chat",
    color: "hsl(200 80% 50%)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
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
            Processo Simples
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Da primeira mensagem ao ingresso na mão — tudo automático em segundos
          </p>
        </motion.div>

        {/* Steps - Mobile: Vertical, Desktop: Horizontal */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Connection line - Desktop */}
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Card */}
                <motion.div
                  className="relative card-gradient rounded-2xl p-6 border border-border h-full group"
                  whileHover={{ 
                    y: -8, 
                    borderColor: "hsl(322 80% 55% / 0.5)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Step number badge */}
                  <motion.div
                    className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold font-display text-sm text-primary-foreground shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mt-2"
                    style={{ background: `${step.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </motion.div>

                  <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>

                  {/* Glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl"
                    style={{ background: `${step.color}20` }}
                  />
                </motion.div>

                {/* Arrow between cards - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-primary/50" />
                    </motion.div>
                  </div>
                )}

                {/* Arrow between cards - Mobile */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="flex lg:hidden justify-center my-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <ArrowDown className="w-5 h-5 text-primary/50" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
