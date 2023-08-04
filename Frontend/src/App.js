import Layout from "./hocs/Layout";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listing from './containers/Listing';
import ListingDetails from './containers/ListingDetails';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <div>
      <Provider store = {store}>
        <Router>
          <Layout/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/listings' element={<Listing />} />
              <Route path='/listings/:id' element={<ListingDetails />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
      </Provider>
      
      
    </div>
     
  );   
}

export default App;
