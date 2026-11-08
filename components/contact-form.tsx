"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent";

const buttonLabel: Record<Status, string> = {
  idle: "Enviar Mensaje",
  sending: "Enviando...",
  sent: "¡Mensaje Enviado!",
};

// Modo demo: simula el envío. Sustituir por un fetch al Webhook de n8n.
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;

    const form = e.currentTarget;
    setStatus("sending");

    timers.current.push(
      setTimeout(() => {
        setStatus("sent");
        form.reset();
        timers.current.push(setTimeout(() => setStatus("idle"), 3000));
      }, 1000)
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="space-y-2">
        <label htmlFor="nombre" className="text-sm font-medium text-zinc-300">
          Nombre
        </label>
        <Input
          id="nombre"
          name="nombre"
          autoComplete="name"
          placeholder="Tu nombre"
          required
          className="h-10"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
          Email corporativo
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="tu@empresa.com"
          required
          className="h-10"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-medium text-zinc-300">
          ¿Qué procesos te gustaría automatizar?
        </label>
        <Textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          placeholder="Ej. atención por WhatsApp, seguimiento de leads, facturación…"
          required
          className="min-h-32"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        aria-live="polite"
        className={cn(
          "w-full",
          status === "sent" &&
            "bg-emerald-600 text-white hover:bg-emerald-600"
        )}
      >
        {buttonLabel[status]}
      </Button>
    </form>
  );
}
