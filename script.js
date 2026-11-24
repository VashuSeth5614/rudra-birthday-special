
let taps = 0;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function startExperience() {
  showScreen('game');
}

function tapChallenge() {
  if (taps >= 5) return;

  taps++;

  document.getElementById('counter').innerText =
    taps + ' / 5';

  document.getElementById('progressFill').style.width =
    (taps * 20) + '%';

  const messages = [
    "Keep going, Rudra 😂",
    "Not bad bro!",
    "Legend loading...",
    "Almost there!",
    "CHALLENGE COMPLETED! 🔥"
  ];

  document.getElementById('gameMessage').innerText =
    messages[taps - 1];

  if (taps === 5) {
    document.getElementById('tapButton').innerText =
      "UNLOCKED ✓";

    setTimeout(() => showScreen('roast'), 1200);
  }
}

function celebrate() {
  const emojis = ['🎉', '✨', '🎂', '🖤', '⭐', '🥳'];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement('div');

    piece.className = 'confetti';
    piece.innerText =
      emojis[Math.floor(Math.random() * emojis.length)];

    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.animationDelay = Math.random() * 1.5 + 's';
    piece.style.fontSize =
      (12 + Math.random() * 18) + 'px';

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }
}
