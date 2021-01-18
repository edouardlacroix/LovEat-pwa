import React from 'react';

import { ToastContainer as LocalToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = () => {
    return (
        <LocalToastContainer transition={Slide} />
    );
}

export default ToastContainer;