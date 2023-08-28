import React, { useState, useEffect } from 'react';
import CreatorCard from '../components/CreatorCard';
import { supabase } from '../client'

const ViewCreators = (props) => {

    const [creatorList, setCreatorList] = useState([]);

    useEffect(() => {
        const fetchData= async () =>{
            const {data} = await supabase
            .from('creators')
            .select()
            .order('created_at', { ascending: true })
            // set state of posts
            setCreatorList(data);
        }
        setCreatorList(props.data);
        fetchData().catch(console.error());
    }, [props]);
    
    return (
        <div className="ViewCreators">
            {
                creatorList && creatorList.length > 0 ?
                creatorList.map((creator,index) => 
                   <CreatorCard  color={creator.color} id={creator.id} creatorName={creator.creatorName} creatorURL={creator.creatorURL} creatorImageURL={creator.creatorImageURL}/>
                ) : <h2>{'No Creators yet. Add some!'}</h2>
            }
        </div>  
    )
}

export default ViewCreators;