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

const Features = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-secondary/30">
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
            Funcionalidades <span className="gradient-text">Poderosas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para automatizar a venda de ingressos do seu evento
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold font-display mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl" style={{ background: "var(--gradient-glow)" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
