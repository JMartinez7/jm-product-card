import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product1 = {
  id: '1',
  title: 'Coffe Mug - Card!',
  // img: '/coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard
        product={ product1 }
        initialValues={{
          count: 0,
          // maxCount: 2,
        }}
      >
        {

          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
