import React from 'react';
import data from '../assets/json/featureItems.json'


const FeatureItens = () => {
  return (
    <div className="features">
        {data.map(item => (
        <div key={item.id} className="feature-item"> {/* Utilisez un attribut key unique, ici item.id */}
          <img src={item.img}  alt="Chat Icon" className="feature-icon" />   
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        
      ))}
        
    </div>
  );
};
console.log(data)
export default FeatureItens;
