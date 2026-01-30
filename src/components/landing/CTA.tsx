import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{ background: "var(--gradient-primary)", filter: "blur(100px)" }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{ background: "hsl(280 70% 50%)", filter: "blur(80px)" }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Sparkle badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-primary font-medium">Comece agora mesmo</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Pronto para{" "}
            <motion.span 
              className="gradient-text inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Automatizar
            </motion.span>
            <br />
            seu Evento?
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Pare de perder vendas com atendimento manual. 
            Deixe a tecnologia trabalhar por você enquanto foca no que importa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="group px-8 py-7 text-lg font-semibold glow-effect w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com o Bot no WhatsApp
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-7 text-lg font-semibold border-border hover:bg-secondary hover:border-primary/30 w-full sm:w-auto transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Solicitar Demonstração
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust text */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            {[
              "Sem compromisso",
              "Resposta em minutos",
              "Setup rápido",
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                >
                  <span className="text-primary text-xs">✓</span>
                </motion.div>
                {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
