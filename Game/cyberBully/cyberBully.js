let currentLevel = 1;
const totalLevels = 20;

const questions = 
[
  {
    level: "Easy",
    question: "What is cyberbullying?",
    options: [
      { text: "Being mean online", correct: true },
      { text: "Playing games online", correct: false },
      { text: "Singing songs online", correct: false },
      { text: "Sending birthday wishes", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Someone calls you a bad name in a game chat. What should you do?",
    options: [
      { text: "Call them names back", correct: false },
      { text: "Tell a parent or teacher", correct: true },
      { text: "Keep playing and ignore", correct: false },
      { text: "Tell your friends to help", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "If someone is being mean online, should you join them?",
    options: [
      { text: "Yes, it’s funny", correct: false },
      { text: "Only if they start it", correct: false },
      { text: "No, be kind online", correct: true },
      { text: "Yes, if others are watching", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What should you do if someone posts a rude comment on your photo?",
    options: [
      { text: "Reply with another rude comment", correct: false },
      { text: "Delete the photo", correct: false },
      { text: "Tell a trusted adult", correct: true },
      { text: "Keep it and cry", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What is the best way to act online?",
    options: [
      { text: "Kind and respectful", correct: true },
      { text: "Rude and funny", correct: false },
      { text: "Silent and sneaky", correct: false },
      { text: "Loud and silly", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Is it okay to tease someone online for how they look?",
    options: [
      { text: "Yes, if it's a joke", correct: false },
      { text: "No, it can hurt them", correct: true },
      { text: "Only if others do it", correct: false },
      { text: "Yes, if you know them", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Someone keeps sending you mean messages. What is that called?",
    options: [
      { text: "Cyberbullying", correct: true },
      { text: "Storytelling", correct: false },
      { text: "Friendly chatting", correct: false },
      { text: "Tagging", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Should you keep cyberbullying a secret?",
    options: [
      { text: "Yes, always", correct: false },
      { text: "No, always tell a trusted adult", correct: true },
      { text: "Only if it’s small", correct: false },
      { text: "Yes, if you're scared", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What kind of words should we use online?",
    options: [
      { text: "Mean and funny", correct: false },
      { text: "Kind and helpful", correct: true },
      { text: "Loud and angry", correct: false },
      { text: "Secret and tricky", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What should you do if you see someone being bullied online?",
    options: [
      { text: "Laugh along", correct: false },
      { text: "Join in", correct: false },
      { text: "Report or tell an adult", correct: true },
      { text: "Take a screenshot to show others", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Your friend is sad because someone is bullying them online. What can you do?",
    options: [
      { text: "Ignore it", correct: false },
      { text: "Tell them to stop using the internet", correct: false },
      { text: "Comfort them and tell an adult", correct: true },
      { text: "Post about it online", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Can someone be bullied through messages on a phone?",
    options: [
      { text: "No, only on social media", correct: false },
      { text: "Yes, bullying can happen anywhere", correct: true },
      { text: "Only if they are famous", correct: false },
      { text: "Only in games", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Is it okay to call someone names if you’re upset?",
    options: [
      { text: "Yes, if you're angry", correct: false },
      { text: "No, it's never okay", correct: true },
      { text: "Only if they start it", correct: false },
      { text: "Yes, if they’re wrong", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Can bullying online be just as harmful as in real life?",
    options: [
      { text: "Yes, it can really hurt", correct: true },
      { text: "No, it’s just the internet", correct: false },
      { text: "Only if you're famous", correct: false },
      { text: "Not if it's funny", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Why do bullies sometimes act mean online?",
    options: [
      { text: "To be cool", correct: false },
      { text: "To get attention", correct: false },
      { text: "Because they may be hurting too", correct: true },
      { text: "Because they're always bad", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "What does 'block' mean online?",
    options: [
      { text: "Build something", correct: false },
      { text: "Stop someone from contacting you", correct: true },
      { text: "Delete your game", correct: false },
      { text: "Cover your screen", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "What can happen if you don’t tell anyone about cyberbullying?",
    options: [
      { text: "It might keep happening", correct: true },
      { text: "It disappears by itself", correct: false },
      { text: "You win a prize", correct: false },
      { text: "The bully forgets", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why is being a bystander not enough?",
    options: [
      { text: "Because it's boring", correct: false },
      { text: "Because you might get bullied", correct: false },
      { text: "Because no one sees you", correct: false },
      { text: "Because bullies need an audience", correct: true }
    ]
  },
  {
    level: "Hard",
    question: "What is a kind thing to comment on someone's post?",
    options: [
      { text: "You're so ugly!", correct: false },
      { text: "Nice photo! You look great!", correct: true },
      { text: "You look weird", correct: false },
      { text: "Why did you post this?", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why is it brave to report cyberbullying?",
    options: [
      { text: "Because you’re helping stop the bully", correct: true },
      { text: "Because you’re a superhero", correct: false },
      { text: "Because you'll be famous", correct: false },
      { text: "Because it’s fun", correct: false }
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
          <p>You completed all levels like a Cyber Bully Bouncer!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);