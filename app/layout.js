'use client';
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux';
import store from './store/configureStore';


const inter = Inter({ subsets: ['latin'] });

export default function Rootlayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

