const enter = document.getElementById("enter");
console.log(enter);
const input = document.querySelector("input");
console.log(input);
const email = document.querySelector(".email");

// define the checkInput function
// function emailIsValid (email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
// }
const checkInput = () => {
	console.log(input.value);
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
		console.log("it's a correct email!!");
	} else {
		console.log("not a correct email address");
		const err = document.createElement("p");
		err.innerHTML = "Please provide a valid email";
		err.style.color = "red";
		email.appendChild(err);
	}
};
enter.addEventListener("click", checkInput);
