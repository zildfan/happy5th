const hearts = document.querySelectorAll('.heart');
const messageBox = document.getElementById('messageBox');
const loveLetter = document.getElementById('loveLetter');
const letterText = document.getElementById('letterText');

let clickedHearts = new Set(); // Track which hearts were clicked

hearts.forEach((heart, index) => {
  heart.addEventListener('click', () => {
    const message = heart.getAttribute('data-message');
    messageBox.textContent = message;
    messageBox.classList.add('show');

    // Re-trigger animation
    heart.classList.remove('clicked');
    void heart.offsetWidth;
    heart.classList.add('clicked');

    // Track heart clicks
    clickedHearts.add(index);
    if (clickedHearts.size === hearts.length) {
      setTimeout(showLoveLetter, 1000); // small delay before showing
    }
  });
});

function showLoveLetter() {
  loveLetter.classList.add('show');

  const finalMessage = `Happy 7th monthsary bab! layo kaayo ta ron so its impossible to give a gift to you so kani sa nalang hehe
  thank you for being with me until now, thank you being a skulpture maker, molding me into the best man i am now, lets hope ma overcome 
  pa nato ang mga upcoming challenges na mo abot saato, like that one tiktok post i sent you nga love is a rollercoaster, and the rollercoaster
  na ato gi ride sa date, i hope we'll make it into the end having a happy endig bab! I love you so much!!!!\n

Happy Monthsary, bab 💙`;
  
  letterText.textContent = finalMessage;

  // 🎉 Trigger confetti burst
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}


function closeLetter() {
  loveLetter.classList.remove('show');
}
