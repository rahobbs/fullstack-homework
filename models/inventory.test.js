var db = require('./db')
var Inventory = require('./inventory')
var { expect } = require('chai')

describe('Inventory', () => {
  before('wait for the db', () => db.sync)

  describe('validations', () => {
    var inventory;
    beforeEach('test challenge', () => {
      inventory = Inventory.build({
        product_id: 2,
        waist:30,
        length: 32,
        style: 'Blue',
        count: 15
      });
    });

    it("has valid id, name, waist size, length, style and count", () => {
      expect(inventory.product_id).to.equal(2);
      expect(inventory.waist).to.equal(30);
      expect(inventory.length).to.equal(32);
      expect(inventory.style).to.be.a('string');
      expect(inventory.count).to.equal(15);
    });
  });
});
