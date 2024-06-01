import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Protecetd from './components/Protected.jsx'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllArtical from './pages/AllArtical.jsx'
import AddArtical from './pages/AddArtical.jsx'
import EditArtical from './pages/EditArtical.jsx'
import Artical from './pages/Artical.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Protecetd authenticated={false}>
            <Login />
          </Protecetd>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protecetd authenticated={false}>
            <Signup />
          </Protecetd>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Protecetd authenticated>
            {" "}
            <AllArtical />
          </Protecetd>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Protecetd authenticated>
            {" "}
            <AddArtical />
          </Protecetd>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protecetd authenticated>
            {" "}
            <EditArtical />
          </Protecetd>
        ),
      },
      {
        path: "/artical/:slug",
        element: <Artical />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
