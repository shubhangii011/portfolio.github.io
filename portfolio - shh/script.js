document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    console.log(menuIcon);
    console.log(navbar);
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // window.onscroll = () => {
    //     sections.forEach(sec => {
    //         let top = window.scrollY; 
    //         let offset = sec.offsetTop - 150;
    //         let height = sec.offsetHeight;
    //         let id = sec.getAttribute(`id`);

    //         console.log(document.querySelector(`header nav a[href*="${id}"]`));

    //         if (top >= offset && top < offset + height) {
    //             navLinks.forEach(links => {
    //                 links.classList.remove('active');
    //                 document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
    //             });
    //         };
    //     });
    // };

    window.onscroll = () => {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            // Fixing the query to select the correct link
            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
    
    menuIcon.onclick = () => {
        console.log('Menu icon clicked');
        menuIcon.classList.toggle('bx-x'); 
        navbar.classList.toggle('active');
    };
});
