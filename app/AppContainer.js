import React, { Component } from 'react';

//import SinglePost from './ProductListing'

export default class AppContainer extends Component {
  constructor() {
    super()
    //Set an initial state of an empty array of products
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    fetch('/api/products')
    .then(res => res.json())
    .then(response => {
      this.setState({products: response})
    })
  }

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <ul>
        {
          this.state.products.map(function(singleProduct) {
          return (
                  <li key={singleProduct.product_name}>
                    <h3>{singleProduct.product_name}</h3>
                    <p>{singleProduct.product_desciption}</p>
                    <img className="crop-img" src={singleProduct.product_image}></img>
                  </li>
                 )
          })
        }
        </ul>
      </div>
    )
  }
}
