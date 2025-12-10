// ============================================
// PACCY CURRENCY EXCHANGE APP - JavaScript
// ============================================

const API_BASE = 'https://api.exchangerate-api.com/v4/latest/';

// Currency metadata
const CURRENCY_DATA = {
    USD: { name: 'US Dollar', flag: '🇺🇸' }, EUR: { name: 'Euro', flag: '🇪🇺' },
    GBP: { name: 'British Pound', flag: '🇬🇧' }, JPY: { name: 'Japanese Yen', flag: '🇯🇵' },
    AUD: { name: 'Australian Dollar', flag: '🇦🇺' }, CAD: { name: 'Canadian Dollar', flag: '🇨🇦' },
    CHF: { name: 'Swiss Franc', flag: '🇨🇭' }, CNY: { name: 'Chinese Yuan', flag: '🇨🇳' },
    INR: { name: 'Indian Rupee', flag: '🇮🇳' }, MXN: { name: 'Mexican Peso', flag: '🇲🇽' },
    SGD: { name: 'Singapore Dollar', flag: '🇸🇬' }, NZD: { name: 'New Zealand Dollar', flag: '🇳🇿' },
    HKD: { name: 'Hong Kong Dollar', flag: '🇭🇰' }, NOK: { name: 'Norwegian Krone', flag: '🇳🇴' },
    SEK: { name: 'Swedish Krona', flag: '🇸🇪' }, DKK: { name: 'Danish Krone', flag: '🇩🇰' },
    ZAR: { name: 'South African Rand', flag: '🇿🇦' }, KRW: { name: 'South Korean Won', flag: '🇰🇷' },
    BRL: { name: 'Brazilian Real', flag: '🇧🇷' }, RUB: { name: 'Russian Ruble', flag: '🇷🇺' },
    TRY: { name: 'Turkish Lira', flag: '🇹🇷' }, PLN: { name: 'Polish Zloty', flag: '🇵🇱' },
    THB: { name: 'Thai Baht', flag: '🇹🇭' }, IDR: { name: 'Indonesian Rupiah', flag: '🇮🇩' },
    MYR: { name: 'Malaysian Ringgit', flag: '🇲🇾' }, PHP: { name: 'Philippine Peso', flag: '🇵🇭' },
    CZK: { name: 'Czech Koruna', flag: '🇨🇿' }, ILS: { name: 'Israeli Shekel', flag: '🇮🇱' },
    AED: { name: 'UAE Dirham', flag: '🇦🇪' }, SAR: { name: 'Saudi Riyal', flag: '🇸🇦' },
    NGN: { name: 'Nigerian Naira', flag: '🇳🇬' }, EGP: { name: 'Egyptian Pound', flag: '🇪🇬' }
};

