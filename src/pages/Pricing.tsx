import { motion } from 'framer-motion'
import { 
  Check, 
  ArrowRight, 
  FileText, 
  Truck, 
  Calculator
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const perks = [
    "Obsługa PL/CH/DE",
    "Dokumenty dwujęzyczne (PL/DE)",
    "Wsparcie e‑mail",
    "Szablony i checklisty",
  ]

  const tiers = [
    {
      id: "ckz",
      icon: FileText,
      title: "CKZ – Udostępnianie pod licencję transportową",
      subtitle: "Certyfikat Kompetencji Zawodowych na licencję",
      price: "od 300 zł",
      priceNote: "miesięcznie netto na FV - pierwszy pojazd w cenie, każdy kolejny 100 zł",
      cta: "Zamów CKZ",
      features: [
        "Udostępnienie CKZ pod licencję transportową",
        "Pierwszy pojazd: 300 zł miesięcznie netto",
        "Każdy kolejny pojazd: 100 zł miesięcznie netto",
        "Wymagane dla firm transportowych",
        "Obowiązkowe również dla busów (transport osób)",
        "Wsparcie przy składaniu wniosków o licencję",
        "Aktualizacja dokumentacji zgodnie z przepisami",
      ],
    },
    {
      id: "consulting",
      icon: Truck,
      title: "Doradztwo transportowe",
      subtitle: "Prawo, procesy, licencje, compliance",
      price: "290 zł/h",
      priceNote: "rozliczenie godzinowe, netto",
      cta: "Umów konsultację",
      features: [
        "Licencje, wypisy, zgłoszenia (PL/CH/DE)",
        "Tachografy: polityki, procedury, archiwizacja",
        "Umowy i regulaminy dla kierowców",
        "Planowanie tras, koszty, KPI, stawki",
        "Przygotowanie do kontroli ITD/ BAG / kantonalnych",
      ],
    },
    {
      id: "payroll",
      icon: Calculator,
      title: "Rozliczanie kierowców",
      subtitle: "Ewidencja czasu pracy, diety, narzuty, raporty",
      price: "od 119 zł/ kierowca / m‑c",
      priceNote: "abonament, netto",
      cta: "Start rozliczeń",
      features: [
        "Import z tachografu / GPS (DDD, CSV)",
        "Normy PL/DE/CH – doby, nadgodziny, nocki",
        "Diety zagraniczne, ryczałty, płaca minimalna (MiLoG/CH)",
        "Raport przejrzystości + plik do księgowości",
        "Archiwum 24 m-ce, alerty niezgodności",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CKZ, doradztwo transportowe i rozliczanie kierowców
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Udostępnianie CKZ pod licencję transportową, doradztwo i rozliczanie kierowców. 
              Działamy w Polsce, Szwajcarii i Niemczech. Transparentne zasady, jasny cennik.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {perks.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-sm bg-white/10 backdrop-blur-sm"
                >
                  <Check className="h-4 w-4" /> {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is CKZ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Co to jest CKZ (Certyfikat Kompetencji Zawodowych)?</h2>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>CKZ – Certyfikat Kompetencji Zawodowych Przewoźnika Drogowego</strong> to dokument potwierdzający posiadanie odpowiedniej wiedzy i kwalifikacji do prowadzenia działalności gospodarczej w zakresie
                <strong>transportu drogowego rzeczy lub osób</strong>. Jest to obowiązkowy dokument wymagany przez przepisy Unii Europejskiej oraz polską <em>Ustawę o transporcie drogowym</em>.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900">Kiedy wymagany jest CKZ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Certyfikat jest wymagany od 2004 roku, natomiast od <strong>21 maja 2022 roku</strong> obowiązek jego posiadania rozszerzono również na firmy wykonujące międzynarodowy transport pojazdami o DMC powyżej 2,5 tony.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>🚛 <strong>Transport drogowy rzeczy</strong> – pojazdy lub zestawy o DMC powyżej 2,5 t (międzynarodowy) lub powyżej 3,5 t (krajowy),</li>
                <li>🧍‍♂️ <strong>Transport drogowy osób</strong> – autobusy lub busy mające więcej niż 9 miejsc łącznie z kierowcą.</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Certyfikat wydawany jest <strong>osobie fizycznej</strong>, która pełni funkcję <strong>zarządzającego transportem</strong> w przedsiębiorstwie (zgodnie z Rozporządzeniem (WE) nr 1071/2009).
              </p>

              <h3 className="text-2xl font-semibold text-gray-900">Kto musi posiadać CKZ?</h3>
              <p className="text-gray-700 leading-relaxed">
                CKZ musi posiadać każda firma, która ubiega się o:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>licencję wspólnotową na transport międzynarodowy,</li>
                <li>zezwolenie na wykonywanie zawodu przewoźnika drogowego,</li>
                <li>licencję krajową w transporcie drogowym rzeczy lub osób.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Firmy spedycyjne, które <strong>nie wykonują przewozów własnymi pojazdami</strong>, nie muszą posiadać CKZ.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900">Bez CKZ nie można:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>uzyskać zezwolenia na wykonywanie zawodu przewoźnika drogowego,</li>
                <li>otrzymać licencji krajowej lub wspólnotowej,</li>
                <li>prowadzić legalnie działalności transportowej zgodnej z przepisami UE.</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Co oferujemy:</h3>
              
              <div className="bg-primary-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-primary-800 mb-2">Cennik CKZ (miesięcznie na FV):</h4>
                <ul className="text-primary-700 space-y-1">
                  <li>• <strong>300 zł netto</strong> - pierwszy pojazd w firmie</li>
                  <li>• <strong>100 zł netto</strong> - każdy kolejny pojazd</li>
                </ul>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>Udostępnienie <strong>osoby z Certyfikatem Kompetencji Zawodowych</strong> pod licencję transportową,</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>Obsługa pojazdów według cennika (pierwszy 300 zł, kolejne 100 zł miesięcznie),</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>Pomoc przy składaniu wniosków o licencje i zezwolenia,</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>Aktualizacja dokumentacji zgodnie z przepisami (UE 1071/2009, 1072/2009, 1073/2009),</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>Wsparcie przy kontrolach ITD, WITD, GITD i innych organów,</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>Dostęp do bazy wiedzy, wzorów dokumentów i procedur transportowych.</span>
                </li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mt-6 p-4 bg-white rounded-lg border-l-4 border-primary-500">
                Dzięki współpracy z FG Falke masz pewność, że Twoja firma spełnia wszystkie wymogi formalne, a proces uzyskania lub utrzymania licencji transportowej przebiega sprawnie i zgodnie z prawem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cennik</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ceny netto. CKZ: 300 zł miesięcznie za pierwszy pojazd, 100 zł za każdy kolejny. 
              Możliwość rozliczeń w PLN lub CHF/EUR (kurs NBP/ECB z dnia wystawienia).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary-100 rounded-lg p-2">
                      <t.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <span className="uppercase tracking-wide text-xs text-gray-500 font-medium">Pakiet</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{t.subtitle}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">{t.price}</div>
                    <div className="text-xs text-gray-500">{t.priceNote}</div>
                  </div>
                  
                  <ul className="space-y-3 text-gray-700 mb-6">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className="h-4 w-4 mt-1 shrink-0 text-green-500" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="btn-primary w-full inline-flex items-center justify-center group">
                    {t.cta}
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Dodatki i usługi pokrewne</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Wdrożenie procedur tachografu</h4>
                <p className="text-gray-700 text-sm mb-3">Polityka użycia, pobory danych, archiwizacja, szkolenie kierowców.</p>
                <p className="text-sm font-medium text-primary-600">od 890 zł jednorazowo</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pakiet flota 10+ kierowców</h4>
                <p className="text-gray-700 text-sm mb-3">Stała opieka, kwartalne audyty, zniżki na rozliczenia.</p>
                <p className="text-sm font-medium text-primary-600">‑10% od cennika</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Szkolenie wewnętrzne (online)</h4>
                <p className="text-gray-700 text-sm mb-3">2–3 h: CKZ w praktyce, kontrola, dokumentacja, najczęstsze błędy.</p>
                <p className="text-sm font-medium text-primary-600">690 zł / sesja</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Jak pracujemy</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>Krótki wywiad i audyt dokumentów (10–20 min)</li>
                <li>Ustalenie zakresu i harmonogramu</li>
                <li>Dostarczenie materiałów / konfiguracja narzędzi</li>
                <li>Przekazanie checklist i raportów + omówienie</li>
                <li>Wsparcie po wdrożeniu (e‑mail)</li>
              </ol>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border-2 border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informacje i zastrzeżenia</h3>
              <div className="text-gray-700 text-sm space-y-3">
                <p>
                  Ceny netto. Do usług w Polsce doliczany jest podatek VAT zgodnie z obowiązującymi przepisami. 
                  Rozliczenia w CHF/EUR możliwe według kursu NBP/ECB z dnia wystawienia.
                </p>
                <p>
                  Rozliczanie kierowców realizujemy w oparciu o dostarczone pliki DDD/GPS i obowiązujące normy (PL/DE/CH). 
                  Klient odpowiada za poprawność danych wejściowych i decyzje kadrowo‑płacowe.
                </p>
                <p>
                  Usługi doradcze nie stanowią porady prawnej w rozumieniu przepisów – w razie potrzeby współpracujemy z kancelariami.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Porozmawiajmy o Twojej firmie</h3>
            <p className="text-xl text-primary-100 mb-8">
              Skontaktuj się z nami, aby omówić szczegóły współpracy i otrzymać indywidualną ofertę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary">
                Umów 30‑min konsultację
              </Link>
              <Link to="/contact" className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Poproś o wycenę
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
