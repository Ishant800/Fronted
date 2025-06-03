
import { toast } from 'react-toastify';

const defaultOptions = {
  hideProgressBar: true,
  autoClose: 2000,
};

export const showSuccessToast = (message) => {
  toast.success(message, defaultOptions);
};

export const showErrorToast = (message) => {
  toast.error(message, defaultOptions);
};

export const showInfoToast = (message) => {
  toast.info(message, defaultOptions);
};

export const showWarningToast = (message) => {
  toast.warning(message, defaultOptions);
};
