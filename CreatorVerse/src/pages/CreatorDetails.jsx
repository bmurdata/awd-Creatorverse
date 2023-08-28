import React, { useState, useEffect } from 'react';
import CreatorPage from '../components/CreatorPage';
import { supabase } from '../client'
import { useParams } from 'react-router-dom';
console.log("Creator Page")
const CreatorDetails = ({data}) => {

    const [creatorDetails, setCreator] = useState([]);
    const {id}=useParams();
    console.log(id)
    useEffect(() => {
        const fetchData= async () =>{
            const {data} = await supabase
            .from('creators')
            .select()
            .eq('id',id);
            // set state of posts
            console.log(data);
            setCreator(data);
        }
        
        fetchData().catch(console.error());
    }, [id]);
    console.log(creatorDetails);
    return (
        <div className="ViewCreators">
            {
                creatorDetails && creatorDetails.length > 0 ?
                creatorDetails.map((creator,index) => 
                   <CreatorPage  id={creator.id} creatorName={creator.creatorName} creatorURL={creator.creatorURL} creatorImageURL={creator.creatorImageURL} creatorDescription={creator.creatorDescription}/>
                ) : <h2>{'Invalid Creator ID.'}</h2>
            }
        </div>  
    )
}

export default CreatorDetails;