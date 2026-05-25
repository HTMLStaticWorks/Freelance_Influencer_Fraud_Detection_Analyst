// Theme Toggle
const body = document.documentElement;
const themeToggles = document.querySelectorAll('#themeToggle, #themeToggleDesktop');

function updateToggleIcons(theme) {
    themeToggles.forEach(btn => {
        if (theme === 'dark') {
            btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        } else {
            btn.innerHTML = '<i class="bi bi-moon-fill"></i>';
        }
    });
}

if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-bs-theme', 'dark');
    updateToggleIcons('dark');
}

themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        if (body.getAttribute('data-bs-theme') === 'dark') {
            body.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateToggleIcons('light');
        } else {
            body.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateToggleIcons('dark');
        }
    });
});

// RTL Toggle
// include auth page button (#rtlToggle) and any elements with .rtl-toggle
const rtlToggles = document.querySelectorAll('.rtl-toggle, #rtlToggle');

function updateRTL(isRTL) {
    if (isRTL) {
        body.setAttribute('dir', 'rtl');
        localStorage.setItem('rtl', 'true');
    } else {
        body.setAttribute('dir', 'ltr');
        localStorage.setItem('rtl', 'false');
    }
}

if (localStorage.getItem('rtl') === 'true') {
    updateRTL(true);
}

rtlToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        const isRTL = body.getAttribute('dir') === 'rtl';
        updateRTL(!isRTL);
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Password Toggle
function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const icon = button.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('bi-eye-slash', 'bi-eye');
    }
}
