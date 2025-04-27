let currentLevel = 1;
const totalLevels = 20;

const questions = 
[
  {
    level: "Easy",
    question: "You see a cool game ad that says 'Click here for free candy!' What should you do?",
    options: [
      { text: "Click it fast!", correct: false },
      { text: "Download it right away", correct: false },
      { text: "Share it with friends", correct: false },
      { text: "Ask a trusted adult first", correct: true }
    ]
  },
  {
    level: "Easy",
    question: "Who should help you download new games?",
    options: [
      { text: "A stranger online", correct: false },
      { text: "Your parents or teacher", correct: true },
      { text: "Your pet", correct: false },
      { text: "Anyone who sends you a link", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What is a safe place to download games?",
    options: [
      { text: "The official app store", correct: true },
      { text: "A website you don’t know", correct: false },
      { text: "Random pop-up ads", correct: false },
      { text: "A friend's USB", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What should you do before installing a game?",
    options: [
      { text: "Click all buttons quickly", correct: false },
      { text: "Check with an adult", correct: true },
      { text: "Ignore instructions", correct: false },
      { text: "Turn off your device", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "A game asks for your name, address, and photo. What should you do?",
    options: [
      { text: "Give it all", correct: false },
      { text: "Only give it if your friend says it's okay", correct: false },
      { text: "Ask a trusted adult", correct: true },
      { text: "Make up silly answers", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You downloaded a game and now your screen shows weird pop-ups. What should you do?",
    options: [
      { text: "Ignore them", correct: false },
      { text: "Show an adult right away", correct: true },
      { text: "Click all pop-ups", correct: false },
      { text: "Restart the device", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "A game says 'You won a new phone!' What should you do?",
    options: [
      { text: "Click to claim it", correct: false },
      { text: "Tell your friends", correct: false },
      { text: "Send your details", correct: false },
      { text: "Show it to an adult", correct: true }
    ]
  },
  {
    level: "Medium",
    question: "How can you tell if a game is safe?",
    options: [
      { text: "You found it in the official app store", correct: true },
      { text: "It has colorful pictures", correct: false },
      { text: "Your cousin sent it", correct: false },
      { text: "It says 'secret hack'", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "A friend sends you a game file. What should you do?",
    options: [
      { text: "Download it right away", correct: false },
      { text: "Send it to others", correct: false },
      { text: "Ask an adult to check it first", correct: true },
      { text: "Open it without checking", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Why should you avoid games with lots of pop-up ads?",
    options: [
      { text: "They are boring", correct: false },
      { text: "They may be unsafe or fake", correct: true },
      { text: "They take too long to load", correct: false },
      { text: "They don’t look fun", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Which is a warning sign of a fake game?",
    options: [
      { text: "It asks for your passwords", correct: true },
      { text: "It plays music", correct: false },
      { text: "It lets you choose characters", correct: false },
      { text: "It has fun levels", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "If a game asks for your password, what should you do?",
    options: [
      { text: "Type it in", correct: false },
      { text: "Show it to a trusted adult", correct: true },
      { text: "Use a fake one", correct: false },
      { text: "Send it to your friends", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why do some fake games try to trick kids?",
    options: [
      { text: "To help them", correct: false },
      { text: "To give free toys", correct: false },
      { text: "To steal information or harm the device", correct: true },
      { text: "To make funny videos", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You see a game download link in a YouTube comment. What should you do?",
    options: [
      { text: "Ignore it and ask an adult", correct: true },
      { text: "Click it fast", correct: false },
      { text: "Try it and see", correct: false },
      { text: "Send it to friends", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Which of these is the safest way to download a game?",
    options: [
      { text: "From a trusted app store with adult help", correct: true },
      { text: "From a random ad", correct: false },
      { text: "From a friend's message", correct: false },
      { text: "From an unknown website", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "A game says it needs to see your camera and microphone. What should you do?",
    options: [
      { text: "Let it use everything", correct: false },
      { text: "Ask an adult before saying yes", correct: true },
      { text: "Say yes if it looks fun", correct: false },
      { text: "Just cover the camera", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why should you never download cracked or hacked games?",
    options: [
      { text: "They are boring", correct: false },
      { text: "They are hard to play", correct: false },
      { text: "They have too many levels", correct: false },
      { text: "They can damage your device or steal info", correct: true }
    ]
  },
  {
    level: "Hard",
    question: "You accidentally clicked a game download and it started installing. What should you do?",
    options: [
      { text: "Tell a trusted adult right away", correct: true },
      { text: "Ignore it", correct: false },
      { text: "Keep installing", correct: false },
      { text: "Try playing it", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why should you avoid games that ask for personal details like your school name or address?",
    options: [
      { text: "They are boring", correct: false },
      { text: "They want to send you gifts", correct: false },
      { text: "They might be tricking you", correct: true },
      { text: "They help you make friends", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "How can you stay safe when downloading games?",
    options: [
      { text: "Only click what looks cool", correct: false },
      { text: "Ask adults, use trusted stores, and never click pop-ups", correct: true },
      { text: "Try many websites", correct: false },
      { text: "Only play offline", correct: false }
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
          <p>You completed all levels like a Game Download Gauntlet!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);