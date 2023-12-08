class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Menu {
    constructor() {
        this.menuItems = [
            new MenuItem('Red set', 50),
            new MenuItem('Green set', 40),
            new MenuItem('Blue set', 30),
            new MenuItem('Yellow set', 50),
            new MenuItem('Pink set', 80),
            new MenuItem('Purple set', 90),
            new MenuItem('Orange set', 120),
        ];
    }

    getItemPrice(itemName) {
        const menuItem = this.menuItems.find(item => item.name.toLowerCase() === itemName.toLowerCase());
        return menuItem ? menuItem.price : null;
    }
}

module.exports = Menu;