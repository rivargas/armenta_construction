import Container from "./Container";
import { site } from "../lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <div>
            <div className="font-bold text-slate-900">{site.name}</div>
            <p className="mt-2 text-sm text-slate-600 max-w-sm">{site.tagline}</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li><a href={`tel:${site.phone.replace(/[^\\d]/g, '')}`} className="hover:underline">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a></li>
              <li>{site.address}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Navigate</div>
            <ul className="mt-2 space-y-1 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link className="hover:underline" href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-6 text-xs text-slate-500 border-t border-slate-200">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}