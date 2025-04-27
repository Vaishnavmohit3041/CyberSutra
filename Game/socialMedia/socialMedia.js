let currentLevel = 1;
const totalLevels = 20;

const questions = [
  {
    level: "Easy",
    question: "You get a friend request from someone you don’t know. What should you do?",
    options: [
      { text: "Tell your friends to add them too", correct: false },
      { text: "Ask your parents or a trusted adult", correct: true },
      { text: "Accept right away", correct: false },
      { text: "Send them a message first", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What’s the safest kind of post to share on social media?",
    options: [
      { text: "Your home address", correct: false },
      { text: "A funny picture of your cat", correct: true },
      { text: "A photo of your school ID", correct: false },
      { text: "Your phone number", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What’s something you should NEVER post online?",
    options: [
      { text: "Your favorite food", correct: false },
      { text: "A fun drawing you made", correct: false },
      { text: "Your pet’s name", correct: false },
      { text: "Your address or phone number", correct: true }
    ]
  },
  {
    level: "Easy",
    question: "Your profile is public. Who can see your posts?",
    options: [
      { text: "Only people in your city", correct: false },
      { text: "Only your friends", correct: false },
      { text: "Just your family", correct: false },
      { text: "Anyone on the internet", correct: true }
    ]
  },
  {
    level: "Easy",
    question: "Someone asks you to keep a secret online. What should you do?",
    options: [
      { text: "Tell a trusted adult", correct: true },
      { text: "Post about it online", correct: false },
      { text: "Ask more friends to keep it too", correct: false },
      { text: "Keep it no matter what", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What is a good rule for posting online?",
    options: [
      { text: "Post everything quickly before thinking", correct: false },
      { text: "Post all your daily activities", correct: false },
      { text: "Never post something you wouldn’t say in real life", correct: true },
      { text: "Post only what makes people laugh", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Someone sends you a message saying, 'You're cute! Can we be friends?' What should you do?",
    options: [
      { text: "Block them and tell an adult", correct: true },
      { text: "Ask them where they live", correct: false },
      { text: "Say thank you and reply", correct: false },
      { text: "Send a selfie", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You posted something by mistake. What should you do?",
    options: [
      { text: "Ask a stranger for help", correct: false },
      { text: "Ignore it", correct: false },
      { text: "Delete it right away", correct: true },
      { text: "Leave it up", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "A person you don’t know keeps liking and commenting on your posts. What should you do?",
    options: [
      { text: "Send them a message to say hi", correct: false },
      { text: "Tell a trusted adult and consider blocking them", correct: true },
      { text: "Ask them to follow more of your posts", correct: false },
      { text: "Like their posts too", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Someone online asks you, 'What school do you go to?' What should you do?",
    options: [
      { text: "Send them a picture of your school", correct: false },
      { text: "Say it's a secret and don't answer", correct: true },
      { text: "Tell them because they seem nice", correct: false },
      { text: "Ask them the same question", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Someone you just met online wants to video call you. What’s the best move?",
    options: [
      { text: "Join the call quickly", correct: false },
      { text: "Ask an adult first and block them if unsure", correct: true },
      { text: "Say yes but keep your camera off", correct: false },
      { text: "Tell your friends to join too", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Why should you think before posting a silly video?",
    options: [
      { text: "It could hurt someone’s feelings or be embarrassing later", correct: true },
      { text: "It might not get enough likes", correct: false },
      { text: "It won’t go viral", correct: false },
      { text: "Your friends will laugh", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You see a challenge online asking you to do something risky and post it. What do you do?",
    options: [
      { text: "Do it secretly", correct: false },
      { text: "Ignore it and don’t take part", correct: true },
      { text: "Tag your friends to try it too", correct: false },
      { text: "Try it to get more likes", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Your post got many likes, but now you feel weird about it. What should you do?",
    options: [
      { text: "Make a joke about it", correct: false },
      { text: "Delete it if it makes you uncomfortable", correct: true },
      { text: "Leave it up because it's popular", correct: false },
      { text: "Hide it from your parents", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "What should you do before clicking 'Post'?",
    options: [
      { text: "Think: Is it kind, safe, and okay to share?", correct: true },
      { text: "See how many likes you might get", correct: false },
      { text: "Make sure it's funny", correct: false },
      { text: "Ask a friend to decide", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Your friend posts a picture of you online without asking. What should you do?",
    options: [
      { text: "Comment 'Delete this!' angrily", correct: false },
      { text: "Ignore it", correct: false },
      { text: "Tell them you didn’t like it and ask to remove it", correct: true },
      { text: "Post a silly photo of them back", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You’re being pressured to post something you’re not comfortable with. What do you do?",
    options: [
      { text: "Post it anyway, just once", correct: false },
      { text: "Say no and talk to someone you trust", correct: true },
      { text: "Do it so you don’t seem boring", correct: false },
      { text: "Let them post it for you", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Your account was used to post something you didn’t write. What might have happened?",
    options: [
      { text: "Your friend is joking", correct: false },
      { text: "Your phone is broken", correct: false },
      { text: "Someone hacked your account", correct: true },
      { text: "It’s just a glitch", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You posted something that hurt someone’s feelings. What should you do?",
    options: [
      { text: "Say it was a joke", correct: false },
      { text: "Say sorry and take it down", correct: true },
      { text: "Ignore it", correct: false },
      { text: "Block the person", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You’re tagged in a meme that makes fun of someone. What should you do?",
    options: [
      { text: "Remove the tag and report the post", correct: true },
      { text: "Share it because it's funny", correct: false },
      { text: "Comment with more jokes", correct: false },
      { text: "Ignore it, it’s not your problem", correct: false }
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
          <p>You completed all levels like a Social Media Simulator!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);