import React from 'react';
import PageNotFound from '../../img/pageNotFound.svg';
const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={PageNotFound} alt='error 404' />
    </div>
  );
};

export default NotFound;
