import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Menu from './view/Navbar.jsx';
import Home from './view/home';
import Footer from './view/footer.js';
import injectContext from './store/appContext.js';
import ScrollToTop from './store/scrollToTop';
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import Productos from './view/Productos.js';
import ProductsIndividual from './view/ProductsIndividual.js';
import Compra from './view/Compra.js';


function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleHander = () =>{
    setSideDrawerOpen((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  } 
  useEffect(() => {
		document.addEventListener("mousedown", () => {
			setSideDrawerOpen(false);
		});
  }, []);
  
  return (
    <Router>
      <Menu drawerToggleHander = {drawerToggleHander}/>
      { !! sideDrawerOpen &&  <SideDrawer /> }
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productos" component={Productos}>
          </Route>
          <Route path="/producto/:id" component={ProductsIndividual}>
          </Route>
          <Route path="/compra" component={Compra}>
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>

  )
}

export default injectContext(App);