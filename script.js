document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    


    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🔒';
        this.style.transform = 'translateY(-50%) scale(1.4)';
        setTimeout(() => {
            this.style.transform = 'translateY(-50%) scale(1.2)';
        }, 300);
    });

    // Form validation
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Email validation
        const email = document.getElementById('email');
        if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.classList.add('input-error');
            email.parentElement.classList.add('show-error');
            isValid = false;
        } else {
            email.classList.remove('input-error');
            email.parentElement.classList.remove('show-error');
        }
        
        // Password validation
        const password = document.getElementById('password');
        if (!password.value || password.value.length < 8) {
            password.classList.add('input-error');
            password.parentElement.classList.add('show-error');
            isValid = false;
        } else {
            password.classList.remove('input-error');
            password.parentElement.classList.remove('show-error');
        }
        
        if (isValid) {
            // Button animation
            const loginButton = document.querySelector('.login-button');
            const successColor = getComputedStyle(document.documentElement).getPropertyValue('--success-color').trim();
            
            loginButton.textContent = '🎉 Success! 🎉';
            loginButton.style.backgroundColor = successColor;

            // Confetti effect
            createConfetti();
            
            setTimeout(() => {
                loginButton.textContent = 'Redirecting...';
                // Simulate form submission
                // loginForm.submit();
            }, 1500);

            setTimeout(() => {
                alert('Login successful! (This is a front-end demo)');
                const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
                loginButton.textContent = 'Log in';
                loginButton.style.backgroundColor = primaryColor;
            }, 3000);
        }
    });

    // Clear errors when typing
    document.getElementById('email').addEventListener('input', function() {
        this.classList.remove('input-error');
        this.parentElement.classList.remove('show-error');
    });

    document.getElementById('password').addEventListener('input', function() {
        this.classList.remove('input-error');
        this.parentElement.classList.remove('show-error');
    });

    // Create confetti effect
    function createConfetti() {
        const colors = ['#4361ee', '#3a0ca3', '#f72585', '#4cc9f0', '#4895ef', '#b5179e'];
        const container = document.querySelector('.login-card');
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 8 + 5 + 'px';
            confetti.style.height = Math.random() * 8 + 5 + 'px';
            confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    // Add hover effect to social buttons
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-8px) rotate(10deg) scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) rotate(0) scale(1)';
        });
    });
});
