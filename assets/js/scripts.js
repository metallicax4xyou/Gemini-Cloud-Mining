
// Get the menu button element
const menuButton = document.querySelector(".menu-button");

// Add a click event listener to the menu button
menuButton.addEventListener("click", function() {
  alert("Menu button clicked!"); // Placeholder action: Show an alert
});

// Get all the algorithm tab buttons
const algorithmTabs = document.querySelectorAll(".algorithm-tabs .tab");

// Add a click event listener to each tab button
algorithmTabs.forEach(tab => {
  tab.addEventListener("click", function() {
    // Remove the "active" class from all tabs
    algorithmTabs.forEach(t => t.classList.remove("active"));

    // Add the "active" class to the clicked tab
    this.classList.add("active");

    // Placeholder: Log the clicked tab's text to the console
    console.log("Tab clicked:", this.textContent);
  });
});