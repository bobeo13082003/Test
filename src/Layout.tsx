import { Route, Routes } from "react-router";
import App from "./App";
import SignIn from "./components/auth/SignIn";
import Profile from "./components/profile/Profile";

const Layout = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default Layout;