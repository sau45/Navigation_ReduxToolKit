
import './App.css';
import LeftPannel from './Component/leftPannel/LeftPannel';
import Header from './Component/header/Header';
import Home from './Component/home/Home';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Contact from './Component/contact/Contact';
import Information from './Component/information/Information';
import Guide from './Component/guide/Guide';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    {/* <LeftPannel/> */}
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/info' Component={Information}></Route>
      <Route path='/guide' Component={Guide}></Route>
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
