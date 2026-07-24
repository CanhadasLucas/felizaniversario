const intro = document.getElementById("intro");
const main = document.getElementById("mainPage");
const gallery = document.getElementById("gallery");
const finalPage = document.getElementById("final");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("next");
const music = document.getElementById("music");

// Esconde todas as telas
function hideAll() {
    intro.style.display = "none";
    main.style.display = "none";
    gallery.style.display = "none";
    finalPage.style.display = "none";
}

// Abrir carta
openBtn.addEventListener("click", () => {
    hideAll();
    main.style.display = "flex";

    if (music) {
        music.volume = 0.5;
        music.play().catch(() => {});
    }

    confetti();
});

// Ir para galeria
nextBtn.addEventListener("click", () => {
    hideAll();
    gallery.style.display = "flex";

    // Se quiser que passe para o final sozinho após um tempo, 
    // aumentei para 12 segundos para dar tempo de ver as fotos:
    setTimeout(() => {
        hideAll();
        finalPage.style.display = "flex";
    }, 12000);
});

// Confetes
function confetti() {
    for (let i = 0; i < 120; i++) {
        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";
        piece.style.width = "8px";
        piece.style.height = "8px";
        piece.style.borderRadius = "50%";
        piece.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;

        piece.style.pointerEvents = "none";
        piece.style.zIndex = "9999";

        document.body.appendChild(piece);

        const duration = 3000 + Math.random() * 2000;

        piece.animate([
            {
                transform: "translateY(0px) rotate(0deg)"
            },
            {
                transform: `translateY(${window.innerHeight + 50}px) rotate(720deg)`
            }
        ], {
            duration: duration,
            easing: "linear"
        });

        setTimeout(() => {
            piece.remove();
        }, duration);
    }
}

// Espaço pausa a música
document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        e.preventDefault();

        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    }
});