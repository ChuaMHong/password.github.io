document.getElementById('submit-password').addEventListener('click', function () {
    const correctPassword = "skibidialpha"; 
    const passwordInput = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    
    if (passwordInput === correctPassword) {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        errorMessage.style.display = 'none';

        const today = new Date().toLocaleDateString();
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();

        let totalAttempts = localStorage.getItem('totalAttempts') || 0;
        let attemptsToday = JSON.parse(localStorage.getItem('attemptsPerDay')) || {};

        attemptsToday[today] = (attemptsToday[today] || 0) + 1;
        localStorage.setItem('attemptsPerDay', JSON.stringify(attemptsToday));

        totalAttempts++;
        localStorage.setItem('totalAttempts', totalAttempts);

        document.getElementById('total-attempts').textContent = `Total password attempts: ${totalAttempts}`;
        document.getElementById('yesterday-attempts').textContent = `Password attempts yesterday: ${attemptsToday[yesterday] || 0}`;
    } else {
        // Wrong password, show error message
        errorMessage.style.display = 'block';
    }
});
