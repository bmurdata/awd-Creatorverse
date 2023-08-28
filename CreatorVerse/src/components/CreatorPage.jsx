import React from 'react'
import { useState } from 'react'
import './Card.css'

import { Link } from 'react-router-dom'


const CreatorPage = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className=''>
        <h2 className="title">{props.creatorName}</h2>
        <div className='DetailsParent'>
            <div className='DetailsChild'>
                <img className='imageFill' src={props.creatorImageURL} ></img>
                
            </div>
            
            <div className='DetailsChild'>
                <p><b>Description:</b> {props.creatorDescription}</p>
                <p><a href={props.creatorURL}><p className="author">Creator Web Page</p></a></p>
                <Link to={'/edit/'+ props.id} relative="path">Edit or Delete Creator</Link>
            </div>
        </div>
      </div>
  );
};

export default CreatorPage;