# jmartinez-product-card

Testing package to deploy to NPM

## José Martínez

## Example
````
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jmartinez-product-card';
```

```
<ProductCard 
  key={ product.id }
  product={ product }
  initialValues={{
    count: 0,
    maxCount: 10,
  }}
>
  {
    ( { count, reset, increaseBy, isMaxCountReached, maxCount } ) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```