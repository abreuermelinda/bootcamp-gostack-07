import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/06/COL-6981-006/COL-6981-006_zoom2.jpg?ts=1584623858&ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">

          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>

          <span>ADICIONAR AO CARRINHO</span>

        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/06/COL-6981-006/COL-6981-006_zoom2.jpg?ts=1584623858&ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/06/COL-6981-006/COL-6981-006_zoom2.jpg?ts=1584623858&ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/06/COL-6981-006/COL-6981-006_zoom2.jpg?ts=1584623858&ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/06/COL-6981-006/COL-6981-006_zoom2.jpg?ts=1584623858&ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/06/COL-6981-006/COL-6981-006_zoom2.jpg?ts=1584623858&ims=326x" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
