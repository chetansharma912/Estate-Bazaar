import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBOP5oRSiEdpHdMtgs7agXCKtTqxTMWuxM",
  authDomain: "estate-bazaar-ee44e.firebaseapp.com",
  projectId: "estate-bazaar-ee44e",
  storageBucket: "estate-bazaar-ee44e.firebasestorage.app",
  messagingSenderId: "62197188040",
  appId: "1:62197188040:web:ebfada8c91f46e960cacfd",
  measurementId: "G-W0YW043DHW"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
