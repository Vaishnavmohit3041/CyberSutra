let currentLevel = 1;
const totalLevels = 20;

const questions = 
[
  {
    level: "Easy",
    question: "You want to find a fun game online. What should you do first?",
    options: [
      { text: "Ask an adult to help you", correct: true },
      { text: "Search for it yourself", correct: false },
      { text: "Click on the first link you see", correct: false },
      { text: "Download any game you find", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "How can you tell if a website is safe to visit?",
    options: [
      { text: "It has a lock symbol next to the website name", correct: true },
      { text: "It has lots of colorful ads", correct: false },
      { text: "It has a weird URL", correct: false },
      { text: "It has a phone number at the top", correct: false }
    ]
  },
  {
    level: "Easy",
    question: "What should you do if you see a strange pop-up ad when searching for something?",
    options: [
      { text: "Click it to see what it says", correct: false },
      { text: "Tell a trusted adult", correct: true },
      { text: "Ignore it and keep searching", correct: false },
      { text: "Download the app from the ad", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "What is the safest way to search for games or apps?",
    options: [
      { text: "Use an official app store or website", correct: true },
      { text: "Search random websites on Google", correct: false },
      { text: "Ask a stranger for links", correct: false },
      { text: "Download from any ad you see", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "If a website asks for personal information like your phone number or address, what should you do?",
    options: [
      { text: "Give it, so you can get the game", correct: false },
      { text: "Tell an adult and leave the website", correct: true },
      { text: "Ask the website why it needs it", correct: false },
      { text: "Give them a fake number", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Why is it important to use safe search settings on your device?",
    options: [
      { text: "It helps you find fun things faster", correct: false },
      { text: "It protects you from inappropriate or dangerous websites", correct: true },
      { text: "It makes the screen bigger", correct: false },
      { text: "It helps your internet run faster", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "You find a website that promises 'Free Toys!' but it looks suspicious. What should you do?",
    options: [
      { text: "Trust it and click the offer", correct: false },
      { text: "Leave the website and tell an adult", correct: true },
      { text: "Ask your friends if it's real", correct: false },
      { text: "Share the link with others", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "What should you do if you find something inappropriate in a search result?",
    options: [
      { text: "Click on it to see more", correct: false },
      { text: "Report it to an adult or the website", correct: true },
      { text: "Ignore it and keep searching", correct: false },
      { text: "Tell your friends to search for it too", correct: false }
    ]
  },
  {
    level: "Medium",
    question: "Why should you avoid downloading files from unknown websites?",
    options: [
      { text: "They could contain viruses or malware", correct: true },
      { text: "They might be too big", correct: false },
      { text: "They are usually fun games", correct: false },
      { text: "They use too much data", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "What is the benefit of using a search engine with ‘safe search’ turned on?",
    options: [
      { text: "It speeds up your searches", correct: false },
      { text: "It makes the internet more fun", correct: false },
      { text: "It blocks harmful websites and content", correct: true },
      { text: "It allows you to play games on any website", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "What should you do if a search result leads to a website with pop-ups asking you to 'Download Now'?",
    options: [
      { text: "Click to see what the download is", correct: false },
      { text: "Download it and see what happens", correct: false },
      { text: "Ignore the pop-ups and keep browsing", correct: false },
      { text: "Tell a trusted adult and leave the website", correct: true }
    ]
  },
  {
    level: "Hard",
    question: "How can you spot a fake website when searching online?",
    options: [
      { text: "It has a lot of bright colors", correct: false },
      { text: "It offers something that’s too good to be true", correct: false },
      { text: "It has a strange or misspelled URL", correct: true },
      { text: "It’s very slow to load", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "What’s a good rule to follow when searching online for anything?",
    options: [
      { text: "Always use websites that you trust and ask adults if unsure", correct: true },
      { text: "Search without any rules, the internet is fun", correct: false },
      { text: "Search only for free things", correct: false },
      { text: "Only search for things that pop up first", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You find a website with a special offer, but it asks for your parent’s credit card details. What should you do?",
    options: [
      { text: "Give them the details so you can get the offer", correct: false },
      { text: "Tell the website to charge your friend's card", correct: false },
      { text: "Look for another offer", correct: false },
      { text: "Tell your parents or guardian immediately", correct: true }
    ]
  },
  {
    level: "Hard",
    question: "Why should you use a search engine that doesn’t show harmful or inappropriate content?",
    options: [
      { text: "It makes the internet look nicer", correct: false },
      { text: "It lets you play games on any site", correct: false },
      { text: "It helps protect you from harmful things online", correct: true },
      { text: "It’s the fastest way to search", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You’re searching for a game, but it only shows websites with pop-up ads. What should you do?",
    options: [
      { text: "Click on the pop-ups", correct: false },
      { text: "Keep clicking until something works", correct: false },
      { text: "Leave the website and find another one", correct: true },
      { text: "Tell your friends to search too", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "If you find a search result that leads to a website with too many ads and no real content, what should you do?",
    options: [
      { text: "Leave the website and find a more trustworthy one", correct: true },
      { text: "Click on every ad to see what’s inside", correct: false },
      { text: "Keep clicking to close the ads", correct: false },
      { text: "Ask your friends if it’s safe", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You find a website with an unusual address, like 'bestgamefree.xyz'. What should you do?",
    options: [
      { text: "Visit the website and check if it's real", correct: false },
      { text: "Ignore the website and ask an adult", correct: true },
      { text: "Click on the first link that shows up", correct: false },
      { text: "Tell your friends to check it out too", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "While searching for a new game, you come across a website that says 'Free Download' but has no information about who made the game. What should you do?",
    options: [
      { text: "Download the game and try it", correct: false },
      { text: "Share the link with your friends", correct: false },
      { text: "Ask an adult to help you figure it out", correct: true },
      { text: "Ignore it and keep searching", correct: false }
    ]
  },
  {
    level: "Hard",
    question: "You want to watch a video, but the website is asking for your full name and address before playing it. What should you do?",
    options: [
      { text: "Give the information so you can watch the video", correct: false },
      { text: "Search for another video without asking anyone", correct: false },
      { text: "Tell a trusted adult and leave the website", correct: true },
      { text: "Click 'skip' and proceed", correct: false }
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
          <p>You completed all levels like a Safe Search Quest!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);