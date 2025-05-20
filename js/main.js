// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle mobile menu styles
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'block';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = '#fff';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                
                // Style the menu items for mobile
                const menuItems = navMenu.querySelectorAll('ul');
                menuItems.forEach(menu => {
                    menu.style.flexDirection = 'column';
                    menu.style.gap = '20px';
                });
            } else {
                // Reset styles when menu is closed
                navMenu.style.display = '';
                navMenu.style.position = '';
                navMenu.style.top = '';
                navMenu.style.left = '';
                navMenu.style.width = '';
                navMenu.style.backgroundColor = '';
                navMenu.style.padding = '';
                navMenu.style.boxShadow = '';
                
                const menuItems = navMenu.querySelectorAll('ul');
                menuItems.forEach(menu => {
                    menu.style.flexDirection = '';
                    menu.style.gap = '';
                });
            }
        });
    }
    
    // Handle scroll effects for header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.padding = '15px 0';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '20px 0';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
});