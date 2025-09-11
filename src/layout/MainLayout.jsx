
import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar';
import NoticeBar from '../components/NoticeBar';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


const MainLayout = () => {

    
    return (
        <div>
            <ScrollToTop />
            <Topbar></Topbar>
            <NoticeBar></NoticeBar>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;