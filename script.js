document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll(".content");
  
    window.showContent = function (sectionId) {
      sections.forEach(section => section.classList.remove("active"));
      buttons.forEach(button => button.classList.remove("active"));
  
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
  
      const activeButton = Array.from(buttons).find(button =>
        button.getAttribute("onclick")?.includes(sectionId)
      );
      if (activeButton) {
        activeButton.classList.add("active");
      }
    };
  });
  document.addEventListener("DOMContentLoaded", function () {
    const jokes = [
      "🧠 I tried social engineering a psychologist… they asked me how that made me feel.",
      "🔐 Hackers exploit software. I exploit psychology. Together? Unstoppable.",
      "🛡️ My firewall is strong, but not as strong as my fear of failure.",
      "📲 I told my therapist about my phishing problem… now they won’t click my emails either.",
      "👀 I can read minds — especially insecure passwords.",
      "💻 My brain has too many open tabs, and no one’s patching them.",
      "🧬 Cybersecurity is 80% psychology, 20% turning it off and back on again.",
      "👨‍💻 I don’t have trust issues… I just monitor all your network traffic."
    ];
  
    const jokeElement = document.getElementById("random-joke");
    if (jokeElement) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      jokeElement.textContent = jokes[randomIndex];
    }
  });
    