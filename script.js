// Initial values for glucose level and insulin sensitivity
let glucoseLevel = 100;
let insulinSensitivity = 100;

// Display the initial values
document.getElementById('glucose-level').textContent = glucoseLevel;
document.getElementById('insulin-sensitivity').textContent = insulinSensitivity;

// Function to simulate eating healthy food
document.getElementById('healthy-food').addEventListener('click', function() {
    glucoseLevel += 5;  // Minimal glucose increase
    insulinSensitivity += 2;  // Slight improvement in sensitivity
    updateMetrics();
    showMessage("You ate a healthy meal! Glucose increased slightly.");
});

// Function to simulate eating sugary food
document.getElementById('sugary-food').addEventListener('click', function() {
    glucoseLevel += 20;  // Large glucose increase
    insulinSensitivity -= 10;  // Insulin sensitivity decreases
    updateMetrics();
    showMessage("You ate a sugary meal! Glucose spiked and insulin resistance increased.");
});

// Function to simulate exercising
document.getElementById('exercise').addEventListener('click', function() {
    glucoseLevel -= 10;  // Glucose level decreases
    insulinSensitivity += 5;  // Insulin sensitivity improves
    updateMetrics();
    showMessage("You exercised! Glucose levels dropped and insulin sensitivity improved.");
});

// Function to simulate reducing sugar intake
document.getElementById('reduce-sugar').addEventListener('click', function() {
    insulinSensitivity += 10;  // Insulin sensitivity improves
    updateMetrics();
    showMessage("You reduced sugar intake! Insulin sensitivity improved.");
});

// Function to update glucose level and insulin sensitivity display
function updateMetrics() {
    document.getElementById('glucose-level').textContent = glucoseLevel;
    document.getElementById('insulin-sensitivity').textContent = insulinSensitivity;

    // Prevent negative values for insulin sensitivity
    if (insulinSensitivity < 0) {
        insulinSensitivity = 0;
    }

    // Check for critical conditions
    if (glucoseLevel > 200) {
        showMessage("Warning: Your glucose levels are dangerously high!");
    }
    if (insulinSensitivity < 20) {
        showMessage("Warning: Severe insulin resistance detected!");
    }
}

// Function to display messages
function showMessage(message) {
    document.getElementById('message').textContent = message;
}
