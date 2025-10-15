import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Globe,
  Shield
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 4000)
    } catch (error) {
      console.error('Form submit error', error)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Formularz kontaktowy",
      value: "Napisz do nas",
      link: "#form",
      description: "Użyj formularza poniżej"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Czas odpowiedzi",
      value: "Do 24h",
      link: null,
      description: "Odpowiadamy w ciągu jednego dnia"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Obszar działalności",
      value: "PL/CH/DE",
      link: null,
      description: "Polska, Szwajcaria, Niemcy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Profesjonalizm",
      value: "Gwarantowany",
      link: null,
      description: "Doświadczenie i rzetelność"
    }
  ]

  const languages = [
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
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
              Kontakt
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Skontaktuj się z nami, aby omówić szczegóły współpracy 
              i otrzymać indywidualną ofertę transportową.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
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
              Skontaktuj się z nami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jesteśmy dostępni w różnych językach i chętnie odpowiemy na Twoje pytania
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-primary-600 hover:text-primary-700 font-medium block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-primary-600 font-medium mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Komunikujemy się w językach
            </h3>
            <div className="flex justify-center space-x-8">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{lang.flag}</div>
                  <p className="text-gray-700 font-medium">{lang.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wyślij wiadomość
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin. 
                Opisz swoje potrzeby transportowe, a przygotujemy dla Ciebie 
                indywidualną ofertę.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Dlaczego FG Falke?
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-semibold">Doświadczenie</p>
                      <p>Ponad 7 lat w transporcie międzynarodowym (od 2018)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-semibold">Terminowość</p>
                      <p>Zawsze na czas, zgodnie z umową</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-semibold">Międzynarodowość</p>
                      <p>Znajomość przepisów PL/CH/DE</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                id="form"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Firma
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Temat *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="transport">Transport międzynarodowy</option>
                    <option value="logistyka">Usługi logistyczne</option>
                    <option value="kierowca">Kierowca zawodowy</option>
                    <option value="chlodniczy">Transport chłodniczy</option>
                    <option value="ekspresowy">Transport ekspresowy</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Opisz swoje potrzeby transportowe..."
                  />
                </div>

                {isSubmitted ? (
                  <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>Wiadomość została wysłana!</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary w-full inline-flex items-center justify-center"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Wyślij wiadomość
                  </button>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
