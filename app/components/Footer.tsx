export function Footer() {
  return (
    <footer className="bg-[#D9E9FF] text-[#0A2343] px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">RIKSTEAM</h2>
            <p>riksteam@labyrinten.com</p>
            <p>+47 123 45 678</p>
            <p>
              <a
                href="https://maps.app.goo.gl/n7TSVyCzuxjdUYjp6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Thormøhlens Gate 55, 5006 Bergen
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">For enkeltpersoner</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/login" className="hover:underline">
                    Logg inn
                  </a>
                </li>
                <li>
                  <a href="/register" className="hover:underline">
                    Registrer deg
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">For Produksjonsteam</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/login" className="hover:underline">
                    Logg inn
                  </a>
                </li>
                <li>
                  <a href="/register" className="hover:underline">
                    Registrer deg
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Om oss</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/om-oss" className="hover:underline">
                    Les mer
                  </a>
                </li>
                <li>
                  <a href="/vårt-formål" className="hover:underline">
                    Vårt formål
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-xs">
          © {new Date().getFullYear()} RIKSTEAM. Laget av Labyrinten Consulting
          AS
        </div>
      </div>
    </footer>
  );
}
