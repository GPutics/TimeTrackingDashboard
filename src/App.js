import React, {useState} from 'react'

// Styling
import './styles/globals.scss';

// Data
import data from './data.json';
import picture from './assets/image-jeremy.png'

// Components
import Card from './components/Card/Card';
import Profile from './components/Profile/Profile';

const App = () => {
  const [filterTime, setFilterTime] = useState('weekly');

  const handleClick = (time) => {
    setFilterTime(time);
  }

  return (
    <div className='app'>
      <div className="profile">
        <Profile name={"Jeremy Robson"} picture={picture} handleClick={handleClick} filterTime={filterTime} setFilterTime={setFilterTime} />
      </div>
      <div className="cards-container">
        {data.map((item) => (
          <Card item={item} filterTime={filterTime} />
        ))}
      </div>
    </div>
  )
}

export default App

