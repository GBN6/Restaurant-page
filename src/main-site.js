import initializeHome from "./home";

function createHeader()
{
    const header = document.createElement('header')
    header.classList.add('header')

    const restName = document.createElement('h1')
    restName.classList.add('rest-name');
    restName.textContent = 'Giga Koks Burgir';

    header.appendChild(restName);
    header.appendChild(createNavButtons());

    return header;
}

function createNavButtons() 
{
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-btn', 'home-btn');
    homeButton.textContent = 'Home'

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-btn', 'menu-btn');
    menuButton.textContent = 'Menu'

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-btn', 'contact-btn');
    contactButton.textContent = 'Contact'

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createMainContent()
{
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function createFooter() 
{
    const footer = document.createElement('footer')
    footer.classList.add('footer');

    const signature = document.createElement('p');
    signature.textContent = 'GBN6@2022';

    footer.appendChild(signature);

    return footer;
}

function startWebsite()
{
    const wholePage = document.querySelector('#content')
    wholePage.appendChild(createHeader());
    wholePage.appendChild(createMainContent());
    wholePage.appendChild(createFooter());

    initializeHome();
} 

export default startWebsite;