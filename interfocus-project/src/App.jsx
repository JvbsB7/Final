
import { BrowserRouter } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { containerStyle } from './styles/globalStyles'
import { Router } from './Router';

export const App = () => {
  return (
    <>
      {/* <LoggedHeader />  */}
      <div style={containerStyle}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
    </>
  );
};