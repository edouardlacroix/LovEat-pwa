import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss'


/**
 * This function launches a toast
 * @param text The text you want to display in the toast
 * @param type The type of toast you want to display from TOAST_TYPE
 */
export const customToast = (text, type) => {
    //Here you can customize the toast
    // Transition is located in ToastContainer
    const config = {
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        autoClose: 3000,
        newestOnTop: true,
    }

    // Switch through all the possible type of toast
    switch (type) {
        case TOAST_TYPE.ERROR:
            return toast.error(text, config);
        case TOAST_TYPE.SUCCESS:
            return toast.success(text, config);
        case TOAST_TYPE.WARNING:
            return toast.warning(text, config);
        case TOAST_TYPE.INFO:
            toast.info(text, config);
            break;
        default:
            toast.info(text, config);
    }

}

// Type of toast available
export const TOAST_TYPE = {
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    INFO: 'INFO'
}
