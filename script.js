// ---------------- Part 1: Event Handling ----------------
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");

greetBtn.addEventListener("click", () => {
    message.textContent = "Hello! You clicked the button!";
});

// ---------------- Part 2: Interactive Features ----------------

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
const counterSpan = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
    counter++;
    counterSpan.textContent = counter;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});

// ---------------- Part 3: Form Validation ----------------
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let errors = [];

    // Name validation
    if (name.length < 3) {
        errors.push("Name must be at least 3 characters.");
    }

    // Email validation (simple regex)
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        errors.push("Email is invalid.");
    }

    // Password validation
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters.");
    }

    if (errors.length > 0) {
        formMessage.style.color = "red";
        formMessage.innerHTML = errors.join("<br>");
    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
});
                                               
