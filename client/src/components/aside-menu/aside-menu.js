import React from "react";
import './aside-menu.css';

const arrayOfLabels = ["Списки аккаунтов","Cтатистика","О пользователе","История","Калькулятор","Документы"];

const navlist = arrayOfLabels.map((label) => {
    return (
        <a href="#" className="nav-list-item" key={label}>{label}</a>
    );
});

const AsideMenu = () => {
    return (
        <div className="block-keeper">
            <div id="menu">
                <h1>Manor Digital</h1>
                <nav>
                    {navlist}
                </nav>
            </div>
        </div>
    );
}


export default AsideMenu;