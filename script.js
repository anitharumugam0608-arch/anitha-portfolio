// Replace the placeholder URLs below before publishing.
const LINKS = {
  faceDemo: "https://face-app-recog-vblt.onrender.com/",
  faceRepo: "https://github.com/anitharumugam0608-arch/Face-App",
  githubProfile: "https://github.com/anitharumugam0608-arch",
  linkedin: "https://www.linkedin.com/in/anitha-rumugam-0608"
};

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-link]").forEach(link => {
  const key = link.dataset.link;
  const url = LINKS[key];
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Add your " + key + " URL in script.js before publishing this portfolio.");
    });
  }
});
