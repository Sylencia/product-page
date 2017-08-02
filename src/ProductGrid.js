import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

export default class ProductGrid extends Component {
  render() {
    const { products, filter } = this.props;

    // Filter the products if it's not on the default option (which is '')
    let filteredProducts = products;
    if(filter !== '') {
      filteredProducts = products.filter(product => product.size.includes(filter));
    }

    // For each product, create a ProductDetails component for rendering.
    const detailGridElements = [];
    filteredProducts.forEach(product => {
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
