import React from 'react';
import { render } from 'react-dom';
import ProductPage from './ProductPage';
import Products from './assets/data/products.json';

render(<ProductPage products={Products} />, document.getElementById('root'));
