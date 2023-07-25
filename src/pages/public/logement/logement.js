import React, { useEffect, useState} from 'react';
import Gallery from '@/components/gallery/gallery';
import Host from '@/components/host/host';
import Rating from '@/components/rating/rating';
import Tags from '@/components/tags/tags';
import Collapsible from '@/components/collapsible/collapsible';
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

    if(waiting) return(<h3>chargement...</h3>)

    return (
        <section className="logement">
            <Gallery slides={logement.pictures} />
            <div className='logement__intro'>
                <div className='logement__intro__title__tags'>
                    <h1>{logement.title}<span>{logement.location}</span></h1>

                    {logement.tags && logement.tags.length > 0 ? (
                        <Tags tags={logement.tags} />
                    ) : (
                        <div></div>
                    )}

                </div>
                <div className='logement__intro__rating__host'>
                    <Host owner={logement.host}/>
                    <Rating rating={logement.rating} />
                </div>
            </div>
            <div className='logement__collapses'>
                <Collapsible title="Description" description={logement.description} />
                <Collapsible title="Équipements" stuff={logement.equipments} />
            </div>
        </section>
    )
    
}

export default Logement