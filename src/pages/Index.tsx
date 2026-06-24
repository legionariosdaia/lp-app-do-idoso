import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart, Menu, X, Play, Tag, Stethoscope, Calendar, Pill, ShieldAlert,
  Syringe, MessageCircleHeart, Bot, Gamepad2, Crown, Users, Check,
  ChevronRight, Phone, Mail, Star, Send
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LegalLinks } from "@/components/LegalDialogs";

import heroImg from "@/assets/hero-elderly-happy.jpg";
import sosImg from "@/assets/sos-section.jpg";
import doctorsImg from "@/assets/doctors-section.jpg";
import ctaFamilyImg from "@/assets/cta-family.jpg";
import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialJose from "@/assets/testimonial-jose.jpg";
import testimonialAparecida from "@/assets/testimonial-aparecida.jpg";
import testimonialRicardo from "@/assets/testimonial-ricardo.jpg";
import testimonialFernanda from "@/assets/testimonial-fernanda.jpg";
import testimonialAna from "@/assets/testimonial-ana.jpg";
import screenMedicos from "@/assets/screen-medicos.png";
import screenConsultas from "@/assets/screen-consultas.png";
import screenRemedios from "@/assets/screen-remedios.png";
import screenSos from "@/assets/screen-sos.png";
import screenVacinas from "@/assets/screen-vacinas.png";
import screenMensagem from "@/assets/screen-mensagem.png";
import screenChat from "@/assets/screen-chat.png";
import screenJogos from "@/assets/screen-jogos.png";
import founderImg from "@/assets/founder-eduardo.png";
import principalUsuariaImg from "@/assets/principal-usuaria.jpg";

const CTA_URL = "https://appdoidoso.com.br";
const WHATSAPP_URL = "https://wa.me/5511940750736";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(start);
    }, 20);
    return () => clearInterval(interval);
  }, [inView, target]);
  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

