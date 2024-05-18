import { useState, useEffect } from "react";
import { NurseService } from "../utils/api";
import { DataGrid } from '@mui/x-data-grid';

const NursesList = () => {
    const [nurseData, setNurseData] = useState([]);

    useEffect(() => {
        const fetchNurses = async () => {
            try {
                const data = await NurseService.getAllNurses();
                setNurseData(data);
            } catch (error) {
                console.log('Failed to fetch nurses', error);
            }
        }
        fetchNurses();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'qualification', headerName: 'Qualification', width: 200 }, // Assuming 'name' as the field for nurse's name
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={nurseData}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
};

export default NursesList;