import React, {useState} from 'react';
//import './App.css';
import { BrowserRouter as Router,Outlet, Route, Routes} from 'react-router-dom'
import {FormDeal} from './pages/form.page';
import { Navigation } from "./components/navigation";
import { Deals } from './pages/deal.page';
import { rand4 } from './helpers'
import { NotFound } from './components/NotFound'





function App() {

const [dealList, setDeals] = useState([]) ;        //spisok del

const onAddDeal = (text)  =>{
setDeals((state) => {
  return [
    ...state, 
    {
      id: rand4(),
      text,
      status: false,
    }
  ];
});
};

const onEdit = (updateDeal) =>{       //sozdali f. v kotoruy budut postupat' uzhe obnovlenie danie
  setDeals((state) =>{
    return state.map(e => {
      if (e.id === updateDeal.id){
      return {...e, ...updateDeal}      //esli budet ravno vernem state.map s obnovlenimi danimi
      }
      return e;
    });
  });
};


const onRemove = (id) => {
  setDeals((state) => {
    return state.filter((e) => e.id !== id)
  });
};

  return (
//<Deals deals={<dealList />} />
    
      <Router>
    <Navigation />    
      <Routes>
      
        <Route exact path='/' element={<Deals deals={dealList} onEdit={onEdit} onRemove={onRemove}/>}    />
        <Route path='/form'  element={<FormDeal onAddDeal={onAddDeal} onEdit={onEdit} deals={dealList} />} />
        <Route path='/form/: id?'  element={<FormDeal deals={dealList} onAddDeal={onAddDeal} onEdit={onEdit}  />} />
        <Route path='*' element ={<NotFound/>} />
      </Routes>
      

      <Outlet />
      </Router>
      
    
  );
}

export default App;


//<Route  path='/form/:id?' element={<FormDeal deals={dealList }  onEdit={onEdit}/>} />