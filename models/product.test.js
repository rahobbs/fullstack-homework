var db = require('./db')
var Product = require('./product')
var { expect } = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.sync)

  describe('validations', () => {
    var product;
    beforeEach('test challenge', () => {
      product = Product.build({});
    })

    it("has valid name", () => {
      expect(product.product_name).to.be.a('string')
    })
  })
})
