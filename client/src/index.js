import React,{Fragment} from 'react';
import ReactDOM from 'react-dom'
import AsideMenu from "./components/aside-menu";
import './stylesGeneral.scss';
import RenderBaseApp from "./components/render-app/render-base-and-applications-app";

const InitialPage = () => {
    return (
        <Fragment>
            <AsideMenu />
            <RenderBaseApp />
        </Fragment>
    );
}



ReactDOM.render(<InitialPage />,document.getElementById('root'));





