const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const githubBtn = document.querySelector(".visit-btn");
    if (githubBtn) {
        githubBtn.addEventListener("click", () => {
            window.open("https://github.com/Finroden", "_blank");
        });
    }

    const githubIcon = document.getElementById("github-icon");
    if (githubIcon) {
        githubIcon.addEventListener("click", () => {
            window.open("https://github.com/Finroden", "_blank");
        });
        githubIcon.style.cursor = "pointer";
    }

    const linkedinIcon = document.getElementById("linkedin-icon");
    if (linkedinIcon) {
        linkedinIcon.addEventListener("click", () => {
            window.open("https://www.linkedin.com/in/adrian-czarnecki-2ba1bb2b1/", "_blank");
        });
        linkedinIcon.style.cursor = "pointer";
    }
    const btnWeatherApp = document.getElementById("btnWeatherApp");
    if (btnWeatherApp) {
        btnWeatherApp.addEventListener("click", () => {
            window.open("https://adrians-weather-app.netlify.app")
        });
        btnWeatherApp.style.cursor = "pointer";
    }
    const btnBmiCalculator = document.getElementById("btnBmiCalculator");
    if (btnBmiCalculator) {
        btnBmiCalculator.addEventListener("click", () => {
            window.open("https://adrians-bmi-calculator.netlify.app")
        })
        btnBmiCalculator.style.cursor = "pointer";
    }
    const btnToDoList = document.getElementById("btnToDoList");
    if (btnToDoList) {
        btnToDoList.addEventListener("click", () => {
            window.open("https://adrians-to-do-list.netlify.app")
        })
        btnToDoList.style.cursor = "pointer";
    }
    const btnPalindrome = document.getElementById("btnPalindrome");
    if (btnPalindrome) {
        btnPalindrome.addEventListener("click", () => {
            window.open("https://adrians-palindrome-checker.netlify.app")
        })
        btnPalindrome.style.cursor = "pointer";
    }
});

