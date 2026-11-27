const menuButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    navLinks.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = String(new Date().getFullYear());

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const subject = `Portfolio inquiry from ${formData.get("name")}`;
  const body = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    "",
    String(formData.get("message")),
  ].join("\n");
  const mailto = `mailto:hello@alexmorgan.design?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  formStatus.textContent = "Opening your email app with your message...";
  window.location.href = mailto;
});
