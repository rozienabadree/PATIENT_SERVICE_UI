import { useLocation } from "react-router-dom";
import HospitalsList from "./HospitalsList";

const Hospitals = () => {
    const location = useLocation(); // gives where we are on our page(pathname)

    if (location.pathname === "/hospitals") {
        return (
            <>
                <h1>Hospitals</h1>
                <HospitalsList />
            </>
        );
    };
};

export default Hospitals;