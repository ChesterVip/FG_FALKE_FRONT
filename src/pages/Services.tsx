import { motion } from 'framer-motion'
import { 
  Truck, 
  Globe, 
  Clock, 
  Shield, 
  Thermometer, 
  Users, 
  FileText, 
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const mainServices = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Transport międzynarodowy",
      description: "Przewozy między Polską, Szwajcarią i Niemcami",
      features: [
        "Transport drogowy międzynarodowy",
        "Przewóz towarów w całej Europie",
        "Obsługa tranzytu przez Szwajcarię",
        "Dokumentacja przewozowa"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Usługi logistyczne",
      description: "Kompleksowa obsługa logistyczna i spedycyjna",
      features: [
        "Planowanie tras optymalnych",
        "Zarządzanie łańcuchem dostaw",
        "Współpraca B2B z firmami spedycyjnymi",
        "Optymalizacja floty"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Transport ekspresowy",
      description: "Szybkie i terminowe dostawy",
      features: [
        "Dostawy w trybie pilnym",
        "Transport ekspresowy",
        "Gwarancja terminowości",
        "Monitoring przesyłek"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Transport chłodniczy",
      description: "Przewóz towarów wymagających kontroli temperatury",
      features: [
        "Chłodnie i mroźnie",
        "Kontrola temperatury",
        "Transport żywności",
        "Certyfikaty HACCP"
      ],
      color: "from-cyan-500 to-cyan-600"
    }
  ]

  const additionalServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Kierowcy zawodowi",
      description: "Wykwalifikowani kierowcy z uprawnieniami CE, tachograf, BPT"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Doradztwo transportowe",
      description: "Planowanie tras, dokumentacja przewozowa, optymalizacja procesów"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Współpraca B2B",
      description: "Partnerska współpraca z firmami spedycyjnymi i logistycznymi"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Obsługa transgraniczna",
      description: "Specjalizacja w transporcie między Polską a Szwajcarią"
    }
  ]

  const advantages = [
    "Ponad 7 lat doświadczenia w transporcie międzynarodowym (od 2018)",
    "Znajomość przepisów UE i Szwajcarii",
    "Współpraca z dużymi firmami logistycznymi",
    "Nowoczesne narzędzia IT i automatyzacja",
    "Elastyczne dopasowanie do potrzeb klientów",
    "Profesjonalna obsługa klienta"
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
              Nasze usługi
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Oferujemy kompleksowe rozwiązania transportowe i logistyczne 
              dostosowane do potrzeb firm działających na rynku polskim i szwajcarskim.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Główne usługi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nasze kluczowe usługi transportowe i logistyczne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-white/90">{service.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Obejmuje:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dodatkowe usługi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komplementarne usługi wspierające główną działalność transportową
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-lg p-3 text-primary-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dlaczego wybrać FG Falke?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nasze doświadczenie i profesjonalizm gwarantują najwyższą 
                jakość usług transportowych i logistycznych.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Chcesz skorzystać z naszych usług?
              </h3>
              <p className="text-primary-100 mb-6">
                Skontaktuj się z nami, aby omówić szczegóły współpracy 
                i otrzymać indywidualną ofertę dostosowaną do Twoich potrzeb.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:+41762373301" 
                  className="btn-secondary w-full inline-flex items-center justify-center"
                >
                  <ArrowRight className="mr-2 w-4 h-4" />
                  Zadzwoń teraz
                </a>
                <a 
                  href="mailto:mariusz.sokolowski@fgfalke.eu"
                  className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 w-full inline-flex items-center justify-center"
                >
                  Napisz e-mail
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jak pracujemy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proces realizacji zleceń transportowych krok po kroku
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Konsultacja
              </h3>
              <p className="text-gray-600">
                Omawiamy szczegóły zlecenia i dopasowujemy rozwiązania 
                do Twoich potrzeb.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Planowanie
              </h3>
              <p className="text-gray-600">
                Opracowujemy optymalną trasę i harmonogram, 
                przygotowujemy dokumentację.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Realizacja
              </h3>
              <p className="text-gray-600">
                Wykonujemy transport zgodnie z ustalonymi 
                warunkami i terminami.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
