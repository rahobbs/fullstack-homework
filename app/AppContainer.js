import React, { Component } from 'react';
import ProductComponent from './ProductComponent';

export default class AppContainer extends Component {
  constructor() {
    super();
    //Set an initial state of an empty array of products
    this.state = {
      products: []
    };
  }

  // When the container mounts, fetch all products
  componentDidMount() {
    fetch('/api/products')
    .then(res => res.json())
    .then(response => {
      this.setState({products: response})
    });
  }

  render() {
    return (
      <div>
      <h1>Inventory</h1>
      <ul>
    { //For each product, render a ProductComponent
        this.state.products.map(function(singleProduct) {
          return (
            <ProductComponent key={singleProduct.product_name} product={singleProduct}/>
          )
        })
      }
      </ul>
      </div>
    )
  }
}
