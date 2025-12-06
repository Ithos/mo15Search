import ScrollToAnchor from "../Hooks/ScrollToAnchor";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({dataContext}) => {
    return (
        <div className="App">
            <ScrollToAnchor />
            <Header 
                title={dataContext.APP_TITLE} 
                width={dataContext.width} 
                legalSets={dataContext.LEGAL_SETS} 
                banList={dataContext.BAN_LIST} 
                format={dataContext.FORMAT}
                legalSetsLink={dataContext.LEGAL_SETS_LINK} 
                banListLink={dataContext.BAN_LIST_LINK} 
                formatLink={dataContext.FORMAT_LINK}
                smallScreenWidth={dataContext.SMALL_SCREEN_WIDTH}
                menuState={dataContext.menuState} 
                setMenuState={dataContext.setMenuState} 
                homeLink={dataContext.HOME_LINK}
            />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;