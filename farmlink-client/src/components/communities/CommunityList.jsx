import React from 'react';
import CommunityCard from './CommunityCard';

const communities = [
  {
    id: 1,
    name: 'Farming Group',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'AgroTech Forum',
    image: 'https://via.placeholder.com/100',
  },
];

const CommunityList = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Communities</h2>
      {communities.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))}
    </div>
  );
};

export default CommunityList;
