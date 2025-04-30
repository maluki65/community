// src/features/experts/FollowButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { followExpert } from './expertSlice';

const FollowButton = ({ expertId }) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followExpert(expertId));
  };

  return <button onClick={handleFollow}>Follow</button>;
};

export default FollowButton;
