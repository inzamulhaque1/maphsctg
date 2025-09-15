
import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar';
import NoticeBar from '../components/NoticeBar';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';


const MainLayout = () => {

    
    return (
        <div className='font-bangla4'>
            <ScrollToTop />
            {/* <Topbar></Topbar>
            <NoticeBar></NoticeBar>
            <MenuBar></MenuBar> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;