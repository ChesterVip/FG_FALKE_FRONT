import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Truck, 
  Globe, 
  Clock, 
  Shield, 
  ArrowRight, 
  Mail,
  CheckCircle
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transport międzynarodowy",
      description: "Przewozy między Polską, Szwajcarią i Niemcami"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Logistyka",
      description: "Kompleksowa obsługa logistyczna i spedycyjna"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Transport ekspresowy",
      description: "Szybkie i terminowe dostawy"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Kierowcy zawodowi",
      description: "Wykwalifikowani kierowcy z uprawnieniami CE"
    }
  ]

  const advantages = [
    "Ponad 7 lat doświadczenia w transporcie międzynarodowym (od 2018)",
    "Znajomość przepisów UE i Szwajcarii",
    "Współpraca z dużymi firmami logistycznymi",
    "Nowoczesne narzędzia IT",
    "Elastyczne dopasowanie do potrzeb klientów",
    "Transgraniczna działalność"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                FG Falke
                <span className="block text-secondary-300">Transport & Logistyka</span>
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Profesjonalne usługi transportowe między Polską a Szwajcarią. 
                Rzetelność, terminowość i elastyczność w każdym zleceniu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                  Skontaktuj się z nami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/services" className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                  Nasze usługi
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Skontaktuj się z nami</h3>
                <p className="text-lg mb-6">
                  Potrzebujesz transportu? Masz pytania? 
                  Skorzystaj z formularza kontaktowego lub przejdź do sekcji kontakt.
                </p>
                <div className="flex flex-col space-y-3">
                  <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                    <Mail className="mr-2 w-5 h-5" />
                    Napisz do nas
                  </Link>
                  <Link to="/services" className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                    Nasze usługi
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Nasze usługi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy kompleksowe rozwiązania transportowe i logistyczne 
              dla firm działających na rynku polskim i szwajcarskim.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dlaczego FG Falke?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Jesteśmy firmą transportowo-logistyczną z doświadczeniem w pracy 
                między Polską a Szwajcarią. Nasze zaangażowanie i profesjonalizm 
                gwarantują najwyższą jakość usług.
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

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Potrzebujesz transportu?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś! Oferujemy profesjonalne usługi 
              transportowe dostosowane do Twoich potrzeb.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn-secondary">
                <Mail className="mr-2 w-5 h-5" />
                Skontaktuj się z nami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
