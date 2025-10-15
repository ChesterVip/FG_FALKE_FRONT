import { motion } from 'framer-motion'
import { 
  MapPin, 
  Globe, 
  Shield,
  Clock
} from 'lucide-react'

const About = () => {

  const companyValues = [
    {
      title: "Rzetelność",
      description: "Każde zlecenie realizujemy z najwyższą starannością i dbałością o szczegóły."
    },
    {
      title: "Terminowość",
      description: "Dostawy realizujemy zgodnie z ustalonymi harmonogramami."
    },
    {
      title: "Elastyczność",
      description: "Dopasowujemy się do indywidualnych potrzeb naszych klientów."
    },
    {
      title: "Współpraca",
      description: "Budujemy długoterminowe relacje partnerskie z klientami."
    }
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
              O firmie FG Falke
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Poznaj naszą historię, wartości i zespół profesjonalistów, 
              którzy każdego dnia dbają o najwyższą jakość usług transportowych.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nasza historia
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  FG Falke to firma transportowo-logistyczna prowadzona przez Mariusza Sokołowskiego, 
                  działająca na styku rynku polskiego i szwajcarskiego. Nazwa firmy nawiązuje do 
                  symbolu sokoła (niem. Falke) - symbolu precyzji, niezależności i szybkości.
                </p>
                <p>
                  Firma została założona z myślą o profesjonalnej obsłudze transportowej między 
                  Polską a Szwajcarią, oferując kompleksowe rozwiązania logistyczne dla firm 
                  działających na obu rynkach.
                </p>
                <p>
                  Firma działa od 2018 roku, co oznacza ponad 7 lat doświadczenia w transporcie międzynarodowym. 
                  Dzięki temu doświadczeniu możemy zapewnić najwyższą jakość usług zgodną z międzynarodowymi standardami.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informacje o firmie
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-semibold">Siedziba</p>
                    <p className="text-gray-600">Szczurowa, województwo małopolskie</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-semibold">Obszar działalności</p>
                    <p className="text-gray-600">Polska / Szwajcaria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-semibold">Forma prawna</p>
                    <p className="text-gray-600">JDG - Jednoosobowa działalność gospodarcza</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nasze wartości
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Podstawą naszej działalności są wartości, które gwarantują 
              najwyższą jakość usług i zadowolenie naszych klientów.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nowoczesne technologie
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              FG Falke rozwija własne narzędzia IT do obsługi transportu, 
              zapewniając najwyższą efektywność i transparentność procesów.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Clock className="w-8 h-8 text-secondary-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Platforma zarządzania</h3>
              <p className="text-primary-100">
                Aplikacja webowa do zarządzania kierowcami i zleceniami (w trakcie projektowania)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Globe className="w-8 h-8 text-secondary-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integracje GPS</h3>
              <p className="text-primary-100">
                Integracje z systemami GPS, mapami i formularzami n8n
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Shield className="w-8 h-8 text-secondary-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automatyzacja</h3>
              <p className="text-primary-100">
                Automatyzacja przesyłania dokumentów, raportów i danych flotowych
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
