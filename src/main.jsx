import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import GenerateAIVideopg2 from './components/Page2/GenerateAIVideopg2.jsx'
import Layout from './Layout.jsx'
import Subcription from './components/Subscription/Subcription.jsx';

const router = createBrowserRouter ([{
path: '/',
element: <Layout />,
children: [
{
        path: '',
        element: <Home />,
      },
      {
        
        path: 'apps/vidify',
        element: <Home />,
      },
      {
        path: 'apps/vidify/generate-video',
        element: <GenerateAIVideopg2 />,
      },
      {
        path: 'apps/vidify/subscription-plan',
        element: <Subcription />,
      },

]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
