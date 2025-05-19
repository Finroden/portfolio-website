document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    const linkMap = [
        { selector: '.visit-btn', url: 'https://github.com/Finroden', newTab: true },
        { selector: '#github-icon', url: 'https://github.com/Finroden', newTab: true },
        { selector: '#linkedin-icon', url: 'https://www.linkedin.com/in/adrian-czarnecki-2ba1bb2b1/', newTab: true },
        { selector: '#btnWeatherApp', url: 'https://adrians-weather-app.netlify.app', newTab: false },
        { selector: '#btnBmiCalculator', url: 'https://adrians-bmi-calculator.netlify.app', newTab: false },
        { selector: '#btnToDoList', url: 'https://adrians-to-do-list.netlify.app', newTab: false },
        { selector: '#btnPalindrome', url: 'https://adrians-palindrome-checker.netlify.app', newTab: false },
        { selector: '#btnBmiRepo', url: 'https://github.com/Finroden/BMI-calculator', newTab: false },
        { selector: '#btnListRepo', url: 'https://github.com/Finroden/To-do-list', newTab: false },
        { selector: '#btnWeatherRepo', url: 'https://github.com/Finroden/weather-app', newTab: false },
        { selector: '#btnPalindromeRepo', url: 'https://github.com/Finroden/palindrome-checker', newTab: false }
    ];

    linkMap.forEach(({ selector, url, newTab }) => {
        const element = document.querySelector(selector);
        if (!element) return;

        element.style.cursor = 'pointer';
        element.addEventListener('click', () => {
            if (newTab) {
                window.open(url, '_blank');
            } else {
                window.open(url);
            }
        });
    });
});
