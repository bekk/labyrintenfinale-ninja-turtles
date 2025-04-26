export function Info() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">For enkelpersoner</h2>
            <p>
              Vi tilbyr en innovativ plattform som forenkler prosessen med å
              finne samarbeidsmuligheter med produksjoner som trenger din
              kunnskap og ferdigheter innen filmproduksjon. Med våre tjenester
              kan du raskt og effektivt koble deg sammen med relevante bedrifter
              som ønsker å samarbeide.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/public/en.png"
              alt="Student illustration"
              className="w-64 h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/public/prod.png"
              alt="Company illustration"
              className="w-64 h-auto"
            />
          </div>

          <div className="md:w-1/2 ">
            <h2 className="text-3xl font-bold mb-4">For produksjonsteam</h2>
            <p>
              Vår plattform tilbyr en unik mulighet for bedrifter å finne
              passende fagfolk å samarbeide med. Med våre tjenester kan
              bedrifter identifisere og nå ut til relevante fagfolk som matcher
              deres behov. Enten det er for å finne lydtekniker, fotograf eller
              vanngutt, gir vår plattform en effektiv måte for bedrifter å koble
              seg sammen med talentfulle enkeltpersoner som kan bidra til å
              realisere deres visjoner. Samtidig som bedrifter kan unngå å fly
              inn store produksjonsteam og kan bruke lokale ressurser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
