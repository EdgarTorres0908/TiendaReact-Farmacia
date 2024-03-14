import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  
  return (
    <>
      <Navbar />
      <ItemListContainer greeting= 'Hola'/>
      <ItemCount stock = {10}/>
      <h1>Bienvenido a la Farmacia E-commerce</h1>
      
    </>
  )
}

export default App
