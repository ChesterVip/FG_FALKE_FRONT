# Instrukcje wdrożenia - FG Falke

## 🚀 Wdrożenie na serwerze home.pl

### Opcja 1: Hosting statyczny (zalecane)

1. **Zbuduj aplikację:**
   ```bash
   npm run build
   ```

2. **Skopiuj zawartość katalogu `dist/` na serwer home.pl**

3. **Skonfiguruj serwer web** (Apache/Nginx) aby:
   - Obsługiwał pliki statyczne z katalogu `dist/`
   - Przekierowywał wszystkie ścieżki na `index.html` (dla React Router)

### Opcja 2: Vercel (darmowe)

1. **Zainstaluj Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Zaloguj się i wdróż:**
   ```bash
   vercel login
   vercel --prod
   ```

3. **Dodaj domenę customową** (fgfalke.eu) w panelu Vercel

### Opcja 3: Netlify (darmowe)

1. **Zbuduj projekt:**
   ```bash
   npm run build
   ```

2. **Przeciągnij katalog `dist/` na netlify.com**

3. **Skonfiguruj domenę** w panelu Netlify

## ⚙️ Konfiguracja dla home.pl

### Struktura plików na serwerze:
```
public_html/
├── index.html
├── favicon.svg
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── _redirects (dla Netlify)
```

### Plik .htaccess (dla Apache):
```apache
RewriteEngine On
RewriteBase /

# Handle Angular and React Router
RewriteRule ^.*$ - [NC,L,QSA]
RewriteRule ^(?!.*\.).*$ /index.html [NC,L,QSA]
```

### Plik _redirects (dla Netlify):
```
/*    /index.html   200
```

## 🔧 Zmiany przed wdrożeniem

### 1. Zaktualizuj domenę w package.json:
```json
{
  "homepage": "https://fgfalke.eu"
}
```

### 2. Sprawdź linki w kodzie:
- Wszystkie linki wewnętrzne powinny być względne
- Linki zewnętrzne powinny mieć `https://`

### 3. Optymalizacja SEO:
- Dodaj Google Analytics (jeśli potrzebne)
- Skonfiguruj Google Search Console
- Dodaj sitemap.xml

## 📧 Konfiguracja formularza kontaktowego

### Opcja 1: Netlify Forms (darmowe)
1. Dodaj `netlify` do formularza:
```html
<form name="contact" method="POST" data-netlify="true">
```

### Opcja 2: EmailJS
1. Zarejestruj się na emailjs.com
2. Skonfiguruj serwis e-mail
3. Dodaj klucze API do aplikacji

### Opcja 3: Backend API
1. Stwórz prosty endpoint na serwerze
2. Obsłuż wysyłanie e-maili przez PHP/Node.js

## 🌐 Konfiguracja DNS

### Rekordy DNS dla fgfalke.eu:
```
A     @        [IP serwera]
CNAME www      fgfalke.eu
```

### SSL Certificate:
- Włącz HTTPS w panelu home.pl
- Lub użyj Let's Encrypt (darmowe)

## 📱 Testowanie po wdrożeniu

1. **Sprawdź responsywność** na różnych urządzeniach
2. **Przetestuj formularz kontaktowy**
3. **Zweryfikuj wszystkie linki**
4. **Sprawdź prędkość ładowania** (Google PageSpeed)
5. **Przetestuj SEO** (Google Search Console)

## 🔍 Monitoring i analityka

### Google Analytics:
```html
<!-- Dodaj do index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console:
1. Zweryfikuj domenę
2. Prześlij sitemap
3. Monitoruj wydajność

## 🚨 Bezpieczeństwo

1. **Używaj HTTPS** wszędzie
2. **Regularnie aktualizuj** zależności
3. **Skonfiguruj CSP** (Content Security Policy)
4. **Dodaj rate limiting** dla formularzy

## 📞 Wsparcie techniczne

W przypadku problemów z wdrożeniem:
- Sprawdź logi serwera
- Zweryfikuj konfigurację DNS
- Przetestuj lokalnie przed wdrożeniem

---

**Gotowe do wdrożenia!** 🎉
