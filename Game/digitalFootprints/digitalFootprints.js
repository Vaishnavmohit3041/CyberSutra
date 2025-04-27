let currentLevel = 1;
const totalLevels = 20;

const questions = 
  [
    {
      level: "Easy",
      question: "What is a digital footprint?",
      options: [
        { text: "Your footprints in sand", correct: false },
        { text: "The information you leave online", correct: true },
        { text: "Your school report card", correct: false },
        { text: "Your friend's photos", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Which of these leaves a digital footprint?",
      options: [
        { text: "Posting a photo online", correct: true },
        { text: "Drawing with crayons", correct: false },
        { text: "Playing outside", correct: false },
        { text: "Reading a book", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Should you share your home address online?",
      options: [
        { text: "Yes, to get gifts", correct: false },
        { text: "Only with strangers", correct: false },
        { text: "No, it's not safe", correct: true },
        { text: "If your friend asks", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "You posted a silly photo online. Who can see it?",
      options: [
        { text: "Only me", correct: false },
        { text: "Only best friends", correct: false },
        { text: "Anyone, even strangers", correct: true },
        { text: "No one at all", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Who should you talk to before sharing anything online?",
      options: [
        { text: "A parent or teacher", correct: true },
        { text: "Your toy", correct: false },
        { text: "A stranger", correct: false },
        { text: "No one", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Is deleting a post the same as erasing it forever?",
      options: [
        { text: "Yes", correct: false },
        { text: "No, it might still be saved", correct: true },
        { text: "Only if you wish", correct: false },
        { text: "Only on Tuesdays", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "What happens when you share too much online?",
      options: [
        { text: "People may know private things", correct: true },
        { text: "You get free candy", correct: false },
        { text: "Nothing at all", correct: false },
        { text: "You become invisible", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Should you post your school name online?",
      options: [
        { text: "Yes, it looks cool", correct: false },
        { text: "No, it's personal info", correct: true },
        { text: "Only with emojis", correct: false },
        { text: "Yes, if it's your birthday", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Who can help you stay safe online?",
      options: [
        { text: "Cartoon characters", correct: false },
        { text: "Random YouTubers", correct: false },
        { text: "Your parent or teacher", correct: true },
        { text: "Strangers online", correct: false }
      ]
    },
    {
      level: "Easy",
      question: "Should you tell others your password?",
      options: [
        { text: "Yes, if they are friends", correct: false },
        { text: "Only to classmates", correct: false },
        { text: "Only to your pet", correct: false },
        { text: "No, keep it secret", correct: true }
      ]
    },
    {
      level: "Medium",
      question: "Your friend shares your photo without asking. What should you do?",
      options: [
        { text: "Get upset and ignore", correct: false },
        { text: "Tell a parent or teacher", correct: true },
        { text: "Do the same to them", correct: false },
        { text: "Laugh it off", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "Which post leaves a digital footprint?",
      options: [
        { text: "A story shared on Instagram", correct: true },
        { text: "Talking with a friend", correct: false },
        { text: "Drawing on paper", correct: false },
        { text: "Watching a cartoon", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "Why should you think before posting online?",
      options: [
        { text: "So you look cool", correct: false },
        { text: "Because it stays online", correct: true },
        { text: "To get more likes", correct: false },
        { text: "To be famous", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "Is it okay to post funny videos of your classmates?",
      options: [
        { text: "Only if you laugh too", correct: false },
        { text: "Only on school days", correct: false },
        { text: "No, not without permission", correct: true },
        { text: "Yes, it’s fun", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "What can help you keep a clean digital footprint?",
      options: [
        { text: "Posting only kind and safe things", correct: true },
        { text: "Posting daily selfies", correct: false },
        { text: "Sharing all your photos", correct: false },
        { text: "Writing secret stuff online", correct: false }
      ]
    },
    {
      level: "Medium",
      question: "Where should you not post your vacation photos?",
      options: [
        { text: "In a school book", correct: false },
        { text: "On a wall at home", correct: false },
        { text: "Online while still away", correct: true },
        { text: "In a family photo album", correct: false }
      ]
    },
    {
      level: "Hard",
      question: "What happens when companies track your clicks online?",
      options: [
        { text: "They learn what you like", correct: true },
        { text: "They send you toys", correct: false },
        { text: "They block your phone", correct: false },
        { text: "They delete your photos", correct: false }
      ]
    },
    {
      level: "Hard",
      question: "Why is it dangerous to post your location online?",
      options: [
        { text: "It uses too much battery", correct: false },
        { text: "It may lead strangers to you", correct: true },
        { text: "It makes you sleepy", correct: false },
        { text: "It makes your photos blurry", correct: false }
      ]
    },
    {
      level: "Hard",
      question: "How can you reduce your digital footprint?",
      options: [
        { text: "By posting a lot", correct: false },
        { text: "By using more apps", correct: false },
        { text: "By telling all your secrets", correct: false },
        { text: "By not sharing private info", correct: true }
      ]
    },
    {
      level: "Hard",
      question: "Can someone take a screenshot of your post even after you delete it?",
      options: [
        { text: "No, that’s impossible", correct: false },
        { text: "Yes, and it stays with them", correct: true },
        { text: "Only on weekends", correct: false },
        { text: "Only if it’s funny", correct: false }
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
          <p>You completed all levels like a Digital Footprint Tracker!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
}

loadQuestion(currentLevel - 1);