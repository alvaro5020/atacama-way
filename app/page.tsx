import { ContactForm } from "@/components/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Bot,
  Camera,
  Check,
  Database,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Play,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Agentes IA Multicanal",
    description:
      "Conectamos flujos conversacionales inteligentes a tus Webhooks de WhatsApp e Instagram Business.",
    icon: Bot,
  },
  {
    title: "Sistemas RAG (Vector Databases)",
    description:
      "Entrenamos asistentes virtuales con el conocimiento de tu empresa, leyendo manuales y catálogos en PDF.",
    icon: Database,
  },
  {
    title: "Orquestación con n8n",
    description:
      "Desplegamos automatizaciones backend en servidores VPS aislados (Docker/PostgreSQL) para conectar tus herramientas.",
    icon: Workflow,
  },
  {
    title: "Producción Audiovisual & IA",
    description:
      "Integramos flujos de generación de contenido visual, combinando fotografía de estudio premium con motores creativos de IA.",
    icon: Camera,
  },
];

const steps = [
  {
    title: "Auditoría de Procesos",
    description: "Identificamos cuellos de botella.",
  },
  {
    title: "Diseño de Arquitectura",
    description: "Seleccionamos LLMs y flujos en n8n.",
  },
  {
    title: "Despliegue Aislado",
    description: "Implementación en VPS/Docker.",
  },
  {
    title: "Optimización Continua",
    description: "Monitoreo y ajustes SLA.",
  },
];

const faqs = [
  {
    question: "¿Mis datos corporativos se usan para entrenar modelos públicos?",
    answer:
      "No. Utilizamos bases de datos vectoriales privadas (RAG) y LLMs configurados con políticas de cero-retención. Tu información nunca sale de tu ecosistema.",
  },
  {
    question: "¿Necesito un equipo técnico para manejar esto?",
    answer:
      "En absoluto. Nosotros orquestamos toda la infraestructura en servidores VPS (Docker/n8n) y te entregamos interfaces listas para usar integradas a tu WhatsApp o Instagram.",
  },
  {
    question: "¿Es compatible con mi software actual?",
    answer:
      "Sí. Mediante Webhooks y APIs REST podemos conectar los agentes de IA con tu CRM, ERP o bases de datos PostgreSQL existentes.",
  },
];

type PlanFeature = {
  label: string;
  tooltip: string;
};

type Plan = {
  title: string;
  price: string;
  description: string;
  features: PlanFeature[];
  sheetText: string;
  cta: string;
  isPopular?: boolean;
};

const pricingPlans: Plan[] = [
  {
    title: "Starter IA",
    description: "Inteligencia artificial para potenciar tu sitio web actual.",
    price: "Desde $490 (Setup) + $49/mes",
    isPopular: false,
    features: [
      { label: "Auditoría de procesos", tooltip: "Identificamos tus cuellos de botella" },
      { label: "Agente de IA 24/7", tooltip: "Empleado digital que atiende y resuelve" },
      { label: "Captura de Leads", tooltip: "Guarda datos de clientes automáticamente" },
      { label: "Flujos de correo", tooltip: "Seguimiento inmediato al cliente" },
      { label: "Integración sencilla", tooltip: "Se conecta a tu web actual sin alterarla" },
    ],
    sheetText:
      "Ideal para negocios con web propia que buscan modernizar su atención. Inyectamos un Agente Autónomo que trabaja 24/7. Beneficios: \n- Agente IA: No solo responde; califica leads y toma acciones. \n- Mensualidad incluye: Mantenimiento del servidor VPS, consumo de tokens de inteligencia artificial, captura de datos y optimización continua de las respuestas del agente.",
    cta: "Potenciar mi web",
  },
  {
    title: "Business Full-Stack",
    description: "El ecosistema digital completo: Web de alta velocidad + IA integrada.",
    price: "Desde $990 (Setup) + $89/mes",
    isPopular: true,
    features: [
      { label: "Landing Page Next.js", tooltip: "Arquitectura ultra-rápida y SEO optimizado" },
      { label: "UI/UX Premium", tooltip: "Estética B2B que transmite confianza" },
      { label: "Despliegue en Vercel", tooltip: "Servidores globales anti-caídas" },
      { label: "Agente IA Nativo", tooltip: "Asistente fusionado en el código base" },
      { label: "Soporte y Mantenimiento", tooltip: "Línea directa con nuestro equipo" },
    ],
    sheetText:
      "El ecosistema definitivo (Metodología Atacama Way). Reemplazamos tu web antigua por tecnología de punta para maximizar conversiones. Beneficios: \n- Infraestructura: Web en Next.js alojada en Vercel para velocidad instantánea. \n- Agente Nativo: El empleado digital nace integrado con tu web, logrando tiempos de respuesta ultrarrápidos. \n- Mensualidad incluye: Hosting web en Vercel, servidores VPS para la automatización, consumo ilimitado de tokens IA y soporte técnico prioritario.",
    cta: "Construir mi ecosistema",
  },
  {
    title: "Enterprise",
    description: "Soluciones a medida, automatización n8n y flujos complejos.",
    price: "A medida (Setup) + Desde $199/mes",
    isPopular: false,
    features: [
      { label: "Web Multi-página", tooltip: "Portal corporativo escalable" },
      { label: "Automatización n8n", tooltip: "Flujos que reemplazan trabajo manual" },
      { label: "Integración PostgreSQL", tooltip: "Gestión de datos robusta" },
      { label: "Conexión CRM", tooltip: "Sincronización con tus ventas" },
      { label: "Arquitectura Escalable", tooltip: "Preparado para alto tráfico" },
    ],
    sheetText:
      "Infraestructura B2B corporativa. Construimos flujos de automatización complejos usando n8n en nuestro propio VPS. Beneficios: \n- Resolutividad Total: El sistema hace el trabajo administrativo por ti, conectando tu web, correos y CRM de forma transparente. \n- Mensualidad incluye: Administración de base de datos PostgreSQL, gestión de servidores dedicados, mantenimiento de flujos n8n y soporte para escalabilidad.",
    cta: "Agendar consultoría",
  },
];

