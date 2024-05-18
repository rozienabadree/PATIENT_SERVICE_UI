import { useLocation } from "react-router-dom";

const Nurses = () => {
    const location = useLocation(); // gives where we are on our page(pathname)

    if (location.pathname === "/nurses") {
        return (
            <>
                <h1>Nurses</h1>
            </>
        );
    };
};

export default Nurses;