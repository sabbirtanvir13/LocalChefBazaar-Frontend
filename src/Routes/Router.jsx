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
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../Pages/Dashboard/User/MyOrders";
import MyMeals from "../Pages/Dashboard/Chef/MyMeals";
import MealReviews from "../Pages/MealReviews/MealReviews";
import FavoriteMeal from "../Pages/Dashboard/User/FavoriteMeal";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUser";
import ManageRequest from "../Pages/Dashboard/Admin/ManageRequest";
import MyReview from "../Pages/Dashboard/User/MyReview";
import ChefOrderRequests from "../Pages/Dashboard/Chef/ChefOrderRequests";




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
        element: <PaymentSuccess>
          <PaymentSuccess />
        </PaymentSuccess>
      },

      {

        path: "/orderpage",
        element:
          <PrivateRoute>
            <OrderPage />

          </PrivateRoute>

      },

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
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      }
    ]
  },
  {
    path: '/dashboard',
    element:
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>,
    children: [
      {
        path: 'createmeal',
        element: (
       
  <CreateMealForm></CreateMealForm>
      
        
        )

      },
      {
        path: 'my-orders',
        element: (
          <MyOrders></MyOrders>
        ),
      },
      {
        path: 'myMeals',
        element: (
          
 <MyMeals></MyMeals>
        
        ),
      },
      {
        path: 'reviews',
        element: (
          <MealReviews></MealReviews>
        ),
      },
      {
        path: 'myfavorite',
        element: (
          <FavoriteMeal></FavoriteMeal>
        ),
      },
      {
        path: 'myReviews',
        element: (
          <MyReview></MyReview>
        ),
      },
      {
        path: 'statistics',
        element: (
          <Statistics></Statistics>
        ),
      },
      {
        path: "manageUser", element:
      
            <ManageUsers />
         

      },
      {
        path: "manageRequest", element:
         
            <ManageRequest></ManageRequest>
          


      },
      {
        path: "orderRequest", element:
     
  <ChefOrderRequests></ChefOrderRequests>

        
      },
    ]
  }
])
