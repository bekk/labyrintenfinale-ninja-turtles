export function Info() {
  return (
    <section className="py-64 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">For enkeltpersoner</h2>
            <p className="text-xl">
              Vi tilbyr en plattform som gjør det enkelt for deg å finne
              produksjoner som trenger din kompetanse innen filmproduksjon, og
              raskt koble deg med relevante bedrifter.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/en.png"
              alt="Person illustration"
              className="w-64 h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/prod.png"
              alt="Company illustration"
              className="w-64 h-auto"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">For produksjonsteam</h2>
            <p className="text-xl">
              Vår plattform gjør det enkelt for bedrifter å finne relevante
              fagfolk, som lydteknikere, fotografer og produsenter, lokalt.
              Bedrifter kan effektivt koble seg med talentfulle enkeltpersoner
              som hjelper dem å realisere sine visjoner, uten behov for å fly
              inn store produksjonsteam.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Fokus på bærekraft</h2>
            <p className="text-xl">
              Vi bidrar til å redusere klimagassutslipp, ved å koble
              pruduksjoner opp med lokale og gode fagfolk.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/baerekraft.png"
              alt="Bærekraft illustration"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
