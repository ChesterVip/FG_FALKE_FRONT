# FG Falke - Strona internetowa

Nowoczesna strona internetowa dla firmy FG Falke - firmy transportowo-logistycznej działającej między Polską a Szwajcarią.

## 🚀 Funkcjonalności

- **Responsywny design** - strona działa na wszystkich urządzeniach
- **Nowoczesny interfejs** - wykorzystuje Tailwind CSS i Framer Motion
- **Wielojęzyczność** - obsługa polskiego, niemieckiego i angielskiego
- **Animacje** - płynne animacje i przejścia
- **Formularz kontaktowy** - łatwy kontakt z firmą
- **SEO-friendly** - zoptymalizowana pod kątem wyszukiwarek

## 📋 Strony

- **Strona główna** (`/`) - prezentacja firmy i główne usługi
- **O firmie** (`/about`) - historia, właściciel, wartości firmy
- **Usługi** (`/services`) - szczegółowy opis oferowanych usług
- **Kontakt** (`/contact`) - formularz kontaktowy i dane firmy

## 🛠 Technologie

- **React 18** - framework JavaScript
- **TypeScript** - typowany JavaScript
- **Vite** - szybki bundler i dev server
- **Tailwind CSS** - utility-first CSS framework
- **Framer Motion** - biblioteka animacji
- **React Router** - routing w aplikacji
- **Lucide React** - ikony

## 🚀 Instalacja i uruchomienie

### Wymagania
- Node.js (wersja 16 lub nowsza)
- npm lub yarn

### Kroki instalacji

1. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

2. **Uruchom serwer deweloperski:**
   ```bash
   npm run dev
   ```

3. **Otwórz przeglądarkę:**
   Przejdź do `http://localhost:3000`

### Dostępne skrypty

- `npm run dev` - uruchamia serwer deweloperski
- `npm run build` - buduje aplikację do produkcji
- `npm run preview` - podgląd zbudowanej aplikacji
- `npm run lint` - sprawdza kod pod kątem błędów

## 📁 Struktura projektu

```
src/
├── components/          # Komponenty React
│   ├── Header.tsx      # Nagłówek strony
│   └── Footer.tsx      # Stopka strony
├── pages/              # Strony aplikacji
│   ├── Home.tsx        # Strona główna
│   ├── About.tsx       # O firmie
│   ├── Services.tsx    # Usługi
│   └── Contact.tsx     # Kontakt
├── assets/             # Pliki statyczne
├── types/              # Definicje TypeScript
├── utils/              # Funkcje pomocnicze
├── App.tsx             # Główny komponent
├── main.tsx            # Punkt wejścia
└── index.css           # Style globalne
```

## 🎨 Personalizacja

### Kolory
Główne kolory firmy można zmienić w pliku `tailwind.config.js`:
- Primary: niebieski (#0ea5e9)
- Secondary: żółty (#eab308)

### Treść
Wszystkie teksty znajdują się w komponentach React i można je łatwo edytować.

### Logo
Aktualnie używany jest tekstowy logo "FG". Można go zastąpić prawdziwym logo w komponencie `Header.tsx`.

## 📱 Responsywność

Strona jest w pełni responsywna i dostosowuje się do:
- Urządzeń mobilnych (< 768px)
- Tabletów (768px - 1024px)
- Desktopów (> 1024px)

## 🌐 SEO

Strona zawiera:
- Meta tagi w `index.html`
- Semantyczny HTML
- Optymalizowane obrazy
- Strukturalne dane

## 📧 Kontakt

**FG Falke**
- Właściciel: Mariusz Sokołowski
- Telefon: +41 76 237 33 01
- E-mail: mariusz.sokolowski@fgfalke.eu
- Strona: fgfalke.eu

## 📄 Licencja

MIT License - projekt jest dostępny na licencji MIT.

---

**Wykonane dla FG Falke** - Profesjonalne usługi transportowe między Polską a Szwajcarią.
