# Instrukcja: Bezpośrednie wysyłanie do Google Sheets

## Krok 1: Stwórz Google Sheet
1. Idź na https://sheets.google.com
2. Stwórz nowy arkusz o nazwie "Potwierdzenia Wesele"
3. W pierwszym wierszu dodaj nagłówki:
   - A1: Data i godzina
   - B1: Imię i nazwisko  
   - C1: Email
   - D1: Telefon
   - E1: Liczba osób
   - F1: Dieta
   - G1: Dodatkowe informacje

## Krok 2: Stwórz Google Apps Script
1. W Google Sheets kliknij "Rozszerzenia" → "Apps Script"
2. Usuń domyślny kod i wklej ten:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Pobierz dane z FormData
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';
    const people = e.parameter.people || '';
    const diet = e.parameter.diet || '';
    const additional = e.parameter.additional || '';
    
    // Dodaj nowy wiersz z danymi
    sheet.appendRow([
      new Date().toLocaleString('pl-PL'), // Data i godzina
      name,
      email, 
      phone,
      people,
      diet,
      additional
    ]);
    
    return ContentService
      .createTextOutput('OK')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    return ContentService
      .createTextOutput('ERROR: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
```

## Krok 3: Wdróż skrypt
1. Kliknij "Wdróż" → "Nowe wdrożenie"
2. Kliknij ikonę koła zębatego obok "Typ"
3. Wybierz "Aplikacja internetowa"
4. Opis: "Formularz weselny"
5. **Wykonaj jako: "Ja"** - to znaczy że skrypt działa na twoim koncie
6. **Kto ma dostęp: "Wszyscy"** - to znaczy że TYLKO endpoint URL jest publiczny
7. Kliknij "Wdróż"

## ⚠️ AUTORYZACJA (jeśli się pojawi):
Jeśli Google pyta o autoryzację:
1. Kliknij **"Autoryzuj dostęp"** lub **"Review permissions"**
2. Wybierz swoje konto Google
3. Kliknij **"Zaawansowane"** (jeśli pojawi się ostrzeżenie)
4. Kliknij **"Przejdź do Formularz weselny (niebezpieczne)"**
5. Kliknij **"Zezwól"** - to pozwala skryptowi zapisywać do arkusza

8. **SKOPIUJ URL APLIKACJI INTERNETOWEJ** - będzie wyglądać jak:
   `https://script.google.com/macros/s/DŁUGI_CIĄG_ZNAKÓW/exec`

## ⚠️ BEZPIECZEŃSTWO - Co to oznacza:

**"Wykonaj jako: Ja"** = Skrypt działa na twoim koncie Google, tylko ty masz dostęp do arkusza

**"Kto ma dostęp: Wszyscy"** = Tylko URL endpoint jest publiczny, ale:
- ✅ Goście mogą TYLKO wysyłać dane przez formularz
- ❌ Goście NIE MOGĄ czytać/edytować/usuwać danych z arkusza  
- ❌ Goście NIE WIDZĄ innych zgłoszeń
- ❌ Goście NIE MAJĄ dostępu do twojego Google Drive
- ✅ Tylko ty widzisz wszystkie dane w arkuszu

**To jest bezpieczne** - goście mogą tylko dodawać nowe wiersze, nie mogą nic czytać ani niszczyć.

## Krok 4: Podaj mi URL
Skopiuj ten URL i wklej tutaj - zaktualizuję kod JavaScript.