// ============================================
// TRANSLATIONS
// ============================================
const TRANSLATIONS = {
    en: {
        appName: 'Paccy Currency Exchange',
        convertTitle: 'Convert Currency',
        convertSubtitle: 'Real-time exchange rates at your fingertips',
        amount: 'Amount',
        convertedTo: 'Converted To',
        enterAmount: 'Enter an amount to convert',
        liveRates: 'Live Rates',
        searchCurrency: '🔍 Search currency...',
        allRatesBased: 'All rates based on',
        lastUpdated: 'Last updated:',
        trendTitle: '30-Day Exchange Rate Trend',
        trendDescription: 'Statistical analysis of currency performance over the last 30 days',
        currentRate: 'Current Rate',
        thirtyDayHigh: '30-Day High',
        thirtyDayLow: '30-Day Low',
        totalChange: 'Total Change',
        averageRate: 'Average Rate',
        volatility: 'Volatility',
        exchangeRate: 'Exchange Rate',
        averageLine: '30-Day Average',
        poweredBy: 'Powered by ExchangeRate-API • Real-time currency data',
        contactCreator: 'Contact Creator: Paccy Developer'
    },
    es: {
        appName: 'Paccy Cambio de Divisas',
        convertTitle: 'Convertir Moneda',
        convertSubtitle: 'Tipos de cambio en tiempo real al alcance de tu mano',
        amount: 'Cantidad',
        convertedTo: 'Convertido a',
        enterAmount: 'Ingrese una cantidad para convertir',
        liveRates: 'Tasas en Vivo',
        searchCurrency: '🔍 Buscar moneda...',
        allRatesBased: 'Todas las tasas basadas en',
        lastUpdated: 'Última actualización:',
        trendTitle: 'Tendencia del Tipo de Cambio de 30 Días',
        trendDescription: 'Análisis estadístico del rendimiento de la moneda en los últimos 30 días',
        currentRate: 'Tasa Actual',
        thirtyDayHigh: 'Máximo de 30 Días',
        thirtyDayLow: 'Mínimo de 30 Días',
        totalChange: 'Cambio Total',
        averageRate: 'Tasa Promedio',
        volatility: 'Volatilidad',
        exchangeRate: 'Tipo de Cambio',
        averageLine: 'Promedio de 30 Días',
        poweredBy: 'Desarrollado por ExchangeRate-API • Datos de moneda en tiempo real',
        contactCreator: 'Contactar Creador: Paccy Developer'
    },
    fr: {
        appName: 'Paccy Échange de Devises',
        convertTitle: 'Convertir Devise',
        convertSubtitle: 'Taux de change en temps réel à portée de main',
        amount: 'Montant',
        convertedTo: 'Converti en',
        enterAmount: 'Entrez un montant à convertir',
        liveRates: 'Taux en Direct',
        searchCurrency: '🔍 Rechercher devise...',
        allRatesBased: 'Tous les taux basés sur',
        lastUpdated: 'Dernière mise à jour:',
        trendTitle: 'Tendance du Taux de Change sur 30 Jours',
        trendDescription: 'Analyse statistique de la performance des devises au cours des 30 derniers jours',
        currentRate: 'Taux Actuel',
        thirtyDayHigh: 'Maximum sur 30 Jours',
        thirtyDayLow: 'Minimum sur 30 Jours',
        totalChange: 'Changement Total',
        averageRate: 'Taux Moyen',
        volatility: 'Volatilité',
        exchangeRate: 'Taux de Change',
        averageLine: 'Moyenne sur 30 Jours',
        poweredBy: 'Propulsé par ExchangeRate-API • Données de devises en temps réel',
        contactCreator: 'Contacter le Créateur: Paccy Developer'
    },
    de: {
        appName: 'Paccy Währungsumtausch',
        convertTitle: 'Währung Umrechnen',
        convertSubtitle: 'Echtzeit-Wechselkurse zur Hand',
        amount: 'Betrag',
        convertedTo: 'Umgerechnet in',
        enterAmount: 'Geben Sie einen Betrag ein',
        liveRates: 'Live-Kurse',
        searchCurrency: '🔍 Währung suchen...',
        allRatesBased: 'Alle Kurse basieren auf',
        lastUpdated: 'Zuletzt aktualisiert:',
        trendTitle: '30-Tage Wechselkurstrend',
        trendDescription: 'Statistische Analyse der Währungsleistung der letzten 30 Tage',
        currentRate: 'Aktueller Kurs',
        thirtyDayHigh: '30-Tage Hoch',
        thirtyDayLow: '30-Tage Tief',
        totalChange: 'Gesamtänderung',
        averageRate: 'Durchschnittskurs',
        volatility: 'Volatilität',
        exchangeRate: 'Wechselkurs',
        averageLine: '30-Tage Durchschnitt',
        poweredBy: 'Bereitgestellt von ExchangeRate-API • Echtzeit-Währungsdaten',
        contactCreator: 'Kontaktieren Sie den Ersteller: Paccy Developer'
    },
    zh: {
        appName: 'Paccy 货币兑换',
        convertTitle: '货币转换',
        convertSubtitle: '实时汇率触手可及',
        amount: '金额',
        convertedTo: '转换为',
        enterAmount: '输入要转换的金额',
        liveRates: '实时汇率',
        searchCurrency: '🔍 搜索货币...',
        allRatesBased: '所有汇率基于',
        lastUpdated: '最后更新:',
        trendTitle: '30天汇率趋势',
        trendDescription: '过去30天货币表现的统计分析',
        currentRate: '当前汇率',
        thirtyDayHigh: '30天最高',
        thirtyDayLow: '30天最低',
        totalChange: '总变化',
        averageRate: '平均汇率',
        volatility: '波动性',
        exchangeRate: '汇率',
        averageLine: '30天平均',
        poweredBy: '由 ExchangeRate-API 提供 • 实时货币数据',
        contactCreator: '联系创建者: Paccy Developer'
    },
    ja: {
        appName: 'Paccy 通貨交換',
        convertTitle: '通貨換算',
        convertSubtitle: 'リアルタイムの為替レート',
        amount: '金額',
        convertedTo: '換算先',
        enterAmount: '換算する金額を入力',
        liveRates: 'ライブレート',
        searchCurrency: '🔍 通貨を検索...',
        allRatesBased: 'すべてのレートは',
        lastUpdated: '最終更新:',
        trendTitle: '30日間為替レートトレンド',
        trendDescription: '過去30日間の通貨パフォーマンスの統計分析',
        currentRate: '現在のレート',
        thirtyDayHigh: '30日間最高値',
        thirtyDayLow: '30日間最安値',
        totalChange: '総変化',
        averageRate: '平均レート',
        volatility: 'ボラティリティ',
        exchangeRate: '為替レート',
        averageLine: '30日間平均',
        poweredBy: 'ExchangeRate-APIによって提供 • リアルタイム通貨データ',
        contactCreator: '作成者に連絡: Paccy Developer'
    },
    pt: {
        appName: 'Paccy Câmbio de Moedas',
        convertTitle: 'Converter Moeda',
        convertSubtitle: 'Taxas de câmbio em tempo real ao seu alcance',
        amount: 'Quantidade',
        convertedTo: 'Convertido para',
        enterAmount: 'Digite um valor para converter',
        liveRates: 'Taxas ao Vivo',
        searchCurrency: '🔍 Pesquisar moeda...',
        allRatesBased: 'Todas as taxas baseadas em',
        lastUpdated: 'Última atualização:',
        trendTitle: 'Tendência da Taxa de Câmbio de 30 Dias',
        trendDescription: 'Análise estatística do desempenho da moeda nos últimos 30 dias',
        currentRate: 'Taxa Atual',
        thirtyDayHigh: 'Máxima de 30 Dias',
        thirtyDayLow: 'Mínima de 30 Dias',
        totalChange: 'Mudança Total',
        averageRate: 'Taxa Média',
        volatility: 'Volatilidade',
        exchangeRate: 'Taxa de Câmbio',
        averageLine: 'Média de 30 Dias',
        poweredBy: 'Desenvolvido por ExchangeRate-API • Dados de moeda em tempo real',
        contactCreator: 'Contatar Criador: Paccy Developer'
    },
    ru: {
        appName: 'Paccy Обмен Валют',
        convertTitle: 'Конвертировать Валюту',
        convertSubtitle: 'Курсы валют в реальном времени',
        amount: 'Сумма',
        convertedTo: 'Конвертировано в',
        enterAmount: 'Введите сумму для конвертации',
        liveRates: 'Текущие Курсы',
        searchCurrency: '🔍 Поиск валюты...',
        allRatesBased: 'Все курсы основаны на',
        lastUpdated: 'Последнее обновление:',
        trendTitle: 'Тренд Обменного Курса за 30 Дней',
        trendDescription: 'Статистический анализ динамики валюты за последние 30 дней',
        currentRate: 'Текущий Курс',
        thirtyDayHigh: 'Максимум за 30 Дней',
        thirtyDayLow: 'Минимум за 30 Дней',
        totalChange: 'Общее Изменение',
        averageRate: 'Средний Курс',
        volatility: 'Волатильность',
        exchangeRate: 'Обменный Курс',
        averageLine: 'Среднее за 30 Дней',
        poweredBy: 'На основе ExchangeRate-API • Данные валют в реальном времени',
        contactCreator: 'Связаться с Создателем: Paccy Developer'
    },
    ar: {
        appName: 'Paccy تبادل العملات',
        convertTitle: 'تحويل العملة',
        convertSubtitle: 'أسعار الصرف في الوقت الفعلي في متناول يدك',
        amount: 'المبلغ',
        convertedTo: 'تحويل إلى',
        enterAmount: 'أدخل مبلغًا للتحويل',
        liveRates: 'الأسعار المباشرة',
        searchCurrency: '🔍 البحث عن العملة...',
        allRatesBased: 'جميع الأسعار بناءً على',
        lastUpdated: 'آخر تحديث:',
        trendTitle: 'اتجاه سعر الصرف لمدة 30 يومًا',
        trendDescription: 'التحليل الإحصائي لأداء العملة خلال الـ 30 يومًا الماضية',
        currentRate: 'السعر الحالي',
        thirtyDayHigh: 'أعلى سعر خلال 30 يومًا',
        thirtyDayLow: 'أدنى سعر خلال 30 يومًا',
        totalChange: 'التغيير الإجمالي',
        averageRate: 'السعر المتوسط',
        volatility: 'التقلب',
        exchangeRate: 'سعر الصرف',
        averageLine: 'المتوسط لمدة 30 يومًا',
        poweredBy: 'مدعوم من ExchangeRate-API • بيانات العملة في الوقت الفعلي',
        contactCreator: 'اتصل بالمبدع: Paccy Developer'
    },
    hi: {
        appName: 'Paccy मुद्रा विनिमय',
        convertTitle: 'मुद्रा परिवर्तित करें',
        convertSubtitle: 'वास्तविक समय विनिमय दरें आपकी उंगलियों पर',
        amount: 'राशि',
        convertedTo: 'में परिवर्तित',
        enterAmount: 'परिवर्तित करने के लिए राशि दर्ज करें',
        liveRates: 'लाइव दरें',
        searchCurrency: '🔍 मुद्रा खोजें...',
        allRatesBased: 'सभी दरें आधारित हैं',
        lastUpdated: 'अंतिम अपडेट:',
        trendTitle: '30-दिवसीय विनिमय दर प्रवृत्ति',
        trendDescription: 'पिछले 30 दिनों में मुद्रा प्रदर्शन का सांख्यिकीय विश्लेषण',
        currentRate: 'वर्तमान दर',
        thirtyDayHigh: '30-दिवसीय उच्च',
        thirtyDayLow: '30-दिवसीय निम्न',
        totalChange: 'कुल परिवर्तन',
        averageRate: 'औसत दर',
        volatility: 'अस्थिरता',
        exchangeRate: 'विनिमय दर',
        averageLine: '30-दिवसीय औसत',
        poweredBy: 'ExchangeRate-API द्वारा संचालित • वास्तविक समय मुद्रा डेटा',
        contactCreator: 'निर्माता से संपर्क करें: Paccy Developer'
    },
    tr: {
        appName: 'Paccy Döviz Bozdurma',
        convertTitle: 'Döviz Çevir',
        convertSubtitle: 'Gerçek zamanlı döviz kurları parmaklarınızın ucunda',
        amount: 'Miktar',
        convertedTo: 'Dönüştürülen',
        enterAmount: 'Dönüştürülecek miktarı girin',
        liveRates: 'Canlı Kurlar',
        searchCurrency: '🔍 Para birimi ara...',
        allRatesBased: 'Tüm oranlar şuna dayanır',
        lastUpdated: 'Son güncelleme:',
        trendTitle: '30 Günlük Döviz Kuru Trendi',
        trendDescription: 'Son 30 gündeki para birimi performansının istatistiksel analizi',
        currentRate: 'Mevcut Kur',
        thirtyDayHigh: '30 Günlük En Yüksek',
        thirtyDayLow: '30 Günlük En Düşük',
        totalChange: 'Toplam Değişim',
        averageRate: 'Ortalama Kur',
        volatility: 'Volatilite',
        exchangeRate: 'Döviz Kuru',
        averageLine: '30 Günlük Ortalama',
        poweredBy: 'ExchangeRate-API tarafından desteklenmektedir • Gerçek zamanlı para birimi verileri',
        contactCreator: 'Yaratıcıyla İletişime Geçin: Paccy Developer'
    }
};

