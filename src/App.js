import React from "react";
import Pagemenu from "./components/Pagemenu";
import DataService from "./components/DataService";
import { Routes, Route } from "react-router-dom";

const Page_1 = () => {
  return (
    <>
      
      <Pagemenu />
      <section className="page">
             <h2>PAGE 1</h2>
             {<DataService/>}
            
      </section>
    </>
  );
};

const Page_2 = () => {
  return (
    <>
      <Pagemenu />
      <section className="page">
       
        <h2>PAGE 2</h2>
        {<DataService/>}
      </section>
    </>
  );
};

const Page_3 = () => {
  return (
    <>
      <Pagemenu />
      <section className="page">
      
        <h2>PAGE 3</h2>
        
        {<DataService/>}
      </section>
    </>
  );
};


const App = () => {
  return (
    <>
   
  <Routes>
 <Route path="/" element={<Page_1 />}/>
 <Route path="/alpha" element={<Page_2/>}/>
 <Route path="/beta" element={<Page_3/>}/>
</Routes>
</>

  );
};

export default App;