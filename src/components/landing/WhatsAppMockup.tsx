import { motion, useInView } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";
import { useRef } from "react";

const messages = [
  {
    type: "user",
    text: "Oi! Quero comprar ingresso pro show",
    time: "19:42",
  },
  {
    type: "bot",
    text: "Olá! 🎉 Seja bem-vindo! Temos ingressos disponíveis para:",
    time: "19:42",
  },
  {
    type: "bot",
    text: "🎫 Festival de Verão 2025\n📅 15 de Março\n📍 Arena Central\n\n💰 Lote Atual: R$ 89,00\n\nDeseja garantir seu ingresso?",
    time: "19:42",
    buttons: ["✅ Sim, quero comprar", "📋 Ver outros eventos"],
  },
  {
    type: "user",
    text: "✅ Sim, quero comprar",
    time: "19:43",
  },
  {
    type: "bot",
    text: "Perfeito! 🎟️ Aqui está seu PIX:\n\n💳 Valor: R$ 89,00\n⏱️ Validade: 15 minutos\n\n[QR CODE PIX]\n\nApós o pagamento, seu ingresso será enviado automaticamente!",
    time: "19:43",
    showPix: true,
  },
  {
    type: "bot",
    text: "✅ Pagamento confirmado!\n\n🎫 Seu ingresso está pronto:\n\n[INGRESSO DIGITAL]\n\nApresente este QR Code na entrada do evento. Bom show! 🎉",
    time: "19:44",
    showTicket: true,
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

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const messageVariants = {
  hidden: (type: string) => ({
    opacity: 0,
    x: type === "user" ? 50 : -50,
    scale: 0.8,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
    },
  },
};

const WhatsAppMockup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "var(--gradient-glow)", opacity: 0.3 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-whatsapp/10 text-green-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Demo Interativa
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
              Experiência <span className="gradient-text">Fluida</span>
              <br />no WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Veja como seu cliente compra um ingresso em segundos, 
              diretamente pelo WhatsApp, sem baixar apps ou preencher formulários.
            </p>

            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Respostas instantâneas e personalizadas",
                "Botões interativos para navegação fácil",
                "PIX gerado automaticamente",
                "Ingresso digital enviado no chat",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 group"
                  variants={listItemVariants}
                >
                  <motion.div 
                    className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.2, backgroundColor: "hsl(322 80% 55% / 0.4)" }}
                  >
                    <Check className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Phone frame */}
                <motion.div 
                  className="bg-card rounded-[3rem] p-3 shadow-2xl border border-border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Screen */}
                  <div className="bg-background rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-secondary px-6 py-2 flex justify-between items-center text-xs text-muted-foreground">
                      <span>19:44</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                        <div className="w-6 h-2 bg-primary rounded-sm" />
                      </div>
                    </div>

                    {/* WhatsApp header */}
                    <div className="bg-secondary px-4 py-3 flex items-center gap-3 border-b border-border">
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-lg">🎫</span>
                      </motion.div>
                      <div>
                        <div className="font-semibold text-sm">Bot de Eventos</div>
                        <motion.div 
                          className="flex items-center gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-xs text-green-400">online</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-[#0a0a0b]">
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                          custom={message.type}
                          variants={messageVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          transition={{ delay: index * 0.2 }}
                        >
                          <motion.div
                            className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                              message.type === "user"
                                ? "bg-whatsapp-bubble-user text-foreground rounded-br-md"
                                : "bg-whatsapp-bubble-bot text-foreground rounded-bl-md"
                            }`}
                            whileHover={{ scale: 1.02 }}
                          >
                            <p className="text-sm whitespace-pre-line">{message.text}</p>
                            
                            {message.showPix && (
                              <motion.div 
                                className="mt-3 p-3 bg-background/50 rounded-lg text-center"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                              >
                                <div className="w-24 h-24 mx-auto bg-foreground rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                                  <motion.div 
                                    className="w-20 h-20 bg-background rounded grid grid-cols-4 gap-px p-1"
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                  >
                                    {[...Array(16)].map((_, i) => (
                                      <div key={i} className={`${Math.random() > 0.5 ? 'bg-foreground' : 'bg-background'}`} />
                                    ))}
                                  </motion.div>
                                </div>
                                <span className="text-xs text-muted-foreground">Escaneie o QR Code</span>
                              </motion.div>
                            )}

                            {message.showTicket && (
                              <motion.div 
                                className="mt-3 p-3 bg-primary/20 rounded-lg text-center border border-primary/30"
                                initial={{ opacity: 0, rotateX: 90 }}
                                animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
                                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                              >
                                <motion.div 
                                  className="text-2xl mb-1"
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >
                                  🎫
                                </motion.div>
                                <div className="text-xs font-semibold">INGRESSO DIGITAL</div>
                                <div className="text-[10px] text-muted-foreground mt-1">#EVT2025-00847</div>
                              </motion.div>
                            )}

                            {message.buttons && (
                              <div className="mt-2 space-y-2">
                                {message.buttons.map((btn, btnIndex) => (
                                  <motion.div
                                    key={btnIndex}
                                    className="text-center py-2 px-3 bg-background/30 rounded-lg text-xs text-primary border border-primary/30 cursor-pointer"
                                    whileHover={{ 
                                      scale: 1.05, 
                                      backgroundColor: "hsl(322 80% 55% / 0.2)",
                                      borderColor: "hsl(322 80% 55% / 0.5)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    {btn}
                                  </motion.div>
                                ))}
                              </div>
                            )}

                            <div className={`flex items-center gap-1 mt-1 ${message.type === "user" ? "justify-end" : ""}`}>
                              <span className="text-[10px] text-muted-foreground">{message.time}</span>
                              {message.type === "user" && (
                                <CheckCheck className="w-3 h-3 text-primary" />
                              )}
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Input bar */}
                    <div className="bg-secondary px-4 py-3 flex items-center gap-3 border-t border-border">
                      <div className="flex-1 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground">
                        Digite uma mensagem
                      </div>
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppMockup;
