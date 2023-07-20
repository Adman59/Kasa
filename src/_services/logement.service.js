import ListeLogements from "@/assets/api/logements.json";

let GetAllLogement = () => {
    return ListeLogements;
}

let GetOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id);
    return OneLogement;
}

export const LogementService = {
    GetAllLogement,
    GetOneLogement
}

export default LogementService