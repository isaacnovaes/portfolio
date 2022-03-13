"use strict";

const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger-container");
const mobileNavLinks = document.querySelector(".mobile-links");
const bgBlur = document.querySelector(".blur-bg");

hamburger.addEventListener("click", e => {
	e.currentTarget.classList.toggle("hamburger-container-active");
	mobileNavLinks.classList.toggle("mobile-links-active");
	bgBlur.classList.toggle("blur-bg-active");
	header.classList.toggle("header-active");
});
