import React from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from "./components/contents/contact/contact";
import HomeContent from "./components/contents/HomeContents/HomeContents";
import Footer from "./components/Footer/footer";
import MainNavigation from "./components/Navigation/MainNavigation";

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