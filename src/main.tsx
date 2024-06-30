import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.scss'
import {RouterProvider} from 'react-router-dom';
import {router} from './Routes/routes.tsx'
import Loader from './Utils/Loader.tsx';
import './Services/i18n/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router}/>
    </Suspense>
  </React.StrictMode>,
)
