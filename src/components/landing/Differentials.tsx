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

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-secondary/30">
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
            Por que <span className="gradient-text">Este Bot?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem a diferença na hora de vender seus ingressos
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:border-primary/50"
                    : "card-gradient border-border hover:border-primary/30"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.highlight ? "bg-primary/20" : "bg-muted"
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${item.highlight ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="text-lg font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/50">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-sm"
                  style={{ background: `hsl(${322 + i * 30} 60% ${45 + i * 10}%)` }}
                >
                  {["🎵", "🎭", "🎪"][i]}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Utilizado por produtores de eventos em todo Brasil
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;
