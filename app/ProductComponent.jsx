import React, { Component } from 'react';

//import SinglePost from './ProductListing'

export default class AppContainer extends Component {
  constructor() {
    super()
    //Set an initial state of an empty array of products
    this.state = {};
  }
  componentDidMount() {
    //Fetch inventory records with the product ID and set the state
    fetch('/api/inventory/this.props.product.product_id')
    .then(res => res.json())
    .then(response => {
      console.log(response);
      this.setState({products: response})
    })
  }

  render() {
    return (
              <div>
                    <h3>{this.props.product.product_name}</h3>
                    <p>{this.props.product.product_desciption}</p>
                    <img className="crop-img" src={this.props.product.product_image}></img>
                      <form onSubmit={this.handleSubmit}>
                        <label>
                          Waist:
                          <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                          }
                          </select>
                        </label>
                        <label>
                          Length:
                          <select value={this.state.value} onChange={this.handleChange}>
                            <option value="tangerine">Tangerine</option>
                          }
                          </select>
                        </label>
                        <label>
                          Style:
                          <select value={this.state.value} onChange={this.handleChange}>
                            <option value="mango">Mango</option>
                          }
                          </select>
                        </label>
                        <input type="submit" value="Check Stock" />
                      </form>
              </div>

                 )
          }
        }