/** Divide el texto del Sheet en intro + lista de beneficios ("Etiqueta: detalle"). */
function parseSheetText(text: string) {
  const [intro, ...rest] = text.split("\n").map((line) => line.trim());
  const benefits = rest
    .filter(Boolean)
    .map((line) => line.replace(/^-\s*/, ""))
    .map((line) => {
      const idx = line.indexOf(":");
      return idx === -1
        ? { label: "", detail: line }
        : { label: line.slice(0, idx).trim(), detail: line.slice(idx + 1).trim() };
    });
  return { intro, benefits };
}

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-1 flex-col overflow-x-clip bg-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 py-4 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-50"
          >
            <Mountain aria-hidden className="h-6 w-6" strokeWidth={2} />
            Atacama Way
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
          >
            Contacto
          </a>
        </nav>
      </header>

      {/* Fondo: brillo radial sutil + rejilla difuminada */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(49,46,129,0.35),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(39_39_42/0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgb(39_39_42/0.4)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_40%,transparent_100%)]"
      />

      <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-32 md:pt-40 lg:px-8">
        <h1 className="max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          No contrates software.{" "}
          <span className="bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
            Contrata Empleados Digitales.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg md:text-xl">
          Automatizamos la atención al cliente, ventas y operaciones de tu
          negocio con Inteligencia Artificial avanzada para que puedas escalar
          sin límites.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button asChild size="lg" className="w-full px-6 sm:w-auto">
            <a href="#planes">Explorar Planes</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full px-6 sm:w-auto">
            Agendar Auditoría Gratuita
          </Button>
        </div>

        {/* Demo Reel: reproductor simulado en pausa */}
        <div className="relative mx-auto mt-16 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/40 shadow-2xl shadow-black/50 backdrop-blur-xl sm:mt-20 sm:rounded-3xl">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-zinc-950/80 to-transparent"
          />

          <button
            type="button"
            aria-label="Reproducir demostración de la arquitectura"
            className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-500/30 bg-zinc-100/10 backdrop-blur-md transition-transform duration-300 ease-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none sm:h-20 sm:w-20"
          >
            <Play
              aria-hidden
              className="ml-1 h-6 w-6 fill-white text-white sm:h-8 sm:w-8"
            />
          </button>

          <p className="absolute bottom-3 left-4 text-xs text-zinc-300 sm:bottom-6 sm:left-6 sm:text-sm">
            Ver demostración de la arquitectura (0:45)
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        aria-labelledby="servicios-titulo"
        className="mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="servicios-titulo"
            className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Ecosistema de Automatización
          </h2>
          <p className="mt-4 text-base text-pretty text-zinc-400 sm:text-lg">
            Infraestructura tecnológica que trabaja por ti 24/7.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="rounded-2xl bg-zinc-900/50 text-left ring-1 ring-zinc-800 transition-colors hover:ring-zinc-700"
            >
              <CardHeader className="gap-4">
                <Icon
                  aria-hidden
                  strokeWidth={1.5}
                  className="h-10 w-10 text-zinc-50"
                />
                <CardTitle className="text-lg font-semibold text-zinc-50">
                  {title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Planes y Precios */}
      <section
        id="planes"
        aria-labelledby="planes-titulo"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="planes-titulo"
            className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Escala tu negocio con IA
          </h2>
          <p className="mt-4 text-base text-pretty text-zinc-400 sm:text-lg">
            Planes diseñados para integrarse a tu infraestructura actual.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.title}
              className={cn(
                "h-full rounded-2xl text-left ring-1",
                plan.isPopular
                  ? "bg-zinc-900 shadow-2xl shadow-indigo-950/40 ring-zinc-500"
                  : "bg-zinc-950 ring-zinc-800"
              )}
            >
              <CardHeader className="gap-3">
                <div className="flex h-5 items-center">
                  {plan.isPopular && <Badge>Más Popular</Badge>}
                </div>
                <CardTitle className="text-lg font-semibold text-zinc-50">
                  {plan.title}
                </CardTitle>
                <p className="text-3xl font-bold tracking-tight text-zinc-50">
                  {plan.price}
                </p>
                <CardDescription className="text-zinc-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="mb-6 h-px w-full bg-zinc-800" />
                <TooltipProvider delayDuration={150}>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <Check
                          className={cn(
                            "mt-0.5 size-4 shrink-0",
                            plan.isPopular ? "text-zinc-50" : "text-zinc-500"
                          )}
                        />
                        <span className="flex items-center gap-1.5">
                          {feature.label}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                type="button"
                                aria-label={`Más información: ${feature.label}`}
                                className="inline-flex rounded-full text-zinc-500 transition-colors hover:text-zinc-200 focus-visible:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                              >
                                <Info className="size-3.5" aria-hidden />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              {feature.tooltip}
                            </TooltipContent>
                          </Tooltip>
                        </span>
                      </li>
                    ))}
                  </ul>
                </TooltipProvider>

                <Sheet>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="mt-6 text-sm font-medium text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-50 hover:underline focus-visible:text-zinc-50 focus-visible:underline focus-visible:outline-none"
                    >
                      Ver desglose completo →
                    </button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    {(() => {
                      const { intro, benefits } = parseSheetText(plan.sheetText);
                      return (
                        <>
                          <SheetHeader>
                            <SheetTitle className="text-xl">{plan.title}</SheetTitle>
                            <SheetDescription>{plan.price}</SheetDescription>
                          </SheetHeader>
                          <div className="space-y-5 px-4 pb-6 text-sm leading-relaxed">
                            <p className="text-muted-foreground">{intro}</p>
                            <ul className="space-y-4">
                              {benefits.map((benefit) => (
                                <li key={benefit.label || benefit.detail}>
                                  {benefit.label && (
                                    <p className="font-semibold text-popover-foreground">
                                      {benefit.label}
                                    </p>
                                  )}
                                  <p className="mt-1 text-muted-foreground">
                                    {benefit.detail}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      );
                    })()}
                  </SheetContent>
                </Sheet>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  size="lg"
                  variant={plan.isPopular ? "default" : "outline"}
                  className="w-full"
                >
                  <a href="#contacto">{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section
        id="proceso"
        aria-labelledby="proceso-titulo"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="proceso-titulo"
            className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Nuestra Metodología
          </h2>
          <p className="mt-4 text-base text-pretty text-zinc-400 sm:text-lg">
            De la auditoría al despliegue en 4 semanas.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl bg-zinc-900/20 p-6 ring-1 ring-zinc-800/50"
            >
              <span
                aria-hidden
                className="block font-mono text-5xl font-bold tracking-tighter text-zinc-800"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-zinc-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        aria-labelledby="faq-titulo"
        className="w-full scroll-mt-24 border-y border-zinc-900 bg-zinc-950/50 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-titulo"
            className="text-center text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Preguntas Frecuentes
          </h2>

          <Accordion
            type="single"
            collapsible
            className="mt-12 border-zinc-800 bg-zinc-900/30"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="border-zinc-800 data-open:bg-zinc-900/60"
              >
                <AccordionTrigger className="px-5 py-5 text-base text-zinc-50 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        aria-labelledby="contacto-titulo"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="contacto-titulo"
              className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
            >
              Inicia tu transformación digital
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg">
              Agenda una auditoría gratuita o déjanos un mensaje. Nuestro equipo
              analizará tus procesos para diseñar la arquitectura de IA ideal
              para tu negocio.
            </p>

            <ul className="mt-10 space-y-5 text-zinc-300">
              <li className="flex items-center gap-3">
                <Mail aria-hidden className="h-5 w-5 shrink-0 text-zinc-500" />
                <a
                  href="mailto:contacto@tuagencia.com"
                  className="transition-colors hover:text-zinc-50"
                >
                  contacto@tuagencia.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin aria-hidden className="h-5 w-5 shrink-0 text-zinc-500" />
                <span>Operaciones en París, Francia y Chile.</span>
              </li>
            </ul>

            <div className="mt-10 max-w-xl rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-base font-semibold text-zinc-50">
                Ingeniería de Grado Empresarial
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Dirigida por un Ingeniero de Proyectos con más de 10 años de
                experiencia arquitectando sistemas críticos de extremo a
                extremo. En Atacama Way, unimos el rigor analítico de la
                ingeniería tradicional con la frontera de la Inteligencia
                Artificial para garantizar automatizaciones robustas y
                escalables.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8">
        <p className="text-center text-sm text-zinc-500">
          © 2026 Atacama Way. Todos los derechos reservados.
        </p>
      </footer>

      {/* Asistente IA flotante (UI) */}
      <button
        type="button"
        aria-label="Abrir chat con el asistente de IA"
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-black/50 transition-transform duration-300 ease-out hover:scale-110 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:outline-none"
      >
        <MessageCircle aria-hidden className="h-6 w-6" />
        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
          <span
            aria-hidden
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60"
          />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-emerald-500" />
          <span className="sr-only">Asistente en línea</span>
        </span>
      </button>
    </main>
  );
}
