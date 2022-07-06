function createHome()
{
    const home = document.createElement('div');
    home.classList.add('home');
    
    home.appendChild(createText('Best burgirs in Laczki Brzeskie'));
    home.appendChild(createText('Only freshest ingredients'));

    const orderButton = document.createElement('button');
    orderButton.classList.add('order-btn');
    orderButton.textContent = 'order';
    
    home.appendChild(orderButton);
    home.appendChild(createInfo());

    return home;
}

function createText(text) 
{
    const para = document.createElement('p')
    para.textContent = text;

    return para;
}

function createInfo()
{
    const info = document.createElement('div');
    info.classList.add('info')
    info.appendChild(createAddress());
    info.appendChild(createHours());

    return info;
}

function createAddress() 
{
    const address = document.createElement('div');
    address.classList.add('addres');
    address.appendChild(createText('')).innerHTML = 'Nowogrodzka 47A <br> Warszawa 00-686';

    return address;
}

function createHours()
{
    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.appendChild(createText('')).innerHTML = '<span>Mon-Fri </span>"8am - 8pm"<br><span>Sat-Sun </span>"8am - 11pm"';

    return hours;
}

function initializeHome()
{
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createHome());
} 

export default initializeHome;