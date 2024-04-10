document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("Username").value;
    const password = document.getElementById("password").value;

    if (username === "Jayant" && password === "password") {
      alert("Hey Jayant, good to see you back!");
    } else {
      alert("Incorrect username or password.");
    }
  });
});
