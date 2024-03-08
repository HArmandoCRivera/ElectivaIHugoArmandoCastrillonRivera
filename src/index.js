import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainGif } from './MainGif';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='container'>
  <React.StrictMode>
    <MainGif/>
  </React.StrictMode>
  </div>
  </>
);


