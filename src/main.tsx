import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.tsx';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  // </StrictMode>,
)
