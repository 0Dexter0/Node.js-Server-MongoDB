import React from "react";
import "./paginator.scss";

export default class Paginator extends React.Component {
    render() {
        return (
            <div id="pagination">
                <i className="fas fa-angle-double-left"></i>
                <i className="fas fa-chevron-left"></i>
                <span>1</span>
                <i className="fas fa-chevron-right"></i>
                <i className="fas fa-angle-double-right"></i>
            </div>
        );
    }

}