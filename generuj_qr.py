import qrcode

# Twój link do strony
url = "https://rafal-mazurek-21.github.io/strona-weselna/"

# Generuj kod QR
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # Wysoka korekcja błędów
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# Zapisz jako obrazek
img = qr.make_image(fill_color="black", back_color="white")
img.save("kod_qr_wesele.png")

print("✓ Kod QR wygenerowany: kod_qr_wesele.png")
print(f"Link: {url}")
