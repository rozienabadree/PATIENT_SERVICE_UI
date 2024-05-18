import { useLocation } from "react-router-dom";
import PatientsList from "./PatientsList";

const Patients = () => {
    const location = useLocation(); // gives where we are on our page(pathname)

    if (location.pathname === "/patients") {
        return (
            <>
                <h1>Patients</h1>
                <PatientsList />
            </>
        );
    }
};


export default Patients;