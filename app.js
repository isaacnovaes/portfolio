"use strict";

const header = document.querySelector("header");
const home = document.querySelector("section.home");
const projects = document.querySelectorAll(".project");
const hamburger = document.querySelector(".hamburger-container");
const mobileNavLinks = document.querySelector(".mobile-links");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userMessage = document.querySelector("#message");
const form = document.querySelector("#form");
const bgBlur = document.querySelector(".blur-bg");
const footerDate = document.querySelector(".isaac span");

const date = new Date();
footerDate.innerText = date.getFullYear();

hamburger.addEventListener("click", e => {
	e.currentTarget.classList.toggle("hamburger-container-active");
	mobileNavLinks.classList.toggle("mobile-links-active");
	bgBlur.classList.toggle("blur-bg-active");
	header.classList.toggle("header-active");
});

mobileNavLinks.addEventListener("click", e => {
	if (!e.target.href) return;

	hamburger.classList.toggle("hamburger-container-active");
	e.currentTarget.classList.toggle("mobile-links-active");
	bgBlur.classList.toggle("blur-bg-active");
	header.classList.toggle("header-active");
});

////////////////////////////////////////////////////
// animate home

const homeOptions = {
	root: null,
};

function animateHome(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("animate-home");
			observer.unobserve(entry.target);
		}
		if (!entry.isVisible) {
			observer.unobserve(entry.target);
		}
	});
}
const homeObserver = new IntersectionObserver(animateHome, homeOptions);

homeObserver.observe(home);

////////////////////////////////////////////////////
// animate projects

const projectsOptions = {
	root: null,
	threshold: 0.5,
};

function animateProjects(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("animate-project");
			observer.unobserve(entry.target);
		}
	});
}
const projectsObserver = new IntersectionObserver(
	animateProjects,
	projectsOptions
);

projects.forEach(project => projectsObserver.observe(project));

////////////////////////////////////////////////////
// from validation

const validateString = string => string.trim() === "";

const showError = element => {
	element.classList.add("showError");
	setTimeout(() => {
		element.classList.remove("showError");
	}, 3000);
};

form.addEventListener("submit", e => {
	let formIsValid = true;

	if (validateString(userName.value)) {
		showError(userName);
		formIsValid = false;
	}
	if (validateString(userEmail.value)) {
		showError(userEmail);
		formIsValid = false;
	}

	if (validateString(userMessage.value)) {
		showError(userMessage);
		formIsValid = false;
	}

	if (formIsValid) {
		userName.classList.remove("showError");
		userName.classList.remove("showError");
		userMessage.classList.remove("showError");
	} else e.preventDefault();
});
