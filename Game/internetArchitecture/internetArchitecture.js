let currentLevel = 1;
const totalLevels = 20;

const questions = [
  {
    level: "Easy", 
    question: "You’re in Privacy Peak and see a message asking for your personal details to win a prize. What should you do?", 
    options: [
      { text: "Report the message and ignore it.", correct: true },
      { text: "Share your details to get the prize.", correct: false },
      { text: "Ask the person for more details.", correct: false },
      { text: "Click on the link to see if it's real.", correct: false }
    ]
  },
  {
    level: "Easy", 
    question: "You’re in Privacy Peak and a website asks you to log in using your social media account. What should you do?", 
    options: [
      { text: "Log in using your social media account.", correct: false },
      { text: "Check if the website is trustworthy before logging in.", correct: false },
      { text: "Ask your friends if they use the site.", correct: false },
      { text: "Avoid logging in with your social media account on unknown sites.", correct: true }
    ]
  },
  {
    level: "Easy", 
    question: "You’re crossing Scam Swamp and receive an email saying ‘Click here to claim your free gift!’ What should you think?", 
    options: [
      { text: "It’s a legitimate offer from a friend.", correct: false },
      { text: "Click the link to check the offer.", correct: false },
      { text: "It’s probably a scam to steal your information.", correct: true },
      { text: "Forward the email to your friends.", correct: false }
    ]
  },
  {
    level: "Easy", 
    question: "You see a pop-up ad saying ‘You’ve won a prize! Click here to claim it!’ What should you do?", 
    options: [
      { text: "Click the ad to claim your prize.", correct: false },
      { text: "Close the pop-up and ignore it.", correct: true },
      { text: "Share the ad with your friends to see if they won too.", correct: false },
      { text: "Click on the ad and give them your email.", correct: false }
    ]
  },
  {
    level: "Easy", 
    question: "You receive a message from a stranger asking for your home address. What should you do?", 
    options: [
      { text: "Ignore the message and block them.", correct: true },
      { text: "Give them your address to be friendly.", correct: false },
      { text: "Ask them why they want your address.", correct: false },
      { text: "Reply with just your city name.", correct: false }
    ]
  },
  {
    level: "Easy", 
    question: "While crossing Scam Swamp, you receive an email saying, ‘Click here to update your game.’ What should you do?", 
    options: [
      { text: "Click the link to update your game.", correct: false },
      { text: "Forward the email to your friends.", correct: false },
      { text: "Check the official app store for updates instead.", correct: true },
      { text: "Ask the sender why they’re asking for an update.", correct: false }
    ]
  },
  {
    level: "Easy", 
    question: "You’re in Privacy Peak and a website asks for your full name, phone number, and address. What should you do?", 
    options: [
      { text: "Give them all the information to get access.", correct: false },
      { text: "Avoid sharing any personal information.", correct: true },
      { text: "Ask why they need all that information.", correct: false },
      { text: "Enter only part of your details.", correct: false }
    ]
  },
  {
    level: "Medium", 
    question: "You enter Data Fortress and a pop-up tells you ‘Your device has a virus! Click here to fix it.’ What’s the best choice?", 
    options: [
      { text: "Click the button to fix the virus.", correct: false },
      { text: "Ignore the pop-up and use trusted antivirus software.", correct: true },
      { text: "Ask your friends if they got the same message.", correct: false },
      { text: "Search for another link to fix it.", correct: false }
    ]
  },
  {
    level: "Medium", 
    question: "You arrive at Phishing Peak and see a message from someone claiming to be your teacher asking for your account password. What should you do?", 
    options: [
      { text: "Share the password to help them out.", correct: false },
      { text: "Send your password quickly to avoid problems.", correct: false },
      { text: "Tell them you will contact the teacher directly to confirm.", correct: true },
      { text: "Ignore the message and block the person.", correct: false }
    ]
  },
  {
    level: "Medium", 
    question: "You’re on Social Media Mountain and a stranger messages you, claiming to know your friend. They ask for your password. What should you do?", 
    options: [
      { text: "Share your password to help them.", correct: false },
      { text: "Ask them to prove they know your friend.", correct: false },
      { text: "Give them your password just to see what happens.", correct: false },
      { text: "Ignore and block them, then report it.", correct: true }
    ]
  },
  {
    level: "Medium", 
    question: "You’re in Password Valley and a pop-up tells you, ‘Your account is in danger! Click here to secure it.’ What should you do?", 
    options: [
      { text: "Click the pop-up to secure your account.", correct: false },
      { text: "Tell your friends about the pop-up.", correct: false },
      { text: "Close the pop-up and check your account from the official site.", correct: true },
      { text: "Ignore it and continue with your game.", correct: false }
    ]
  },
  {
    level: "Medium", 
    question: "You’re exploring Social Media Mountain and someone messages you asking for your game password. What’s the best choice?", 
    options: [
      { text: "Give them your password to help them out.", correct: false },
      { text: "Report and block them immediately.", correct: true },
      { text: "Ask them why they need your password.", correct: false },
      { text: "Share the password just to see if they’re telling the truth.", correct: false }
    ]
  },
  {
    level: "Medium", 
    question: "While exploring Data Fortress, you receive a friend request from someone you don't know, with a message saying, ‘Let’s chat, I have something important to tell you!’ What should you do?", 
    options: [
      { text: "Accept the friend request and start chatting.", correct: false },
      { text: "Ignore the friend request and report it if necessary.", correct: true },
      { text: "Ask them for more details before accepting.", correct: false },
      { text: "Accept the request and share some personal details to be friendly.", correct: false }
    ]
  },
  {
    level: "Medium", 
    question: "While exploring Data Fortress, you’re asked to download an app from a website you don’t recognize. What should you do?", 
    options: [
      { text: "Download the app to see what it does.", correct: false },
      { text: "Look for the app in your official app store instead.", correct: true },
      { text: "Ask your friends if they’ve used it.", correct: false },
      { text: "Ignore the message and keep browsing.", correct: false }
    ]
  },
  {
    level: "Hard", 
    question: "At Phishing Peak, a message claims your account will be locked unless you log in using a special link. What should you do?", 
    options: [
      { text: "Ignore the message and log in from the official site.", correct: true },
      { text: "Click the link and log in.", correct: false },
      { text: "Tell your friends about the warning.", correct: false },
      { text: "Give the link to your teacher for advice.", correct: false }
    ]
  },
  {
    level: "Hard", 
    question: "You’re in Account Access Canyon and receive a message with a link to ‘verify your account.’ What should you do?", 
    options: [
      { text: "Click the link to verify your account.", correct: false },
      { text: "Check the email for official information before clicking.", correct: true },
      { text: "Give them your account details right away.", correct: false },
      { text: "Ignore the message and do nothing.", correct: false }
    ]
  },
  {
    level: "Hard", 
    question: "You’re in Data Fortress and receive an email saying ‘Your account has been compromised, click here to reset your password.’ What should you do?", 
    options: [
      { text: "Click the link to reset your password.", correct: false },
      { text: "Go directly to the official website to reset your password.", correct: true },
      { text: "Reply to the email asking for more details.", correct: false },
      { text: "Ignore the email and wait for further instructions.", correct: false }
    ]
  },
  {
    level: "Hard", 
    question: "You reach Phishing Peak and get a message from a ‘friend’ asking you to click a link for a special offer. What should you do?", 
    options: [
      { text: "Double-check with your friend if they sent the message.", correct: true },
      { text: "Click the link to get the special offer.", correct: false },
      { text: "Ignore the message and move on.", correct: false },
      { text: "Forward the link to your other friends.", correct: false }
    ]
  },
  {
    level: "Hard", 
    question: "In Password Valley, you see a website that looks identical to your favorite game’s login page but with a slightly different URL. What should you do?", 
    options: [
      { text: "Enter your username and password to log in.", correct: false },
      { text: "Double-check the URL to make sure it's correct before logging in.", correct: true },
      { text: "Click on the link just to see what happens.", correct: false },
      { text: "Ask your friends if they have the same URL.", correct: false }
    ]
  },
  {
    level: "Hard", 
    question: "You reach Account Access Canyon and a person asks for your username and password to ‘help recover your account.’ What should you do?", 
    options: [
      { text: "Give them your details since they are offering help.", correct: false },
      { text: "Ask them why they need your details.", correct: false },
      { text: "Report them and never share your username or password.", correct: true },
      { text: "Give them a fake username to avoid issues.", correct: false }
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
          <p>You completed all levels like a Internet Architecture Island!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);