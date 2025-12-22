# Strona Weselna - Instrukcja Obsługi

## 📁 Struktura Folderów

Strona jest zorganizowana w prosty sposób, aby łatwo było uzupełniać treści:

```
/
├── index.html          # Główny plik strony
├── styles/
│   └── main.css       # Style strony
├── scripts/
│   └── main.js        # Interaktywność strony
├── images/
│   ├── hero/          # Zdjęcie tła głównego
│   ├── para-mloda/    # Zdjęcia pary młodej
│   ├── ceremonia/     # Zdjęcia kościoła/miejsca ceremonii
│   ├── wesele/        # Zdjęcia sali weselnej
│   └── galeria/       # Zdjęcia do galerii
└── tresci/            # Pliki tekstowe z treściami
```

## 🖼️ Jak Dodawać Zdjęcia

### 1. Zdjęcie Główne (Hero)
- Folder: `images/hero/`
- Nazwa pliku: `hero-bg.jpg`
- Zalecany rozmiar: 1920x1080px lub większy
- To zdjęcie pojawi się jako tło na górze strony

### 2. Para Młoda
- Folder: `images/para-mloda/`
- Pliki:
  - `panna-mloda.jpg` - zdjęcie panny młodej
  - `pan-mlody.jpg` - zdjęcie pana młodego
- Zalecany rozmiar: 500x500px (kwadratowe)

### 3. Ceremonia
- Folder: `images/ceremonia/`
- Nazwa pliku: `kosciol.jpg`
- Zdjęcie kościoła lub miejsca ceremonii

### 4. Wesele
- Folder: `images/wesele/`
- Nazwa pliku: `sala.jpg`
- Zdjęcie sali weselnej

### 5. Galeria
- Folder: `images/galeria/`
- Nazwy plików: `zdjecie1.jpg`, `zdjecie2.jpg`, itd.
- Możesz dodać więcej zdjęć - wystarczy dodać kolejne tagi `<img>` w sekcji galerii

## ✏️ Jak Edytować Treści

### Edycja w pliku index.html:

1. **Imiona i data**
   - Znajdź: `<h1>Anna & Piotr</h1>`
   - Znajdź: `<p class="date">15 czerwca 2024</p>`

2. **Opisy pary młodej**
   - Znajdź sekcję `<section id="para-mloda">`
   - Zmień imiona, nazwiska i opisy

3. **Historia miłości**
   - Znajdź: `<div class="love-story">`
   - Zmień tekst w paragrafie

4. **Szczegóły ceremonii**
   - Znajdź: `<section id="ceremonia">`
   - Zmień nazwę kościoła, adres, godzinę

5. **Szczegóły wesela**
   - Znajdź: `<section id="wesele">`
   - Zmień nazwę miejsca, adres, godzinę

## 🎨 Zmiana Kolorów

W pliku `styles/main.css` możesz zmienić kolory:
- `#8B7355` - główny brązowy kolor
- `#D4AF37` - złoty akcent
- `#F9F7F4` - jasne tło

## 🚀 Uruchomienie Strony

1. Otwórz plik `index.html` w przeglądarce
2. Lub użyj lokalnego serwera (np. Live Server w VS Code)

## 📝 Dodatkowe Funkcje

- **Płynne przewijanie** - kliknięcie w menu płynnie przewija do sekcji
- **Powiększanie zdjęć** - kliknięcie na zdjęcie w galerii je powiększa
- **Formularz RSVP** - zbiera potwierdzenia obecności
- **Responsywność** - strona działa na telefonach i tabletach

## 💡 Wskazówki

- Używaj zdjęć w formacie JPG (mniejszy rozmiar)
- Przed wgraniem, zmniejsz rozmiar zdjęć (max 2MB każde)
- Zachowaj nazwy plików dokładnie jak w instrukcji
- Testuj stronę na różnych urządzeniach

Powodzenia z przygotowaniami do ślubu! 💍
