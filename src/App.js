import React,{useState,useEffect} from 'react'
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';

import { Products, Navbar, Cart, Checkout } from './components';
//import Cart from './components/Cart/Cart';
import { commerce} from './lib/commerce';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState({});

    const fetchProducts = async () =>{
        const {data} = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setcart(cart);
    }

    const handleAddToCart = async(productid,quantity) =>{
        const {cart} = await commerce.cart.add(productid,quantity);
        setcart(cart);
    }

    const handleUpdateCartQty = async(productid,quantity)=>{
        const {cart} = await commerce.cart.update(productid,{quantity});
        setcart(cart);
    }
    
    const handleRemoveCart = async(productid)=>{
        const {cart} = await commerce.cart.remove(productid);
        setcart(cart);
    }

    const handleEmptyCart = async() =>{
        const {cart} = await commerce.cart.empty();
        setcart(cart);
    }

    useEffect(() => {
    fetchProducts();   
    fetchCart();
    }, []);
    console.log(cart);
    return (
        <Router>
        <div>
            <Navbar totalitems={cart.total_items}></Navbar>
            <Switch>
                <Route exact path="/">
                <Products products={products} onAddToCart={handleAddToCart}></Products>
                </Route>
                <Route exact path="/cart">
                <Cart cart={cart} 
                handleUpdateCartQty={handleUpdateCartQty} 
                handleRemoveCart={handleRemoveCart}
                handleEmptyCart={handleEmptyCart} />
                </Route>
                <Route exact path="/checkout">
                <Checkout cart={cart}></Checkout>
                </Route>
            </Switch>             
          
        </div>
        </Router>
    )
}

export default App
