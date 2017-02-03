import React, { Component } from 'react';

//import SinglePost from './ProductListing'

export default class AppContainer extends Component {
  constructor() {
    super()
    //Set an initial state of an empty array of products
    this.state = {
      waistArr: [],
      lengthArr: [],
      styleArr: [],
      queryWaist: null ,
      queryLength: null ,
      queryStyle: null,
      count: 0
    };
    this.updateQueryWaist = this.updateQueryWaist.bind(this);
    this.updateQueryLength = this.updateQueryLength.bind(this);
    this.updateQueryStyle = this.updateQueryStyle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    //Fetch inventory records with the product ID and set the state
    fetch('/api/inventory/' + this.props.product.product_id)
    .then(res => res.json())
    .then(response => {
      this.setState(response);
      this.setState({queryWaist: this.state.waistArr[0],
      queryLength: this.state.lengthArr[0],
      queryStyle: this.state.styleArr[0]})
    })
  }

  handleSubmit (query) {
    var url = "/api/inventory/" + this.props.product.product_id + "/"
      + this.state.queryWaist + "/" + this.state.queryLength +"/"
      + this.state.queryStyle
    fetch(url)
    .then(res => res.json())
    .then(response => {
      this.setState({count: response})
      console.log(this.state.count)
    })
  }

  updateQueryWaist(e) {
    this.setState({queryWaist: e.target.value})
    console.log("query, ", this.state.queryWaist)
  }

  updateQueryLength(e) {
    this.setState({queryLength: e.target.value})
    console.log("query, ", this.state.queryLength)
  }

  updateQueryStyle(e) {
    this.setState({queryStyle: e.target.value})
    console.log("query, ", this.state.queryStyle)
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
                          <select onClick={this.updateQueryWaist}>
                            {
                              this.state.waistArr.map(function(waistSize) {
                                return <option key={waistSize} value={waistSize}>{waistSize}</option>;
                              })
                            }
                          </select>
                        </label>
                        <label>
                          Length:
                          <select onClick={this.updateQueryLength}>
                            {
                              this.state.lengthArr.map(function(length) {
                                return <option key={length} value={length}>{length}</option>;
                              })
                            }
                          </select>
                        </label>
                        <label>
                          Style:
                          <select onClick={this.updateQueryStyle}>
                            {
                              this.state.styleArr.map(function(style) {
                                return <option key={style} value={style}>{style}</option>;
                              })
                            }
                          </select>
                        </label>
                        <input type="submit" value="Check Stock" />
                      </form>
                      <p>In stock: {this.state.count}</p>
              </div>

                 )
          }
        }
