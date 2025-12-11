import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Profile from "../Pages/Profile/Profile";
import DashboardLayout from "../Layouts/DashboardLayout";
import CreateMealForm from "../components/form/CreateMeal";

import About from "../Pages/About/About";
import ContactUs from "../Pages/contactUs/ContactUs";
import Meals from "../Pages/Meals/Meals";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/contact',
        Component: ContactUs
      },
      {
        path: '/meals',
        Component: Meals
      },
      {
        path: '/dashboard',
        Component: DashboardLayout
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/profile',
        Component: Profile
      }
    ]
  },
  {
    path: 'dashboard',
    element:
      <DashboardLayout></DashboardLayout>
    ,

    children: [
      {
        path: 'createmeal',
        element: (
          <CreateMealForm></CreateMealForm>
        )

      }
    ]
  }
])
