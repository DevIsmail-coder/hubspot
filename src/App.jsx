
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing/Landing'
import Forgotpassword from './Auth/forgotpassword/Forgotpassword'
import Resetpassword from './Auth/resetpassword/Resetpassword'
import Login from './Auth/login/Login'
import Usersignup from './Auth/usersignup/Usersignup'
import Aboutus from './pages/aboutus/Aboutus'
import Hostpage from './pages/hostpage/Hostpage'
import Details from './pages/details/Details'
import Allspace from './pages/allspace/Allspace'
import Admindashboard from './pages/admindashboard/Admindashboard'
import Hostdashboard from './pages/allhostdashboard/hostdashboard/Hostdashboard'
import Hostsignup from './Auth/hostsignup/Hostsignup'
import Hostlogin from './Auth/hostlogin/Hostlogin'
import Listhost from './pages/listhost/listhost'
import HomeLayout from './routes/HomeLayout'
import Password from './pages/emailpage/password/Password'
import Email from './pages/emailpage/email/Email'
import Welcome from './pages/emailpage/welcome/Welcome'
import DashboardLayout from './routes/DashboardLayout'
import Psswordsecurity from './pages/allhostdashboard/psswordsecurity/Psswordsecurity'
import Managelist from './pages/allhostdashboard/managelist/Managelist'
import Accountsetting from './pages/allhostdashboard/accountsetting/Accountsetting'
import Bookspace from './pages/allhostdashboard/bookspace/Bookspace'


function App() {
const rountee = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/aboutus",
        element: <Aboutus />
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
        path: "/abouthost",
        element: <Listhost />
      },
    ]
  },



  {
    path: "/dashboardLayout",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Hostdashboard />,
      },
      {
        path: "password&security",
        element: <Psswordsecurity />,
      },
      {
        path: "booking",
        element: <Bookspace />,
      },
      {
        path: "managelist",
        element: <Managelist />,
      },
      {
        path: "accountsetting",
        element: <Accountsetting />,
      },
    ]
  },
  {
    path: "/password",
    element: <Password />
  },
  {
    path: "/welcome",
    element: <Welcome />
  },
  {
    path: "/forget",
    element: <Forgotpassword />
  },
  {
    path: "/email",
    element: <Email />
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
    path: "/admindashboard",
    element: <Admindashboard />
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
