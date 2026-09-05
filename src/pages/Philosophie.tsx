import { Badge } from "@/components/ui/badge";

const paragraphs = [
  `Wer kennt sie nicht? Die Erzählungen von früher, in denen unsere Verwandten
  von verrückten Diskobesuchen, Kneipenabenden oder Sportveranstaltungen, bei
  denen wirklich jeder dabei gewesen sein musste, berichten? All das lässt uns
  junge Menschen oft neidisch werden. Natürlich wäre es toll, ganz spontan auf
  eine Party zu gehen, eine Kneipe zu besuchen oder seine Freunde bei einem
  Event zu treffen. Leider finden solche Diskoabende kaum noch statt. Wenn
  doch, dann oft nur zu Events wie dem ersten Weihnachtsfeiertag oder
  Ostersonntag.`,
  `Bereits vor einigen Jahren hatten zwei unserer Mitglieder die Idee, Events
  zu organisieren, aber als Privatperson und außerhalb Jessens zu leben,
  unmöglich. Im Frühjahr 2024 war es dann so weit: Endlich mal wieder eine
  Veranstaltung. Ein Nachtvolleyballturnier – organisiert durch die damaligen
  11. Klassen des Jessener Gymnasiums – und das kam einfach unglaublich gut an!
  So viele spielfreudige Teilnehmende trafen sich in der Mehrzweckhalle, um
  gemeinsam zu spielen. Viele Gäste kamen extra für das Turnier nach Jessen und
  genau da passierte es: Die Idee lebte wieder auf.`,
  `Eines Nachmittags an den Dresdner Elbwiesen entschied sich eine kleine
  Gruppe junger Leute beim Volleyballspielen: „Sowas Tolles muss öfter
  stattfinden!“ Die alte Idee wurde wieder aufgegriffen und weiterentwickelt.
  „Wir wollen etwas Gutes tun“ – das war unsere Devise. Also war für uns klar:
  Wir gründen einen gemeinnützigen Verein.`,
  `Sofort sprudelten unsere Mitglieder nur so von Ideen über und die ersten
  Pläne entstanden. Da war uns aber auch klar, dass wir uns nicht nur auf die
  Jugendlichen und Turniere beschränken wollen und können. Da wir nur das Beste
  für alle wollen, wussten wir auch, dass wir den Abitur-Jahrgängen nicht im
  Weg stehen können. Im Gegenteil: Gerade sie, die bereits so viele spannende
  Events geplant haben, wollen wir tatkräftig unterstützen. So können wir
  gemeinsam unsere Region etwas lebendiger machen und viele tolle
  Erinnerungen schaffen, die mit denen unserer Verwandten Schritt halten
  können.`,
];

export function Philosophie() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14 md:py-24">
      <Badge className="w-fit">Unsere Geschichte</Badge>
      <h1 className="mt-5 font-headline text-5xl font-black tracking-tight text-primary md:text-6xl">
        Philosophie
      </h1>
      <div className="mt-6 flex items-center gap-2" aria-hidden="true">
        <span className="h-1.5 w-16 rounded-full bg-secondary" />
        <span className="h-1.5 w-8 rounded-full bg-secondary/40" />
        <span className="h-1.5 w-4 rounded-full bg-secondary/20" />
      </div>

      <div className="mt-10 space-y-6">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="hyphens-auto text-justify text-lg leading-relaxed text-on-surface-variant"
          >
            {text}
          </p>
        ))}
      </div>

      <p className="mt-12 rounded-3xl bg-surface-container-low p-8 text-center font-headline text-2xl italic leading-snug text-secondary shadow-editorial md:p-10">
        Eine gute Geste halt, oder wie man es bei uns sagen würde: eine „Jute
        Jeste“.
      </p>
    </main>
  );
}
