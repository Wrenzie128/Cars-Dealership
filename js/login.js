document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");

  // Define valid credentials (can be replaced with backend validation)
  const validUsername = "admin";
  const validPassword = "password";

  // Handle form submission
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    if (username === validUsername && password === validPassword) {
      alert("Login successful!");
      window.location.href = "admin.html"; // Redirect to admin page
    } else {
      alert("Invalid username or password. Please try again.");
      passwordField.value = ""; // Clear the password field
    }
  });
});
