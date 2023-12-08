const { expect } = require('chai');
const Menu = require('./Menu');
const Order = require('./Order');

describe('Menu', () => {
  let menu;

  before(() => {
    menu = new Menu();
  });

  it('should get the price of an item from the menu', () => {
    expect(menu.getItemPrice('Red set')).to.equal(50);
  });

  it('should return null for an item not in the menu', () => {
    expect(menu.getItemPrice('Non-existent Item')).to.be.null;
  });
});

describe('Order', () => {
  let menu;
  let order;

  before(() => {
    menu = new Menu();
    order = new Order(menu);
  });

  it('Customers order Red set and Green set; price from calculation is 90', () => {
    order.addItem('Red set', 1);
    order.addItem('Green set', 1);
    const totalPrice = order.calculateTotal('None');
    expect(totalPrice).to.equal(90);
  });

  it('Customers can use a 10% discount card, then the price should be deducted by discount amount', () => {
    const totalPrice = order.calculateTotal('Member');
    expect(totalPrice).to.equal(81);
  });
});


describe('Order', () => {
  let menu;
  let order;

  before(() => {
    menu = new Menu();
    order = new Order(menu);
  });

  it('For Orange sets, if customers order more than 2 items per bill. customers will get a 5% discount', () => {
    order.addItem('Orange set', 2);
    const totalPrice = order.calculateTotal('None');
    expect(totalPrice).to.equal(228);
  });
});

//npx mocha test.js