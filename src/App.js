import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero1 from './Components/Hero1';
import Footer from './Components/Footer';
import PopularProperties from './Components/PopularProperties';
import FeaturedProjects from './Components/FeaturedProjects';
import Contact from './Components/Contact';
import About from './Components/About';
import Propertysearch from './Components/Propertysearch';
import Propertydetail from './Components/Propertydetail';
import Myprofile from './Components/Myprofile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accountinfo from './Components/Accountinfo';
import Enquiry from './Components/Enquiry';
import Listedproperties from './Components/Listedproperties';
import Addproperty from './Components/Addproperty';
import ScrollToTop from './Components/Scrolltotop';

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Hero1 /><PopularProperties /><FeaturedProjects /></>} />
          <Route path='/about' element={<><About /></>} />
          <Route path='/contact' element={<><Contact /></>} />
          <Route path='/propertylist' element={<><Propertysearch /></>} />
          <Route path='/propertydetail' element={<><Propertydetail /></>} />
          <Route path='/addproperty' element={<><Addproperty/></>}/>
          <Route path='/myprofile' element={<><Myprofile /></>}>
            <Route path='/myprofile/accountinfo' element={<><Accountinfo /></>} />
            <Route path='/myprofile/enquiry' element={<><Enquiry /></>} />
            <Route path='/myprofile/listedproperties' element={<><Listedproperties /></>} />
          </Route>
          <Route path='/mypro' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
