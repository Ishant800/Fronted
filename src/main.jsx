import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import { store } from './components/redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>,
  </Provider> 
)
 