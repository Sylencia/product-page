import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

export default class ProductGrid extends Component {
  render() {
    const { products } = this.props;

    // For each product, create a ProductDetails component for rendering.
    const detailGridElements = [];
    products.forEach(product => {
      detailGridElements.push(
        <ProductDetails details={product} key={product.index} />
      );
    });

    return (
      <ul className="productGrid">
        {detailGridElements}
      </ul>
    );
  }
}
