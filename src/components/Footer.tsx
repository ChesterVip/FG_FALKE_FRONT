import { Link } from 'react-router-dom'
import { Mail, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">FG Falke</h3>
                <p className="text-sm text-gray-400">Transport & Logistyka</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Profesjonalne usługi transportowe między Polską a Szwajcarią. 
              Rzetelność, terminowość i elastyczność w każdym zleceniu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  O firmie
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Cennik
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Transport międzynarodowy</li>
              <li>Logistyka</li>
              <li>Kierowcy zawodowi</li>
              <li>Transport chłodniczy</li>
              <li>Doradztwo transportowe</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">
                  Skontaktuj się przez formularz
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">
                  Profesjonalne usługi transportowe
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FG Falke. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">🇵🇱 Polski</span>
              <span className="text-gray-400 text-sm">🇩🇪 Deutsch</span>
              <span className="text-gray-400 text-sm">🇬🇧 English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
