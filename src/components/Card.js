const Card = ({id,avatar,first_name}) => {
  return (
    <div className="card">
      <div className="square">
        <img src={avatar} alt="avatar" className="avatar"/>
        <div className="circle">{id}</div>
      </div>
      <b>{first_name}</b>
    </div>
  );
};

export default Card;
