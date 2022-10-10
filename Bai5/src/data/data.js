import React from 'react';

import axios from 'axios';

export default class dataList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://192.168.0.100:3000/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>
        { this.state.products.map(products => <li>{products.name}</li>)}
      </ul>
    )
  }
}
