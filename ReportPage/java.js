document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.addEventListener("mouseover", function () {
    this.style.width = "12rem"; // Expands the sidebar
  });

  sidebar.addEventListener("mouseout", function () {
    this.style.width = "3rem"; // Contracts the sidebar
  });
});
