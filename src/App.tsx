import { useState } from "react";
import { AtSign, Link, Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  donationDetails,
  events,
  navigation,
  supporters,
} from "@/data/site-content";

function App() {
  const [showSupportDetails, setShowSupportDetails] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <header className="sticky top-0 z-50 border-b border-outline-variant/20 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a
            href="#top"
            className="font-headline text-2xl font-black italic text-primary"
          >
            Jute Jeste e.V.
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-headline text-lg font-bold text-primary transition-colors hover:text-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="secondary" size="sm">
            <a href="/pdfs/mitglied-werden.pdf" download>Mitglied werden</a>
          </Button>
        </div>
      </header>

      <main
        id="top"
        className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-14 md:px-8 md:py-20"
      >
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge className="w-fit">Die gute Geste mit Dialekt</Badge>
            <h1 className="font-headline text-5xl font-black leading-tight tracking-tight text-primary md:text-6xl">
              Gemeinsam was erleben
              <span className="block text-secondary italic">
                Turniere, Partys und Aktionen
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
              Bei uns geht’s darum, einfach zusammenzukommen, Momente zu teilen und
              gemeinsam was auf die Beine zu stellen.
            </p>
          </div>
          <div className="relative">
            <div className="organic-blob absolute -left-8 -top-8 h-32 w-32 bg-primary-fixed-dim/70" />
            <div className="organic-blob absolute -bottom-6 -right-6 h-28 w-28 bg-tertiary-fixed/80" />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-3xl bg-surface-container-low shadow-editorial p-3">
              <img
                src="/images/gruppenbild.webp"
                alt="Gruppenbild von Jute Jeste"
                className="h-full w-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>

        <section
          id="ueber-uns"
          className="rounded-3xl bg-surface-container-low p-8 md:p-12"
        >
          <h2 className="font-headline text-4xl font-black text-primary">
            Über uns
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-on-surface-variant justify-center-last-hyphen">
            Wir sind eine gemischte Truppe, die eine Vision hatte: in Jessen und
            Umgebung mehr Leben bringen. Deshalb werden wir in Zukunft für euch,
            Jung und Alt, Veranstaltungen organisieren und durchführen. Dabei
            wollen wir diverse Turniere, Diskos und vieles mehr planen. Die gute
            Geste steht im Vordergrund, deshalb unterstützen wir auch gern
            andere Vereine in der Region Jessen und sind dafür, die Gemeinschaft
            zu stärken. Meldet euch daher gern bei uns, wir schauen was wir
            machen können!
          </p>
        </section>

        <section id="termine" className="space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-headline text-4xl font-black text-primary">
                Termine & Co.
              </h2>
              <p className="mt-2 text-on-surface-variant">
                Alle Event-Bereiche aus dem alten Template neu strukturiert und
                modular.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <Card key={event.title} className="overflow-hidden bg-surface">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full bg-surface-container-low object-contain"
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-on-surface-variant">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <a href="#termine" className="block">
            <Card className="bg-hearth text-surface">
              <CardContent className="grid items-start gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
                <div className="space-y-4">
                  <CardTitle className="text-surface flex items-center">
                    Philosophie <Link className="ml-2 h-4 w-4" />
                  </CardTitle>
                  <p className="max-w-2xl leading-relaxed text-surface/90 justify-center-last-hyphen">
                    Unsere Veranstaltungen sollen offen, bezahlbar und
                    gemeinschaftlich bleiben. Deshalb verbinden wir lokale
                    Kultur mit neuen Formaten und schauen immer, wie wir
                    Menschen konkret zusammenbringen können.
                  </p>
                </div>
                <div className="hidden md:block self-start h-48 w-60 overflow-hidden rounded-3xl">
                  <img
                    src="/images/pic04.jpg"
                    alt="Philosophie von Jute Jeste"
                    className="h-full w-full object-cover rounded-3xl"
                  />
                </div>
              </CardContent>
            </Card>
          </a>
        </section>

        <section id="support" className="space-y-8">
          <div>
            <h2 className="font-headline text-4xl font-black text-primary">
              Support
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-on-surface-variant justify-center-last-hyphen">
              Bei jedem Event entstehen Kosten. Wir planen so, dass alles
              gedeckt ist und Getränke & Co. trotzdem erschwinglich bleiben. Mit
              einer Spende helft ihr uns, sicherer zu planen und alle zu
              entlasten.
            </p>
            <div className="mt-5">
              <Button
                variant="outline"
                onClick={() => setShowSupportDetails((current) => !current)}
              >
                {showSupportDetails ? "Weniger anzeigen" : "Mehr anzeigen"}
              </Button>
            </div>
          </div>

          {showSupportDetails && (
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-surface">
                <CardHeader>
                  <CardTitle>Wie funktioniert's?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-on-surface-variant">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                      Kontoinhaber
                    </p>
                    <p className="font-semibold text-on-surface">
                      {donationDetails.accountHolder}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                      IBAN
                    </p>
                    <p className="font-mono text-on-surface">
                      {donationDetails.iban}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                      Verwendungszweck
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {donationDetails.usage.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-surface-container">
                <CardHeader>
                  <CardTitle>Unsere Supporter</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="rounded-2xl bg-surface">
                    {supporters.map((supporter, index) => (
                      <li
                        key={supporter.name}
                        className={`flex items-center gap-4 px-4 py-4 md:px-5 ${
                          index < supporters.length - 1
                            ? "border-b border-outline-variant/40"
                            : ""
                        }`}
                      >
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-outline-variant/40 bg-white">
                          {supporter.logo ? (
                            <img
                              src={supporter.logo}
                              alt={`${supporter.name} Logo`}
                              className="h-full w-full object-contain rounded-xl"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-xl bg-surface-container-low">
                              <User className="h-10 w-10 text-on-surface-variant" />
                            </div>
                          )}
                        </div>
                         
                        <p className="font-medium text-on-surface-variant">
                          {supporter.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="overflow-hidden bg-surface md:-mx-8">
            <img
              src="/images/banner.webp"
              alt="Einblick in unsere Vereinsarbeit"
              className="h-full min-h-[10px] md:min-h-[260px] w-full object-contain rounded-xl"
            />
          </div>
        </section>
      </main>

      <footer className="rounded-t-[2.5rem] bg-primary py-12 text-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 md:px-8">
          <div>
            <h3 className="font-headline text-3xl font-black">Impressum</h3>
            <p className="mt-3 leading-relaxed text-surface/90">
              Jute Jeste e.V. · Rosa-Luxemburg-Straße 41 · 06917 Jessen (Elster)
            </p>
            <p className="mt-1 leading-relaxed text-surface/90">
              Registergericht Amtsgericht Stendal · Registernummer: VR7046
            </p>
            <a
              href="/pdfs/datenschutz.pdf" download
              className="mt-4 inline-flex items-center gap-2 hover:underline"
            >
              Datenschutz
            </a>
          </div>
          <div className="flex flex-col justify-between gap-4 md:items-end">
            <a
              href="https://www.instagram.com/jutejeste/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <AtSign className="h-4 w-4" /> Instagram
            </a>
            <a
              href="https://www.facebook.com/people/Jute-Jeste/61577793457464/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <FaFacebook className="h-4 w-4" /> Facebook
            </a>
            <a
              href="mailto:info@jutejeste.de"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Mail className="h-4 w-4" /> info@jutejeste.de
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
