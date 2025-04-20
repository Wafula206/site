document.addEventListener("DOMContentLoaded", function () {
  // Section Switching
  const buttons = document.querySelectorAll("nav button, .nav-links button");
  const sections = document.querySelectorAll(".content");

  window.showContent = function (sectionId) {
    // Hide all sections
    sections.forEach(section => section.classList.remove("active"));
    // Deactivate all buttons
    buttons.forEach(button => button.classList.remove("active"));

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add("active");

    // Highlight the selected button
    const activeButton = Array.from(buttons).find(button =>
      button.getAttribute("onclick")?.includes(sectionId)
    );
    if (activeButton) activeButton.classList.add("active");
  };

  // Toggle mobile menu
  window.toggleMenu = function () {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("show");
  };

  // Random joke
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
// Load random joke
const jokes = [
  "Why don’t hackers take holidays? They’re afraid of being logged out!",
  "I would tell you a UDP joke... but you might not get it.",
  "Debugging: Removing the needles from the haystack.",
  "There are 10 types of people in the world: those who understand binary and those who don’t."
];

window.addEventListener('DOMContentLoaded', () => {
  const jokeEl = document.getElementById('random-joke');
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeEl.textContent = jokes[randomIndex];
});

document.addEventListener('contextmenu', event => event.preventDefault());