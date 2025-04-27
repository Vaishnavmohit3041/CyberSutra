let currentLevel = 1;
const totalLevels = 20;

const questions = [
    {
      level: "Easy",
      question: "If someone sends you a QR code and says 'Scan this to win a prize!', what should you do?",
      options: [
        { text: "Scan it quickly", correct: false },
        { text: "Ask an adult or teacher", correct: true },
        { text: "Share it with your friends", correct: false },
        { text: "Try it once", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "What should you check before paying someone using UPI?",
      options: [
        { text: "Their UPI ID or name", correct: true },
        { text: "Their photo", correct: false },
        { text: "Their favorite color", correct: false },
        { text: "Nothing, just pay", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Is it okay to scan a QR code from a stranger?",
      options: [
        { text: "Yes", correct: false },
        { text: "No", correct: true },
        { text: "Only once", correct: false },
        { text: "If it looks fun", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "If someone says 'Scan this to receive money', what should you do?",
      options: [
        { text: "Scan it quickly", correct: false },
        { text: "Try it once", correct: false },
        { text: "Ignore and tell a trusted adult", correct: true },
        { text: "Ask your friends", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Should you ever share your UPI PIN with friends?",
      options: [
        { text: "No, never", correct: true },
        { text: "Yes, if they are close friends", correct: false },
        { text: "Sometimes", correct: false },
        { text: "Only on WhatsApp", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Who should you ask before making a digital payment?",
      options: [
        { text: "A parent or teacher", correct: true },
        { text: "A stranger", correct: false },
        { text: "A game character", correct: false },
        { text: "Your younger sibling", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Where should QR codes be scanned from?",
      options: [
        { text: "Random walls and websites", correct: false },
        { text: "Any paper", correct: false },
        { text: "TV ads", correct: false },
        { text: "Trusted shops or apps", correct: true }
      ]
    },
    {
      level: "Easy",
      question: "If you see a QR code on a pole/street, should you scan it?",
      options: [
        { text: "Yes", correct: false },
        { text: "Only if it looks cool", correct: false },
        { text: "No", correct: true },
        { text: "Only if it says 'Free Money'", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Is it safe to scan QR codes shown in unknown WhatsApp groups?",
      options: [
        { text: "No", correct: true },
        { text: "Yes", correct: false },
        { text: "Sometimes", correct: false },
        { text: "Only during festivals", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "What should you do if an app asks for UPI access and you didn’t install it?",
      options: [
        { text: "Allow it", correct: false },
        { text: "Click on it to check", correct: false },
        { text: "Ignore and continue", correct: false },
        { text: "Tell your parent or teacher", correct: true }
      ]
    },
    {
      level: "Medium",
      question: "A person at your school asks you to scan their code to get a toy. What do you do?",
      options: [
        { text: "Scan it quickly", correct: false },
        { text: "Try it secretly", correct: false },
        { text: "Ask your teacher or parent", correct: true },
        { text: "Take a photo of it", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "You find a QR code in your lunchbox from an unknown source. What’s the smart move?",
      options: [
        { text: "Scan it to see what it is", correct: false },
        { text: "Show it to a trusted adult", correct: true },
        { text: "Give it to a friend", correct: false },
        { text: "Ignore and throw it", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "Which of the following is a red flag?",
      options: [
        { text: "A message that says 'Scan to get ₹10,000 instantly!'", correct: true },
        { text: "A friend sending a QR code for fun", correct: false },
        { text: "Your school sharing a QR code", correct: false },
        { text: "Your parent showing you a code", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "Can scanning a QR code from a poster steal your money?",
      options: [
        { text: "No, never", correct: false },
        { text: "Only in cities", correct: false },
        { text: "Yes, sometimes", correct: true },
        { text: "Only if you use UPI", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "How can you tell if a QR code is fake?",
      options: [
        { text: "It’s from an unknown source or untrusted person", correct: true },
        { text: "It looks colorful", correct: false },
        { text: "It’s printed neatly", correct: false },
        { text: "It’s from your friend", correct: false }
      ]
    },
    {
      level: "Hard",
      question: "You paid at a shop, but later found out the QR sticker was fake. What can help next time?",
      options: [
        { text: "Scanning quickly before asking anything", correct: false },
        { text: "Asking the shopkeeper to show the code from their app", correct: true },
        { text: "Looking at colors on the QR", correct: false },
        { text: "Scanning from far away", correct: false }
      ]
    },
    {
      level: "Hard",
      question: "Why should you not scan QR codes from YouTube videos or Telegram messages offering rewards?",
      options: [
        { text: "They are usually boring", correct: false },
        { text: "They could be scams or traps", correct: true },
        { text: "They don’t work", correct: false },
        { text: "They are hard to scan", correct: false }
      ]
    },
    {
      level: "Hard",
      question: "You receive a call saying, 'We are from the bank, scan this QR to secure your account.' What should you do?",
      options: [
        { text: "Scan it immediately", correct: false },
        { text: "Ask for another QR", correct: false },
        { text: "Call the number back", correct: false },
        { text: "Never scan it and inform a trusted adult", correct: true }
      ]
    },
    {
      level: "Hard",
      question: "What is the safest place to scan a QR code from?",
      options: [
        { text: "A verified shop app or a school poster from your teacher", correct: true },
        { text: "Random websites or SMS messages", correct: false },
        { text: "A sticker on a wall", correct: false },
        { text: "Social media posts", correct: false }
      ]
    },
    {
      level: "Hard",
      question: "If you or someone accidentally scanned a suspicious QR code, what should you do immediately?",
      options: [
        { text: "Ignore it", correct: false },
        { text: "Tell a parent or teacher and report it", correct: true },
        { text: "Scan it again", correct: false },
        { text: "Delete your phone apps", correct: false }
      ]
    }
  ]

function loadQuestion(index) {
  if (index >= questions.length) return showCongrats();
  const q = questions[index];
  document.getElementById("level-label").innerText = q.level;
  document.getElementById("level-indicator").innerText = `Level ${index + 1} / ${totalLevels}`;
  const box = document.getElementById("question-box");

  // Fade in effect
  box.classList.remove("show");
  setTimeout(() => {
    box.classList.add("show");
  }, 100); // Trigger the fade-in effect slightly delayed

  box.innerHTML = `
        <p>${q.question}</p>
        ${q.options.map(o => `<button class="option" onclick="checkAnswer(this, ${o.correct})">${o.text}</button>`).join('')}
      `;
}

function checkAnswer(button, isCorrect) {
  const buttons = document.querySelectorAll('.option');
  buttons.forEach(btn => btn.disabled = true);
  if (isCorrect) {
    button.classList.add('correct');
    setTimeout(() => {
      currentLevel++;
      loadQuestion(currentLevel - 1);
    }, 700);
  } else {
    button.classList.add('wrong');
    buttons.forEach(btn => btn.disabled = false);
  }
}

function showCongrats() {
  document.getElementById("level-label").style.display = "none";
  document.getElementById("level-indicator").style.display = "none";
  document.querySelector(".title").style.display = "none";
  document.getElementById("question-box").innerHTML = `
        <div class="congrats">
          <h2>🎉 Great Work!</h2>
          <p>You completed all levels like a UPI & QR Code Quest!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);