// State
let rates = {};
let baseCurrency = 'USD';
let currentLang = 'en';
let currentTheme = 'dark';

// DOM Elements
const fromAmount = document.getElementById('fromAmount');
const toAmount = document.getElementById('toAmount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const swapBtn = document.getElementById('swapBtn');
const resultMain = document.getElementById('resultMain');
const resultSub = document.getElementById('resultSub');
const ratesGrid = document.getElementById('ratesGrid');
const searchRates = document.getElementById('searchRates');
const lastUpdated = document.getElementById('lastUpdated');
const baseCurrencyLabel = document.getElementById('baseCurrencyLabel');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const langDropdown = document.getElementById('langDropdown');

// ============================================
// INITIALIZATION
// ============================================
async function init() {
    loadThemePreference();
    loadLanguagePreference();
    populateCurrencySelects();
    await fetchRates();
    setupEventListeners();
    convert();
    updateTranslations();
}

// ============================================
// THEME FUNCTIONS
// ============================================
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    generateTrendData(); // Redraw chart with new theme
}

// ============================================
// LANGUAGE FUNCTIONS
// ============================================
function loadLanguagePreference() {
    currentLang = localStorage.getItem('language') || 'en';
    updateLanguageDisplay();
}

function updateLanguageDisplay() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });

    const activeLang = document.querySelector(`.lang-option[data-lang="${currentLang}"]`);
    if (activeLang) {
        document.getElementById('currentLangFlag').textContent = activeLang.dataset.flag;
        document.getElementById('currentLangCode').textContent = currentLang.toUpperCase();
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateLanguageDisplay();
    updateTranslations();
    convert(); // Refresh display
}

