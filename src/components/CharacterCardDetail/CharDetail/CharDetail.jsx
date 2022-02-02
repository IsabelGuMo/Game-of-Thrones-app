import "./CharDetail.scss"


const CharDetail = (props) => {
    console.log( "looog", props)
    console.log("log 2", typeof(props.detail));;
  return <div className='chardetail-container'>
      <h4 className='chardetail-container__tile'>{props.title}</h4>
      <div className='chardetail-container__div'>
      {typeof(props.detail)=="string" ? <p>{props.detail}</p>  : props.detail.map((prop, index) => (
        <p key={index}>{prop}</p>
      ))}
      </div>
  </div>;
};

export default CharDetail;