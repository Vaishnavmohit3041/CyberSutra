let currentLevel = 1;
    const totalLevels = 20;

    const questions = [
      {
        level: "Easy", question: "What is a password?", options: [
          { text: "A way to keep your stuff safe online", correct: true },
          { text: "A secret handshake", correct: false },
          { text: "A funny emoji", correct: false },
          { text: "Your best friend's name", correct: false }
        ]
      },
      {
        level: "Easy", question: "Which one is a strong password?", options: [
          { text: "hello123", correct: false },
          { text: "Tiger2025!", correct: true },
          { text: "password", correct: false },
          { text: "12345678", correct: false }
        ]
      },
      {
        level: "Easy", question: "Should you tell your password to friends?", options: [
          { text: "Only best friends", correct: false },
          { text: "Yes, if they ask nicely", correct: false },
          { text: "Sometimes it's okay", correct: false },
          { text: "No, never share your password", correct: true }
        ]
      },
      {
        level: "Easy", question: "Why add symbols like @ or ! in your password?", options: [
          { text: "It looks fun", correct: false },
          { text: "It makes the password stronger", correct: true },
          { text: "It’s easier to remember", correct: false },
          { text: "To confuse people", correct: false }
        ]
      },
      {
        level: "Easy", question: "Which password is safer?", options: [
          { text: "lion123", correct: false },
          { text: "abcdefg", correct: false },
          { text: "L!on#2025", correct: true },
          { text: "qwerty", correct: false }
        ]
      },
      {
        level: "Medium", question: "Why not use your name as a password?", options: [
          { text: "Too easy to guess", correct: true },
          { text: "Too long", correct: false },
          { text: "Too cool", correct: false },
          { text: "Too hard", correct: false }
        ]
      },
      {
        level: "Medium", question: "What makes a password really good?", options: [
          { text: "Short and simple", correct: false },
          { text: "Easy ones like 1234", correct: false },
          { text: "Mix of letters, numbers and symbols", correct: true },
          { text: "Repeating letters", correct: false }
        ]
      },
      {
        level: "Medium", question: "Is 'qwerty' a good password?", options: [
          { text: "Yes, it's on the keyboard", correct: false },
          { text: "No, it's too common", correct: true },
          { text: "Maybe", correct: false },
          { text: "Only on phones", correct: false }
        ]
      },
      {
        level: "Medium", question: "Can you use the same password everywhere?", options: [
          { text: "Yes, it's easier", correct: false },
          { text: "Sometimes okay", correct: false },
          { text: "Only on weekends", correct: false },
          { text: "No, one hack can break all", correct: true }
        ]
      },
      {
        level: "Medium", question: "What helps remember long passwords?", options: [
          { text: "A password app", correct: true },
          { text: "Sticky notes", correct: false },
          { text: "Texting yourself", correct: false },
          { text: "Asking a friend", correct: false }
        ]
      },
      {
        level: "Medium", question: "How often should you change passwords?", options: [
          { text: "Never", correct: false },
          { text: "Once in your life", correct: false },
          { text: "Every few months or if someone finds it", correct: true },
          { text: "When bored", correct: false }
        ]
      },
      {
        level: "Medium", question: "Why are short passwords bad?", options: [
          { text: "Easy to guess or break", correct: true },
          { text: "Hard to type", correct: false },
          { text: "Hard to remember", correct: false },
          { text: "Too long", correct: false }
        ]
      },
      {
        level: "Hard", question: "Why is a long password better?", options: [
          { text: "Takes more space", correct: false },
          { text: "Looks cooler", correct: false },
          { text: "Slower to type", correct: false },
          { text: "Harder for bad people to guess", correct: true }
        ]
      },
      {
        level: "Hard", question: "Can someone break your password?", options: [
          { text: "Never", correct: false },
          { text: "Yes, if it's weak", correct: true },
          { text: "Only if you forget it", correct: false },
          { text: "Not if it's long", correct: false }
        ]
      },
      {
        level: "Advanced", question: "What is a password manager?", options: [
          { text: "An app to remember passwords for you", correct: true },
          { text: "A robot", correct: false },
          { text: "Your teacher", correct: false },
          { text: "A notebook", correct: false }
        ]
      },
      {
        level: "Advanced", question: "What’s the best password habit?", options: [
          { text: "Using your name and birthday", correct: false },
          { text: "Strong, different passwords + extra protection", correct: true },
          { text: "Telling your friends", correct: false },
          { text: "Using the same one everywhere", correct: false }
        ]
      },
      {
        level: "Advanced", question: "Should you use your pet’s name as a password?", options: [
          { text: "Yes, pets are cute", correct: false },
          { text: "Only if it’s a cat", correct: false },
          { text: "No, it's too easy to guess", correct: true },
          { text: "Yes, everyone does it", correct: false }
        ]
      },
      {
        level: "Advanced", question: "Why is '123456' a bad password?", options: [
          { text: "It’s a lucky number", correct: false },
          { text: "It looks cool", correct: false },
          { text: "Because it has numbers", correct: false },
          { text: "Too easy and common", correct: true }
        ]
      },
      {
        level: "Expert", question: "What's a good trick to make a strong password?",
        options: [
          { text: "Use a line from a song with symbols", correct: true },
          { text: "Write just 'password'", correct: false },
          { text: "Type the same letter many times", correct: false },
          { text: "Use your school name", correct: false }
        ]
      },
      {
        level: "Expert", question: "What should you do if someone finds out your password?", options: [
          { text: "Do nothing", correct: false },
          { text: "Change it right away", correct: true },
          { text: "Tell them not to use it", correct: false },
          { text: "Share it with others", correct: false }
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
          <p>You completed all levels like a Cyber Password Master!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
    }

    loadQuestion(currentLevel - 1);