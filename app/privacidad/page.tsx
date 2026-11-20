import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mountain } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Atacama Way",
  description:
    "Cómo Atacama Way recolecta, utiliza y protege tus datos personales conforme a la Ley N° 19.628 y la Ley N° 21.719 de Protección de Datos Personales de Chile.",
};

const PRIVACY_EMAIL = "privacidad@atacamaway.com";

function PrivacyEmail() {
  return (
    <a
      href={`mailto:${PRIVACY_EMAIL}`}
      className="font-medium text-zinc-200 underline underline-offset-4 transition-colors hover:text-zinc-50"
    >
      {PRIVACY_EMAIL}
    </a>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="scroll-mt-24">
      <h2
        id={id}
        className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl"
      >
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-pretty text-zinc-400">
        {children}
      </div>
    </section>
  );
}

const rights = [
  {
    name: "Acceso",
    detail: "Conocer qué datos personales tuyos tratamos, su origen y finalidad.",
  },
  {
    name: "Rectificación",
    detail: "Corregir datos inexactos, incompletos o desactualizados.",
  },
  {
    name: "Supresión / Eliminación",
    detail:
      "Solicitar el borrado de tus datos cuando ya no sean necesarios o retires tu consentimiento.",
  },
  {
    name: "Oposición",
    detail: "Oponerte a que tus datos se traten para una finalidad determinada.",
  },
  {
    name: "Portabilidad",
    detail:
      "Recibir tus datos en un formato estructurado, de uso común y lectura mecánica.",
  },
  {
    name: "Bloqueo",
    detail:
      "Solicitar la suspensión temporal del tratamiento mientras se resuelve una solicitud.",
  },
  {
    name: "Revocación del consentimiento",
    detail:
      "Retirar en cualquier momento el consentimiento otorgado, sin efecto retroactivo.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative isolate flex min-h-screen flex-1 flex-col overflow-x-clip bg-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 py-4 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-50"
          >
            <Mountain aria-hidden className="h-6 w-6" strokeWidth={2} />
            Atacama Way
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Volver al inicio
          </Link>
        </nav>
      </header>

      <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-medium text-zinc-500">
          Versión 1.0 — Vigente desde noviembre de 2026
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Política de Privacidad
        </h1>
        <p className="mt-6 text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg">
          En Atacama Way respetamos tu privacidad. Esta política explica de
          forma clara qué datos personales tratamos, para qué los usamos, con
          quién los compartimos y cómo puedes ejercer tus derechos, en
          cumplimiento de la Ley N° 19.628 sobre Protección de la Vida Privada
          y la Ley N° 21.719 de Protección de Datos Personales de Chile.
        </p>

        <div className="mt-12 space-y-12 border-t border-zinc-800 pt-12">
          <Section id="responsable" title="1. Responsable del tratamiento">
            <p>
              El responsable del tratamiento de tus datos personales es{" "}
              <strong className="font-semibold text-zinc-200">Atacama Way</strong>
              , con operación en Chile.
            </p>
            <p>
              Para cualquier consulta relacionada con la privacidad o el
              tratamiento de tus datos, puedes escribirnos a <PrivacyEmail />.
            </p>
          </Section>

          <Section id="datos" title="2. Datos personales que recolectamos">
            <p>
              Solo tratamos los datos que nos entregas voluntariamente a través
              del formulario de contacto y los datos técnicos mínimos
              necesarios para operar el sitio:
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
              <li>
                <strong className="font-semibold text-zinc-200">
                  Datos de contacto:
                </strong>{" "}
                nombre y correo electrónico corporativo.
              </li>
              <li>
                <strong className="font-semibold text-zinc-200">
                  Contenido de tu mensaje:
                </strong>{" "}
                la información que decidas compartir sobre tu consulta o
                proyecto.
              </li>
              <li>
                <strong className="font-semibold text-zinc-200">
                  Datos técnicos de conexión:
                </strong>{" "}
                información mínima como la dirección IP, registrada en los
                registros (logs) del servidor por motivos de seguridad y
                funcionamiento.
              </li>
            </ul>
            <p>
              Actualmente este sitio{" "}
              <strong className="font-semibold text-zinc-200">
                no utiliza cookies publicitarias ni de rastreo invasivo
              </strong>
              .
            </p>
          </Section>

          <Section id="finalidad" title="3. Finalidad y base legal">
            <p>Utilizamos tus datos exclusivamente para:</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
              <li>Responder tus consultas comerciales.</li>
              <li>
                Evaluar tus proyectos de automatización y desarrollo web.
              </li>
              <li>Coordinar y agendar reuniones contigo.</li>
            </ul>
            <p>
              La base legal del tratamiento es tu{" "}
              <strong className="font-semibold text-zinc-200">
                consentimiento libre, informado y expreso
              </strong>
              , que otorgas al aceptar esta política antes de enviar el
              formulario de contacto. Puedes revocarlo en cualquier momento.
            </p>
          </Section>

          <Section
            id="destinatarios"
            title="4. Destinatarios y transferencia internacional"
          >
            <p>
              No vendemos ni cedemos tus datos a terceros con fines
              comerciales. Para operar nuestros servicios utilizamos
              proveedores de infraestructura tecnológica ubicados en el
              extranjero, que cuentan con estándares adecuados de seguridad:
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
              <li>
                <strong className="font-semibold text-zinc-200">Vercel</strong>{" "}
                — alojamiento y entrega del sitio web.
              </li>
              <li>
                <strong className="font-semibold text-zinc-200">
                  Hostinger (VPS en Brasil)
                </strong>{" "}
                — servidores de automatización con n8n y base de datos
                PostgreSQL.
              </li>
              <li>
                <strong className="font-semibold text-zinc-200">
                  Proveedores de modelos de inteligencia artificial
                </strong>{" "}
                — únicamente cuando interactúas con nuestros asistentes
                automatizados.
              </li>
            </ul>
            <p>
              Estas transferencias internacionales se realizan solo en la
              medida necesaria para cumplir las finalidades descritas.
            </p>
          </Section>

          <Section id="conservacion" title="5. Plazos de conservación">
            <p>
              Conservamos tus datos solo durante el tiempo necesario para
              atender tu solicitud o mantener la relación comercial, o hasta
              que solicites su supresión. Una vez cumplida la finalidad, los
              datos se eliminan o anonimizan de forma segura.
            </p>
          </Section>

          <Section id="seguridad" title="6. Medidas de seguridad">
            <p>
              Aplicamos medidas técnicas y organizativas razonables para
              proteger tus datos frente a accesos no autorizados, pérdida o
              alteración:
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
              <li>Cifrado de las comunicaciones en tránsito (HTTPS/TLS).</li>
              <li>Cabeceras de seguridad HTTP en el sitio web.</li>
              <li>
                Control de acceso restringido a los sistemas que almacenan
                datos personales.
              </li>
              <li>
                Protocolo interno de respuesta ante eventuales brechas de
                seguridad, incluyendo la notificación a la autoridad y a los
                titulares afectados cuando corresponda.
              </li>
            </ul>
          </Section>

          <Section id="derechos" title="7. Derechos del titular">
            <p>
              Como titular de los datos, puedes ejercer en cualquier momento y
              de forma gratuita los siguientes derechos:
            </p>
            <dl className="divide-y divide-zinc-800 rounded-xl border border-zinc-800 bg-zinc-900/50">
              {rights.map((right) => (
                <div
                  key={right.name}
                  className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:gap-4"
                >
                  <dt className="font-semibold text-zinc-200">{right.name}</dt>
                  <dd className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {right.detail}
                  </dd>
                </div>
              ))}
            </dl>
            <p>
              Para ejercerlos, escríbenos a <PrivacyEmail /> indicando tu
              solicitud. Responderemos dentro de los plazos establecidos por la
              ley.
            </p>
          </Section>

          <Section id="vigencia" title="8. Vigencia y actualizaciones">
            <p>
              <strong className="font-semibold text-zinc-200">
                Versión 1.0 — Vigente desde noviembre de 2026
              </strong>
              , en cumplimiento de la Ley N° 19.628 y la Ley N° 21.719.
            </p>
            <p>
              Podemos actualizar esta política para reflejar cambios legales u
              operativos. Publicaremos cualquier modificación en esta página
              indicando la nueva versión y su fecha de vigencia.
            </p>
          </Section>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </article>

      <footer className="mt-auto border-t border-zinc-800 px-4 py-8">
        <p className="text-center text-sm text-zinc-500">
          © 2026 Atacama Way. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
