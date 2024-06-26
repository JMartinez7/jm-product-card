import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = renderer;

describe('<ProductCard /> tests', () => {

  test('should show component', () => {
    
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <h1>Product Card</h1>
          )

        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increment counter', () => {

    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          ( {count, increaseBy} ) => (
            <>
              <h1>Product Card</h1>
              <span>{ count }</span>
              <button onClick={ () => increaseBy(1)}></button>
            </>
          )
        }
        </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(()=>{
      tree.children[2].props.onClick();
    });
    tree = wrapper.toJSON();
    expect( tree.children[1].children[0]).toBe('1');

  });

});
