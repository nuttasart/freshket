class Order {
    constructor(menu) {
        this.menu = menu;
        this.items = {};
    }

    addItem(itemName, quantity) {
        const price = this.menu.getItemPrice(itemName);
        if (price !== null) {
            if (this.items[itemName]) {
                this.items[itemName].quantity += quantity;
            } else {
                this.items[itemName] = { price, quantity };
            }
        } else {
            console.log(itemName+' is not available on the menu.');
        }
    }

    calculateTotal(isMember) {
        let total = 0;
        let discount = 0;
        
        const discountItems = ['Orange set', 'Pink set', 'Green set'];

        for (const item in this.items) {
            if (discountItems.includes(item) && this.items[item].quantity > 1) {
                discount += this.menu.getItemPrice(item) * this.items[item].quantity * 0.05;
            }
            total += this.items[item].price * this.items[item].quantity;
        }
        

        if(isMember.toLowerCase()=='member'){
            total -= discount;
            total = total-(total*0.1);
        }else{
            total -= discount;
        }
        return total;
    }
}

module.exports = Order;