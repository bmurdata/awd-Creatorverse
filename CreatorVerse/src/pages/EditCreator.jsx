import React, { useState, useEffect } from 'react';

import { supabase } from '../client'
import { useParams } from 'react-router-dom';
console.log('Editing Creator')
const EditCreator = ()=> {
    const [post, setPost] = useState({})
    const {id}=useParams();
    
    useEffect(() => {
        const fetchData = async () => {
          const { data } = await supabase
            .from('creators')
            .select()
            .eq('id', id);
          setPost(data[0]); // Set Creator
        }
       
        fetchData().catch(console.error());
    
      }, [id]);
      console.log(post)
    const editCreator = async (event) => {
        event.preventDefault();
       await supabase
        .from('creators')
        .update({ creatorName: post.creatorName, creatorURL:post.creatorURL,creatorDescription: post.creatorDescription,creatorImageURL:post.creatorImageURL,color:post.color})
        .select()
        .eq('id',id);
    
        window.location = "/";
    }

    const deleteCreator = async (event) => {
        event.preventDefault();
       await supabase
        .from('creators')
        .delete()
        .eq('id',id);
        window.location = "/";
    }
    const handleChange = (event) => {
        console.log(post);
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div>
            {post  ? //Check if Creator exists
            <form >
                <label for="creatorName">Creator Name</label> <br />
                <input onChange={handleChange} value={post.creatorName} type="text" id="creatorName" name="creatorName" /><br />
                <br/>

                <label for="creatorDescription">Description</label><br />
                <textarea onChange={handleChange} value={post.creatorDescription} type="textarea " rows="5" cols="50"id="creatorDescription" name="creatorDescription" /><br />
                <br/>
                
                <label for="creatorURL">Creator URL</label><br />
                <input onChange={handleChange} value={post.creatorURL} type="text" id="creatorURL" name="creatorURL" /><br />
                <br/>
                <label for="creatorImageURL">Image URL</label><br />
                <input onChange={handleChange} value={post.creatorImageURL} type="textarea" id="creatorImageURL" name="creatorImageURL" /><br />
                <br/>

                <label for="description">Color Category: <span style={{ color: post.color }}>{post.color}</span></label><br />
                

            <input onChange={handleChange} type="radio" name="color" id="red" value="red" />
            <label for="red"><span class="red"></span></label>

            <input onChange={handleChange}  type="radio" name="color" id="green" value="green"/>
            <label for="green"><span class="green"></span></label>

            <input onChange={handleChange}  type="radio" name="color" id="yellow" value="yellow"/>
            <label for="yellow"><span class="yellow"></span></label>

            <input onChange={handleChange}  type="radio" name="color" id="orange" value="orange"/>
            <label for="orange"><span class="orange"></span></label>

            <input onChange={handleChange} type="radio" name="color" id="blue" value="blue"/>
            <label for="blue"><span class="blue"></span></label>

                            <br/>
                            <input onClick={editCreator} type="submit" value="Submit" />
                            <button className="deleteButton" onClick={deleteCreator}>Delete</button> 
                        </form>
                        : <h2>{'Invalid Creator ID'}</h2>}
                    </div>
    )
}

export default EditCreator