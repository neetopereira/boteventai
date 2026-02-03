// src/components/landing/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black pt-32 pb-16">
      {/* Background sutil, sem explosões */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-400">Sistema v2.0 Disponível</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-in-up">
          Gestão de Eventos e <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Vendas Automatizadas no WhatsApp
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 animate-fade-in-up delay-100">
          Centralize a venda de ingressos, controle de portaria e financeiro em uma única plataforma. 
          Sem promessas mágicas, apenas tecnologia que funciona.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-12 px-8 text-lg">
            Criar meu Evento <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 h-12 px-8 text-lg">
            Ver Demonstração
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm animate-fade-in-up delay-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" /> Pagamentos Seguros
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-green-500" /> Entrega Imediata
          </div>
        </div>
      </div>
    </div>
  );
};