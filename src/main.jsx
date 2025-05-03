
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import pages/components if needed for routing
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DeezerMusic from './pages/Search.jsx';
import Library from './pages/Library.jsx';
import Premium from './pages/Premium.jsx';

import InstallApp from './pages/Install.jsx';
import Support from './pages/support.jsx';
import About from './pages/about.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App will usually contain your Navbar and <Outlet />
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/search', element: <DeezerMusic /> },
      { path: '/library', element: <Library /> },
      { path: '/premium', element: <Premium /> },
      { path: '/support', element: <Support /> },
      { path: '/install', element: <InstallApp /> },
      { path: '/about', element: <About /> },
    ]
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


