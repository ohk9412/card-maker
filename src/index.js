import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';
import { BrowserRouter } from 'react-router-dom';

const authService = new AuthService();
const imageUploader =  new ImageUploader();
const cardRepository = new CardRepository();

const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader = {imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);