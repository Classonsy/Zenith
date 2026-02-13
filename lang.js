
// Instant Interaction Logic
(function () {
    // translations database
    const translations = {
        ru: {
            nav_features: "Преимущества",
            nav_wallet: "Кошелек",
            nav_exchange: "Обмен",
            nav_business: "Бизнес",
            nav_login: "Подключить Кошелек",
            hero_title_1: "P2P Обмен &",
            hero_title_2: "Криптокошелек",
            hero_subtitle: "Обменивайте USDT, GEL и RUB с минимальными комиссиями. Надежный криптокошелек и платформа обмена для современной экономики.",
            btn_get_app: "Скачать Приложение",
            btn_connect_biz: "Подключить Бизнес",
            widget_title: "Быстрый Обмен",
            label_send: "Вы Отправляете",
            label_receive: "Вы Получаете",
            btn_swap: "Обменять",
            label_secured: "Защищено ZenithChain",
            feat_title: "Экосистема",
            feat_subtitle: "Больше, чем просто обменник.",
            card_wallet_title: "Мультивалютный Кошелек",
            card_wallet_desc: "Храните USDT, GEL и RUB безопасно. Некастодиальные решения для полного контроля над вашими активами.",
            card_p2p_title: "Мгновенный P2P",
            card_p2p_desc: "Прямые переводы между пользователями без скрытых комиссий. Гарантия безопасности сделок через эскроу.",
            card_sec_title: "Банковский Уровень Защиты",
            card_sec_desc: "Шифрование AES-256, биометрический вход и круглосуточный мониторинг мошенничества.",
            footer_rights: "© 2024 ZenithPay. Все права защищены.",

            // Connect Page
            connect_title_1: "Подключение",
            connect_title_2: "Бизнеса",
            connect_subtitle: "Выберите предпочтительные способы оплаты и отправьте заявку, чтобы начать принимать платежи с ZenithPay.",
            sect_methods: "Выберите Способы Оплаты",
            cat_wallets: "Электронные Кошельки",
            cat_banking: "Онлайн Банкинг",
            cat_crypto: "Криптовалюты",
            method_geo: "TBC / BoG / Credo",
            sect_details: "Данные Компании",
            lbl_name: "Название Бизнеса / Проекта",
            lbl_website: "URL Веб-сайта",
            lbl_contact: "Telegram / Email",
            lbl_volume: "Ожидаемый Ежемесячный Оборот",
            btn_submit: "Отправить Заявку",
            privacy_note: "Отправляя заявку, вы соглашаетесь с нашими Условиями обслуживания и Политикой конфиденциальности.",

            // Dashboard
            dash_nav_overview: "Обзор",
            dash_nav_methods: "Методы Оплаты",
            dash_nav_qr: "Настройка QR",
            dash_nav_history: "История",
            dash_nav_withdraw: "Вывод Средств",
            dash_nav_settings: "Настройки",
            dash_nav_logout: "Выйти",
            stat_total_bal: "Общий Баланс",
            stat_pending: "В Обработке",
            stat_active_subs: "Активные Методы",
            lbl_recent_tx: "Последние Транзакции",
            th_id: "ID",
            th_date: "Дата",
            th_desc: "Описание",
            th_amount: "Сумма",
            th_status: "Статус",
            sect_pay_methods: "Настройка Методов Оплаты",
            sect_qr_settings: "Настройка QR Платежей",
            lbl_qr_amount: "Фиксированная Сумма (Опционально)",
            lbl_qr_currency: "Валюта",
            lbl_qr_desc: "Описание",
            btn_update_qr: "Обновить QR Код",
            btn_download_qr: "Скачать PDF",
            sect_withdraw: "Вывод Средств",
            lbl_withdraw_amount: "Сумма Вывода",
            lbl_withdraw_method: "Метод Вывода",
            lbl_2fa: "Код 2FA",
            btn_process_withdraw: "Запросить Вывод"
        },
        en: {
            nav_features: "Features",
            nav_wallet: "Wallet",
            nav_exchange: "Exchange",
            nav_business: "Business",
            nav_login: "Connect Wallet",
            hero_title_1: "P2P Exchange &",
            hero_title_2: "Crypto Wallet",
            hero_subtitle: "Seamlessly exchange USDT, GEL, and RUB with minimal fees. The definitive crypto wallet and exchange platform for the modern economy.",
            btn_get_app: "Get App",
            btn_connect_biz: "Connect Business",
            widget_title: "Quick Exchange",
            label_send: "You Send",
            label_receive: "You Receive",
            btn_swap: "Swap Now",
            label_secured: "Secured by ZenithChain",
            feat_title: "Ecosystem",
            feat_subtitle: "More than just an exchange.",
            card_wallet_title: "Multi-Currency Wallet",
            card_wallet_desc: "Store USDT, GEL, and RUB securely. Non-custodial options available for maximum control over your assets.",
            card_p2p_title: "Instant P2P",
            card_p2p_desc: "Direct peer-to-peer transfers with zero hidden fees. Escrow protection guarantees safe transactions every time.",
            card_sec_title: "Bank-Grade Security",
            card_sec_desc: "AES-256 encryption, biometric login support, and 24/7 fraud monitoring systems.",
            footer_rights: "© 2024 ZenithPay. All rights reserved.",

            // Connect Page
            connect_title_1: "Business",
            connect_title_2: "Connection",
            connect_subtitle: "Select your preferred payment methods and submit an application to start accepting payments with ZenithPay.",
            sect_methods: "Select Payment Methods",
            cat_wallets: "E-Wallets",
            cat_banking: "Online Banking",
            cat_crypto: "Cryptocurrency",
            method_geo: "TBC / BoG / Credo",
            sect_details: "Company Details",
            lbl_name: "Business / Project Name",
            lbl_website: "Website URL",
            lbl_contact: "Telegram / Email",
            lbl_volume: "Expected Monthly Volume",
            btn_submit: "Submit Application",
            privacy_note: "By submitting, you agree to our Terms of Service & Privacy Policy.",

            // Dashboard
            dash_nav_overview: "Overview",
            dash_nav_methods: "Payment Methods",
            dash_nav_qr: "QR Settings",
            dash_nav_history: "History",
            dash_nav_withdraw: "Withdraw Funds",
            dash_nav_settings: "Settings",
            dash_nav_logout: "Logout",
            stat_total_bal: "Total Balance",
            stat_pending: "Pending Payouts",
            stat_active_subs: "Active Methods",
            lbl_recent_tx: "Recent Transactions",
            th_id: "ID",
            th_date: "Date",
            th_desc: "Description",
            th_amount: "Amount",
            th_status: "Status",
            sect_pay_methods: "Configure Payment Methods",
            sect_qr_settings: "QR Payment Configuration",
            lbl_qr_amount: "Fixed Amount (Optional)",
            lbl_qr_currency: "Currency",
            lbl_qr_desc: "Description",
            btn_update_qr: "Update QR Code",
            btn_download_qr: "Download PDF",
            sect_withdraw: "Withdraw Funds",
            lbl_withdraw_amount: "Amount to Withdraw",
            lbl_withdraw_method: "Withdrawal Method",
            lbl_2fa: "2FA Code",
            btn_process_withdraw: "Process Withdrawal"
        },
        ka: {
            nav_features: "ფუნქციები",
            nav_wallet: "საფულე",
            nav_exchange: "გაცვლა",
            nav_business: "ბიზნესი",
            nav_login: "საფულის დაკავშირება",
            hero_title_1: "P2P გაცვლა &",
            hero_title_2: "კრიპტო საფულე",
            hero_subtitle: "გაცვალეთ USDT, GEL და RUB მინიმალური საკომისიოებით. საიმედო კრიპტო საფულე და გაცვლის პლატფორმა თანამედროვე ეკონომიკისთვის.",
            btn_get_app: "აპლიკაციის გადმოწერა",
            btn_connect_biz: "ბიზნესის დაკავშირება",
            widget_title: "სწრაფი გაცვლა",
            label_send: "თქვენ აგზავნით",
            label_receive: "თქვენ იღებთ",
            btn_swap: "გაცვლა",
            label_secured: "დაცულია ZenithChain-ის მიერ",
            feat_title: "ეკოსისტემა",
            feat_subtitle: "მეტ ვიდრე უბრალოდ გაცვლა.",
            card_wallet_title: "მულტი-ვალუტური საფულე",
            card_wallet_desc: "შეინახეთ USDT, GEL და RUB უსაფრთხოდ. არასაკასტოდიო გადაწყვეტილებები თქვენი აქტივების სრული კონტროლისთვის.",
            card_p2p_title: "მყისიერი P2P",
            card_p2p_desc: "პირდაპირი გადარიცხვები მომხმარებლებს შორის ფარული საკომისიოების გარეშე. გარიგებების უსაფრთხოების გარანტია ესქროუს მეშვეობით.",
            card_sec_title: "ბანკის დონის უსაფრთხოება",
            card_sec_desc: "AES-256 დაშიფვრა, ბიომეტრიული შესვლა და თაღლითობის მონიტორინგი 24/7.",
            footer_rights: "© 2024 ZenithPay. ყველა უფლება დაცულია.",

            // Connect Page
            connect_title_1: "ბიზნესის",
            connect_title_2: "დაკავშირება",
            connect_subtitle: "აირჩიეთ სასურველი გადახდის მეთოდები და გამოაგზავნეთ განაცხადი ZenithPay-ით გადახების მისაღებად.",
            sect_methods: "გადახდის მეთოდები",
            cat_wallets: "ელ-საფულეები",
            cat_banking: "ონლაინ ბანკინგი",
            cat_crypto: "კრიპტოვალუატები",
            method_geo: "TBC / BoG / Credo",
            sect_details: "კომპანიის დეტალები",
            lbl_name: "ბიზნესის / პროექტის სახელი",
            lbl_website: "ვებ-გვერდის URL",
            lbl_contact: "Telegram / Email",
            lbl_volume: "მოსალოდნელი თვიური ბრუნვა",
            btn_submit: "განაცხადის გაგზავნა",
            privacy_note: "განაცხადის გაგზავნით, თქვენ ეთანხმებით ჩვენს მომსახურების პირობებსა და კონფიდენციალურობის პოლიტიკას.",

            // Dashboard
            dash_nav_overview: "მიმოხილვა",
            dash_nav_methods: "გადახდის მეთოდები",
            dash_nav_qr: "QR პარამეტრები",
            dash_nav_history: "ისტორია",
            dash_nav_withdraw: "თანხის გატანა",
            dash_nav_settings: "პარამეტრები",
            dash_nav_logout: "გასვლა",
            stat_total_bal: "სრული ბალანსი",
            stat_pending: "დამუშავებაში",
            stat_active_subs: "აქტიური მეთოდები",
            lbl_recent_tx: "ბოლო ტრანზაქციები",
            th_id: "ID",
            th_date: "თარიღი",
            th_desc: "აღწერა",
            th_amount: "თანხა",
            th_status: "სტატუსი",
            sect_pay_methods: "გადახდის მეთოდების კონფიგურაცია",
            sect_qr_settings: "QR გადახდის პარამეტრები",
            lbl_qr_amount: "ფიქსირებული თანხა (არასავალდებულო)",
            lbl_qr_currency: "ვალუტა",
            lbl_qr_desc: "აღწერა",
            btn_update_qr: "QR კოდის განახლება",
            btn_download_qr: "PDF-ის ჩამოტვირთვა",
            sect_withdraw: "თანხის გატანა",
            lbl_withdraw_amount: "გასატანი თანხა",
            lbl_withdraw_method: "გატანის მეთოდი",
            lbl_2fa: "2FA კოდი",
            btn_process_withdraw: "განაცხადის გაგზავნა"
        }
    };

    const flags = {
        ru: '🇷🇺',
        en: '🇺🇸',
        ka: '🇬🇪'
    };

    // State
    let currentLang = localStorage.getItem('zenith_lang') || 'ru';

    // Elements
    const modalId = 'lang_modal_overlay';

    // Core Functions
    function init() {
        console.log('LangJS Initializing...');
        // Ensure modal exists in DOM
        ensureModalHTML();

        // Attach Event Listeners to any triggers (handles multiple buttons if present)
        attachListeners();

        // Apply initial language
        applyLanguage(currentLang);
    }

    function ensureModalHTML() {
        if (document.getElementById(modalId)) return;

        const modalHTML = `
            <div id="${modalId}" class="lang-modal">
                <div class="lang-modal-content">
                    <div class="lang-modal-header">
                        <div class="lang-modal-title">Select Language / Язык</div>
                        <button class="close-modal-btn" id="close_lang_modal">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="lang-options">
                        <div class="lang-option" data-lang="ru">
                            <div class="lang-flag">🇷🇺</div>
                            <div class="lang-name">Русский</div>
                        </div>
                        <div class="lang-option" data-lang="en">
                            <div class="lang-flag">🇺🇸</div>
                            <div class="lang-name">English</div>
                        </div>
                        <div class="lang-option" data-lang="ka">
                            <div class="lang-flag">🇬🇪</div>
                            <div class="lang-name">ქართული</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Internal Modal Listeners
        const modal = document.getElementById(modalId);
        const closeBtn = document.getElementById('close_lang_modal');
        const options = modal.querySelectorAll('.lang-option');

        closeBtn.addEventListener('click', () => closeModal());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        options.forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.dataset.lang;
                applyLanguage(lang);
                closeModal();
            });
        });
    }

    function attachListeners() {
        // Find all buttons that should open the language modal
        const triggers = document.querySelectorAll('.lang-trigger');
        triggers.forEach(btn => {
            // Remove old listeners by cloning (simple trick) or just add new one
            // Ideally we just add listener.
            btn.onclick = (e) => {
                e.preventDefault();
                openModal();
            };
        });
    }

    function openModal() {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            // slight delay to allow display flex to apply before opacity transition
            requestAnimationFrame(() => {
                modal.classList.add('active');
            });
        }
    }

    function closeModal() {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // match css transition
        }
    }

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('zenith_lang', lang);

        // Update Triggers
        const triggers = document.querySelectorAll('.lang-trigger');
        triggers.forEach(btn => {
            btn.innerHTML = `<span style="font-size: 1.4rem; line-height: 1;">${flags[lang]}</span> <span>${lang.toUpperCase()}</span>`;
        });

        // Update Modal Selection State
        const options = document.querySelectorAll('.lang-option');
        options.forEach(opt => {
            if (opt.dataset.lang === lang) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });

        // Apply Translations
        if (!translations[lang]) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Font Adjustment
        if (lang === 'ka') {
            document.body.style.fontFamily = "'Noto Sans Georgian', 'Outfit', sans-serif";
        } else {
            document.body.style.fontFamily = "'Outfit', sans-serif";
        }
    }

    // Auto-load Georgian Font
    if (!document.querySelector('link[href*="Noto+Sans+Georgian"]')) {
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@300;500;700&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }

    // Run Init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
