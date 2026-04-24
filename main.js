const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector(".nav");
const bars = document.querySelector(".fa-bars");
const xmarks = document.querySelector(".fa-xmark");

if (toggleButton && nav && bars && xmarks) {
  toggleButton.onclick = function () {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      bars.style.display = "none";
      xmarks.style.display = "block";
    } else {
      bars.style.display = "block";
      xmarks.style.display = "none";
    }
  };

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      bars.style.display = "block";
      xmarks.style.display = "none";
    });
  });
}

const questions = document.querySelectorAll(".question");

for (const question of questions) {
  question.addEventListener("click", function () {
    const icon = this.querySelector("i.bi-dash-lg, i.bi-plus-lg");
    const answer = this.querySelector(".faqp");

    if (icon) {
      icon.classList.toggle("bi-plus-lg");
      icon.classList.toggle("bi-dash-lg");
    }

    if (answer) {
      answer.classList.toggle("d-none");
    }
  });
}
