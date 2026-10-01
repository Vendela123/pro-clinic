const treatments = [
  {
    name: "Ansiktsbehandling",
    price: "1 250 kr",
    time: "60 min",
    description: "Djup rengöring, exfoliering och återfuktande mask för klarare, mjukare hud.",
  },
  {
    name: "Massage",
    price: "1 050 kr",
    time: "60 min",
    description: "Avslappnande massage som sänker spänningar och återhämtar både kropp och sinne.",
  },
  {
    name: "Medicinsk fotvård",
    price: "890 kr",
    time: "45 min",
    description: "Professionell vård för fotproblem, hårda hälor och skadad hud.",
  },
  {
    name: "Laserbehandling",
    price: "1 590 kr",
    time: "30–45 min",
    description: "Målmedveten behandling för hårborttagning och jämnare hudton.",
  },
];

const offers = [
  { title: "Nyhetsbrev & erbjudanden", text: "Få tips om nya behandlingar, kampanjer och exklusiva erbjudanden." },
  { title: "Familj/partnersbesök", text: "Särskilda paket för dig som vill boka tillsammans." },
  { title: "Välkommen till Pro Clinic", text: "Boka ett gratis samtal för att hitta rätt behandling för just dig." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f7f2ec,_#f7f5f3_35%,_#f5f5f4_100%)] text-stone-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-stone-100">
            PC
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Pro Clinic</p>
            <p className="text-sm text-stone-700">Gothenburg</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
          <a href="#treatments" className="transition hover:text-stone-950">Behandlingar</a>
          <a href="#team" className="transition hover:text-stone-950">Team</a>
          <a href="#offers" className="transition hover:text-stone-950">Erbjudanden</a>
          <a href="#contact" className="transition hover:text-stone-950">Kontakt</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-stone-300 bg-white/80 px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm">
            SV / EN
          </button>
          <a
            href="#contact"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 shadow-sm transition hover:bg-stone-700"
          >
            Boka samtal
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pt-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-stone-300 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-700">
              Personlig skönhetsvård
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-stone-900 md:text-6xl">
              Välkommen till Pro Clinic.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Behandlingar som kombinerar expertis, omsorg och moderna resultat – skräddarsydda för dig som vill känna dig välmående och vacker.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#treatments"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
              >
                Se behandlingar
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-400"
              >
                Kontakta oss
              </a>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                <dt className="text-xs uppercase tracking-[0.2em] text-stone-500">Behandlingar</dt>
                <dd className="mt-2 text-2xl font-semibold text-stone-900">10+</dd>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                <dt className="text-xs uppercase tracking-[0.2em] text-stone-500">Erfarenhet</dt>
                <dd className="mt-2 text-2xl font-semibold text-stone-900">15 år</dd>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-sm">
                <dt className="text-xs uppercase tracking-[0.2em] text-stone-500">Vårdgivare</dt>
                <dd className="mt-2 text-2xl font-semibold text-stone-900">Team</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Populärt just nu</p>
              <h2 className="mt-4 text-2xl font-semibold text-stone-900">Kombinationspaket</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                  <div>
                    <p className="text-sm text-stone-500">Ansiktsbehandling</p>
                    <p className="font-medium text-stone-900">Glow Ritual</p>
                  </div>
                  <span className="text-base font-semibold text-stone-900">1 250 kr</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                  <div>
                    <p className="text-sm text-stone-500">Massage</p>
                    <p className="font-medium text-stone-900">Deep Reset</p>
                  </div>
                  <span className="text-base font-semibold text-stone-900">1 050 kr</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                  <div>
                    <p className="text-sm text-stone-500">Fotvård</p>
                    <p className="font-medium text-stone-900">Foot Care</p>
                  </div>
                  <span className="text-base font-semibold text-stone-900">890 kr</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="treatments" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Behandlingar</p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">Välj vad du behöver</h2>
            </div>
            <a href="#contact" className="hidden text-sm font-medium text-stone-700 underline-offset-4 hover:underline md:inline-flex">
              Fråga om bokning
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {treatments.map((treatment) => (
              <article key={treatment.name} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-5 h-32 rounded-[1.25rem] bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100" />
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-stone-900">{treatment.name}</h3>
                  <span className="rounded-full bg-stone-100 px-2 py-1 text-xs font-medium text-stone-700">{treatment.time}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-stone-700">{treatment.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
                  <span className="text-lg font-semibold text-stone-900">{treatment.price}</span>
                  <a href="#contact" className="text-sm font-medium text-stone-700 underline-offset-4 hover:underline">
                    Kontakta oss
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="bg-stone-900 py-16 text-stone-100">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Vårt team</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Personlig vård från erfarna händer</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Elin", role: "Hudterapeut", text: "Specialiserad på ansiktsbehandlingar och hudvård med fokus på balans och lyster." },
                { name: "Maja", role: "Massage- och välbefinnandeterapeut", text: "Skapar avslappnande behandlingar som återställer spänningar och energi." },
                { name: "Sofia", role: "Fotvårdsspecialist", text: "Hjälper dig med fotvård, behandlingar och råd för daglig komfort." },
              ].map((member) => (
                <article key={member.name} className="rounded-[1.75rem] border border-stone-700 bg-white/5 p-6">
                  <div className="mb-5 h-52 rounded-[1.5rem] bg-gradient-to-br from-stone-700 via-stone-600 to-amber-100/40" />
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-400">{member.role}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">{member.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="offers" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Erbjudanden</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">Nyheter, kampanjer och specialerbjudanden</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Aktuellt</p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-900">{offer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">{offer.text}</p>
                <a href="#contact" className="mt-6 inline-flex text-sm font-medium text-stone-700 underline-offset-4 hover:underline">
                  Boka tid
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-stone-100 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Kontakt</p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">Boka ett samtal eller skicka ett meddelande</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-stone-700">
                Vi hanterar bokningar och frågor via telefon, SMS eller e-post. Ingen onlinebokning än, men vi gör det enkelt att komma i kontakt.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Telefon</p>
                  <a href="tel:+46701234567" className="mt-2 block text-lg font-medium text-stone-900">+46 70 123 45 67</a>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">SMS</p>
                  <a href="sms:+46701234567" className="mt-2 block text-lg font-medium text-stone-900">+46 70 123 45 67</a>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">E-post</p>
                  <a href="mailto:hej@proclinic.se" className="mt-2 block text-lg font-medium text-stone-900">hej@proclinic.se</a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-700">Namn</label>
                  <input className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-3 text-stone-900 outline-none ring-0 placeholder:text-stone-400" placeholder="Ditt namn" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-700">E-post</label>
                  <input className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-3 text-stone-900 outline-none ring-0 placeholder:text-stone-400" placeholder="namn@email.se" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-700">Meddelande</label>
                  <textarea className="min-h-32 w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-3 text-stone-900 outline-none ring-0 placeholder:text-stone-400" placeholder="Berätta vad du vill boka eller vilken behandling du är intresserad av." />
                </div>
                <button type="button" className="w-full rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700">
                  Skicka meddelande
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Nyhetsbrev</p>
                <h2 className="mt-2 text-3xl font-semibold text-stone-900">Få nyheter, kampanjer och specialerbjudanden</h2>
              </div>
              <div className="flex gap-3">
                <input className="min-w-0 flex-1 rounded-full border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400" placeholder="Din e-post" />
                <button className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-50">Prenumerera</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-medium text-stone-900">Pro Clinic</p>
            <p>Skönhet, massage och personlig vård i Göteborg.</p>
          </div>
          <div className="flex gap-6">
            <a href="#treatments" className="hover:text-stone-900">Behandlingar</a>
            <a href="#team" className="hover:text-stone-900">Team</a>
            <a href="#offers" className="hover:text-stone-900">Erbjudanden</a>
            <a href="#contact" className="hover:text-stone-900">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
