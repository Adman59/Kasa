import React, { useEffect, useState} from 'react';
import Gallery from '@/components/gallery/gallery';
import LogementService from '@/_services/logement.service';
import { useNavigate, useParams } from 'react-router-dom';

const Logement = () => {

    let {id} = useParams();
    const [logement, setlogement] = useState({});
    const [waiting, setwaiting] = useState(true);

    let navigate = useNavigate();

    useEffect( () => {
        infologement();
    },[])

        const infologement = async () => {
            await LogementService.GetOneLogement(id)
            .then((data) => {
                if(data){
                    setlogement(data);
                    setwaiting(false);
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
        console.log(logement)
    if(waiting) return(<h3>chargement...</h3>)
    return (
        <section className="logement">
            <Gallery slides={logement.pictures} />
        </section>
    )
    
}

export default Logement