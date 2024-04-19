import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('<ProductTitle /> tests', () => {

  test('should show title in component', () => {
    
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" />
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show productName in title', () => {

    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )

        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot();

  });
});
