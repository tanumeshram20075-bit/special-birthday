// Floating confetti on all pages
function createConfetti(count = 35) {
  const container = document.getElementById("confetti");
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 1.5 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.width = (5 + Math.random() * 8) + "px";
    piece.style.height = (8 + Math.random() * 12) + "px";
    piece.style.background = ["#ff5bb8","#ffd85c","#8bdcff","#b67cff","#ffffff"][Math.floor(Math.random()*5)];
    container.appendChild(piece);
  }
  setTimeout(() => container.innerHTML = "", 5000);
}

const gift = document.getElementById("giftBox");
if (gift) {
  gift.addEventListener("click", () => {
    gift.classList.add("opened");
    const letter = document.getElementById("letter");
    letter.classList.add("show");
    document.querySelector(".click-text").textContent = "Surprise opened! ❤️";
    createConfetti(80);
  });
}

// Small extra floating sparkles on Home
const particles = document.getElementById("particles");
if (particles) {
  setInterval(() => {
    const p = document.createElement("div");
    p.textContent = ["♥","✦","✧","•"][Math.floor(Math.random()*4)];
    p.style.position = "fixed";
    p.style.left = Math.random()*100 + "vw";
    p.style.bottom = "-20px";
    p.style.color = "#ff8dcc";
    p.style.fontSize = (10 + Math.random()*18) + "px";
    p.style.zIndex = "1";
    p.style.transition = "transform 5s linear, opacity 5s";
    particles.appendChild(p);
    requestAnimationFrame(() => {
      p.style.transform = `translateY(-110vh) rotate(${Math.random()*360}deg)`;
      p.style.opacity = "0";
    });
    setTimeout(() => p.remove(), 5200);
  }, 650);
}
