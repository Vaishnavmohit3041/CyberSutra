let currentLevel = 1;
const totalLevels = 20;

const questions = 
[
  {
    level: "Easy",
    question: "What is personal information?",
    options: [
      { text: "Your favorite food", correct: false },
      { text: "Your name, address, and school", correct: true },
      { text: "Your favorite color", correct: false },
      { text: "Cartoons you like", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Should you tell your password to your friends?",
    options: [
      { text: "No, passwords are private", correct: true },
      { text: "Yes, they are your best friends", correct: false },
      { text: "Only if they ask nicely", correct: false },
      { text: "Yes, so they can help you", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "You’re asked to type your address in an online game. What do you do?",
    options: [
      { text: "Type it fast", correct: false },
      { text: "Ignore it and ask an adult", correct: true },
      { text: "Tell your friends", correct: false },
      { text: "Share it with the game", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Who should know your passwords?",
    options: [
      { text: "Only you and your parents", correct: true },
      { text: "Your teacher", correct: false },
      { text: "All your classmates", correct: false },
      { text: "Anyone who asks", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "You want to post a photo of your school ID. Should you?",
    options: [
      { text: "Yes, it looks cool", correct: false },
      { text: "No, it shows personal info", correct: true },
      { text: "Yes, to get likes", correct: false },
      { text: "Only if friends are in it", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What should you do if someone online asks where you live?",
    options: [
      { text: "Tell them quickly", correct: false },
      { text: "Only tell your city", correct: false },
      { text: "Ignore them and tell an adult", correct: true },
      { text: "Ask them first", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Why should you keep your birthday private online?",
    options: [
      { text: "It helps people send gifts", correct: false },
      { text: "It’s fun to surprise friends", correct: false },
      { text: "It keeps you safe from strangers", correct: true },
      { text: "It’s too hard to write", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Which of these is safe to share online?",
    options: [
      { text: "Your pet’s name", correct: true },
      { text: "Your full address", correct: false },
      { text: "Your school name and class", correct: false },
      { text: "Your phone number", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "A new app asks for your photo. What should you do?",
    options: [
      { text: "Click 'yes' fast", correct: false },
      { text: "Ask a trusted adult", correct: true },
      { text: "Send your best selfie", correct: false },
      { text: "Try it and see later", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What does privacy mean?",
    options: [
      { text: "Having a secret club", correct: false },
      { text: "Sharing your things", correct: false },
      { text: "Locking your door", correct: false },
      { text: "Keeping your personal stuff safe", correct: true }
    ]
  },
  {
    level: "Medium",
    question: "Should you use your real name on every game or app?",
    options: [
      { text: "Yes, always", correct: false },
      { text: "No, use a nickname with an adult’s help", correct: true },
      { text: "Only if it's short", correct: false },
      { text: "Yes, if your friends do it", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "A stranger sends you a message saying you're cool. What do you do?",
    options: [
      { text: "Block them and tell an adult", correct: true },
      { text: "Reply and say thanks", correct: false },
      { text: "Ask their name", correct: false },
      { text: "Chat to learn more", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Why should you not share your school name online?",
    options: [
      { text: "It’s too long to type", correct: false },
      { text: "It’s boring", correct: false },
      { text: "It helps strangers find you", correct: true },
      { text: "Your friends already know", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You see a website asking for your email and phone number. What do you do?",
    options: [
      { text: "Type quickly", correct: false },
      { text: "Give only email", correct: false },
      { text: "Ask a friend", correct: false },
      { text: "Leave it and ask an adult", correct: true }
    ]
  },
  {
    level: "Medium",
    question: "Why is it bad to share your location in a post?",
    options: [
      { text: "Your phone gets heavy", correct: false },
      { text: "It can tell strangers where you are", correct: true },
      { text: "Your friends don’t like it", correct: false },
      { text: "It makes your post boring", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "If someone keeps asking for your private info online, what should you do?",
    options: [
      { text: "Give it after some time", correct: false },
      { text: "Ask them questions too", correct: false },
      { text: "Block them and tell an adult", correct: true },
      { text: "Ignore them only", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You want to make a password. Which one is better?",
    options: [
      { text: "A mix of letters, numbers, and symbols", correct: true },
      { text: "1234", correct: false },
      { text: "Your name", correct: false },
      { text: "Your birthday", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Someone you don’t know sends a photo and asks for yours. What should you do?",
    options: [
      { text: "Send one back", correct: false },
      { text: "Block and tell an adult", correct: true },
      { text: "Ask why they want it", correct: false },
      { text: "Wait and think", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You made a silly video and want to post it. What should you check first?",
    options: [
      { text: "If your personal info is visible", correct: true },
      { text: "If your clothes match", correct: false },
      { text: "If it's funny enough", correct: false },
      { text: "If your friends like it", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why is it important to keep your personal info private?",
    options: [
      { text: "To get more likes", correct: false },
      { text: "So friends are surprised", correct: false },
      { text: "It makes you cool", correct: false },
      { text: "So no one can copy or harm you", correct: true }
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
          <p>You completed all levels like a Privacy Protector Patrol!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);