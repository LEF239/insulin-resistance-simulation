document.getElementById('eat-food').addEventListener('click', function() {
    let glucoseLevel = Math.floor(Math.random() * 100) + 100;
    document.getElementById('glucose-level').textContent = 'Glucose Level: ' + glucoseLevel;
});
