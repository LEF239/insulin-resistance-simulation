// Initial values for glucose level and insulin sensitivity
let glucoseLevel = 100;
let insulinSensitivity = 100;
let glucoseData = [100];
let sensitivityData = [100];
let timeLabels = ['0'];

// Display the initial values
document.getElementById('glucose-level').textContent = glucoseLevel;
document.getElementById('insulin-sensitivity').textContent = insulinSensitivity;

// Chart setup for glucose levels and insulin sensitivity tracking
const ctx = document.getElementById('glucose-chart').getContext('2d');
const glucoseChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: timeLabels,
        datasets: [{
            label: 'Glucose Level (mg/dL)',
            data: glucoseData,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time (units)'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Glucose Level'
                }
            }
        }
    }
});

// Update glucose and insulin sensitivity metrics
function updateMetrics() {
    document.getElementById('glucose-level').textContent = glucoseLevel;
    document.getElementById('insulin-sensitivity').textContent = insulinSensitivity;

    // Update the chart
    glucoseData.push(glucoseLevel);
    sensitivityData.push(insulinSensitivity);
    timeLabels.push(timeLabels.length.toString());
    glucoseChart.update();
}

// Handle eating healthy food
document.getElementById('healthy-food').addEventListener('click', function() {
    glucoseLevel += 5;  // Minimal glucose increase
    insulinSensitivity += 2;  // Slight improvement in sensitivity
    updateMetrics();
});

// Handle eating sugary food
document.getElementById('sugary-food').addEventListener('click', function() {
    glucoseLevel += 20;  // Large glucose increase
    insulinSensitivity -= 10;  // Insulin sensitivity decreases
    updateMetrics();
});

// Handle sliders for lifestyle changes
document.getElementById('exercise-slider').addEventListener('input', function(event) {
    let exerciseValue = event.target.value;
    document.getElementById('exercise-value').textContent = exerciseValue;
    insulinSensitivity += parseInt(exerciseValue);  // Adjust based on slider value
    updateMetrics();
});

document.getElementById('diet-slider').addEventListener('input', function(event) {
    let dietValue = event.target.value;
    document.getElementById('diet-value').textContent = dietValue;
    insulinSensitivity += parseInt(dietValue);  // Adjust based on slider value
    updateMetrics();
});
