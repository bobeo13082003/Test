import { Route, Routes } from "react-router";
import App from "./App";
import SignIn from "./components/auth/SignIn";

const Layout = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
};

export default Layout;