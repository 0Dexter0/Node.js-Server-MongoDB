import React from "react";
import "./panel.scss";
import CamaPulya from "./загружено.jpg";

export default class Panel extends React.Component {
    render() {
        return (
            <div id="panel">
                <i className="far fa-question-circle"></i>
                <i className="fas fa-cog"></i>
                <i className="far far fa-bell"></i>
                <div id="user">
                    <img src={CamaPulya}/>
                    <span>Jennie</span>
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>
        );
    }
}