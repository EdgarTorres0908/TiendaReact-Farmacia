import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartView from './components/CartView/CartView';
import Checkout from './components/Checkout/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';

const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Bienvenidos a tu Farmacia" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer greeting="Listado de productos filtrados" />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartView />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
};

export default App;