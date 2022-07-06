function createBurgerMenu()
{
    const burgerMenu = document.createElement('div')
    burgerMenu.classList.add('menu');

    burgerMenu.appendChild(
        createMenuTile(
            'Hamburger',
            'Burger Bun, Beef Patty(200g), Lettuce, Tomatoes, Sauce'
        )
    );

    burgerMenu.appendChild(
        createMenuTile(
            'Cheese Burger',
            'Burger Bun, Beef Patty(200g),Cheese Slice, Onions, Sauce'
        )
    );

    burgerMenu.appendChild(
        createMenuTile(
            'Chicken Burger',
            'Burger Bun, Chicken Filet(200g),Cheese Slice, Lettuce, Sauce'
        )
    );

    burgerMenu.appendChild(
        createMenuTile(
            'Mexican Burger',
            'Burger Bun, Beef Patty(200g), Nachos, Cheese Slice, Lettuce, Onions, Hot Sauce'
        )
    );

    burgerMenu.appendChild(
        createMenuTile(
            'Double Burger',
            'Burger Bun, Double Beef Patty(200g), Cheese Slice, Lettuce, Onions, Tomatoes, Sauce'
        )
    );

    burgerMenu.appendChild(
        createMenuTile(
            'Village Burger',
            'Grain Burger Bun, Beef Patty(200g), Tomatoes, Cheese Slice, Lettuce, Onions, Pickles, Sauce'
        )
    );

    burgerMenu.appendChild(
        createMenuTile(
            'French Fries',
            'French Fries, Salt, Ketchup'
        )
    );

    burgerMenu.appendChild(
        createMenuTile(
            'Nachos',
            'Nachos, Cheese, Sauce'
        )
    );

    return burgerMenu;
}

function createMenuTile(name, info)
{
    const menuTile = document.createElement('div');
    menuTile.classList.add('menu-tile');

    const burgerName = document.createElement('h2');
    burgerName.textContent = name;

    const burgerInfo = document.createElement('p')
    burgerInfo.textContent = info;

    const burgerImage = document.createElement('img');
    burgerImage.src = `images/burgers/${name.split(' ').join('').toLowerCase()}.png`;
    burgerImage.alt = `${name}`;

    menuTile.appendChild(burgerImage);
    menuTile.appendChild(burgerName);
    menuTile.appendChild(burgerInfo);

    return menuTile;
} 

function initializeMenu()
{
    const main = document.querySelector('.main')
    main.textContent = "";
    main.appendChild(createBurgerMenu());
}

export default initializeMenu;