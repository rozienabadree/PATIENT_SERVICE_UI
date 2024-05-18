import { useLocation } from "react-router-dom";
import PhysiciansList from "./PhysiciansList";

const Physicians = () => {
    const location = useLocation(); // gives where we are on our page(pathname)

    if (location.pathname === "/physicians") {
        return (
            <>
                <h1>Physicians</h1>
                <PhysiciansList />
            </>
        );
    };
};

export default Physicians;