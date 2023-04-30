import './App.css';
import Nav from './components/navbar/Nav';
import Product from './components/product/Product';





function App() {
  const path = "/src/imagens/";
  const productsArray = [

    {
      id: 0,
      product: 'Conjunto casual',
      price: 135.49,
      extension: 'jpg',
      stars: 5
      
    },
   
    {
      id: 1,
      product: 'Camisa básica preta',
      price: 35,
      extension: 'jpeg',
      stars: 5
    },

    {
      id: 2,
      product: 'Conjunto noitada',
      price: 129.89,
      extension: 'jpeg',
      stars: 5
    },
    {
      id: 3,
      product: 'Edição especial',
      price: 189.66,
      extension: 'jpeg',
      stars: 5
    },
    {
      id: 4,
      product: 'kit vida Loka',
      price: 35,
      extension: 'jpeg',
      stars: 5
    },
    {
      id: 5,
      product: 'òculos de sol',
      price: 35,
      extension: 'jpeg',
      stars: 5
    }
  ]


  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='section-products'>
        <section className='products'>
          {productsArray.map((el) => (
            <Product key={el.id} name={el.product}  img={`${path}${el.id}.${el.extension}`} price = {el.price} stars = {el.stars} />
          ))};
        </section>
      </main>

    </>
  )
}

export default App
