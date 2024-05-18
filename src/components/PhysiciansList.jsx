import { useState, useEffect } from "react";
import { PhysicianService } from "../utils/api";
import { DataGrid } from '@mui/x-data-grid';

const PhysiciansList = () => {
    const [physicianData, setPhysicianData] = useState([]);

    useEffect(() => {
        const fetchPhysicians = async () => {
            try {
                const data = await PhysicianService.getAllPhysicians();
                setPhysicianData(data);
            } catch (error) {
                console.log('Failed to fetch physicians', error);
            }
        }
        fetchPhysicians();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'specialty', headerName: 'Specialization', width: 150 }, // Assuming 'name' as the field for physician's name
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={physicianData}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
};

export default PhysiciansList;
