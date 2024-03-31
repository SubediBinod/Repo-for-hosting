function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var typed = new Typed(".typing-2", {
  strings: [" 👨‍💻 A Tech Enthusiast ","👨‍🎓 A Computer Engineering student ", " 🚀 Aspiring Web-Developer","🎨 UI Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});