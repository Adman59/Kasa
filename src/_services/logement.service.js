import ListeLogements from "@/assets/api/logements.json";

let GetAllLogement = () => {
    return ListeLogements;
}

let GetOneLogement = async (id) => {
    
}

export const LogementService = {
    GetAllLogement,
    GetOneLogement
}

export default LogementService