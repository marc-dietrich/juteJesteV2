import { useState } from 'react'
import { AtSign, Mail } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { donationDetails, events, navigation, supporters } from '@/data/site-content'

function App() {
  const [showSupportDetails, setShowSupportDetails] = useState(false)

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <header className="sticky top-0 z-50 border-b border-outline-variant/20 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#top" className="font-headline text-2xl font-black italic text-primary">
            Jute Jeste
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
          <Button variant="secondary" size="sm">
            Mitglied werden
          </Button>
        </div>
      </header>

      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-14 md:px-8 md:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge className="w-fit">Die gute Geste mit Dialekt</Badge>
            <h1 className="font-headline text-5xl font-black leading-tight tracking-tight text-primary md:text-6xl">
              Gemeinschaft stärken,
              <span className="block text-secondary italic">Events mit Herz gestalten.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
              Wir bringen in Jessen und Umgebung mehr Leben zusammen: Turniere, Disko,
              Vereinskultur und echte Begegnung für Jung und Alt.
            </p>
          </div>
          <div className="relative">
            <div className="organic-blob absolute -left-8 -top-8 h-32 w-32 bg-primary-fixed-dim/70" />
            <div className="organic-blob absolute -bottom-6 -right-6 h-28 w-28 bg-tertiary-fixed/80" />
            <img
              src="/images-old/gruppenbild.jpg"
              alt="Gruppenbild von Jute Jeste"
              className="relative z-10 h-[420px] w-full rounded-3xl bg-surface-container-low object-contain p-3 shadow-editorial"
            />
          </div>
        </section>

        <section id="ueber-uns" className="rounded-3xl bg-surface-container-low p-8 md:p-12">
          <h2 className="font-headline text-4xl font-black text-primary">Über uns</h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-on-surface-variant">
            Wir sind eine gemischte Truppe mit einer klaren Vision: in Jessen und Umgebung
            mehr Leben und Zusammenhalt schaffen. Darum organisieren wir Veranstaltungen für
            alle Generationen. Die gute Geste steht im Vordergrund – wir unterstützen auch
            andere Vereine in der Region und stärken so die Gemeinschaft.
          </p>
        </section>

        <section id="termine" className="space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-headline text-4xl font-black text-primary">Termine & Co.</h2>
              <p className="mt-2 text-on-surface-variant">
                Alle Event-Bereiche aus dem alten Template neu strukturiert und modular.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <Card key={event.title} className="overflow-hidden bg-surface">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full bg-surface-container-low object-contain p-2"
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-on-surface-variant">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-hearth text-surface">
            <CardContent className="grid items-stretch gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
              <div className="space-y-4">
                <CardTitle className="text-surface">Philosophie</CardTitle>
                <p className="max-w-2xl leading-relaxed text-surface/90">
                  Unsere Veranstaltungen sollen offen, bezahlbar und gemeinschaftlich bleiben.
                  Deshalb verbinden wir lokale Kultur mit neuen Formaten und schauen immer, wie
                  wir Menschen konkret zusammenbringen können.
                </p>
              </div>
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-2xl md:mx-0 md:h-full md:w-auto md:aspect-square">
                <img
                  src="/images-old/phil.webp"
                  alt="Philosophie von Jute Jeste"
                  className="h-full w-full bg-surface/10 object-contain object-center p-1"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="support" className="space-y-8">
          <div>
            <h2 className="font-headline text-4xl font-black text-primary">Support</h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              Bei jedem Event entstehen Kosten. Mit Spenden helft ihr uns, besser zu planen und
              Preise für alle fair zu halten.
            </p>
            <div className="mt-5">
              <Button
                variant="outline"
                onClick={() => setShowSupportDetails((current) => !current)}
              >
                {showSupportDetails ? 'Weniger anzeigen' : 'Mehr anzeigen'}
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
                    <p className="font-mono text-on-surface">{donationDetails.iban}</p>
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
                            ? 'border-b border-outline-variant/40'
                            : ''
                        }`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-high text-sm font-bold text-secondary">
                          {supporter.logoLabel}
                        </div>
                        <p className="font-medium text-on-surface-variant">{supporter.name}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          <Card className="overflow-hidden bg-surface">
            <div className="grid md:grid-cols-1">
              <img
                src="/images-old/example03.webp"
                alt="Einblick in unsere Vereinsarbeit"
                className="h-full min-h-[260px] w-full bg-surface-container-low object-contain p-3"
              />
            </div>
          </Card>
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
          </div>
          <div className="flex flex-col justify-between gap-4 md:items-end">
            <a href="mailto:info@jutejeste.de" className="inline-flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" /> info@jutejeste.de
            </a>
            <a
              href="https://www.instagram.com/jutejeste/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <AtSign className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
