'use client'

import { Shield, Camera, Zap, Phone, Fence, Lock, Eye, Star, MapPin, MessageCircle, Calendar, CreditCard, Bell, Users, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: Camera,
      title: "Câmeras de Segurança",
      description: "CFTV e IP com acesso remoto, armazenamento em nuvem e notificações inteligentes",
      features: ["Câmeras internas e externas", "Acesso remoto 24h", "Armazenamento em nuvem"]
    },
    {
      icon: Shield,
      title: "Alarmes e Sensores",
      description: "Sistemas de alarme residencial e comercial com sensores de movimento",
      features: ["Sensores de presença", "Abertura de portas", "Notificação instantânea"]
    },
    {
      icon: Zap,
      title: "Automação de Portões",
      description: "Instalação e manutenção de motores para todos os tipos de portões",
      features: ["Portões deslizantes", "Portões basculantes", "Portões pivotantes", "Controle remoto", "Acionamento por farol (carro)", "Acionamento por app", "Suporte técnico"]
    },
    {
      icon: Phone,
      title: "Interfones e Videoporteiros",
      description: "Sistemas de comunicação integrados com câmeras e dispositivos móveis",
      features: ["Videoporteiro digital", "Integração mobile", "Para condomínios"]
    },
    {
      icon: Fence,
      title: "Cercas Elétricas",
      description: "Instalação em muros, portões e grades com monitoramento integrado",
      features: ["Cerca elétrica", "Concertinas", "Manutenção preventiva"]
    },
    {
      icon: Lock,
      title: "Controle de Acesso",
      description: "Fechaduras eletrônicas com senha, biometria e controle via app",
      features: ["Fechadura com senha", "Fechadura biométrica", "Abertura por tag", "Abertura por botoeira", "Controle por app", "Registro de acessos"]
    },
    {
      icon: Eye,
      title: "Monitoramento 24h",
      description: "Vigilância remota com acionamento automático de autoridades",
      features: ["Monitoramento remoto", "Central 24h", "Acionamento automático"]
    }
  ]

  const features = [
    { icon: MapPin, title: "Geolocalização", description: "Encontre empresas próximas" },
    { icon: MessageCircle, title: "Chat Integrado", description: "Comunicação direta" },
    { icon: Calendar, title: "Agendamento", description: "Controle de horários" },
    { icon: CreditCard, title: "Pagamentos", description: "Pix, cartão e boleto" },
    { icon: Bell, title: "Notificações", description: "Alertas em tempo real" },
    { icon: Users, title: "Avaliações", description: "Sistema de feedback" }
  ]

  const plans = [
    {
      type: "Cliente",
      price: "R$ 29,90",
      description: "Para usuários finais",
      subtitle: "Pagamento único",
      features: [
        "Cadastro completo",
        "Solicitação de orçamentos",
        "Chat com técnicos",
        "Acompanhamento em tempo real",
        "Avaliação de serviços",
        "Suporte pós-venda"
      ],
      highlight: false
    },
    {
      type: "Empresa",
      price: "R$ 247,90/mês",
      description: "Para prestadores de serviço",
      subtitle: "Assinatura mensal",
      features: [
        "Painel administrativo completo",
        "Recebimento de solicitações",
        "Cadastro de técnicos",
        "Controle de agenda",
        "Relatórios de desempenho",
        "Suporte prioritário"
      ],
      highlight: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Segura<span className="text-blue-400">+</span></span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a>
              <a href="#features" className="hover:text-blue-400 transition-colors">Funcionalidades</a>
              <a href="#plans" className="hover:text-blue-400 transition-colors">Planos</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">
                Começar Agora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a>
                <a href="#features" className="hover:text-blue-400 transition-colors">Funcionalidades</a>
                <a href="#plans" className="hover:text-blue-400 transition-colors">Planos</a>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors w-full">
                  Começar Agora
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Segurança e automação
            <span className="block text-blue-400">completa em um só lugar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Plataforma inteligente que conecta clientes e empresas especializadas em segurança eletrônica e automação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
              Solicitar Orçamento Gratuito
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Sou uma Empresa
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas em segurança eletrônica e automação para sua tranquilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Funcionalidades do App
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia avançada para conectar você aos melhores profissionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-10 w-10 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Planos e Preços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`rounded-xl p-8 ${plan.highlight ? 'bg-blue-600 text-white shadow-2xl scale-105' : 'bg-white shadow-lg'}`}>
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.type}
                  </h3>
                  <div className={`text-4xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-blue-600'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm mb-2 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.subtitle}
                  </p>
                  <p className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className={`h-5 w-5 mr-3 ${plan.highlight ? 'text-blue-200' : 'text-green-500'}`} />
                      <span className={plan.highlight ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.highlight 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  {plan.type === 'Cliente' ? 'Cadastrar por R$ 29,90' : 'Assinar Agora'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Junte-se à plataforma mais completa de segurança e automação do Brasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Segura<span className="text-blue-400">+</span></span>
              </div>
              <p className="text-gray-400">
                Segurança e automação completa em um só lugar.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Câmeras de Segurança</li>
                <li>Alarmes e Sensores</li>
                <li>Automação de Portões</li>
                <li>Monitoramento 24h</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Como Funciona</li>
                <li>Seja um Parceiro</li>
                <li>Suporte</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@seguraplus.com.br</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Segura+. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}