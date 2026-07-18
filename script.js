const themeToggle = document.querySelector(".theme-toggle");
const offWorkOpen = document.querySelector(".off-work-open");
const offWorkPage = document.querySelector(".off-work-page");
const offWorkClose = document.querySelector(".close-off-work");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.documentElement.dataset.theme = "dark";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "light" : "dark";
  localStorage.setItem("theme", isDark ? "light" : "dark");
});

offWorkOpen.addEventListener("click", () => {
  offWorkPage.classList.add("is-open");
  offWorkPage.setAttribute("aria-hidden", "false");
});

offWorkClose.addEventListener("click", () => {
  offWorkPage.classList.remove("is-open");
  offWorkPage.setAttribute("aria-hidden", "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    offWorkPage.classList.remove("is-open");
    offWorkPage.setAttribute("aria-hidden", "true");
  }
});
