// define all the variables to use
const form = document.querySelector(".email");
const input = document.querySelector("input");
const error = document.querySelector(".error");
const errorAlert = document.getElementById("error-alert");

// define the checkInput function
const checkInput = (e) => {
	e.preventDefault();
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
		console.log("it's a correct email!!");
		errorAlert.style.display = "none";
		error.innerHTML = "";
	} else {
		console.log("not a correct email address");
		error.innerHTML = "Please provide a valid email";
		error.style.color = "red";
		errorAlert.style.display = "block";
	}
};
form.addEventListener("submit", checkInput);
