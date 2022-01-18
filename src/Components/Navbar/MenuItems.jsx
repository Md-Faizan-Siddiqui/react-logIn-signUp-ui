import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";

export const MenuItems = [
  {
    title: "Sign In",
    url: "/signin",
    cName: "navLinks",
    component: <SignIn />,
  },
  {
    title: "Sign Up",
    url: "/signup",
    cName: "navLinks",
    component: <SignUp />,
  },
];
