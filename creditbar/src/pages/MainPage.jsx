import React from 'react';
import Home from '../components/Home/views/Home';
import '../components/Home/assets/scss/style.scss';


const MainPage = () => {
  return (
    <div className='main'>
      <div className='main__header'>
        <Home />
      </div>
    </div>
  );
};

export default MainPage;