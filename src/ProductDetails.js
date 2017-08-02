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
        <img className="productDetails-image" src={require(`${imgAssetSrc}`)} />
        <div>
          {details.isSale && <span className="productDetails-sale">Sale</span>}
          {details.isExclusive &&
            <span className="productDetails-exclusive">Exclusive</span>}
        </div>
        <div className="productDetails-detailContainer">
          <span className="productDetails-name">
            {details.productName}
          </span>
          <span className="productDetails-price">
            {details.price}
          </span>
        </div>
      </li>
    );
  }
}
