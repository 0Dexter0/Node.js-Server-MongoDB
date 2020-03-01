import React from 'react';
import './server-errors.css';
import Error from './unnamed.png';

const ErrorComponent = () => {
    return (
        <div id="error-container">
            <div id="error-img-container">
                <img src={Error} id="img-error" alt="Ошибка"/>
            </div>
            <div id="error-text">Something goes wrong with data or server</div>
        </div>
    );
};

export default ErrorComponent;