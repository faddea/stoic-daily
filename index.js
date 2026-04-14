async function init() {
            try {
                const response = await fetch('frases.json');
                const quotes = await response.json();
                
                const now = new Date();
                const start = new Date(now.getFullYear(), 0, 0);
                const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
                
                // Lógica de selección
                const index = (dayOfYear - 1) % quotes.length;
                const todayQuote = quotes[index];

                // Inyectar
                document.getElementById('day-label').innerText = `${dayOfYear} / 365`;
                document.getElementById('quote-text').innerText = `"${todayQuote.quote}"`;
                document.getElementById('quote-author').innerText = `— ${todayQuote.author} —`;

                animateEntry();
            } catch (error) {
                console.error("Error cargando frases:", error);
            }
        }

        function animateEntry() {
            const tl = gsap.timeline();
            tl.to("#main-content", { opacity: 1, duration: 1.2 })
              .from(".corner-img", { y: 100, opacity: 0, duration: 1.5, stagger: 0.2 }, "-=1")
              .from("nav", { y: -50, opacity: 0, duration: 1 }, "-=1.5")
              .from("#quote-text", { y: 20, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5");
        }

        window.onload = init;