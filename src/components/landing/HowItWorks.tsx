import { motion } from "framer-motion";
import { MessageSquare, Bot, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

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

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Da primeira mensagem ao ingresso na mão — tudo automático em segundos
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${step.color}20` }}
                      >
                        <step.icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold font-display mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step number */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold font-display text-primary hidden md:flex">
                  {index + 1}
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Arrow at bottom */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
