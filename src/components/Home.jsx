import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation(); // gives where we are on our page(pathname)

    if (location.pathname === "/home") {
        return (
            <>
                <h1>Home</h1>
            </>
        );
    };
};

export default Home;