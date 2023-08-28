import { useState } from 'react'
import { useRoutes,Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import supabase from './client.js'
import ViewCreators from './pages/ListCreators'
import CreatorDetails from './pages/CreatorDetails'
import AddCreator from './pages/NewCreator'
import EditCreator from './pages/EditCreator'
const App = () => {
  const creatorList = [
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ViewCreators data={creatorList}/>
    },
    {
      path:"/view/:id",
      element: <CreatorDetails data={creatorList} />
    },
    {
      path:'/new',
      element:<AddCreator></AddCreator>
    },
    {
      path:"/edit/:id",
      element: <EditCreator data={creatorList} />
    }

  ]);
console.log('Starting App')
  return ( 

    <div className="App">

      <div className="header">
        <h1> Content Creators to Follow</h1>
        <h2>See important creators in our community!</h2>
        <Link to="/"><button className="headerBtn"> View Creators 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Add Creator  </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App
