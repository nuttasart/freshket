const Menu = require('./Menu');
const Order = require('./Order');

const menu = new Menu();
const order = new Order(menu);
order.addItem('Red set', 1);
order.addItem('Green set', 1);
const isMember = 'N'
const totalPrice = order.calculateTotal(isMember);
console.log('Total price: '+totalPrice.toFixed(2)+' THB');


