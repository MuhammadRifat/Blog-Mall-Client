import React from 'react';
import './Loader.css';

const Loader = () => {

    // Loader for loading
    return (
        <div className="loader bg-white p-4 rounded-full flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
        </div>
    );
};

export default Loader;