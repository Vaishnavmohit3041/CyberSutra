let currentLevel = 1;
const totalLevels = 30;

const questions = [
  {
    level: "Easy",
    question: "You get a message saying “You won a free iPhone! Click here!” What should you do?",
    options: [
      { text: "Click the link quickly to claim your prize.", correct: false },
      { text: "Share the message with your friends.", correct: false },
      { text: "Delete the message and report it as spam.", correct: true },
      { text: "Give your personal details to get the iPhone.", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "A stranger online asks for your home address. What should you do?",
    options: [
      { text: "Give them your full address to be friendly.", correct: false },
      { text: "Block the person and report the account.", correct: true },
      { text: "Ask them why they need it, then decide.", correct: false },
      { text: "Send only your city name—it’s safe, right?", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Someone says “I’m your school friend, send me your password!” but you don’t recognize them. What now?",
    options: [
      { text: "Never share your password and report the message.", correct: true },
      { text: "Send your password just in case it really is a friend.", correct: false },
      { text: "Ask them more personal questions to check.", correct: false },
      { text: "Ignore it; maybe it’s not important.", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "A pop-up says “Your computer has a virus! Click this button to fix it!” Should you click it?",
    options: [
      { text: "Yes, click it fast before the virus spreads.", correct: false },
      { text: "Call a friend to ask what to do.", correct: false },
      { text: "Restart the computer and hope it goes away.", correct: false },
      { text: "Close the pop-up and run your trusted antivirus software.", correct: true }
    ]
  },
  {
    level: "Easy",
    question: "You see a message with lots of emojis and says “Get rich fast!” What should you think?",
    options: [
      { text: "It’s definitely real — try it now!", correct: false },
      { text: "It’s probably a scam trying to trick people.", correct: true },
      { text: "Maybe someone just got lucky.", correct: false },
      { text: "It must be a new money-making app.", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "Your friend tells you they never sent a weird link you received from their account. What might have happened?",
    options: [
      { text: "They’re lying and just embarrassed.", correct: false },
      { text: "Someone hacked their account and sent the link.", correct: true },
      { text: "It’s just a bug in the app.", correct: false },
      { text: "They forgot they sent it.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "A message says “Hurry! Your game account will be deleted unless you log in now!” Should you trust it?",
    options: [
      { text: "Yes, quickly log in to save your account.", correct: false },
      { text: "Ignore it, it’s just a normal game update.", correct: false },
      { text: "No, it’s likely a scam to steal your account.", correct: true },
      { text: "Ask your friends to click the link too.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You get an email with your teacher’s name, but the email address looks strange. What do you do?",
    options: [
      { text: "Reply with your homework.", correct: false },
      { text: "Check the full email address and confirm with your teacher.", correct: true },
      { text: "Ignore the email completely.", correct: false },
      { text: "Forward it to all your classmates.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Someone offers you free coins for your game if you give your password. Is it safe?",
    options: [
      { text: "Yes, it's a good way to earn rewards.", correct: false },
      { text: "Only if they show proof first.", correct: false },
      { text: "No, it’s a trick to steal your account.", correct: true },
      { text: "Maybe, just give part of the password.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You see a link like “www.googIe.com” with a capital i instead of an L. Is that the real site?",
    options: [
      { text: "No, it’s a fake link trying to trick you.", correct: true },
      { text: "Yes, it’s just a new version of Google.", correct: false },
      { text: "It’s a shortcut to Google services.", correct: false },
      { text: "Maybe it’s a partner website.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "A person says they’re from your school, but their message has lots of spelling mistakes. Should you believe them?",
    options: [
      { text: "Yes, some people just type fast.", correct: false },
      { text: "Only if they know your class name.", correct: false },
      { text: "No, it might be a fake account pretending to be from school.", correct: true },
      { text: "Yes, if they seem nice.", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You get a gift message from an unknown email. What’s the safest choice?",
    options: [
      { text: "Click the link to see the gift.", correct: false },
      { text: "Forward it to your friends.", correct: false },
      { text: "Reply and ask who they are.", correct: false },
      { text: "Delete the email and don’t click anything.", correct: true }
    ]
  },
  {
    level: "Hard",
    question: "Your bank (or school) never asks for your personal info by message. True or False?",
    options: [
      { text: "True – They never ask for private info like that.", correct: true },
      { text: "False – They always ask by message.", correct: false },
      { text: "Sometimes – Only on holidays.", correct: false },
      { text: "Only if they say it’s urgent.", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You get a message that says “Click this or your phone will stop working.” What should you think?",
    options: [
      { text: "It’s real – click fast!", correct: false },
      { text: "It’s a fun prank.", correct: false },
      { text: "It’s fake – a scare tactic to trick you.", correct: true },
      { text: "It’s an important update.", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You’re told to download an app from a strange website. What’s the risk?",
    options: [
      { text: "You might win free prizes.", correct: false },
      { text: "The app could have a virus or steal data.", correct: true },
      { text: "The website might be a secret store.", correct: false },
      { text: "It’s just a demo version.", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "A message has your name, but comes from someone you don’t know. What should you do?",
    options: [
      { text: "Be careful – your name might have been found online.", correct: true },
      { text: "Reply and ask how they know you.", correct: false },
      { text: "Click any link to check what it is.", correct: false },
      { text: "Forward it to your group chat.", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "Someone says they know your parent and want your phone number. Should you give it?",
    options: [
      { text: "Yes, if they say it’s urgent.", correct: false },
      { text: "No, always check with your parent first.", correct: true },
      { text: "Only if they’re polite.", correct: false },
      { text: "Yes, but only give your email.", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You get a message saying “This is secret! Don’t tell anyone, just click here.” Is that safe?",
    options: [
      { text: "Yes, it’s probably exciting!", correct: false },
      { text: "It’s a surprise from a friend.", correct: false },
      { text: "No, it’s likely a scam or trick.", correct: true },
      { text: "Click it only if no one is watching.", correct: false }
    ]
  },
  {
    level: "Advanced",
    question: "You see a prize message with your name, but you never entered a contest. What’s going on?",
    options: [
      { text: "You’re just lucky!", correct: false },
      { text: "It’s probably a scam using your name to trick you.", correct: true },
      { text: "Someone signed you up secretly.", correct: false },
      { text: "You should click fast to claim it.", correct: false }
    ]
  },
  {
    level: "Advanced",
    question: "A link has random letters and numbers like “abc.xyz/293jsa.” Should you click it?",
    options: [
      { text: "Yes, all links are safe.", correct: false },
      { text: "Only if it looks cool.", correct: false },
      { text: "No, it could be dangerous or lead to a scam.", correct: true },
      { text: "Click and close it fast.", correct: false }
    ]
  },
  {
    level: "Advanced",
    question: "You are asked to send your picture and age to a stranger. What’s the smart move?",
    options: [
      { text: "Send it if they’re nice.", correct: false },
      { text: "Tell a trusted adult and block them.", correct: true },
      { text: "Send it only if they promise not to share.", correct: false },
      { text: "Ask for their photo first.", correct: false }
    ]
  },
  {
    level: "Advanced",
    question: "You get an email from “admin123@notyourgame.com” about your favorite game. Is that normal?",
    options: [
      { text: "Yes, they’re all part of the internet.", correct: false },
      { text: "It’s a new support email.", correct: false },
      { text: "No, it’s likely a fake trying to trick you.", correct: true },
      { text: "Open the link and see.", correct: false }
    ]
  },
  {
    level: "Advanced",
    question: "Someone says “I’ll send you money, just share your account number.” What do you think?",
    options: [
      { text: "Sounds like a good deal!", correct: false },
      { text: "It’s safe if they give their name first.", correct: false },
      { text: "It’s a scam to steal from you.", correct: true },
      { text: "Share only if it’s a small amount.", correct: false }
    ]
  },
  {
    level: "Advanced",
    question: "You open a link and the page asks for your password even though you're already logged in. Is that okay?",
    options: [
      { text: "Yes, maybe it logged you out.", correct: false },
      { text: "No, it could be a phishing site.", correct: true },
      { text: "Yes, refresh and try again.", correct: false },
      { text: "Only type part of your password.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "Your friend's account sends you a strange message with a link. What might have happened?",
    options: [
      { text: "Your friend is playing a trick.", correct: false },
      { text: "Their account was hacked or taken over.", correct: true },
      { text: "It’s a game update.", correct: false },
      { text: "It’s probably a riddle.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "You get a fake message pretending to be your school principal. How can you tell it’s fake?",
    options: [
      { text: "By looking for spelling errors and strange email addresses.", correct: true },
      { text: "If it’s written politely, it’s real.", correct: false },
      { text: "Because it uses your name.", correct: false },
      { text: "It includes school emojis.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "A website looks like your favorite game, but the URL is slightly different. What should you do?",
    options: [
      { text: "Ignore the URL and enjoy the game.", correct: false },
      { text: "Click and enter fake info to check.", correct: false },
      { text: "Do not enter any information – it could be a fake site.", correct: true },
      { text: "Check if it loads fast.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "Someone on social media says “You’re so lucky! You were chosen to win!” What should you ask yourself?",
    options: [
      { text: "Did I enter a contest?", correct: true },
      { text: "Is this person famous?", correct: false },
      { text: "Do they follow me?", correct: false },
      { text: "Can I trust the internet?", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "You get a phone call from someone asking for your ID or school number. What should you say?",
    options: [
      { text: "Give it quickly to stay safe.", correct: false },
      { text: "Tell them to call your school directly and hang up.", correct: true },
      { text: "Ask them for their number first.", correct: false },
      { text: "Only give part of your ID.", correct: false }
    ]
  },
  {
    level: "Expert",
    question: "You feel something is wrong with a message but can’t explain it. What’s the best thing to do?",
    options: [
      { text: "Ignore the feeling and reply anyway.", correct: false },
      { text: "Click to understand it better.", correct: false },
      { text: "Forward it to friends to ask them.", correct: false },
      { text: "Show it to a trusted adult or teacher.", correct: true }
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
          <p>You completed all levels like a Phishing Detective!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);