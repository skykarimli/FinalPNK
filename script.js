document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let form = this;
    form.querySelector('input').value = ''; 
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.remove('hidden');
    setTimeout(function() {
        successMsg.classList.add('hidden');
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    const pages = [
        { title: "Home", url: "index.html" },
        { title: "Menu", url: "menu.html" },
        { title: "About Us", url: "about.html" },
        { title: "Order Now", url: "locations.html" },
        
        { title: "Iced Americano", url: "menu.html#iced-americano" },
        { title: "Caramel Macchiato", url: "menu.html#caramel-macchiato" },
        { title: "Dark Mocha Latte", url: "menu.html#dark-mocha" },
        { title: "Vanilla Latte", url: "menu.html#vanilla-latte" },
        { title: "Hazelnut Latte", url: "menu.html#hazelnut-latte" },
        { title: "Spanish Latte", url: "menu.html#spanish-latte" },
        { title: "White Mocha Latte", url: "menu.html#white-mocha" },

        { title: "Strawberry Matcha", url: "menu.html#strawberry-matcha" },
        { title: "Matcha Latte", url: "menu.html#matcha-latte" },
        { title: "Chocolate Matcha", url: "menu.html#chocolate-matcha" },
        { title: "Taro Matcha", url: "menu.html#taro-matcha" },
        { title: "Caramel Matcha", url: "menu.html#caramel-matcha" },
        { title: "Mango Matcha", url: "menu.html#mango-matcha" },
        { title: "Blueberry Matcha", url: "menu.html#blueberry-matcha" },
        { title: "Pink Matcha", url: "menu.html#pink-matcha" },
        { title: "Banana Matcha", url: "menu.html#banana-matcha" },

        { title: "\"The Queen\" Avocado Toast", url: "menu.html#queen-avocado" },
        { title: "Strawberry Cream Toast", url: "menu.html#strawberry-toast" },
        { title: "Ricotta Pistachio Toast", url: "menu.html#ricotta-toast" },
        { title: "Caprese Toast", url: "menu.html#caprese-toast" },
        { title: "Banana Berry Toast", url: "menu.html#banana-berry" },
        { title: "Banana Grid Toast", url: "menu.html#banana-grid" },
        { title: "Cottage Cheese & Honey", url: "menu.html#cottage-cheese" },
        { title: "Fresh Cucumber Toast", url: "menu.html#cucumber-toast" },
        { title: "Radish Microgreens Toast", url: "menu.html#radish-toast" },
        { title: "Raspberry Almond Toast", url: "menu.html#raspberry-almond" },
        { title: "Raspberry Jam Cream", url: "menu.html#raspberry-jam" },
        { title: "Spicy Jalapeño Toast", url: "menu.html#spicy-jalapeno" },

        { title: "Pink Dragon Bowl", url: "menu.html#pink-dragon" },
        { title: "Roasted Peach Granola Bowl", url: "menu.html#roasted-peach" },
        { title: "Double Chocolate Banana", url: "menu.html#double-chocolate" },
        { title: "Antioxidant Power Bowl", url: "menu.html#antioxidant-bowl" },
        { title: "Blueberry Crunch Bowl", url: "menu.html#blueberry-crunch" },
        { title: "Walnut Berry Crunch Bowl", url: "menu.html#walnut-berry" }
    ];

    const searchIconBtn = document.getElementById('searchIconBtn');
    const searchOverlay = document.getElementById('ladysbrewSearchOverlay');
    const closeBtn = document.getElementById('ladysbrewCloseBtn');
    const searchInput = document.getElementById('ladysbrewSearchInput');
    const resultsContainer = document.getElementById('ladysbrewResultsContainer');
    const searchResults = document.getElementById('ladysbrewSearchResults');
    const pillClearBtn = document.getElementById('pillClearBtn');
    const pillDivider = document.getElementById('pillDivider');
    const innerSearchBtn = document.getElementById('innerSearchBtn');

    if (searchIconBtn) {
        searchIconBtn.addEventListener('click', () => {
            searchOverlay.classList.remove('hidden');
            searchInput.focus();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            searchOverlay.classList.add('hidden');
            searchInput.value = '';
            resultsContainer.classList.add('hidden');
            if (pillClearBtn) pillClearBtn.classList.add('hidden');
            if (pillDivider) pillDivider.classList.add('hidden');
        });
    }

    if (pillClearBtn) {
        pillClearBtn.addEventListener('click', () => {
            searchInput.value = '';
            pillClearBtn.classList.add('hidden');
            pillDivider.classList.add('hidden');
            resultsContainer.classList.add('hidden');
            searchInput.focus();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            if (this.value.startsWith(' ')) this.value = this.value.trimStart();
            const query = this.value.toLowerCase().trim();
            const hasText = query.length > 0;
            
            if (pillClearBtn) pillClearBtn.classList.toggle('hidden', !hasText);
            if (pillDivider) pillDivider.classList.toggle('hidden', !hasText);

            searchResults.innerHTML = '';
            if (hasText) {
                const filteredPages = pages.filter(page => page.title.toLowerCase().includes(query));
                if (filteredPages.length > 0) {
                    resultsContainer.classList.remove('hidden');
                    filteredPages.forEach(page => {
                        const link = document.createElement('a');
                        link.href = page.url;
                        link.className = 'ladysbrew-result-item';
                        link.textContent = page.title;
                        searchResults.appendChild(link);
                    });
                } else {
                    resultsContainer.classList.add('hidden');
                }
            } else {
                resultsContainer.classList.add('hidden');
            }
        });

        const performSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            if (query === '') return;
            const match = pages.find(page => page.title.toLowerCase().includes(query));
            if (match) window.location.href = match.url;
        };

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') { e.preventDefault(); performSearch(); }
        });

        if (innerSearchBtn) innerSearchBtn.addEventListener('click', performSearch);
    }

    const loginIcon = document.getElementById('loginIcon');
    const authOverlay = document.getElementById('authOverlay');
    const authCloseBtn = document.getElementById('authCloseBtn');

    if (loginIcon) {
        loginIcon.addEventListener('click', (e) => {
            e.preventDefault();
            authOverlay.classList.remove('hidden');
        });
    }

    if (authCloseBtn) {
        authCloseBtn.addEventListener('click', () => {
            authOverlay.classList.add('hidden');
        });
    }

    const locationSearchInput = document.getElementById('locationSearchInput');
    const locationCards = document.querySelectorAll('.location-card');

    if (locationSearchInput) {
        locationSearchInput.addEventListener('input', function() {
            if (this.value.startsWith(' ')) this.value = this.value.trimStart();
            
            const normalizeStr = (str) => {
                return str.replace(/İ/g, 'i')
                    .toLowerCase()
                    .replace(/\u0307/g, '') 
                    .replace(/ə/g, 'e')
                    .replace(/ı/g, 'i')
                    .replace(/ö/g, 'o')
                    .replace(/ğ/g, 'g')
                    .replace(/ü/g, 'u')
                    .replace(/ş/g, 's')
                    .replace(/ç/g, 'c')
                    .replace(/baku/g, 'baki')
                    .replace(/ganjlik/g, 'genclik')
                    .replace(/icherisheher/g, 'iceriseher')
                    .replace(/khoyski/g, 'xoyski')
                    .replace(/neftchiler/g, 'neftciler');
            };

            const query = normalizeStr(this.value.trim());

            locationCards.forEach(card => {
                const cardText = normalizeStr(card.textContent);

                if (cardText.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

function showView(viewId) {
    document.querySelectorAll('.auth-view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById('login-success-msg').classList.add('hidden');
}

function showLoginWithMsg() {
    showView('view-login');
    const msg = document.getElementById('login-success-msg');
    msg.classList.remove('hidden');
    setTimeout(function() {
        msg.classList.add('hidden');
    }, 3000);
}