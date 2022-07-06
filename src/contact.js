function createContact() 
{
    const contactInformation = document.createElement('div');
    contactInformation.classList.add('contact')

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 +48 123 456 789';

    const address = document.createElement('p')
    address.textContent = 'Nowogrodzka 47A, Warszawa 00-686';

    const facebook = document.createElement('p')
    facebook.textContent = 'facebook.com/GigaKoksBurger/';

    const instagram = document.createElement('p')
    instagram.textContent = 'Instagram - @GigaKoksBurger';

    const locationMap = document.createElement('img');
    locationMap.src = 'images/location.png';
    locationMap.alt = 'Giga Koks Burgir location';

    contactInformation.appendChild(phoneNumber);
    contactInformation.appendChild(facebook);
    contactInformation.appendChild(instagram);
    contactInformation.appendChild(address);
    contactInformation.appendChild(locationMap);

    return contactInformation;
}

function initializeContact()
{
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default initializeContact