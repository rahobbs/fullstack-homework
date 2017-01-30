var db = require('./db')
var Product = require('./product')
var { expect } = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.sync)

  describe('validations', () => {
    var product;
    beforeEach('test challenge', () => {
      product = Product.build({
        product_id: 2,
        product_name:'pants',
        product_image: 'http://www.fillmurray.com/300/200',
        product_desciption: 'A nice pair of pants'
      });
    });

    it("has valid id, name, imageURL and description", () => {
      expect(product.product_name).to.be.a('string');
      expect(product.product_id).to.equal(2);
      expect(product.product_image).to.be.a('string');
      expect(product.product_desciption).to.be.a('string');
    });
  });
});
