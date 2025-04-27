let currentLevel = 1;
const totalLevels = 20;

const questions = 
[
  {
    level: "Easy",
    question: "What is a password used for?",
    options: [
      { text: "To play games", correct: false },
      { text: "To keep your account safe", correct: true },
      { text: "To tell friends your secret", correct: false },
      { text: "To win prizes", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Is it good to have an easy password like '1234'?",
    options: [
      { text: "No, it’s too simple", correct: true },
      { text: "Yes, easy to remember", correct: false },
      { text: "Only if your friends use it", correct: false },
      { text: "Yes, it looks cool", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Who should you share your password with?",
    options: [
      { text: "Everyone", correct: false },
      { text: "Only parents or trusted adults", correct: true },
      { text: "Best friends", correct: false },
      { text: "Teachers and classmates", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What makes a password strong?",
    options: [
      { text: "Your pet’s name", correct: false },
      { text: "Your school name", correct: false },
      { text: "Mix of letters, numbers, and symbols", correct: true },
      { text: "Just your first name", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What should you do if you forget your password?",
    options: [
      { text: "Ask a trusted adult for help", correct: true },
      { text: "Tell a friend", correct: false },
      { text: "Stop using the app forever", correct: false },
      { text: "Make a new account", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "If someone guesses your password, what should you do?",
    options: [
      { text: "Change it and tell an adult", correct: true },
      { text: "Do nothing", correct: false },
      { text: "Let them use it", correct: false },
      { text: "Use it together", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Where should you write down your password?",
    options: [
      { text: "In your notebook at school", correct: false },
      { text: "On your desk", correct: false },
      { text: "Somewhere safe with help from an adult", correct: true },
      { text: "On your hand", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "What is two-factor protection (2FA)?",
    options: [
      { text: "A secret shield to keep you extra safe", correct: true },
      { text: "A game cheat code", correct: false },
      { text: "A nickname for your friend", correct: false },
      { text: "A magic number", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "When 2FA is on, what happens after you type your password?",
    options: [
      { text: "You win coins", correct: false },
      { text: "The app closes", correct: false },
      { text: "It changes your wallpaper", correct: false },
      { text: "You get a secret code to type too", correct: true }
    ]
  },
  {
    level: "Medium",
    question: "Why is using 2FA helpful?",
    options: [
      { text: "It gives your account superpowers", correct: false },
      { text: "It adds one more lock to your door", correct: true },
      { text: "It’s fun to use", correct: false },
      { text: "It makes your app colorful", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You get a code on your parent’s phone. What should you do?",
    options: [
      { text: "Use it only if they say it's okay", correct: true },
      { text: "Ignore it", correct: false },
      { text: "Share it with a friend", correct: false },
      { text: "Delete it", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Can a code from 2FA be used again and again?",
    options: [
      { text: "Yes, forever", correct: false },
      { text: "Only three times", correct: false },
      { text: "No, it's only for one time", correct: true },
      { text: "Only on Sundays", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "What should you do if someone asks you to read them your 2FA code?",
    options: [
      { text: "Say yes, it’s okay", correct: false },
      { text: "Ask them why", correct: false },
      { text: "Tell an adult and don't share it", correct: true },
      { text: "Type it in chat", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "If 2FA is like a secret lock, what is the key?",
    options: [
      { text: "The password", correct: false },
      { text: "Your birthday", correct: false },
      { text: "The secret code you get", correct: true },
      { text: "Your username", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why should you turn on 2FA with an adult's help?",
    options: [
      { text: "It keeps your account safer", correct: true },
      { text: "It makes logging in slower", correct: false },
      { text: "It’s a secret game", correct: false },
      { text: "It changes your username", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You get a strange message asking for a 2FA code. What should you do?",
    options: [
      { text: "Give the code", correct: false },
      { text: "Ignore and tell a trusted adult", correct: true },
      { text: "Send a funny emoji", correct: false },
      { text: "Say 'wrong number'", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "What happens if someone gets your password but not your 2FA code?",
    options: [
      { text: "They can still get in", correct: false },
      { text: "They break the phone", correct: false },
      { text: "They win a prize", correct: false },
      { text: "They can’t log in", correct: true }
    ]
  },
  {
    level: "Hard",
    question: "If you lose your device, what should you do about your 2FA?",
    options: [
      { text: "Nothing", correct: false },
      { text: "Tell a parent or adult right away", correct: true },
      { text: "Ask your friend to fix it", correct: false },
      { text: "Buy a new game", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "How often should you check if your 2FA is turned on?",
    options: [
      { text: "Once in a while with help from adults", correct: true },
      { text: "Only when something breaks", correct: false },
      { text: "Every hour", correct: false },
      { text: "Never", correct: false }
    ]
  },
    {
      level: "Hard",
      question: "Why is it better to have two locks (like password + code) instead of just one?",
      options: [
        { text: "It looks cool", correct: false },
        { text: "It confuses your friends", correct: false },
        { text: "It gives extra safety from strangers", correct: true },
        { text: "It makes your screen colorful", correct: false }
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
          <p>You completed all levels like a Two-Factor Temple!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);