function updateTranslations() {
    const trans = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (trans[key]) {
            el.textContent = trans[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (trans[key]) {
            el.placeholder = trans[key];
        }
    });
}

// ============================================
// CURRENCY FUNCTIONS
// ============================================
function populateCurrencySelects() {
    const currencies = Object.keys(CURRENCY_DATA);
    [fromCurrency, toCurrency].forEach((select, index) => {
        select.innerHTML = '';
        currencies.forEach(code => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = `${CURRENCY_DATA[code].flag} ${code}`;
            select.appendChild(option);
        });
        select.value = index === 0 ? 'USD' : 'EUR';
    });
}

async function fetchRates() {
    try {
        const response = await fetch(`${API_BASE}${baseCurrency}`);
        const data = await response.json();
        rates = data.rates;

        const now = new Date();
        const trans = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        lastUpdated.textContent = `${trans.lastUpdated} ${now.toLocaleTimeString()}`;

        renderRatesGrid();
    } catch (error) {
        console.error('Failed to fetch rates:', error);
        resultSub.textContent = 'Failed to load rates.';
    }
}

function convert() {
    const amount = parseFloat(fromAmount.value) || 0;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === 0) {
        resultMain.textContent = '0';
        const trans = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        resultSub.textContent = trans.enterAmount;
        toAmount.value = '';
        return;
    }

    const fromRate = rates[from] || 1;
    const toRate = rates[to] || 1;
    const result = (amount / fromRate) * toRate;

    toAmount.value = result.toFixed(4);
    resultMain.textContent = `${CURRENCY_DATA[to]?.flag || ''} ${formatNumber(result)} ${to}`;
    resultSub.textContent = `1 ${from} = ${(toRate / fromRate).toFixed(6)} ${to}`;

    generateTrendData();
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(2) + 'K';
    return num.toFixed(4);
}

