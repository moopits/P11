const FeatureItem = ({ data }) => {
  return (
    <div className="feature-item">
      <img src={data.img} alt={data.title} className="feature-icon" />
      <h3 className="feature-item-title">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  )
}

export default FeatureItem;
