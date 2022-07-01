import { BrowserRouter, Switch, Route } from 'react-router-dom'
//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//PAGES
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Jewelry from './pages/Jewelry'
import Electronics from './pages/Electronics'
import User from './pages/User'
import LikedItems from './pages/LikedItems'
import Cart from './pages/Cart'
import { CartProvider } from 'react-use-cart'

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/men'>
              <Men />
            </Route>
            <Route path='/women'>
              <Women />
            </Route>
            <Route path='/jewelry'>
              <Jewelry />
            </Route>
            <Route path='/electronics'>
              <Electronics />
            </Route>
            <Route path='/user'>
              <User />
            </Route>
            <Route path='/like'>
              <LikedItems />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
