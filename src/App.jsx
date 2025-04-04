
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing/Landing'
import Forgotpassword from './Auth/forgotpassword/Forgotpassword'
import Resetpassword from './Auth/resetpassword/Resetpassword'
import Login from './Auth/login/Login'
import Usersignup from './Auth/usersignup/Usersignup'
import Aboutus from './pages/aboutus/Aboutus'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hostpage from './pages/hostpage/Hostpage'
import Details from './pages/details/Details'
import Allspace from './pages/allspace/Allspace'
import Admindashboard from './pages/admindashboard/Admindashboard'
import Hostdashboard from './pages/hostdashboard/Hostdashboard'
import Hostsignup from './Auth/hostsignup/Hostsignup'
import Hostlogin from './Auth/hostlogin/Hostlogin'
import Listhost from './pages/listhost/listhost'

function App() {
const rountee = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/header",
    element: <Header />
  },
  {
    path: "/forget",
    element: <Forgotpassword />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/usersignup",
    element: <Usersignup />
  },
  {
    path: "/reset",
    element: <Resetpassword />
  },
  {
    path: "/aboutus",
    element: <Aboutus />
  },
  {
    path: "/footer",
    element: <Footer />
  },
  {
    path: "/hostpage",
    element: <Hostpage/>
  },
  {
    path: "/detailpage",
    element: <Details />
  },
  {
    path: "/allspace",
    element: <Allspace />
  },
  {
    path: "/admindashboard",
    element: <Admindashboard />
  },
  {
    path: "/hostdashboard",
    element: <Hostdashboard />
  },
  {
    path: "/abouthost",
    element: <Listhost />
  },
  {
    path: "/hostsignup",
    element: <Hostsignup />
  },
  {
    path: "/hostlogin",
    element: <Hostlogin />
  }
  
])
  return (
    <RouterProvider router={rountee}/>
  )
}

export default App
