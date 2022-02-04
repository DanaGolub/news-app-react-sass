import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
// import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        {/* <Nav /> */}
        <PageHome />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
    )
}

export default AppRouter;
