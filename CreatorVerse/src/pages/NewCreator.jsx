import React, { useState, useEffect } from 'react';

import { supabase } from '../client'

const AddCreator = ()=> {
    const [post, setPost] = useState({creatorName: "", creatorURL: "", creatorDescription: "", creatorImageURL:"",color:""})
    
    const addCreator = async (event) => {
        event.preventDefault();
       await supabase
        .from('creators')
        .insert({ creatorName: post.creatorName, creatorURL:post.creatorURL,creatorDescription: post.creatorDescription,creatorImageURL:post.creatorImageURL,color:post.color})
        .select();
    
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
                <input onClick={addCreator} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddCreator