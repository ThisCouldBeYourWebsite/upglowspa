/**
 * Medspa Luxe Personalizer
 */

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    // Update Name
    const bizName = params.get('name') || 'UpGlow<br>MedSpa';
    const nameElements = document.querySelectorAll('[data-personalize="name"]');
    nameElements.forEach(el => {
        el.innerHTML = bizName;
    });

    // Update Title
    document.title = `${bizName.replace('<br>', ' ')} | Premium Medspa Services`;

    // Update Address
    const bizAddress = params.get('address');
    if (bizAddress) {
        document.querySelectorAll('[data-personalize="address"]').forEach(el => {
            el.innerHTML = bizAddress.replace(/\n/g, '<br>');
        });
    }

    const bizAddress2 = params.get('address2');
    if (bizAddress2) {
        document.querySelectorAll('[data-personalize="address2"]').forEach(el => {
            el.innerHTML = bizAddress2.replace(/\n/g, '<br>');
        });
    }

    // Update Locations List
    const bizLocations = params.get('locations');
    if (bizLocations) {
        document.querySelectorAll('[data-personalize="locations"]').forEach(el => {
            el.textContent = bizLocations;
        });
    }

    // Update Phone
    const bizPhone = params.get('phone');
    if (bizPhone) {
        document.querySelectorAll('[data-personalize="phone"]').forEach(el => {
            el.textContent = bizPhone;
            if (el.tagName === 'A') {
                el.setAttribute('href', `tel:${bizPhone.replace(/\D/g, '')}`);
            }
        });
    }

    // Update Email
    const bizEmail = params.get('email');
    if (bizEmail) {
        document.querySelectorAll('[data-personalize="email"]').forEach(el => {
            el.textContent = bizEmail;
            if (el.tagName === 'A') {
                el.setAttribute('href', `mailto:${bizEmail}`);
            }
        });
    }

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
