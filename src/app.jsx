import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({FileInput , authService,cardRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" axact element={<Login authService={authService} />}/>
        <Route path="/maker" axact element={<Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 