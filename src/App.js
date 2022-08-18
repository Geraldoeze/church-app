import React from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from "./pages/contact/contact";
import HomeContent from "./pages/HomeContents/HomeContents";
import Footer from './Layout/Footer/footer'
import MainNavigation from "./Layout/Navigation/MainNavigation";



const App = () => {
 
  const routes = ( 
    <main>     
    <Routes>
      <Route path="/" 
        exact={true}
        element={<HomeContent />}
      />
       <Route path="/contact" 
        exact={true}
        element={<Contact />}
      />
      {/* <Route path="/new" 
        exact={true}
        element={<Join />}
      /> */}
    </Routes>
    </main>
    )

  return ( 
    <div>
    <MainNavigation />
      {routes}
    <Footer />  
    </div>
   );
}
 
export default App;