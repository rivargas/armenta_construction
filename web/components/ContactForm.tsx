'use client';
import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-id'; // TODO: replace

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    const form = e.currentTarget;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) });
      if (res.ok) { form.reset(); setMessage("Thanks! We'll get back to you shortly."); }
      else { setMessage('There was an issue sending your message. Please try again.'); }
    } catch {
      setMessage('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="form-status">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input name="phone" inputMode="tel" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Project Type</label>
          <select name="projectType" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option>Residential</option>
            <option>Commercial</option>
            <option>Repairs & Maintenance</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">City</label>
        <input name="city" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Message</label>
        <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="button-primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
        <a href="tel:5555551234" className="button-secondary" aria-label="Call us">Call (555) 555-1234</a>
      </div>
      <p id="form-status" role="status" className="text-sm text-slate-600" aria-live="polite">{message}</p>
    </form>
  );
}