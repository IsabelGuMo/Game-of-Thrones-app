import "./Detail.scss"


const Detail = (props) => {

  return <div className='detail'>
      <h4 className='detail-title'>{props.title}</h4>
      <div className="detail-div">
      {(props.detail)==="" ? <p>None</p>  : (typeof(props.detail)=="string" ? <p>{props.detail}</p> : (typeof(props.detail)=="undefined" ? <p>Unknown</p> : (props.detail.length===0 ? <p>None</p> : props.detail.map((prop, index) => (<p className="detail-div__detail" key={index}>{prop}</p>)))))}
      </div>
  </div>;
};

export default Detail;