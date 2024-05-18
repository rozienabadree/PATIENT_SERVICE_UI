import axios from "axios";

export const BASE_URL = process.env.REACT_APP_PATIENT_SERVICE_API_BASE_URL;

const PatientService = {
    getAllPatients: async () => {
        const { data } = await axios.request({
            url: `${BASE_URL}/patients`,
        });

        const patientsList = data.map((patient) => {
            return {
                ...patient,
                full_name: patient.first_name + " " + patient.last_name,
            };
        });

        return patientsList;
    },
    getPatientByPatientId: async (patientId) => {
        console.log("getPatientByPatientId:: ", patientId);
        try {
            const { data } = await axios.get(`${BASE_URL}/patients/${patientId}`);
            return {
                ...data,
                full_name: data.first_name + " " + data.last_name,
            };
        } catch (error) { }
    },
    updatePatient: async (patient) => {
        try {
            const { data } = await axios.patch(
                `${BASE_URL}/patients/${patient.id}`,
                patient
            );
            return data;
        } catch (error) { }
    },
    deletePatient: async (patientId) => {
        try {
            const { data } = await axios.delete(`${BASE_URL}/patients/${patientId}`);
            return data;
        } catch (error) { }
    },
    createPatient: async (patient) => {
        try {
            const { data } = await axios.post(`${BASE_URL}/patients`, patient);
            return data;
        } catch (error) { }
    },
};

const PhysicianService = {
    getAllPhysicians: async () => {
        const { data } = await axios.request({
            url: `${BASE_URL}/physicians`, // Adjust the endpoint according to your API
        });
        return data;
    },
    getPhysicianById: (physicianId) => {
        // Implement logic to fetch physician by ID if needed
    },
    updatePhysician: (physician) => {
        // Implement logic to update physician data if needed
    },
};

const HospitalService = {
    getAllHospitals: async () => {
        const { data } = await axios.request({
            url: `${BASE_URL}/hospitals`, // Adjust the endpoint according to your API
        });
        return data;
    },
    getHospitalById: (hospitalId) => {
        // Implement logic to fetch hospital by ID if needed
    },
    updateHospital: (hospital) => {
        // Implement logic to update hospital data if needed
    },
};


export { PatientService, PhysicianService, HospitalService };