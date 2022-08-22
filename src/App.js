import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Carrousel from './components/Carrousel';
import Productos from './components/Productos';
import Titulos from './components/Titulos';
import ItemListContainer from './components/ItemListContainer';


function App() {
  let tituloPrincipal = {text: "Somos Ramona Customs"};
  let tituloProductos = {text: "Nuestros Productos"};
  let producto1 = {img:"https://i.ibb.co/sm0nB9s/Sin-t-tulo2.jpg" ,id: 100, name: "producto1", price:2500};
  let producto2 = {img:"https://i.ibb.co/XJw53Sq/Sin-t-tulo3.jpg" ,id: 101, name: "producto2", price:2000};
  let producto3 = {img:"https://i.ibb.co/TqkK0wN/Sin-t-tulo4.jpg" ,id: 102, name: "producto3", price:300};
  let greeting = {saludo: "Bienvenidos a mi proyecto"};
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer item={greeting}/>
      <Titulos item={tituloPrincipal}/>
      <Carrousel/>
      <Titulos item={tituloProductos}/>
      <Productos item={producto1}/>
      <Productos item={producto2}/>
      <Productos item={producto3}/>
      <Footer/>
    </div>
  );
}

export default App;
