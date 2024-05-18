import { useState, useEffect } from "react";
import { HospitalService } from "../utils/api"; // Assuming you have a HospitalService similar to PatientService
import { DataGrid } from '@mui/x-data-grid';

const HospitalsList = () => {
    const [hospitalData, setHospitalData] = useState([]);

    useEffect(() => {
        console.log("useEffect called");
        const fetchHospitals = async () => {
            try {
                const data = await HospitalService.getAllHospitals(); // Adjust according to your API
                setHospitalData(data);
            } catch (error) {
                console.log('Failed to fetch hospitals', error);
            }
        }
        fetchHospitals();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 }, // Assuming 'name' as the field for hospital name
        { field: 'address', headerName: 'Address', width: 250 }, // Adjust according to your data structure
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={hospitalData}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
};

export default HospitalsList;
