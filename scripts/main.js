// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Countdown do ślubu
function updateCountdown() {
    const weddingDate = new Date('2026-09-05T15:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<h2 style="color: white;">Dziś jest nasz wielki dzień! 💍</h2>';
    }
}

// Aktualizuj countdown co sekundę
setInterval(updateCountdown, 1000);
updateCountdown();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Obsługa formularza RSVP
document.querySelector('.rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Tutaj możesz dodać wysyłanie danych do serwera
    // Na razie tylko pokazujemy komunikat
    
    alert('Dziękujemy za potwierdzenie obecności! Wkrótce skontaktujemy się z Tobą.');
    this.reset();
});

// Animacja pojawiania się elementów przy przewijaniu
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Obserwuj wszystkie sekcje
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Powiększanie zdjęć w galerii
document.querySelectorAll('.gallery-grid img, .venue-gallery img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            cursor: pointer;
            animation: fadeIn 0.3s ease;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
            box-shadow: 0 10px 50px rgba(0,0,0,0.5);
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', function() {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => document.body.removeChild(modal), 300);
        });
    });
});

// Dodaj style dla animacji
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Language Selector
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');

if (languageBtn && languageDropdown) {
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });

    // Zamknij dropdown po kliknięciu poza nim
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('active');
        }
    });

    // Tłumaczenia
    const translations = {
        pl: {
            date: '5 września 2026',
            subtitle: 'POBIERAMY SIĘ!',
            nav: {
                start: 'Start',
                couple: 'Para Młoda',
                ceremony: 'Ceremonia',
                wedding: 'Wesele',
                schedule: 'Harmonogram',
                menu: 'Menu',
                drinkbar: 'Drink Bar',
                gallery: 'Galeria',
                rsvp: 'Potwierdzenie'
            },
            hero: {
                days: 'dni',
                hours: 'godzin',
                minutes: 'minut',
                seconds: 'sekund'
            },
            couple: {
                title: 'Para Młoda',
                story: 'Nasza Historia',
                storyText: 'Poznaliśmy się 9 lat temu w liceum, w tej samej klasie. Od pierwszych wspólnych chwil wiedzieliśmy, że to coś wyjątkowego. Nasza przyjaźń szybko przerodziła się w miłość, która z każdym rokiem stawała się coraz silniejsza. W lipcu 2024 roku, podczas romantycznej podróży do Rzymu, Rafał oświadczył się Klaudii w magicznej atmosferze Wiecznego Miasta. Teraz nie możemy się doczekać, aby podzielić się naszym szczęściem z Wami!'
            },
            rsvp: {
                title: 'Potwierdzenie Obecności',
                heading: 'Daj znać, że będziesz z Nami!',
                text1: 'Twoja obecność jest dla nas bardzo ważna, dlatego chcielibyśmy, abyś dołączył do nas w tej wyjątkowej chwili.',
                text2: 'Prosimy o potwierdzenie, abyśmy mogli odpowiednio przygotować miejsce i wspólnie celebrować ten wyjątkowy dzień.',
                text3: 'Skontaktuj się z nami lub zrób to poprzez formularz.',
                name: 'Imię i nazwisko',
                email: 'Email',
                phone: 'Telefon',
                people: 'Liczba osób',
                diet: 'Dieta',
                standard: 'Standardowa',
                vegetarian: 'Wegetariańska',
                additional: 'Dodatkowe informacje (alergie, itp.)',
                submit: 'Potwierdź obecność'
            },
            ceremony: {
                title: 'Ceremonia Ślubna',
                church: 'Parafia Rzymskokatolicka św. Marcina',
                address: 'Adres:',
                time: 'Godzina:',
                parking: 'Parking:',
                description: 'Kościół św. Marcina to piękna świątynia położona w malowniczej dzielnicy Zemborzyc. To szczególne miejsce dla nas - tutaj Klaudia przyjęła sakrament bierzmowania. Kościół otoczony jest zielenią i oferuje spokojną, uroczystą atmosferę idealną na ceremonię ślubną.',
                map: 'Zobacz na mapie'
            },
            wedding: {
                title: 'Przyjęcie Weselne',
                hotel: 'Hotel Kmicic',
                accommodation: 'Nocleg:',
                description: 'Hotel Kmicic to elegancki obiekt położony w sercu Zemborzyc, zaledwie 5 minut jazdy od kościoła. Oferuje przestronną, klimatyczną salę weselną, wyśmienitą kuchnię oraz profesjonalną obsługę. Otoczony zielenią i jeziorem, zapewnia wyjątkową atmosferę na niezapomniane przyjęcie!',
                website: 'Strona hotelu',
                map: 'Zobacz na mapie'
            },
            schedule: {
                title: 'Harmonogram Dnia',
                ceremony: 'Ceremonia Ślubna',
                ceremonyDesc: 'Parafia św. Marcina w Zemborzycach',
                ceremonyNote: 'Prosimy o przybycie 15 minut wcześniej',
                arrival: 'Dojazd do Hotelu Kmicic',
                arrivalDesc: 'Życzenia dla Młodej Pary przyjmujemy przed salą weselną',
                welcome: 'Powitanie Gości',
                welcomeDesc: 'Przywitanie chlebem i solą, toast szampański',
                dinner: 'Obiad Weselny',
                dinnerDesc: 'Zupa, danie główne, desery',
                firstDance: 'Pierwszy Taniec',
                firstDanceDesc: 'Otwarcie parkietu przez Młodą Parę',
                photos: 'Sesja Zdjęciowa',
                photosDesc: 'Zdjęcia z rodziną i gośćmi',
                thanks: 'Podziękowania dla Rodziców',
                thanksDesc: 'Wyrażenie wdzięczności za miłość i wsparcie',
                cake: 'Tort Weselny',
                cakeDesc: 'Krojenie tortu i słodki poczęstunek',
                oczepiny: 'Oczepiny',
                oczepinyDesc: 'Tradycyjna część wesela z bigosem i żurkiem'
            },
            menu: {
                title: 'Menu Weselne',
                intro: 'Przygotowaliśmy dla Was wykwintne menu z najlepszych składników. Smacznego! 🍽️',
                appetizers: 'Przystawki',
                soup: 'Zupa',
                main1: 'Danie Główne I',
                dessert1: 'Deser I',
                main2: 'Danie Główne II',
                main3: 'Danie Główne III',
                desserts: 'Desery',
                cake: 'Tort Weselny',
                buffet: 'Ciepły Bufet',
                oczepiny: 'Oczepiny',
                legend: '🌱 - Danie wegetariańskie',
                always: 'Cały czas dostępne'
            },
            drinks: {
                title: 'Napoje',
                intro: 'Przez całą noc do Waszej dyspozycji będą napoje i profesjonalny drink bar! 🍹',
                alcohol: 'Alkohole',
                drinkbar: 'Drink Bar',
                drinkbarDesc: 'Barman przygotuje dla Ciebie:',
                nonAlcoholic: 'Napoje Bezalkoholowe',
                note: '💡 Drink Bar czynny do 1.00 w nocy! Barman przygotuje dla Ciebie dowolny drink na życzenie!',
                andMore: '...i wiele innych!'
            },
            gallery: {
                title: 'Galeria'
            },
            footer: {
                share: 'Udostępnij stronę',
                qr: 'Zeskanuj kod QR, aby otworzyć stronę',
                copyright: '© 2026 Klaudia & Rafał - Z miłością dla naszych gości'
            }
        },
        en: {
            date: 'September 5, 2026',
            subtitle: 'WE ARE GETTING MARRIED!',
            nav: {
                start: 'Home',
                couple: 'The Couple',
                ceremony: 'Ceremony',
                wedding: 'Reception',
                schedule: 'Schedule',
                menu: 'Menu',
                drinkbar: 'Drink Bar',
                gallery: 'Gallery',
                rsvp: 'RSVP'
            },
            hero: {
                days: 'days',
                hours: 'hours',
                minutes: 'minutes',
                seconds: 'seconds'
            },
            couple: {
                title: 'The Couple',
                story: 'Our Story',
                storyText: 'We met 9 years ago in high school, in the same class. From the first moments together, we knew it was something special. Our friendship quickly turned into love, which grew stronger with each passing year. In July 2024, during a romantic trip to Rome, Rafał proposed to Klaudia in the magical atmosphere of the Eternal City. Now we cannot wait to share our happiness with you!'
            },
            rsvp: {
                title: 'RSVP',
                heading: 'Let us know you\'ll be with us!',
                text1: 'Your presence is very important to us, so we would like you to join us on this special occasion.',
                text2: 'Please confirm so we can properly prepare and celebrate this special day together.',
                text3: 'Contact us or do it through the form.',
                name: 'Full name',
                email: 'Email',
                phone: 'Phone',
                people: 'Number of people',
                diet: 'Diet',
                standard: 'Standard',
                vegetarian: 'Vegetarian',
                additional: 'Additional information (allergies, etc.)',
                submit: 'Confirm attendance'
            },
            ceremony: {
                title: 'Wedding Ceremony',
                church: 'St. Martin\'s Roman Catholic Parish',
                address: 'Address:',
                time: 'Time:',
                parking: 'Parking:',
                description: 'St. Martin\'s Church is a beautiful temple located in the picturesque district of Zemborzyce. This is a special place for us - here Klaudia received the sacrament of confirmation. The church is surrounded by greenery and offers a peaceful, solemn atmosphere perfect for a wedding ceremony.',
                map: 'View on map'
            },
            wedding: {
                title: 'Wedding Reception',
                hotel: 'Hotel Kmicic',
                accommodation: 'Accommodation:',
                description: 'Hotel Kmicic is an elegant facility located in the heart of Zemborzyce, just 5 minutes drive from the church. It offers a spacious, atmospheric wedding hall, excellent cuisine and professional service. Surrounded by greenery and a lake, it provides a unique atmosphere for an unforgettable reception!',
                website: 'Hotel website',
                map: 'View on map'
            },
            schedule: {
                title: 'Day Schedule',
                ceremony: 'Wedding Ceremony',
                ceremonyDesc: 'St. Martin\'s Parish in Zemborzyce',
                ceremonyNote: 'Please arrive 15 minutes earlier',
                arrival: 'Arrival at Hotel Kmicic',
                arrivalDesc: 'Wishes for the Newlyweds will be received in front of the wedding hall',
                welcome: 'Welcome Guests',
                welcomeDesc: 'Welcome with bread and salt, champagne toast',
                dinner: 'Wedding Dinner',
                dinnerDesc: 'Soup, main course, desserts',
                firstDance: 'First Dance',
                firstDanceDesc: 'Opening the dance floor by the Newlyweds',
                photos: 'Photo Session',
                photosDesc: 'Photos with family and guests',
                thanks: 'Thanks to Parents',
                thanksDesc: 'Expressing gratitude for love and support',
                cake: 'Wedding Cake',
                cakeDesc: 'Cutting the cake and sweet treats',
                oczepiny: 'Oczepiny',
                oczepinyDesc: 'Traditional wedding part with bigos and żurek'
            },
            menu: {
                title: 'Wedding Menu',
                intro: 'We have prepared an exquisite menu with the best ingredients for you. Enjoy! 🍽️',
                appetizers: 'Appetizers',
                soup: 'Soup',
                main1: 'Main Course I',
                dessert1: 'Dessert I',
                main2: 'Main Course II',
                main3: 'Main Course III',
                desserts: 'Desserts',
                cake: 'Wedding Cake',
                buffet: 'Warm Buffet',
                oczepiny: 'Oczepiny',
                legend: '🌱 - Vegetarian dish',
                always: 'Available all the time'
            },
            drinks: {
                title: 'Beverages',
                intro: 'Drinks and a professional bar will be at your disposal all night long! 🍹',
                alcohol: 'Alcohol',
                drinkbar: 'Drink Bar',
                drinkbarDesc: 'The bartender will prepare for you:',
                nonAlcoholic: 'Non-Alcoholic Drinks',
                note: '💡 Drink Bar open until 1:00 AM! The bartender will prepare any drink of your choice!',
                andMore: '...and many more!'
            },
            gallery: {
                title: 'Gallery'
            },
            footer: {
                share: 'Share the page',
                qr: 'Scan the QR code to open the page',
                copyright: '© 2026 Klaudia & Rafał - With love for our guests'
            }
        }
    };

    let currentLang = 'pl';

    // Funkcja tłumaczenia
    function translatePage(lang) {
        currentLang = lang;
        const t = translations[lang];

        // Data i podtytuł
        document.querySelector('.date').textContent = t.date;
        document.querySelector('.subtitle').textContent = t.subtitle;

        // Nawigacja
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks[0].textContent = t.nav.start;
        navLinks[1].textContent = t.nav.couple;
        navLinks[2].textContent = t.nav.ceremony;
        navLinks[3].textContent = t.nav.wedding;
        navLinks[4].textContent = t.nav.schedule;
        navLinks[5].textContent = t.nav.menu;
        navLinks[6].textContent = t.nav.drinkbar;
        navLinks[7].textContent = t.nav.gallery;
        navLinks[8].textContent = t.nav.rsvp;

        // Countdown labels
        document.querySelectorAll('.countdown-label').forEach((label, index) => {
            const keys = ['days', 'hours', 'minutes', 'seconds'];
            label.textContent = t.hero[keys[index]];
        });

        // Para Młoda
        const coupleSection = document.querySelector('#para-mloda');
        if (coupleSection) {
            coupleSection.querySelector('h2').textContent = t.couple.title;
            const storySection = coupleSection.querySelector('.love-story');
            if (storySection) {
                storySection.querySelector('h3').textContent = t.couple.story;
                storySection.querySelector('p').textContent = t.couple.storyText;
            }
        }

        // Ceremonia
        const ceremonySection = document.querySelector('#ceremonia');
        if (ceremonySection) {
            ceremonySection.querySelector('h2').textContent = t.ceremony.title;
            const ceremonyDetails = ceremonySection.querySelector('.details');
            if (ceremonyDetails) {
                ceremonyDetails.querySelector('h3').textContent = t.ceremony.church;
                const paragraphs = ceremonyDetails.querySelectorAll('p');
                paragraphs[0].innerHTML = `<strong>${t.ceremony.address}</strong> ul. Krężnicka 136, 20-518 Lublin`;
                paragraphs[1].innerHTML = `<strong>${t.ceremony.time}</strong> 15:00`;
                paragraphs[2].innerHTML = `<strong>${t.ceremony.parking}</strong> ${lang === 'pl' ? 'Bezpłatny parking przy kościele' : 'Free parking at the church'}`;
                paragraphs[3].textContent = t.ceremony.description;
                ceremonyDetails.querySelector('a.btn').textContent = t.ceremony.map;
            }
        }

        // Wesele
        const weddingSection = document.querySelector('#wesele');
        if (weddingSection) {
            weddingSection.querySelector('h2').textContent = t.wedding.title;
            const weddingDetails = weddingSection.querySelector('.details');
            if (weddingDetails) {
                weddingDetails.querySelector('h3').textContent = t.wedding.hotel;
                const paragraphs = weddingDetails.querySelectorAll('p');
                paragraphs[0].innerHTML = `<strong>${t.ceremony.address}</strong> Zemborzyce Dolne 62, 20-492 Lublin`;
                paragraphs[1].innerHTML = `<strong>${t.ceremony.time}</strong> 16.30`;
                paragraphs[2].innerHTML = `<strong>${t.ceremony.parking}</strong> ${lang === 'pl' ? 'Bezpłatny, przestronny parking dla wszystkich gości' : 'Free, spacious parking for all guests'}`;
                paragraphs[3].innerHTML = `<strong>${t.wedding.accommodation}</strong> ${lang === 'pl' ? 'Komfortowe pokoje hotelowe - rezerwacja przez Młodą Parę' : 'Comfortable hotel rooms - reservation through the Newlyweds'}`;
                paragraphs[4].textContent = t.wedding.description;
                const links = weddingDetails.querySelectorAll('a.btn');
                links[0].textContent = t.wedding.website;
                links[1].textContent = t.wedding.map;
            }
        }

        // Harmonogram
        const scheduleSection = document.querySelector('#harmonogram');
        if (scheduleSection) {
            scheduleSection.querySelector('h2').textContent = t.schedule.title;
            const timelineItems = scheduleSection.querySelectorAll('.timeline-item');
            if (timelineItems.length >= 8) {
                timelineItems[0].querySelector('h3').textContent = t.schedule.ceremony;
                timelineItems[0].querySelectorAll('p')[0].textContent = t.schedule.ceremonyDesc;
                timelineItems[0].querySelectorAll('p')[1].textContent = t.schedule.ceremonyNote;
                
                timelineItems[1].querySelector('h3').textContent = t.schedule.arrival;
                timelineItems[1].querySelector('p').textContent = t.schedule.arrivalDesc;
                
                timelineItems[2].querySelector('h3').textContent = t.schedule.welcome;
                timelineItems[2].querySelector('p').textContent = t.schedule.welcomeDesc;
                
                timelineItems[3].querySelector('h3').textContent = t.schedule.dinner;
                timelineItems[3].querySelector('p').textContent = t.schedule.dinnerDesc;
                
                timelineItems[4].querySelector('h3').textContent = t.schedule.firstDance;
                timelineItems[4].querySelector('p').textContent = t.schedule.firstDanceDesc;
                
                timelineItems[5].querySelector('h3').textContent = t.schedule.photos;
                timelineItems[5].querySelector('p').textContent = t.schedule.photosDesc;
                
                timelineItems[6].querySelector('h3').textContent = t.schedule.thanks;
                timelineItems[6].querySelector('p').textContent = t.schedule.thanksDesc;
                
                timelineItems[7].querySelector('h3').textContent = t.schedule.cake;
                timelineItems[7].querySelector('p').textContent = t.schedule.cakeDesc;
                
                if (timelineItems[8]) {
                    timelineItems[8].querySelector('h3').textContent = t.schedule.oczepiny;
                    timelineItems[8].querySelector('p').textContent = t.schedule.oczepinyDesc;
                }
            }
        }

        // Menu
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
            menuSection.querySelector('h2').textContent = t.menu.title;
            const menuIntro = menuSection.querySelector('.menu-intro');
            if (menuIntro) menuIntro.querySelector('p').textContent = t.menu.intro;
            const menuCards = menuSection.querySelectorAll('.menu-card');
            if (menuCards.length > 0) {
                menuCards[0].querySelector('h3').textContent = `🥗 ${t.menu.appetizers}`;
                menuCards[1].querySelector('h3').textContent = `🍲 ${t.menu.soup}`;
                menuCards[2].querySelector('h3').textContent = `🥩 ${t.menu.main1}`;
                menuCards[3].querySelector('h3').textContent = `🍨 ${t.menu.dessert1}`;
                menuCards[4].querySelector('h3').textContent = `🍗 ${t.menu.main2}`;
                menuCards[5].querySelector('h3').textContent = `🐟 ${t.menu.main3}`;
                menuCards[6].querySelector('h3').textContent = `🍰 ${t.menu.desserts}`;
                menuCards[7].querySelector('h3').textContent = `🎂 ${t.menu.cake}`;
                menuCards[8].querySelector('h3').textContent = `🍕 ${t.menu.buffet}`;
                menuCards[9].querySelector('h3').textContent = `🥧 ${t.menu.oczepiny}`;
            }
            const menuLegend = menuSection.querySelector('.menu-legend');
            if (menuLegend) menuLegend.querySelector('p').textContent = t.menu.legend;
        }

        // Napoje
        const drinksSection = document.querySelector('#drinkbar');
        if (drinksSection) {
            drinksSection.querySelector('h2').textContent = t.drinks.title;
            const drinkIntro = drinksSection.querySelector('.drinkbar-intro');
            if (drinkIntro) drinkIntro.querySelector('p').textContent = t.drinks.intro;
            const drinkCategories = drinksSection.querySelectorAll('.drink-category');
            if (drinkCategories.length >= 3) {
                drinkCategories[0].querySelector('h3').textContent = `🥃 ${t.drinks.alcohol}`;
                drinkCategories[1].querySelector('h3').textContent = `🍹 ${t.drinks.drinkbar}`;
                drinkCategories[1].querySelector('p').textContent = t.drinks.drinkbarDesc;
                const drinkbarList = drinkCategories[1].querySelector('.drink-list');
                if (drinkbarList) {
                    const lastItem = drinkbarList.querySelector('li:last-child');
                    if (lastItem) lastItem.textContent = t.drinks.andMore;
                }
                drinkCategories[2].querySelector('h3').textContent = `🥤 ${t.drinks.nonAlcoholic}`;
            }
            const drinkNote = drinksSection.querySelector('.drinkbar-note');
            if (drinkNote) drinkNote.querySelector('p').innerHTML = `<strong>${t.drinks.note.split('!')[0]}!</strong> ${t.drinks.note.split('!')[1]}`;
        }

        // Galeria
        const gallerySection = document.querySelector('#galeria');
        if (gallerySection) {
            gallerySection.querySelector('h2').textContent = t.gallery.title;
        }

        // Footer
        const footer = document.querySelector('footer');
        if (footer) {
            const qrSection = footer.querySelector('.qr-section');
            if (qrSection) {
                qrSection.querySelector('h3').textContent = t.footer.share;
                qrSection.querySelector('p').textContent = t.footer.qr;
            }
            const copyright = footer.querySelector('p:last-child');
            if (copyright) copyright.textContent = t.footer.copyright;
        }

        // RSVP
        const rsvpSection = document.querySelector('#potwierdzenie');
        if (rsvpSection) {
            rsvpSection.querySelector('h2').textContent = t.rsvp.title;
            const rsvpLeft = rsvpSection.querySelector('.rsvp-left');
            if (rsvpLeft) {
                rsvpLeft.querySelector('h3').textContent = t.rsvp.heading;
                const paragraphs = rsvpLeft.querySelectorAll('p');
                if (paragraphs.length >= 3) {
                    paragraphs[0].textContent = t.rsvp.text1;
                    paragraphs[1].textContent = t.rsvp.text2;
                    paragraphs[2].textContent = t.rsvp.text3;
                }
            }
            const form = rsvpSection.querySelector('.rsvp-form');
            if (form) {
                const inputs = form.querySelectorAll('input, select, textarea, button');
                inputs[0].placeholder = t.rsvp.name;
                inputs[1].placeholder = t.rsvp.email;
                inputs[2].placeholder = t.rsvp.phone;
                if (inputs[3].tagName === 'SELECT') {
                    inputs[3].querySelector('option').textContent = t.rsvp.people;
                }
                if (inputs[4].tagName === 'SELECT') {
                    inputs[4].querySelector('option').textContent = t.rsvp.diet;
                    inputs[4].querySelectorAll('option')[1].textContent = t.rsvp.standard;
                    inputs[4].querySelectorAll('option')[2].textContent = t.rsvp.vegetarian;
                }
                if (inputs[5].tagName === 'TEXTAREA') {
                    inputs[5].placeholder = t.rsvp.additional;
                }
                if (inputs[6].tagName === 'BUTTON') {
                    inputs[6].textContent = t.rsvp.submit;
                }
            }
        }

        // Zapisz wybór języka
        localStorage.setItem('weddingLanguage', lang);
    }

    // Obsługa wyboru języka
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            
            // Zmień przycisk główny
            const text = this.querySelector('span').textContent;
            languageBtn.querySelector('span').textContent = text;
            
            // Zamknij dropdown
            languageDropdown.classList.remove('active');
            
            // Przetłumacz stronę
            translatePage(lang);
        });
    });

    // Załaduj zapisany język
    const savedLang = localStorage.getItem('weddingLanguage') || 'pl';
    if (savedLang !== 'pl') {
        translatePage(savedLang);
        languageBtn.querySelector('span').textContent = savedLang === 'en' ? 'ENG' : 'PL';
    }
}