import { Bot } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-display font-semibold">EventBot</span>
              <span className="text-primary">AI</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Tecnologia de automação inteligente para eventos
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} EventBotAI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