function PhoneMockup({ src, alt, neonColor }: { src: string; alt: string; neonColor: string }) {
  return (
    <div className="relative mx-auto w-[220px] md:w-[260px]">
      <div
        className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-40"
        style={{ background: neonColor }}
      />
      <div className="relative rounded-[2.5rem] border-4 border-foreground/20 bg-foreground/5 p-2 shadow-2xl overflow-hidden">
        <div className="w-full rounded-[2rem] overflow-hidden bg-card">
          <img src={src} alt={alt} loading="lazy" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

const features = [
  { title: "Médicos", icon: Stethoscope, desc: "Cadastre todos os médicos com endereço, telefone e especialidade. Nunca mais perca um contato.", screen: screenMedicos, neon: "#2563EB" },
  { title: "Consultas", icon: Calendar, desc: "Agende consultas, receba lembretes automáticos e nunca mais esqueça um compromisso médico.", screen: screenConsultas, neon: "#16A34A" },
  { title: "Remédios", icon: Pill, desc: "Controle todos os medicamentos com alarmes inteligentes. Envie a lista completa para o médico pelo WhatsApp com um toque.", screen: screenRemedios, neon: "#D97706" },
  { title: "SOS Emergência", icon: ShieldAlert, desc: "Botão de pânico que envia localização GPS em tempo real para todos os contatos de emergência via WhatsApp.", screen: screenSos, neon: "#DC2626" },
  { title: "Vacinas", icon: Syringe, desc: "Controle completo do calendário vacinal com doses, datas e lembretes automáticos.", screen: screenVacinas, neon: "#7C3AED" },
  { title: "Mensagem do Dia", icon: MessageCircleHeart, desc: "Versículo bíblico diário e mensagem motivacional gerada por IA para alegrar e fortalecer o dia do seu idoso. Cuidado que alimenta o corpo e a alma.", screen: screenMensagem, neon: "#EC4899" },
  { title: "Chat Amigo", icon: Bot, desc: "Assistente virtual com IA que conversa, responde dúvidas, lê mensagens em voz alta e aceita comandos de voz.", screen: screenChat, neon: "#06B6D4" },
  { title: "Jogos Cognitivos", icon: Gamepad2, desc: "6 jogos para exercitar a memória e o raciocínio: Memória, Sudoku, Caça-Palavras, Jogo da Velha, Gênio e Trivia.", screen: screenJogos, neon: "#EA580C" },
];

const testimonials = [
  { name: "Dona Maria", age: "67 anos", role: "Idosa", img: testimonialMaria, text: "Eu tomava 8 remédios e vivia confusa com os horários. Agora o aplicativo me avisa certinho. Nunca mais esqueci nenhum! E ainda jogo o jogo da memória todo dia." },
  { name: "Seu José", age: "73 anos", role: "Idoso", img: testimonialJose, text: "Moro sozinho e meus filhos ficavam preocupados. Com o botão SOS, eles sabem onde estou a qualquer momento. Me sinto mais seguro." },
  { name: "Dona Aparecida", age: "62 anos", role: "Idosa", img: testimonialAparecida, text: "As consultas médicas eram um caos. Agora tenho tudo organizado no celular. Meu neto me ajudou a instalar e é muito fácil de usar!" },
  { name: "Ricardo", age: "42 anos", role: "Filho de idoso", img: testimonialRicardo, text: "Meu pai tem Alzheimer e o SOS já nos salvou duas vezes. Ele saiu de casa e conseguimos encontrá-lo rapidamente pela localização. Não tem preço." },
  { name: "Fernanda", age: "38 anos", role: "Filha de idosa", img: testimonialFernanda, text: "Minha mãe mora em outra cidade. Com o app, acompanho os medicamentos, consultas e vacinas dela à distância. É como estar perto mesmo longe." },
  { name: "Ana Paula", age: "35 anos", role: "Cuidadora de idosos", img: testimonialAna, text: "Cuido de 3 idosos e o App do Idoso revolucionou minha rotina. Consigo gerenciar todos os medicamentos e consultas sem erro. Recomendo para todos os cuidadores." },
];

const audiences = [
  { emoji: "👴👵", title: "Idosos", desc: "Para quem quer manter a saúde organizada de forma simples e independente" },
  { emoji: "👨‍👩‍👧", title: "Filhos de Idosos", desc: "Acompanhe a saúde dos seus pais mesmo à distância, com segurança" },
  { emoji: "🤝", title: "Cuidadores", desc: "Gerencie múltiplos idosos com eficiência e sem erros" },
  { emoji: "🩺", title: "Enfermeiros", desc: "Ferramenta profissional para acompanhamento de pacientes idosos" },
  { emoji: "🏠", title: "Casas de Repouso", desc: "Controle centralizado de medicamentos, vacinas e consultas dos residentes" },
  { emoji: "❤️", title: "Familiares de Idosos", desc: "Tenha tranquilidade sabendo que seu familiar está protegido" },
  { emoji: "👨‍⚕️", title: "Médicos Geriatras", desc: "Receba listas de medicamentos dos pacientes e acompanhe de perto" },
  { emoji: "💊", title: "Pessoas com muitos medicamentos", desc: "Não é idoso mas toma muitos remédios? O app também é para você!" },
  { emoji: "🧠", title: "Famílias de pessoas com Alzheimer", desc: "O botão SOS com GPS em tempo real traz segurança para toda a família" },
];

const faqs = [
  { q: "O App do Idoso é difícil de usar?", a: "Não! O app foi projetado especialmente para idosos, com letras grandes, botões coloridos e acessíveis, e um assistente virtual que lê tudo em voz alta. Qualquer pessoa consegue usar." },
  { q: "Preciso de internet para usar?", a: "Sim, é necessário conexão com a internet para acessar todas as funcionalidades. Mas é muito leve e funciona bem até com internet lenta." },
  { q: "Como instalo o App do Idoso no meu celular?", a: <>É muito simples. Basta você acessar <a href="https://appdoidoso.com.br" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold hover:no-underline">appdoidoso.com.br</a> no navegador do seu celular e cadastre-se em "Crie Aqui". Após entrar no App do Idoso clique os 3 pontinhos em cima do lado do navegador, e clique em "Adicionar à tela inicial". Aguarde um pouco e o aplicativo será instalado. Caso não apareça o ícone nos seus aplicativos do celular, clique de novo nos 3 pontinhos e de novo em "Adicionar à tela inicial". Depois coloque o ícone na sua tela inicial para facilidade de acesso todos os dias.</> },
  { q: "Posso cancelar a qualquer momento?", a: "Sim! Você pode cancelar sua assinatura a qualquer momento, sem taxas ou multas." },
  { q: "O botão SOS funciona sem internet?", a: "O botão SOS precisa de internet para enviar a localização via WhatsApp. Recomendamos que o idoso tenha dados móveis ativados." },
  { q: "Quantas pessoas podem usar o plano familiar?", a: "O plano familiar permite até 3 usuários, cada um com sua conta individual, medicamentos e consultas separados." },
  { q: "Meus dados estão seguros?", a: "Sim! Utilizamos criptografia de ponta e servidores seguros. Seus dados de saúde são protegidos e nunca compartilhados com terceiros." },
  { q: "Funciona no iPhone e Android?", a: "O App do Idoso é um aplicativo web progressivo (PWA) que funciona em qualquer celular com navegador de internet, seja iPhone, Android ou tablet." },
  { q: "Posso usar mesmo não sendo idoso?", a: "Claro! Qualquer pessoa que toma muitos medicamentos, tem várias consultas ou precisa se organizar com a saúde pode usar o App do Idoso." },
];

const planFeatures = [
  "Cadastro de Médicos", "Agendamento de Consultas", "Controle de Remédios",
  "Botão SOS Emergência", "Calendário de Vacinas", "Mensagem do Dia",
  "Chat Amigo com IA", "Jogos Cognitivos", "Suporte por WhatsApp",
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setVideoStarted(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?\s]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const navLinks = [
    { label: "Funcionalidades", id: "funcionalidades" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Preços", id: "precos" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <div className="min-h-screen bg-background font-nunito">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="/" className="flex items-center gap-2 text-primary font-black text-xl">
            <Heart className="w-7 h-7 fill-primary text-primary-foreground" />
            App do Idoso
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-foreground/80 hover:text-primary font-semibold transition-colors text-base">
                {l.label}
              </button>
            ))}
            <Button asChild className="rounded-full px-6 font-bold">
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer">Começar Agora</a>
            </Button>
          </div>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon"><Menu className="w-6 h-6" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map(l => (
                  <button key={l.id} onClick={() => scrollTo(l.id)} className="text-lg font-semibold text-foreground/80 hover:text-primary text-left">
                    {l.label}
                  </button>
                ))}
                <Button asChild className="rounded-full font-bold w-full">
                  <a href={CTA_URL} target="_blank" rel="noopener noreferrer">Começar Agora</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <Badge className="bg-accent/20 text-accent-foreground border-accent text-sm px-4 py-1.5 mb-6 font-semibold" style={{ color: "hsl(var(--foreground))" }}>
                ✨ Aplicativo feito com amor para quem envelhece
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                Cuide de quem sempre cuidou de você.{" "}
                <span className="text-primary">Com carinho, tecnologia e segurança.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                O aplicativo mais completo para gestão da saúde, medicamentos, consultas e segurança de idosos. Simples de usar, feito com amor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 font-bold animate-pulse-glow">
                  <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" /> Começar Teste Grátis de 7 Dias
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 font-bold" onClick={() => scrollTo("precos")}>
                  <Tag className="w-5 h-5 mr-2" /> Ver Planos
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">✅ Sem cartão de crédito • ✅ Cancele quando quiser</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20" style={{ boxShadow: "0 0 40px rgba(37,99,235,0.2)" }}>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  {videoStarted ? (
                    <iframe
                      src="https://www.youtube.com/embed/eYNaQdn7C94?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="VSL App do Idoso"
                    />
                  ) : (
                    <img
                      src="https://i.ytimg.com/vi/eYNaQdn7C94/maxresdefault.jpg"
                      alt="VSL App do Idoso"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://i.ytimg.com/vi/eYNaQdn7C94/hqdefault.jpg"; }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <p className="text-primary-foreground text-center text-lg md:text-2xl font-black tracking-tight">
            ✅ 7 dias grátis <span className="opacity-60 mx-2">•</span> ✅ Sem cartão de crédito <span className="opacity-60 mx-2">•</span> ✅ Cancele quando quiser
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="funcionalidades" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Tudo que seu idoso precisa, na palma da mão
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8 funções essenciais projetadas com letras grandes, botões acessíveis e cores de alto contraste
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isReversed = i % 2 === 1;
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}>
                  <div className="flex-shrink-0">
                    <PhoneMockup src={f.screen} alt={`Tela ${f.title}`} neonColor={f.neon} />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: f.neon + "22", color: f.neon }}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-foreground">{f.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOS HIGHLIGHT */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Badge className="bg-destructive/20 text-destructive border-destructive mb-4 font-bold">🚨 Função Essencial</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                O botão que pode salvar uma vida
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Com um único toque, o App do Idoso envia a localização exata em tempo real para todos os contatos de emergência via WhatsApp. Para idosos com Alzheimer, mobilidade reduzida ou que moram sozinhos — é paz de espírito para toda a família.
              </p>
              <Button asChild size="lg" className="rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-lg px-8 py-6">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                  <ShieldAlert className="w-5 h-5 mr-2" /> Proteja quem você ama
                </a>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={sosImg} alt="Função SOS do App do Idoso" loading="lazy" width={1280} height={720} className="rounded-2xl shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOCTORS HIGHLIGHT */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <img src={doctorsImg} alt="Médico usando o App do Idoso" loading="lazy" width={1280} height={720} className="rounded-2xl shadow-xl w-full" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <Badge className="bg-primary/20 text-primary border-primary mb-4 font-bold">👨‍⚕️ Para Profissionais de Saúde</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                Médicos: Receba a lista completa de medicamentos do seu paciente
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Seus pacientes idosos podem enviar a lista completa de medicamentos diretamente pelo WhatsApp. Com nome, concentração, dosagem e horários. Chega de listas escritas à mão ilegíveis.
              </p>
              <Dialog open={doctorModalOpen} onOpenChange={setDoctorModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="rounded-full font-bold text-lg px-8 py-6">
                    Indique para seus pacientes <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-2xl max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-black text-foreground">Qual o seu nome?</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!doctorName.trim()) return;
                    const nome = doctorName.trim();
                    const msg = encodeURIComponent(
                      `Olá! Aqui é o Dr(a). ${nome} e tenho uma dica especial para você e sua família. 💙\n\n` +
                      `Conheça o *App do Idoso* — um aplicativo feito com muito carinho para ajudar no cuidado diário da saúde de quem a gente ama.\n\n` +
                      `Com ele é possível:\n` +
                      `✅ Controlar medicamentos com alarmes inteligentes\n` +
                      `✅ Organizar consultas e médicos\n` +
                      `✅ Apertar um botão SOS em emergências\n` +
                      `✅ Receber mensagens motivacionais todos os dias\n` +
                      `✅ E muito mais...\n\n` +
                      `👉 Teste *grátis por 7 dias* (sem cartão de crédito): https://lp.appdoidoso.com.br\n\n` +
                      `Com carinho,\n` +
                      `Dr(a). ${nome}`
                    );
                    const url = `https://wa.me/?text=${msg}`;
                    window.open(url, "_blank");
                    setDoctorModalOpen(false);
                    setDoctorName("");
                  }} className="flex flex-col gap-4">
                    <Input
                      placeholder="Digite seu nome"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                      className="rounded-xl text-base"
                      required
                    />
                    <Button type="submit" size="lg" className="rounded-full font-bold">
                      <Send className="w-4 h-4 mr-2" /> Enviar
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              O que Diz a Principal Usuária do Aplicativo
            </h2>
            <p className="text-lg text-muted-foreground">A história real que originou tudo.</p>
          </motion.div>

          {/* Featured testimonial - Eduardo's mother */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/30 shadow-2xl hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full blur-2xl bg-primary/30" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/20 border-4 border-primary/40 flex items-center justify-center overflow-hidden">
                      <img src={principalUsuariaImg} alt="Mãe do Eduardo usando o App do Idoso" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array(5).fill(0).map((_, j) => <Star key={j} className="w-5 h-5 fill-elderly-gold text-elderly-gold" />)}
                  </div>
                  <p className="text-lg md:text-2xl text-foreground leading-relaxed mb-6 font-medium italic">
                    "Meu filho criou esse aplicativo para mim. Agora nunca esqueço meus remédios, tenho o médico na ponta dos dedos e sei que se precisar de ajuda é só apertar um botão. Uso todo dia."
                  </p>
                  <p className="font-black text-foreground text-xl">Suely d'Oliveira</p>
                  <p className="font-semibold text-foreground text-lg">Mãe do Eduardo</p>
                  <p className="text-sm text-muted-foreground">Usuária em vida do App do Idoso</p>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
              Edu d'Olivée criou o App do Idoso para sua própria mãe.<br />
              Em memória de Suely d'Oliveira (Falecida aos 79 anos em 12/06/2026)
            </p>
          </motion.div>

          {/* Additional real testimonials - hidden until real content is available */}
          <div className="hidden md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-full border-border/50 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary">??</div>
                    <div>
                      <p className="font-bold text-foreground">[NOME REAL]</p>
                      <p className="text-sm text-muted-foreground">[Descrição]</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array(5).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-elderly-gold text-elderly-gold" />)}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"[DEPOIMENTO REAL]"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCES */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Para quem é o App do Idoso?
            </h2>
            <p className="text-lg text-muted-foreground">Feito para todos que se preocupam com a saúde e segurança de quem amam</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {audiences.map((a, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-6">
                    <span className="text-4xl mb-3 block">{a.emoji}</span>
                    <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">{a.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{a.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precos" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Invista no cuidado de quem você ama
            </h2>
            <p className="text-lg text-muted-foreground">Comece com 7 dias grátis. Sem cartão de crédito.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Individual */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full hover:scale-[1.02] transition-transform duration-300">
                <CardHeader className="text-center pb-2">
                  <Crown className="w-10 h-10 mx-auto text-elderly-gold mb-2" />
                  <CardTitle className="text-xl">Plano Individual</CardTitle>
                  <p className="text-muted-foreground text-sm">Para 1 usuário</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-4xl font-black text-foreground"><span className="text-4xl font-black text-foreground">R$ 27,30</span></span>
                    <span className="text-muted-foreground"> /mês</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    {planFeatures.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-success flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full rounded-full font-bold text-base py-5">
                    <a href={CTA_URL} target="_blank" rel="noopener noreferrer">Começar Teste Grátis</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            {/* Familiar */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full border-2 border-primary shadow-xl hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1.5 text-sm font-bold">
                  ⭐ MAIS POPULAR
                </div>
                <CardHeader className="text-center pb-2 pt-10">
                  <Users className="w-10 h-10 mx-auto text-primary mb-2" />
                  <CardTitle className="text-xl">Plano Familiar</CardTitle>
                  <p className="text-muted-foreground text-sm">3 usuários com contas individuais completas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-2 flex justify-center">
                    <Badge className="bg-accent text-accent-foreground border-0 font-black tracking-wide">PAGUE 2, GANHE 3</Badge>
                  </div>
                  <div className="mb-2">
                    <span className="text-base text-muted-foreground line-through">R$ 81,90/mês</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-foreground">R$ 54,60</span>
                    <span className="text-muted-foreground"> /mês</span>
                  </div>
                  <p className="text-sm text-success font-bold mb-6">
                    Você economiza R$ 27,30 todo mês — a 3ª assinatura é completamente grátis
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    {[...planFeatures, "Gestão Familiar"].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-success flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full rounded-full font-bold text-base py-5">
                    <a href={CTA_URL} target="_blank" rel="noopener noreferrer">Começar Teste Grátis</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          {/* Savings */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="max-w-2xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
              <p className="font-black text-lg text-foreground mb-2">💰 Economize ainda mais!</p>
              <p className="text-muted-foreground mb-1">📅 Plano Semestral: Ganhe 1 mês GRÁTIS</p>
              <p className="text-muted-foreground mb-3">📅 Plano Anual: Ganhe 2 meses GRÁTIS</p>
              <p className="text-xs text-muted-foreground">Os descontos são aplicados automaticamente ao escolher o período no checkout</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              Por que criei o App do Idoso
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-[auto,1fr] gap-10 md:gap-14 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-3xl bg-primary/60 scale-110 animate-pulse-glow" />
                <div className="absolute inset-0 rounded-full blur-2xl bg-primary/40" style={{ boxShadow: "0 0 60px hsl(var(--primary) / 0.8)" }} />
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/50 bg-gradient-to-br from-primary/30 to-primary/10" style={{ boxShadow: "0 0 50px hsl(var(--primary) / 0.6), inset 0 0 30px hsl(var(--primary) / 0.2)" }}>
                  <img src={founderImg} alt="Eduardo d'Olivée, criador do App do Idoso" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center md:text-left">
              <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
                <p>Sou <strong className="text-foreground">Edu d'Olivée</strong>. Dentista há 30 anos, pai de família e cristão.</p>
                <p>Em 2022, comecei a estudar Tecnologia Digital — fiz o curso de Ciência da Computação de Harvard e mergulhei em Programação e Inteligência Artificial.</p>
                <p>Mas o App do Idoso não nasceu da tecnologia. Nasceu de um papel na carteira.</p>
                <p>Quando meu pai faleceu, minha mãe veio morar comigo. Construí uma casinha para ela dentro da minha casa. Ela era renal crônica, diabética, hipertensa e tinha hipotireoidismo — mais de 20 remédios divididos em 3 horários por dia, além de consultas, vacinas e compromissos médicos constantes.</p>
                <p>Sem nenhuma experiência em cuidar de um idoso, eu andava com um papel na carteira com a lista de remédios dela. Era assim que eu vivia. Até que percebi que não existia um aplicativo realmente simples, completo e feito com amor para resolver isso.</p>
                <p className="font-bold text-primary">Então criei um que supriu todas as necessidades de organização da vida dela.</p>
                <p>O Chat Amigo virou o maior companheiro da minha mãe — mega inteligente, ela podia conversar sobre qualquer assunto e ele guardava tudo na memória para continuar a conversa. Até receita de bolo ela criou com ele.</p>
                <p>Os lembretes de remédio funcionavam. E o versículo bíblico da manhã virou parte da rotina dela.</p>
                <p>Minha mãe faleceu em 12 de junho de 2026, com 79 anos — a mesma idade e o mesmo dia em que meu pai.</p>
                <p>Eu cumpri minha missão com ela. Mas a missão do App do Idoso não terminou — e meu propósito só ficou maior.</p>
                <p>Se você tem alguém assim na sua vida — pai, mãe, avó, alguém que depende de remédios, de cuidado, de presença — o <strong className="text-foreground">App do Idoso</strong> foi feito para essa pessoa. Para que você nunca precise andar com um papel na carteira. E para que ela sempre tenha alguém cuidando, mesmo a distância.</p>
              </div>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 font-bold animate-pulse-glow">
                  <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" /> Começar Meu Teste Grátis
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Perguntas Frequentes
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-4 bg-card shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground text-left hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <img src={ctaFamilyImg} alt="Família feliz" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-6">
              Comece hoje. Cuide com amor.<br />Cuide com o App do Idoso.
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              7 dias grátis. Sem compromisso. Sem cartão de crédito.
            </p>
            <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-10 py-7 font-black bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 shadow-xl">
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                Começar Meu Teste Grátis Agora
              </a>
            </Button>
            <p className="mt-6 text-primary-foreground/80 font-semibold">Cuide com amor, cuide com o App do Idoso ❤️</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-black text-xl mb-4">
                <Heart className="w-6 h-6 fill-primary text-primary" />
                App do Idoso
              </div>
              <p className="text-background/60 text-sm">Cuidando de quem sempre cuidou de você.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Produto</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li><button onClick={() => scrollTo("funcionalidades")} className="hover:text-background transition-colors">Funcionalidades</button></li>
                <li><button onClick={() => scrollTo("precos")} className="hover:text-background transition-colors">Preços</button></li>
                <li><button onClick={() => scrollTo("faq")} className="hover:text-background transition-colors">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <LegalLinks />
            </div>
            <div>
              <h4 className="font-bold mb-3">Contato</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-background transition-colors">
                    <Phone className="w-4 h-4" /> +55 11 94075-0736
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@appdoidoso.com.br" className="flex items-center gap-2 hover:text-background transition-colors">
                    <Mail className="w-4 h-4" /> contato@appdoidoso.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-sm text-background/50">
            <p className="mb-1">Edu d'Olivee Negócios Digitais Ltda • CNPJ: 58.345.667/0001-06</p>
            <p>© 2025 App do Idoso. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
