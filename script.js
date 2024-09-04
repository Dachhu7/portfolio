// JavaScript for Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text");
    const words = ["Backend Developer", "Front-End Developer", "Tech Enthusiast"];
    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }

    type();
});
