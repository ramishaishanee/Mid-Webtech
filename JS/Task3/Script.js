const bodyEl = document.body;
const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const footerEl = document.querySelector("footer");
const sections = document.querySelectorAll("section");
const tableEl = document.querySelector("table");
const themeToggleBtn = document.getElementById("themeToggleBtn");

const lightTheme = {
    bodyBg: "#f5f5f5",
    textColor: "#000000",
    headerBg: "#ffffff",
    headerText: "#000000",
    sectionBg: "#ffffff",
    footerBg: "#ffffff",
    footerText: "#000000",
    borderColor: "#000000"
};

const darkTheme = {
    bodyBg: "#121212",
    textColor: "#f5f5f5",
    headerBg: "#1f1f1f",
    headerText: "#f5f5f5",
    sectionBg: "#1e1e1e",
    footerBg: "#1f1f1f",
    footerText: "#f5f5f5",
    borderColor: "#888888"
};

let currentMode = "light"; 

function applyTheme(theme) {
    bodyEl.style.backgroundColor = theme.bodyBg;
    bodyEl.style.color = theme.textColor;

    headerEl.style.backgroundColor = theme.headerBg;
    headerEl.style.color = theme.headerText;

    const headerLinks = headerEl.querySelectorAll("a");
    headerLinks.forEach(link => {
        link.style.color = theme.headerText;
    });

    sections.forEach(section => {
        section.style.backgroundColor = theme.sectionBg;
        section.style.border = `1px solid ${theme.borderColor}`;
    });

    if (tableEl) {
        tableEl.style.borderColor = theme.borderColor;
        const ths = tableEl.querySelectorAll("th");
        const tds = tableEl.querySelectorAll("td");

        ths.forEach(th => {
            th.style.borderColor = theme.borderColor;
            th.style.backgroundColor = theme.headerBg;
            th.style.color = theme.headerText;
        });

        tds.forEach(td => {
            td.style.borderColor = theme.borderColor;
            td.style.backgroundColor = theme.sectionBg;
            td.style.color = theme.textColor;
        });
    }

    footerEl.style.backgroundColor = theme.footerBg;
    footerEl.style.color = theme.footerText;
}

function toggleTheme() {
    if (currentMode === "light") {
        currentMode = "dark";
        applyTheme(darkTheme);
        themeToggleBtn.innerText = "Switch to Light Mode";
    } else {
        currentMode = "light";
        applyTheme(lightTheme);
        themeToggleBtn.innerText = "Switch to Dark Mode";
    }
}

applyTheme(lightTheme);
themeToggleBtn.innerText = "Switch to Dark Mode";

themeToggleBtn.addEventListener("click", toggleTheme);