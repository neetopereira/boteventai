import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";

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

const WhatsAppMockup = () => {
  return (
    <section id="demo" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
              Experiência <span className="gradient-text">Fluida</span>
              <br />no WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Veja como seu cliente compra um ingresso em segundos, 
              diretamente pelo WhatsApp, sem baixar apps ou preencher formulários.
            </p>

            <ul className="space-y-4">
              {[
                "Respostas instantâneas e personalizadas",
                "Botões interativos para navegação fácil",
                "PIX gerado automaticamente",
                "Ingresso digital enviado no chat",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="bg-card rounded-[3rem] p-3 shadow-2xl border border-border">
                {/* Screen */}
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-whatsapp-bubble-bot px-6 py-2 flex justify-between items-center text-xs text-muted-foreground">
                    <span>19:44</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-6 h-2 bg-primary rounded-sm" />
                    </div>
                  </div>

                  {/* WhatsApp header */}
                  <div className="bg-secondary px-4 py-3 flex items-center gap-3 border-b border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg">🎫</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Bot de Eventos</div>
                      <div className="text-xs text-muted-foreground">online</div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-[#0a0a0b]">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                            message.type === "user"
                              ? "bg-whatsapp-bubble-user text-foreground rounded-br-md"
                              : "bg-whatsapp-bubble-bot text-foreground rounded-bl-md"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          
                          {message.showPix && (
                            <div className="mt-3 p-3 bg-background/50 rounded-lg text-center">
                              <div className="w-24 h-24 mx-auto bg-foreground rounded-lg mb-2 flex items-center justify-center">
                                <div className="w-20 h-20 bg-background rounded grid grid-cols-4 gap-px p-1">
                                  {[...Array(16)].map((_, i) => (
                                    <div key={i} className={`${Math.random() > 0.5 ? 'bg-foreground' : 'bg-background'}`} />
                                  ))}
                                </div>
                              </div>
                              <span className="text-xs text-muted-foreground">Escaneie o QR Code</span>
                            </div>
                          )}

                          {message.showTicket && (
                            <div className="mt-3 p-3 bg-primary/20 rounded-lg text-center border border-primary/30">
                              <div className="text-2xl mb-1">🎫</div>
                              <div className="text-xs font-semibold">INGRESSO DIGITAL</div>
                              <div className="text-[10px] text-muted-foreground mt-1">#EVT2025-00847</div>
                            </div>
                          )}

                          {message.buttons && (
                            <div className="mt-2 space-y-2">
                              {message.buttons.map((btn, btnIndex) => (
                                <div
                                  key={btnIndex}
                                  className="text-center py-2 px-3 bg-background/30 rounded-lg text-xs text-primary border border-primary/30"
                                >
                                  {btn}
                                </div>
                              ))}
                            </div>
                          )}

                          <div className={`flex items-center gap-1 mt-1 ${message.type === "user" ? "justify-end" : ""}`}>
                            <span className="text-[10px] text-muted-foreground">{message.time}</span>
                            {message.type === "user" && (
                              <CheckCheck className="w-3 h-3 text-primary" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input bar */}
                  <div className="bg-secondary px-4 py-3 flex items-center gap-3 border-t border-border">
                    <div className="flex-1 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground">
                      Digite uma mensagem
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14.016l5.016-5.016 1.406 1.406L12 16.828l-6.422-6.422 1.406-1.406z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppMockup;
