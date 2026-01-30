import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{ background: "var(--gradient-primary)", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{ background: "hsl(280 70% 50%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Sparkle badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Comece agora mesmo</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Pronto para{" "}
            <span className="gradient-text">Automatizar</span>
            <br />
            seu Evento?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Pare de perder vendas com atendimento manual. 
            Deixe a tecnologia trabalhar por você enquanto foca no que importa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group px-8 py-7 text-lg font-semibold glow-effect w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com o Bot no WhatsApp
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-7 text-lg font-semibold border-border hover:bg-secondary w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Solicitar Demonstração
            </Button>
          </div>

          {/* Trust text */}
          <motion.p
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            ✓ Sem compromisso &nbsp;&nbsp; ✓ Resposta em minutos &nbsp;&nbsp; ✓ Setup rápido
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
