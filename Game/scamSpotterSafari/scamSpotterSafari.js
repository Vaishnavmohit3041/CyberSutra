let currentLevel = 1;
    const totalLevels = 30;

    const questions = [
      {
        level: "Easy", 
        question: "You get a message in your game: \"Click here to get 1000 free diamonds 💎 NOW!", 
        options: [
            { text: "It’s a legit offer.", correct: false },
            { text: "It’s a scam – Fake offer to steal your info.", correct: true },
            { text: "A secret handshake", correct: false },
            { text: "A funny emoji", correct: false }
        ]
      },
      {
        level: "Easy", 
        question: "A player says, “I’ll help you level up if you give me your login password.”", 
        options: [
          { text: "It’s a nice gesture.", correct: false },
          { text: "Accept the offer and share the password.", correct: false },
          { text: "It’s a scam – Never give your password.", correct: true },
          { text: "Agree, but use a different password.", correct: false }
        ]
      },
      {
        level: "Easy", 
        question: "You see an ad that says, “Your tablet/mobile/laptop is infected! Tap here to clean.”", 
        options: [
            { text: "It’s a scam – Tries to scare you.", correct: true },
          { text: "Tap to clean your tablet.", correct: false },
          { text: "Ignore the ad.", correct: false },
          { text: "Download the cleaner.", correct: false }
        ]
      },
      {
        level: "Easy", 
        question: "A pop-up on a website says, “You won ₹10,000! Enter your name and parents’ card number.”", 
        options: [
          { text: "It’s a legitimate prize.", correct: false },
          { text: "Enter your details to claim the prize.", correct: false },
          { text: "It’s a scam – Wants your money info.", correct: true },
          { text: "Ignore the pop-up.", correct: false }
        ]
      },
      {
        level: "Easy", 
        question: "A stranger in a game says, “Let’s chat on WhatsApp”", 
        options: [
          { text: "Chat with them on WhatsApp.", correct: false },
          { text: "It’s a scam – Could be lying about age.", correct: true },
          { text: "Accept their friend request.", correct: false },
          { text: "Send your number to continue chatting.", correct: false }
        ]
      },
      {
        level: "Easy", 
        question: "You get a message: “Hi, I’m your uncle. I lost my phone. Can you tell me your mom’s number?”", 
        options: [
          { text: "Call your uncle and give the number.", correct: false },
          { text: "Text your uncle back to confirm.", correct: false },
          { text: "Ignore the message.", correct: false },
          { text: "It’s a scam – Pretending to be family.", correct: true }
        ]
      },
      {
        level: "Easy", 
        question: "A message says: “Download this cool game! It’s a mod APK version.”", 
        options: [
          { text: "Download the game.", correct: false },
          { text: "It’s a scam – May have viruses.", correct: true },
          { text: "Share it with your friends.", correct: false },
          { text: "Ignore the message.", correct: false }
        ]
      },
      {
        level: "Easy", 
        question: "An email from “MySchool123@outlook.com” says: “Click to check your exam marks.”", 
        options: [
          { text: "Click on the email to check marks.", correct: false },
          { text: "It’s a scam – School emails are official.", correct: true },
          { text: "Open it to see if it's legit.", correct: false },
          { text: "Ask a friend to check for you.", correct: false }
        ]
      },
      {
        level: "Easy", 
        question: "You see a link in a comment: “Get free toys from Chhota Bheem! Only today!”", 
        options: [
          { text: "Click to claim the toys.", correct: false },
          { text: "Share the link with others.", correct: false },
          { text: "It’s a scam – Not real cartoon giveaway.", correct: true },
          { text: "Check the link to verify the offer.", correct: false }
        ]
      },
      {
        level: "Easy", 
        question: "You get a message: “Send this to 10 people or bad luck will happen.”", 
        options: [
            { text: "It’s a scam – Just trying to trick you.", correct: true },
          { text: "Forward the message to others.", correct: false },
          { text: "Share it with your friends.", correct: false },
          { text: "Ignore and delete.", correct: false }
        ]
      },
      {
        level: "Medium", 
        question: "You find a website offering AirPods for ₹99 only today.", 
        options: [
          { text: "It’s a bargain deal.", correct: false },
          { text: "It’s a scam – Too good to be true.", correct: true },
          { text: "Buy it immediately.", correct: false },
          { text: "Contact customer service to confirm.", correct: false }
        ]
      },
      {
        level: "Medium", 
        question: "Someone says they’ll give you free game point if you fill out a form.", 
        options: [
            { text: "It’s a scam – Info-stealing trick.", correct: true },
            { text: "Fill out the form to get Point.", correct: false },
          { text: "Ask for more details.", correct: false },
          { text: "Download the app first.", correct: false }
        ]
      },
      {
        level: "Medium", 
        question: "You see a YouTube ad: “Use this code to get 100% discount on Amazon.”", 
        options: [
          { text: "Enter the code for a discount.", correct: false },
          { text: "Visit the site to see more offers.", correct: false },
          { text: "It’s a scam – Fake site copy.", correct: true },
          { text: "Ignore the ad.", correct: false }
        ]
      },
      {
        level: "Medium", 
        question: "A fake Flipkart message says: “Your order is cancelled. Click here to update payment info.”", 
        options: [
          { text: "Update your payment details immediately.", correct: false },
          { text: "Contact Flipkart customer support.", correct: false },
          { text: "Ignore the message.", correct: false },
          { text: "It’s a scam – Fake domain name.", correct: true }
        ]
      },
      {
        level: "Medium", 
        question: "You see a link on Instagram: “Click here for free Nike shoes giveaway!”", 
        options: [
          { text: "Click the link to claim the shoes.", correct: false },
          { text: "It’s a scam – Fake brand giveaway.", correct: true },
          { text: "Enter your details to get the shoes.", correct: false },
          { text: "Ignore the link.", correct: false }
        ]
      },
      {
        level: "Medium", 
        question: "You get a call from a person pretending to be your teacher asking your parents’ bank details.", 
        options: [
          { text: "It’s a scam – Real teachers never ask that.", correct: true },
          { text: "Share the bank details to help.", correct: false },
          { text: "Report the call to your teacher.", correct: false },
          { text: "Ignore and block the number.", correct: false }
        ]
      },
      {
        level: "Medium", 
        question: "You get a friend request from someone with no photo and a weird name like “Mickey678 Cool.”", 
        options: [
          { text: "Accept the request if they seem friendly.", correct: false },
          { text: "Ignore the request.", correct: false },
          { text: "Ask a mutual friend if they know them.", correct: false },
          { text: "It’s a scam – Random stranger.", correct: true }
        ]
      },
      {
        level: "Medium", 
        question: "Someone sends you a message with a video link and says, “Watch this! Is that you?”", 
        options: [
            { text: "It’s a scam – Could be virus or trick.", correct: true },
          { text: "Watch the video to see.", correct: false },
          { text: "Reply with a “Yes” and check the video.", correct: false },
          { text: "Share the link with your friends.", correct: false }
        ]
      },
      {
        level: "Medium", 
        question: "You see a URL like google.secure-login.freepage.com asking for your login.", 
        options: [
          { text: "Enter your login details to sign in.", correct: false },
          { text: "Contact Google support for confirmation.", correct: false },
          { text: "It’s a scam – Fake Google site.", correct: true },
          { text: "Ignore the site and use another browser.", correct: false }
        ]
      },
      {
        level: "Medium", 
        question: "Your app asks for your mic, camera, and location – but it’s just a drawing app.", 
        options: [
          { text: "Allow access to all permissions.", correct: false },
          { text: "It’s a scammy app – Asking for too much.", correct: true },
          { text: "Deny access and continue using the app.", correct: false },
          { text: "Ignore the warning and continue.", correct: false }
        ]
      },
      {
        level: "Hard", 
        question: "You find a USB pen drive lying outside your school.", 
        options: [
            { text: "Plug it into your computer to check.", correct: false },
            { text: "Give it to a friend to open.", correct: false },
            { text: "It’s a danger – Could harm the computer.", correct: true },
          { text: "Leave it on the ground.", correct: false }
        ]
      },
      {
        level: "Hard", 
        question: "You see a message in your class group: “Get student prize! Fill this form before today.”", 
        options: [
          { text: "Fill out the form to get the prize.", correct: false },
          { text: "Share the link with your friends.", correct: false },
          { text: "It’s a scam – Confirm with teacher first.", correct: true },
          { text: "Ignore the message.", correct: false }
        ]
      },
      {
        level: "Hard", 
        question: "You get an email with your name but a spelling error and says, “Click to check your prize certificate.”", 
        options: [
            { text: "It’s a scam – Doesn’t look official.", correct: true },
            { text: "Click to check the certificate.", correct: false },
            { text: "Contact the sender for verification.", correct: false },
            { text: "Forward it to a friend.", correct: false }
        ]
      },
      {
        level: "Hard", 
        question: "You see a comment saying: “Win a PS5 – Just comment your age and location!”", 
        options: [
          { text: "Comment your details to win.", correct: false },
          { text: "Share it with your friends.", correct: false },
          { text: "Ignore the comment.", correct: false },
          { text: "It’s a scam – Data farming.", correct: true }
        ]
      },
      {
        level: "Advanced", 
        question: "You post your photo and someone comments: “You are beautiful. Want to be friends?”", 
        options: [
          { text: "Respond to their message.", correct: false },
          { text: "It’s a scam or danger – Don’t trust strangers online.", correct: true },
          { text: "Accept their friend request.", correct: false },
          { text: "Block and report the person.", correct: false }
        ]
      },
      {
        level: "Advanced", 
        question: "You see a link in a comment: “Get free toys from Chhota Bheem! Only today!”", 
        options: [
            { text: "It’s a scam – Not real cartoon giveaway.", correct: true },
          { text: "Click to claim the toys.", correct: false },
          { text: "Share the link with others.", correct: false },
          { text: "Check the link to verify the offer.", correct: false }
        ]
      },
      {
        level: "Advanced", 
        question: "You get a pop-up saying: “Your device is infected! Click here to clean it.”", 
        options: [
            { text: "It’s a scam – Trying to scare you.", correct: true },
          { text: "Click to clean the device.", correct: false },
          { text: "Close the window and continue.", correct: false },
          { text: "Download the cleaner app.", correct: false }
        ]
      },
      {
        level: "Advanced", 
        question: "You see a message from a fake “support” asking for your password to help with an account issue.", 
        options: [
          { text: "Share your password with them.", correct: false },
          { text: "Report the message to support.", correct: false },
          { text: "It’s a scam – Never share your password.", correct: true },
          { text: "Change your password.", correct: false }
        ]
      },
      {
        level: "Expert", 
        question: "You receive an email saying you’ve won a gift card, but the sender is unknown.", 
        options: [
          { text: "Open the email to check the gift.", correct: false },
          { text: "It’s a scam – Do not open emails from unknown senders.", correct: true },
          { text: "Share the email with friends.", correct: false },
          { text: "Respond to claim the gift.", correct: false }
        ]
      },
      {
        level: "Expert", 
        question: "You see a website asking for personal details to download a free game.", 
        options: [
          { text: "Fill in the details to download the game.", correct: false },
          { text: "Download the game without entering details.", correct: false },
          { text: "It’s a scam – Do not share personal information.", correct: true },
          { text: "Check the website for reviews before deciding.", correct: false }
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
          <p>You completed all levels like a Scam Spotter Safari!</p>
          <p>Keep protecting your digital world 🔐</p>
        </div>
      `;
    }

    loadQuestion(currentLevel - 1);