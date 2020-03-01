import React from "react";

const _transformIntoHTMLBase = (client) => {
    const { _id, name, email,registerDate,__v } = client;
    const dateOfRegistration = new Date(registerDate);

    return (
        <div className="card" key={name}>
            <span className="name">{name}</span>
            <span className="type">{dateOfRegistration.toLocaleString()}</span>
            <span className="occupation">{_id}</span>
            <span className="email">{email}</span>
        </div>
    );
}

const _transformIntoHTMLBaseApplications = (clientApplication) => {
        const { name , numberOfApplications,
            details : { lending, corpo , internetShops, promo} } = clientApplication
        return (
            <div className="card" key={name}>
                <span className="name">{name}</span>
                <span className="number-of-applications">Количество заявок : {numberOfApplications}</span>
                <span className="typeofsites">Лэндинг: {lending}</span>
                <span className="typeofsites">Интернет-магазины: {internetShops}</span>
                <span className="typeofsites">Корпоратив: {corpo}</span>
                <span className="typeofsites">Промо: {promo}</span>
            </div>
        );
    }

export {
    _transformIntoHTMLBase, _transformIntoHTMLBaseApplications
};