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
import MealsDetails from "../Pages/MealsDetails/MealsDetails";

import OrderPage from "../Pages/Oderpage/OderPage";
import { PaymentSuccess } from "../payment/PaymentSuccess";


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
        path: '/meal/:id',
        element: <MealsDetails></MealsDetails>
      },
      {
        path: "/paymentsuccessfull",
        element: <PaymentSuccess/>
      },

      {

        path: "/orderpage",
        element: <OrderPage />

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
