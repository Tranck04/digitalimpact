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

const deploymentInfo = document.querySelector("#deployment-info");

if (deploymentInfo) {
  fetch("deploy-info.json", { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("deploy-info unavailable");
      }

      return response.json();
    })
    .then((data) => {
      const version = data.version || "Version inconnue";
      const shortCommit = data.commit
        ? String(data.commit).slice(0, 7)
        : "inconnu";
      const deployedAt = data.deployedAt
        ? new Date(data.deployedAt).toLocaleString("fr-FR", {
            dateStyle: "short",
            timeStyle: "short",
            timeZone: "UTC",
          }) + " UTC"
        : "Date inconnue";

      deploymentInfo.textContent = `${version} • Déployé le ${deployedAt} • Commit ${shortCommit}`;
    })
    .catch(() => {
      deploymentInfo.textContent = "Version locale";
    });
}
