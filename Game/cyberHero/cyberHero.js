let currentLevel = 1;
const totalLevels = 20;

const questions = [
  {
    level: "Easy",
    question: "You get a message from someone saying, 'Click here to get a free gift!' What should you do?",
    options: [
      { text: "Click the link to see the gift.", correct: false },
      { text: "Ignore the message and block the person.", correct: true },
      { text: "Ask your friend if they sent it.", correct: false },
      { text: "Forward the message to others.", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "You receive a friend request from someone you don't know, and their profile looks fake. What should you do?",
    options: [
      { text: "Ignore the request and report it.", correct: true },
      { text: "Accept the request to see what happens.", correct: false },
      { text: "Send them a message asking who they are.", correct: false },
      { text: "Share personal information to see if they respond.", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "A website asks you to download an update for your game, but it’s from an unknown source. What should you do?",
    options: [
      { text: "Download the update to get new features.", correct: false },
      { text: "Ignore the website and check for updates from the official game store.", correct: true },
      { text: "Contact your friends to ask if they’ve downloaded it.", correct: false },
      { text: "Download the update just to see what happens.", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "You see a link that says, 'You’ve won a prize! Just give your email to claim it!' What’s the best action?",
    options: [
      { text: "Send your email to get the prize.", correct: false },
      { text: "Delete the message and don’t reply.", correct: true },
      { text: "Ask them to send a picture of the prize.", correct: false },
      { text: "Share the message with your friends.", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "You get a message from a 'friend' asking for your password. What should you do?",
    options: [
      { text: "Give them your password to help them out.", correct: false },
      { text: "Ask them to give you their password first.", correct: false },
      { text: "Tell them you never share your password with anyone.", correct: true },
      { text: "Ignore them and don’t respond.", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "A website looks like your favorite game but the web address is a little different. What should you do?",
    options: [
      { text: "Enter your username and password to log in.", correct: false },
      { text: "Click the link and see if it works.", correct: false },
      { text: "Download the app from the site.", correct: false },
      { text: "Check if the website address is correct. If not, don’t enter any details.", correct: true }
    ]
  },
  {
    level: "Easy",
    question: "You see a pop-up saying, 'Your computer has a virus! Click here to fix it.' What’s the smart choice?",
    options: [
      { text: "Click the button to fix it.", correct: false },
      { text: "Ignore the pop-up and close the window.", correct: true },
      { text: "Tell your friends about the virus.", correct: false },
      { text: "Open the pop-up and check for a solution.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You get a message that says 'This is top secret! Don’t tell anyone.' Should you click the link?",
    options: [
      { text: "No, it’s probably a trick to steal your information.", correct: true },
      { text: "Yes, because it’s secret.", correct: false },
      { text: "Ask the sender what’s inside the link.", correct: false },
      { text: "Tell your friends to check it out.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Someone sends you a message saying they are your friend, but they use a new account. They ask for your phone number. What should you do?",
    options: [
      { text: "Give them your phone number.", correct: false },
      { text: "Ask them to call you instead.", correct: false },
      { text: "Tell them you only give your number to close friends and family.", correct: true },
      { text: "Block them and report the account.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You receive an email with your school principal’s name, but the email address looks strange. What’s the best thing to do?",
    options: [
      { text: "Trust the email and reply.", correct: false },
      { text: "Click the links to see if they work.", correct: false },
      { text: "Tell your friends about the email.", correct: false },
      { text: "Check with a teacher or school before responding.", correct: true }
    ]
  },
  {
    level: "Medium",
    question: "A person online says 'I’m your friend! Send me your password to check something.' What should you do?",
    options: [
      { text: "Tell them that you never share passwords with anyone.", correct: true },
      { text: "Send your password to them.", correct: false },
      { text: "Ask them to send you their password first.", correct: false },
      { text: "Ignore them and block the account.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You get a message saying 'Click here to fix your account.' What should you do?",
    options: [
      { text: "Don’t click the link and check with your school or service provider first.", correct: true },
      { text: "Click the link to fix your account.", correct: false },
      { text: "Reply to the message asking for more details.", correct: false },
      { text: "Share the message with others.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "You get a message saying 'You’re so lucky! You won the lottery!' but you never entered. What’s going on?",
    options: [
      { text: "It’s a lucky surprise!", correct: false },
      { text: "Maybe you forgot entering a contest.", correct: false },
      { text: "It’s a scam trying to get you to send money or personal information.", correct: true },
      { text: "It’s from a friend who wants to help you.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "A link says 'Click here to claim your free iPhone!' but you don’t remember entering any contest. What should you do?",
    options: [
      { text: "Click the link to get the iPhone.", correct: false },
      { text: "Delete the message. It’s a scam.", correct: true },
      { text: "Ask your friends if they got the same offer.", correct: false },
      { text: "Tell the sender you want the iPhone.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "You see a pop-up that says 'You’ve been hacked! Your account is locked! Click here to fix it!' What should you do?",
    options: [
      { text: "Click the link and follow the steps to fix it.", correct: false },
      { text: "Ask a friend to help you fix it.", correct: false },
      { text: "Tell the hacker you don’t have an account.", correct: false },
      { text: "Close the pop-up and don’t click anything.", correct: true }
    ]
  },
  {
    level: "Expert",
    question: "A message from a 'friend' asks you to send a picture of your homework. What should you think?",
    options: [
      { text: "Send the picture – they’re just asking for help.", correct: false },
      { text: "It might not be your real friend. Ask them in person.", correct: true },
      { text: "Send the picture but only with your name on it.", correct: false },
      { text: "Ignore the message and block them.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "You get a friend request from someone you don’t know. They say they have something important to tell you. What should you do?",
    options: [
      { text: "Don’t accept the request, and tell an adult.", correct: true },
      { text: "Accept the friend request and talk to them.", correct: false },
      { text: "Ask them what they want to tell you.", correct: false },
      { text: "Ignore them and block the request.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "You get an email asking for your username and password to verify your account. Should you reply?",
    options: [
      { text: "Yes, it seems urgent.", correct: false },
      { text: "Send them your username but not the password.", correct: false },
      { text: "No, companies never ask for this through email.", correct: true },
      { text: "Reply with a question about why they need it.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "Someone online says 'I’ll give you free game coins if you send me your password.' What should you do?",
    options: [
      { text: "Send your password to get the coins.", correct: false },
      { text: "Tell them you don’t share your password.", correct: true },
      { text: "Send a part of your password for security.", correct: false },
      { text: "Ask for proof that they’ll give you the coins.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "A person asks you for your account number to send you money. What do you think?",
    options: [
      { text: "It’s fine, they just want to send me money.", correct: false },
      { text: "This is a scam trying to steal your information.", correct: true },
      { text: "Tell them your account number but only part of it.", correct: false },
      { text: "Ask them to send the money in a different way.", correct: false }
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
          <p>You completed all levels like a Cyber Hero Challenges!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);