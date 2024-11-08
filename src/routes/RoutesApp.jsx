import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import { useTheme } from "../themes/ThemeContext";
import ThemeButton from '../components/Button';

const RoutesApp = () =>  {
    const { theme } = useTheme();

    return (
        <Router>
            <section className={`App ${theme}`}>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/job'}>Job</Link>
                    <Link to={'/profile'}>Profile</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/job" element={<MyJob />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <ThemeButton />
            </section>
        </Router>
    )
}

export default RoutesApp;