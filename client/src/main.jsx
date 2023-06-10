import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from './App';
import { DataProvider } from './contexts/DataContext'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={
      <DataProvider>
        <App />
      </DataProvider>
    } >
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
