import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from './redux/slice';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setValue(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};

export default ComponentB;