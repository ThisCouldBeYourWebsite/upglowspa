/**
 * Medspa Luxe Personalizer
 */

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    // Update Name
    const bizName = params.get('name') || 'UpGlow Med Spa';
    const nameElements = document.querySelectorAll('[data-personalize="name"]');
    nameElements.forEach(el => {
        el.textContent = bizName;
    });

    // Update Title
    document.title = `${bizName} | Premium Medspa Services`;

    // Internal Navigation Helper
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        if (link.getAttribute('href').includes('?')) return;
        const currentUrl = new URL(window.location.href);
        const search = currentUrl.search;
        if (search) {
            const originalHref = link.getAttribute('href');
            link.setAttribute('href', `${originalHref}${search}`);
        }
    });
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
