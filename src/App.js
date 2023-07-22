
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteCompo from './Components/RouteCompo';
import LinkCompo from './Components/LinkCompo';

function App() {
  return (
   <>
   <BrowserRouter>
   <LinkCompo/>
     <RouteCompo/>
   </BrowserRouter>

   </>
  );
}

export default App;
