import Card from './components/card/Card'
import Categories from './components/categories/Categories'
import './App.css';

function App() {

  const categories = [
    { name: 'Drama', color: 'yellow'},
    { name: 'Horror', color: 'black'},
  ]

  

  return (
    <>
     <Card highlighted>
       <h2>Título de la noticia</h2>
       <img alt="imagen de un gatito naranja muy tierno" width="100%" src="https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg" />
     </Card>

     <Card>       
       <img alt="imagen de un gatito naranja muy tierno" width="100%" src="https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg" />
       <h2>Título de la noticia</h2>
     </Card>

     <hr/>

    <Categories categories={categories} />
  
    </>
  );
}

export default App;
