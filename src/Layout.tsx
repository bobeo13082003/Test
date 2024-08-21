import { Route, Routes } from "react-router";
import App from "./App";
import SignIn from "./components/auth/SignIn";
import Profile from "./components/profile/Profile";
import { ToastContainer } from "react-toastify";

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />




            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </>
    );
};

export default Layout;