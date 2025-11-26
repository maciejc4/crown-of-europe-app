# Korona Gór Polskich

Aplikacja do śledzenia postępu w zdobywaniu szczytów Korony Gór Polskich.

## Funkcje

- 📊 **Tabela szczytów** - 28 najwyższych szczytów polskich pasm górskich
- ✅ **Oznaczanie zdobytych** - zaznacz szczyty, które już zdobyłeś
- 🔄 **Sortowanie** - sortuj po nazwie, wysokości, regionie lub trudności
- 📱 **Szczegóły szczytu** - kliknij na szczyt, aby zobaczyć:
  - Zdjęcie
  - Opis
  - Mapę OpenStreetMap
  - Dostępne szlaki turystyczne
- 📄 **Eksport PDF** - wygeneruj raport z listą zdobytych i niezdobytych szczytów
- 💾 **Import/Eksport JSON** - zapisz i wczytaj swoje postępy
- 🎨 **Górski motyw** - nowoczesny design inspirowany górami

## Uruchomienie lokalne

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm start

# Aplikacja będzie dostępna pod adresem http://localhost:4200
```

## Budowanie

```bash
npm run build
```

## Testy

```bash
npm test
```

## Konfiguracja Google AdWords

Aby dodać reklamy Google AdWords do aplikacji:

### 1. Utwórz konto Google AdSense
1. Przejdź do [Google AdSense](https://www.google.com/adsense/)
2. Zarejestruj się lub zaloguj na swoje konto Google
3. Dodaj swoją stronę do weryfikacji

### 2. Uzyskaj kod reklamy
1. Po zatwierdzeniu strony, przejdź do sekcji "Reklamy"
2. Wybierz "Według jednostki reklamowej" → "Utwórz nową jednostkę"
3. Wybierz typ reklamy (np. "Reklama displayowa")
4. Nazwij jednostkę i wybierz rozmiar (zalecany: responsywny lub 728x90 dla baneru)
5. Skopiuj wygenerowany kod

### 3. Dodaj kod do aplikacji

#### Opcja A: Bezpośrednio w index.html
Dodaj skrypt AdSense w sekcji `<head>`:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossorigin="anonymous"></script>
```

#### Opcja B: W komponencie reklamy
W pliku `src/app/app.html`, zamień placeholder reklamy:

```html
<!-- Ad Container -->
<aside class="ad-container">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXX"
       data-ad-slot="YYYYYYYYYY"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</aside>
```

### 4. Zmienne do uzupełnienia
- `ca-pub-XXXXXXXXXX` - Twój identyfikator wydawcy AdSense
- `YYYYYYYYYY` - Identyfikator jednostki reklamowej

### Wskazówki
- Reklamy mogą nie wyświetlać się lokalnie (localhost)
- Potrzebujesz zatwierdzonej domeny w AdSense
- Reklamy zaczną się wyświetlać po weryfikacji strony (może to potrwać kilka dni)

## Technologie

- Angular 21
- TypeScript
- SCSS
- jsPDF (generowanie PDF)
- OpenStreetMap (mapy)

## Licencja

MIT

## Autor

Projekt utworzony z ❤️ dla miłośników polskich gór.
