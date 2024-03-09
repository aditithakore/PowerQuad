import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import App from "./src/app";
import DisplayError from "./src/utilities/DisplayError";
import LandingPage from "./src/components/LandingPage";
import About from "./src/components/About";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

const AppLayout = ()=>{
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const AppRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<DisplayError/>,
        children:[
            {
                path:"/",
                element:<LandingPage />
            },
            {
                path:"/about",
                element:<About />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute}/>)

