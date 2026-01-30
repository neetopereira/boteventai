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

const Trust = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "var(--gradient-glow)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
              Tecnologia <span className="gradient-text">Pensada</span>
              <br />para Eventos Reais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não é um projeto genérico. É uma solução especializada, 
              construída por quem entende os desafios de vender ingressos.
            </p>
          </div>

          {/* Trust points */}
          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <point.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-display mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="mt-16 p-8 rounded-2xl card-gradient border border-border text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl font-display text-muted-foreground italic mb-4">
              "A melhor tecnologia é aquela que você não percebe — 
              ela simplesmente funciona."
            </p>
            <p className="text-sm text-primary font-semibold">— Filosofia do Produto</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
