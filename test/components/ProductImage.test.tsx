import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('<ProductImage /> tests', () => {

  test('should show image in component', () => {
    
    const wrapper = renderer.create(
      <ProductImage img="https://foto.jpg" className='custom-class' />
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show productImage in image', () => {

    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )

        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot();

  });
});
