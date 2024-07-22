import React from 'react';
import data from '../assets/json/featureItems.json';


const CallFeatureItens = () => {
  return (
    <div className="features">
        {data.map(item => (
        <div key={item.id}> {/* Utilisez un attribut key unique, ici item.id */}

          <img src={item.img} alt="Image" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
        
    </div>
  );
};

export default CallFeatureItens;
