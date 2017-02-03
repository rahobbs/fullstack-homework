import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ProductComponent extends Component {
  constructor() {
    super();
    // Set an initial state for a given product
    this.state = {
      waistArr: [],
      lengthArr: [],
      styleArr: [],
      queryWaist: null ,
      queryLength: null ,
      queryStyle: null,
      count: 0
    };

    // Make sure all methods reference the appropriate "this"
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
      });
  }

  handleSubmit (query) {
    // Fetch data for the query created by dropdown selections & update state
      var url = "/api/inventory/" + this.props.product.product_id + "/"
      + this.state.queryWaist + "/" + this.state.queryLength +"/"
      + this.state.queryStyle
      query.preventDefault();
      console.log("the state before count is fetched", this.state.count)
      fetch(url)
      .then(res => res.json())
      .then(response => {
        this.setState({count: response}, function () {
          console.log("the count after setState is called", this.state.count)
        }
      )})
  }

  // Update query props on state when new selections are made in dropdowns
  updateQueryWaist(e) {
    this.setState({queryWaist: e.target.value})
  }

  updateQueryLength(e) {
    this.setState({queryLength: e.target.value})
  }

  updateQueryStyle(e) {
    this.setState({queryStyle: e.target.value})
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
          <p id="count_p">In stock: {this.state.count}</p>
        </div>
    )
  }
}
