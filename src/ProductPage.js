import React, { Component } from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid';

export default class ProductPage extends Component {
  state = {
    filter: '',
  };

  constructor(props) {
    super(props);

    // Go through the products to find which sizes are available for filtering
    this.filterSelections = [];
    props.products.forEach(product => {
      product.size.forEach(size => {
        if (!this.filterSelections.includes(size)) {
          this.filterSelections.push(size);
        }
      });
    });
  }

  handleFilterSelect = filter => {
    this.setState({
      filter,
    });
  };

  render() {
    const { products } = this.props;
    const { filter } = this.state;

    return (
      <div>
        <Header
          filterSelections={this.filterSelections}
          onFilterSelect={this.handleFilterSelect}
        />
        <ProductGrid products={products} filter={filter}/>
      </div>
    );
  }
}
