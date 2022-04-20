const passwordField = document.getElementById("user_password")
const confirmPasswordField = document.getElementById("user_confirm")
const createAccountButton = document.querySelector('.button')

createAccountButton.addEventListener('click', () => {
	if (passwordField.value == confirmPasswordField.value) {
		return
	} else{
		passwordField.classList.add("error")
		confirmPasswordField.classList.add("error")
	}
})
