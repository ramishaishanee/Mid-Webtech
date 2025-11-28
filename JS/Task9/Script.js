// Theme switcher
const themeToggleBtn = document.getElementById("themeToggleBtn");
let isDarkMode = false;

function toggleTheme() {
  if (!isDarkMode) {
    document.body.classList.add("dark-mode");
    themeToggleBtn.innerText = "Switch to Light Mode";
    isDarkMode = true;
  } else {
    document.body.classList.remove("dark-mode");
    themeToggleBtn.innerText = "Switch to Dark Mode";
    isDarkMode = false;
  }
}

themeToggleBtn.addEventListener("click", toggleTheme);

// Time-based greeting
const greetingText = document.getElementById("greetingText");

function setGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  greetingText.innerText = `${greeting}, I'm Akib Tanzim.`;
}

setGreeting();

// Section toggling 
const navLinks = document.querySelectorAll(".nav-link");
const aboutSection = document.getElementById("aboutSection");
const projectsSection = document.getElementById("projectsSection");
const contactSection = document.getElementById("contactSection");

function showSection(sectionId) {
  // Hide all
  aboutSection.classList.add("hidden");
  projectsSection.classList.add("hidden");
  contactSection.classList.add("hidden");

  // Remove active class from all nav links
  navLinks.forEach(link => link.classList.remove("active-link"));

  // Show selected
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
  }

  // Highlight correct nav link
  navLinks.forEach(link => {
    if (link.getAttribute("data-section") === sectionId) {
      link.classList.add("active-link");
    }
  });
}

// Nav click handlers
navLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetSection = this.getAttribute("data-section");
    showSection(targetSection);
  });
});

// Contact form validation
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

const nameERR = document.getElementById("nameERR");
const emailERR = document.getElementById("emailERR");
const messageERR = document.getElementById("messageERR");
const formSuccess = document.getElementById("formSuccess");

const emailRegex = /\S+@\S+\.\S+/;

function validateContactForm() {
  let hasERR = false;

  // Clear previous messages
  nameERR.innerHTML = "";
  emailERR.innerHTML = "";
  messageERR.innerHTML = "";
  formSuccess.innerHTML = "";

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const messageVal = messageInput.value.trim();

  // Name not empty
  if (nameVal === "") {
    hasERR = true;
    nameERR.innerHTML = "Name cannot be empty.";
  }

  // Email format
  if (emailVal === "") {
    hasERR = true;
    emailERR.innerHTML = "Email cannot be empty.";
  } else if (!emailRegex.test(emailVal)) {
    hasERR = true;
    emailERR.innerHTML = "Enter a valid email address.";
  }

  // Message length
  if (messageVal.length < 10) {
    hasERR = true;
    messageERR.innerHTML = "Message must be at least 10 characters.";
  }

  if (hasERR) {
    return false; // prevent form submission
  } else {
    formSuccess.innerHTML = "Message sent successfully!";
    return false;
  }
}