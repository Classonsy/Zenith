document.addEventListener('DOMContentLoaded', () => {

    /* --- CURSOR LOGIC --- */
    // Custom cursor removed in favor of system crosshair

    /* --- GRID GLOW LOGIC --- */
    // Apply ONLY to Hero Section
    const heroSection = document.querySelector('.hero');
    const grindGlow = document.querySelector('.grid-bg-glow');

    if (heroSection && grindGlow) {
        // Track mouse relative to HERO now, not document
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            grindGlow.style.setProperty('--x', `${x}px`);
            grindGlow.style.setProperty('--y', `${y}px`);
        });
    }


    /* --- EXCHANGE WIDGET LOGIC --- */
    const inputAmount = document.getElementById('input-amount');
    const inputCurrency = document.getElementById('input-currency');
    const outputAmount = document.getElementById('output-amount');
    const outputCurrency = document.getElementById('output-currency');
    const swapBtn = document.getElementById('swap-btn');
    const exchangeBtn = document.getElementById('exchange-btn');

    // Mock Rates (base: USDT)
    const rates = {
        'USDT': 1,
        'RUB': 92.50,
        'GEL': 2.68
    };

    function calculateExchange() {
        if (!inputAmount) return;
        const from = inputCurrency.value;
        const to = outputCurrency.value;
        const amount = parseFloat(inputAmount.value);

        if (isNaN(amount)) {
            outputAmount.value = '';
            return;
        }

        const rate = rates[to] / rates[from];
        const result = amount * rate;

        outputAmount.value = result.toFixed(2);
    }

    if (inputAmount) {
        inputAmount.addEventListener('input', calculateExchange);
        inputCurrency.addEventListener('change', calculateExchange);
        outputCurrency.addEventListener('change', calculateExchange);

        swapBtn.addEventListener('click', () => {
            const tempCurr = inputCurrency.value;
            inputCurrency.value = outputCurrency.value;
            outputCurrency.value = tempCurr;

            swapBtn.style.transform = "rotate(360deg)";
            setTimeout(() => swapBtn.style.transform = "rotate(0deg)", 300);

            calculateExchange();
        });

        calculateExchange();
    }


    /* --- 3D TILT EFFECT FOR CARDS --- */
    const cards = document.querySelectorAll('.feature-card, .exchange-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveX = (x - centerX) / 20; // intensity
            const moveY = (y - centerY) / 20;

            card.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        });
    });

});
