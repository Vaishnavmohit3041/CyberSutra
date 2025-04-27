let currentLevel = 1;
const totalLevels = 20;

const questions = 
[
  {
    level: "Easy",
    question: "What is fake news?",
    options: [
      { text: "Made-up or wrong information", correct: true },
      { text: "News about cakes", correct: false },
      { text: "Very old news", correct: false },
      { text: "Funny jokes online", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "You read something online that sounds strange. What should you do?",
    options: [
      { text: "Believe it right away", correct: false },
      { text: "Tell all your friends", correct: false },
      { text: "Ask a parent or teacher", correct: true },
      { text: "Post it online", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "A story says a dog flew an airplane. Is this real?",
    options: [
      { text: "Yes, dogs are smart", correct: false },
      { text: "Maybe, if it's a small plane", correct: false },
      { text: "No, it’s probably fake", correct: true },
      { text: "Yes, I saw a cartoon like that", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Who should you ask if you're unsure about a post online?",
    options: [
      { text: "A trusted adult", correct: true },
      { text: "A stranger online", correct: false },
      { text: "Your favorite cartoon", correct: false },
      { text: "The person who posted it", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "You see a scary story online. What should you do?",
    options: [
      { text: "Check if it's real with an adult", correct: true },
      { text: "Share it fast", correct: false },
      { text: "Ignore it and get scared", correct: false },
      { text: "Believe it always", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What should you do if a message says, 'Send this to 10 friends or something bad will happen'?",
    options: [
      { text: "Send it quickly", correct: false },
      { text: "Delete it and tell an adult", correct: true },
      { text: "Laugh and ignore it", correct: false },
      { text: "Believe it’s real", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Is everything on the internet true?",
    options: [
      { text: "Yes, always", correct: false },
      { text: "Only if it's in a video", correct: false },
      { text: "No, some things are fake", correct: true },
      { text: "Only if it looks nice", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What can fake news do?",
    options: [
      { text: "Make people laugh", correct: false },
      { text: "Help people", correct: false },
      { text: "Make food", correct: false },
      { text: "Confuse and scare people", correct: true }
    ]
  },
  {
    level: "Easy",
    question: "Someone says their post is '100% true.' Should you believe them right away?",
    options: [
      { text: "Yes, always", correct: false },
      { text: "No, check with an adult first", correct: true },
      { text: "Only if it has pictures", correct: false },
      { text: "Yes, if it’s funny", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "You see a video of a talking cat online. Is it real?",
    options: [
      { text: "Yes, cats talk", correct: false },
      { text: "Maybe, if it’s a smart cat", correct: false },
      { text: "No, it’s edited or fake", correct: true },
      { text: "Only at night", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Why do people create fake news?",
    options: [
      { text: "To confuse or trick others", correct: true },
      { text: "To help kids", correct: false },
      { text: "To teach dancing", correct: false },
      { text: "To be kind", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "What’s one good way to check if news is true?",
    options: [
      { text: "Check it on a funny meme", correct: false },
      { text: "Believe it if it's popular", correct: false },
      { text: "If it has emojis, it’s true", correct: false },
      { text: "Ask a trusted adult", correct: true }
    ]
  },
  {
    level: "Medium",
    question: "A classmate tells you something weird they read online. What should you do?",
    options: [
      { text: "Tell everyone", correct: false },
      { text: "Check with your teacher", correct: true },
      { text: "Believe it without checking", correct: false },
      { text: "Post it on your story", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "What should you do before sharing a message online?",
    options: [
      { text: "Read only the title", correct: false },
      { text: "Post it fast", correct: false },
      { text: "Check if it's real", correct: true },
      { text: "Send it to friends first", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "A video says a magic juice can cure all sickness. What should you do?",
    options: [
      { text: "Check with a doctor or adult", correct: true },
      { text: "Buy the juice", correct: false },
      { text: "Tell everyone to drink it", correct: false },
      { text: "Post it in class group", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Is it okay to post funny but fake stories online?",
    options: [
      { text: "Yes, it’s just for fun", correct: false },
      { text: "No, it can confuse others", correct: true },
      { text: "Only on Sundays", correct: false },
      { text: "Yes, if no one sees it", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Which is a trusted way to learn real news?",
    options: [
      { text: "Ask a trusted adult or teacher", correct: true },
      { text: "Ask a stranger online", correct: false },
      { text: "Follow your favorite cartoon", correct: false },
      { text: "Use only videos with music", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "What can happen if you share fake news?",
    options: [
      { text: "Make people believe wrong things", correct: true },
      { text: "Make everyone happy", correct: false },
      { text: "Win a prize", correct: false },
      { text: "Help the news person", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why is it important to check facts?",
    options: [
      { text: "To finish homework", correct: false },
      { text: "To make games", correct: false },
      { text: "To help others stay safe", correct: true },
      { text: "So you can be funny", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Why is it bad to share a scary story that’s not true?",
    options: [
      { text: "It can make people scared", correct: true },
      { text: "It gets you more likes", correct: false },
      { text: "It’s just for fun", correct: false },
      { text: "Everyone shares things", correct: false }
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
          <p>You completed all levels like a Fake News Buster!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);