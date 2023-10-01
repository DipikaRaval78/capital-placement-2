import React,{FC } from 'react';
import Navigation from "../sidenavigation/Navbar";

interface Props {
    // any props that come into the component
    children:any
}

const Layout: FC<Props>  = ({children,...props }) => {
    return (
    <React.Fragment>
         <div id="layout">
         <Navigation />
        <main id="main">{children}</main>
        </div> 
    </React.Fragment>
    );
};
export default Layout;