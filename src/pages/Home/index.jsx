/* import React, { Component } from 'react';
import { connect } from 'react-redux'; */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

/* class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  } */
export default function Home() {
  const [products, setProducts] = useState([]);

  /*  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }
 */
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);
  /* render() {
    const { products } = this.state; */

  const handleAddProduct = (product) => {
    dispatch(CartActions.addToCart(product));
  };
  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
/* } */

/* export default connect()(Home); */
