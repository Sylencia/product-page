import React, { Component } from 'react';

export default class ProductDetails extends Component {
  render() {
    const { details } = this.props;
    const imgAssetSrc = `./assets/images/${details.productImage}`;

    // require(src) is needed as url-loader is used to load the images.
    // While it's not the cleanest way to do things, it allows us to leverage the
    // data provided in the json to display the images without having to import each manually.
    return (
      <li className="productDetails">
        <img src={require(`${imgAssetSrc}`)} />
        {details.isSale.toString()}
        {details.price}
      </li>
    );
  }
}
