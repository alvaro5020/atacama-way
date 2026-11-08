import { ContactForm } from "@/components/contact-form";
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
import { cn } from "@/lib/utils";
import {
  Bot,
  Camera,
  Check,
  Database,
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

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "A medida",
    description: "Ideal para validación de procesos.",
    features: [
      "Chatbot IA básico",
      "Conexión Webhook a WhatsApp/Instagram",
      "Respuestas automatizadas 24/7",
    ],
    cta: "Comenzar",
  },
  {
    name: "Business",
    price: "A medida",
    description: "Automatización integral para PyMEs.",
    features: [
      "Todo lo del Starter",
      "RAG Vector Database con PDFs corporativos",
      "Flujos avanzados en n8n",
      "Base de datos PostgreSQL",
    ],
    cta: "Agendar Demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    description: "Infraestructura dedicada y LLMs a medida.",
    features: [
      "Todo lo de Business",
      "VPS Dedicado (Hostinger)",
      "Entorno Docker aislado",
      "Soporte prioritario SLA",
    ],
    cta: "Contactar Ventas",
  },
];

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
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "h-full rounded-2xl text-left ring-1",
                plan.featured
                  ? "bg-zinc-900 shadow-2xl shadow-indigo-950/40 ring-zinc-500"
                  : "bg-zinc-950 ring-zinc-800"
              )}
            >
              <CardHeader className="gap-3">
                <div className="flex h-5 items-center">
                  {plan.featured && <Badge>Más Popular</Badge>}
                </div>
                <CardTitle className="text-lg font-semibold text-zinc-50">
                  {plan.name}
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
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          plan.featured ? "text-zinc-50" : "text-zinc-500"
                        )}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  size="lg"
                  variant={plan.featured ? "default" : "outline"}
                  className="w-full"
                >
                  <a href="#contacto">{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
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
