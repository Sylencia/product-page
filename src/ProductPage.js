import React, { Component } from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid';

export default class ProductPage extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <Header />
        <ProductGrid products={products} />
      </div>
    );
  }
}
