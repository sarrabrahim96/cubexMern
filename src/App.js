import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import Layout from './components/Layout';
import FaqPage from './components/Pages/FaqPage';
import {DataProvider} from './GlobalState'
import Login from './components/Pages/Login'
import Registre from './components/Pages/registre'
import CreateOffre from './components/Pages/createOffer/CreateOffer'
import Contact from './components/Pages/Contact/contact'
import Users from './components/Pages/user/user'
import UpdateUser from './components/Pages/user/UpdateUser'
 

function App() {

  return (
    <>
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<Login/>} />
          <Route path="registre" element={<Registre/>} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="createOffer" element={<CreateOffre />} />
          <Route path="editOffer" element={<CreateOffre />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="users" element={<Users />} />
          <Route
            path="portfolio/portfolioDetails/:id"
            element={<PortfolioDetailsPage />}
          />
            <Route
            path="portfolio/editOffer/:id"
            element={<CreateOffre />}
          />
                 <Route
            path="user/UpdateUser/:id"
            element={<UpdateUser/>}
          />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
        </Route>
      
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </DataProvider>
    </>
  );
}

export default App;
