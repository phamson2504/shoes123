import Products from '../Products/Products';
import Brands from '../Brand/Brands';

function Home( {clickProduct, result} ) {

  return (
    <>
      <Brands handleClick={clickProduct}/>
      <Products result={result}/>
    </>
  );
}

export default Home;
