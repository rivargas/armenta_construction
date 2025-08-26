'use client';
import { useState } from "react";
export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span className="font-medium text-slate-900">{q}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-slate-600">{a}</p>}
    </div>
  );
}