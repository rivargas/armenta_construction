'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../lib/site";
import Container from "./Container";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-blue-700 ring-4 ring-blue-100" />
            <span className="font-bold text-slate-900">{site.name}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${pathname === item.href ? 'text-blue-700' : 'text-slate-700'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link className="button-primary" href="/contact/">Get a Quote</Link>
          </div>
        </div>
      </Container>
    </header>
  );
}