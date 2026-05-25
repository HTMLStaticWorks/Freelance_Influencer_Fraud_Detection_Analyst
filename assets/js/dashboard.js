// Dashboard Specific Logic
document.addEventListener('DOMContentLoaded', function() {
    // Analytics Chart (Simulated with simple bars)
    const ctx = document.getElementById('analyticsChart');
    if (ctx) {
        // Here you would typically use Chart.js, but since we are keeping it simple, 
        // we'll just handle sidebar toggles or simple UI interactions.
    }

    // Handle section switching if needed
    const links = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.dashboard-section');

    function showSection(id) {
        sections.forEach(s => s.classList.remove('active'));
        const el = document.getElementById(id);
        if (el) el.classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href') || '';
            const id = href.replace('#', '');
            if (!id) return;

            // Update active link state (both sidebar and offcanvas)
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            showSection(id);

            // Close mobile offcanvas if open
            const offEl = document.getElementById('sidebarMobile');
            if (offEl) {
                const off = bootstrap.Offcanvas.getInstance(offEl) || new bootstrap.Offcanvas(offEl);
                off.hide();
            }
        });
    });

    // Ensure a default section is visible
    if (!document.querySelector('.dashboard-section.active')) {
        showSection('analytics');
    }
});