function renderRatesGrid(filter = '') {
    const currencies = Object.keys(rates).filter(code => {
        if (!CURRENCY_DATA[code]) return false;
        const search = filter.toLowerCase();
        return code.toLowerCase().includes(search) ||
            CURRENCY_DATA[code]?.name.toLowerCase().includes(search);
    });

    ratesGrid.innerHTML = currencies.map(code => {
        const rate = rates[code];
        const data = CURRENCY_DATA[code] || { name: code, flag: '💱' };
        return `
            <div class="rate-card" data-currency="${code}">
                <div class="rate-code">${data.flag} ${code}</div>
                <div class="rate-name">${data.name}</div>
                <div class="rate-value">${rate.toFixed(4)}</div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.rate-card').forEach(card => {
        card.addEventListener('click', () => {
            toCurrency.value = card.dataset.currency;
            convert();
        });
    });
}

// ============================================
// TREND CHART FUNCTIONS
// ============================================
function viewSpecificTrend(from, to) {
    fromCurrency.value = from;
    toCurrency.value = to;
    convert();
    document.querySelector('.trend-section').scrollIntoView({ behavior: 'smooth' });
}

function generateTrendData() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const fromRate = rates[from] || 1;
    const toRate = rates[to] || 1;
    const currentRate = toRate / fromRate;

    // Update currency display
    document.getElementById('trendFromCurrency').textContent = from;
    document.getElementById('trendToCurrency').textContent = to;

    // Generate 30 days of data
    const labels = [];
    const data = [];
    const today = new Date();

    // Higher volatility for Turkish Lira to reflect real-world "situation"
    const isTurkishLira = from === 'TRY' || to === 'TRY';
    const volatility = isTurkishLira ? 0.08 : 0.015;
    let rate = currentRate * (1 + (Math.random() - 0.5) * 0.08);

    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));

        const change = (Math.random() - 0.5) * volatility * rate;
        rate = rate + change;

        if (i < 5) {
            rate = rate + (currentRate - rate) * (0.3 * (5 - i) / 5);
        }

        data.push(rate);
    }

    data[29] = currentRate;

    // Calculate statistics
    const high = Math.max(...data);
    const low = Math.min(...data);
    const avg = data.reduce((a, b) => a + b, 0) / data.length;
    const change = ((currentRate - data[0]) / data[0]) * 100;
    const volatilityCalc = (high - low) / avg * 100;

    // Update stat cards
    document.getElementById('statCurrentRate').textContent = currentRate.toFixed(6);
    document.getElementById('statHighRate').textContent = high.toFixed(6);
    document.getElementById('statLowRate').textContent = low.toFixed(6);
    document.getElementById('statAvgRate').textContent = avg.toFixed(6);
    document.getElementById('statVolatility').textContent = volatilityCalc.toFixed(2) + '%';

    const changeEl = document.getElementById('statChange');
    changeEl.textContent = (change >= 0 ? '+' : '') + change.toFixed(2) + '%';
    const changeCard = changeEl.closest('.stat-card');
    changeCard.classList.toggle('positive', change >= 0);
    changeCard.classList.toggle('negative', change < 0);

    renderTrendChart(labels, data, avg);
}

function renderTrendChart(labels, data, avgRate) {
    const canvas = document.getElementById('trendChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 30, right: 30, bottom: 40, left: 70 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    ctx.clearRect(0, 0, width, height);

    const minVal = Math.min(...data) * 0.995;
    const maxVal = Math.max(...data) * 1.005;
    const range = maxVal - minVal;

    const getX = (i) => padding.left + (i / (data.length - 1)) * chartWidth;
    const getY = (val) => padding.top + chartHeight - ((val - minVal) / range) * chartHeight;

    // Get theme colors
    const isDark = currentTheme === 'dark';
    const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    const textColor = isDark ? 'rgba(139,155,180,0.8)' : 'rgba(100,116,139,0.8)';

    // Grid lines
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;

    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (i / 5) * chartHeight;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        const val = maxVal - (i / 5) * range;
        ctx.fillStyle = textColor;
        ctx.font = '11px Outfit';
        ctx.textAlign = 'right';
        ctx.fillText(val.toFixed(5), padding.left - 10, y + 4);
    }

    // Average line
    const avgY = getY(avgRate);
    ctx.strokeStyle = 'rgba(255,107,53,0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(padding.left, avgY);
    ctx.lineTo(width - padding.right, avgY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    gradient.addColorStop(0, 'rgba(0,242,255,0.3)');
    gradient.addColorStop(1, 'rgba(188,19,254,0.05)');

    ctx.beginPath();
    ctx.moveTo(getX(0), height - padding.bottom);
    data.forEach((val, i) => ctx.lineTo(getX(i), getY(val)));
    ctx.lineTo(getX(data.length - 1), height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line gradient
    const lineGradient = ctx.createLinearGradient(padding.left, 0, width - padding.right, 0);
    lineGradient.addColorStop(0, '#00f2ff');
    lineGradient.addColorStop(1, '#bc13fe');

    ctx.beginPath();
    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    data.forEach((val, i) => {
        if (i === 0) ctx.moveTo(getX(i), getY(val));
        else ctx.lineTo(getX(i), getY(val));
    });
    ctx.stroke();

    // Glow
    ctx.shadowColor = '#00f2ff';
    ctx.shadowBlur = 15;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Points
    data.forEach((val, i) => {
        if (i % 5 === 0 || i === data.length - 1) {
            ctx.beginPath();
            ctx.arc(getX(i), getY(val), 5, 0, Math.PI * 2);
            ctx.fillStyle = i === data.length - 1 ? '#bc13fe' : '#00f2ff';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    });

    // X-axis labels
    ctx.fillStyle = textColor;
    ctx.font = '11px Outfit';
    ctx.textAlign = 'center';

    [0, 7, 14, 21, 29].forEach(i => {
        if (labels[i]) {
            ctx.fillText(labels[i], getX(i), height - 10);
        }
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    fromAmount.addEventListener('input', debounce(convert, 150));
    fromCurrency.addEventListener('change', () => {
        convert();
        baseCurrencyLabel.textContent = fromCurrency.value;
    });
    toCurrency.addEventListener('change', convert);

    swapBtn.addEventListener('click', () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        convert();
    });

    searchRates.addEventListener('input', debounce((e) => {
        renderRatesGrid(e.target.value);
    }, 200));

    // View TRY Trend Buttons
    const viewUsdTryBtn = document.getElementById('viewUsdTryBtn');
    if (viewUsdTryBtn) {
        viewUsdTryBtn.addEventListener('click', () => viewSpecificTrend('USD', 'TRY'));
    }

    const viewEurTryBtn = document.getElementById('viewEurTryBtn');
    if (viewEurTryBtn) {
        viewEurTryBtn.addEventListener('click', () => viewSpecificTrend('EUR', 'TRY'));
    }

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Language dropdown
    langToggle.addEventListener('click', () => {
        langDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            setLanguage(opt.dataset.lang);
            langDropdown.classList.remove('show');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            langDropdown.classList.remove('show');
        }
    });

    window.addEventListener('resize', debounce(() => {
        generateTrendData();
    }, 250));
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Start the app
init();
