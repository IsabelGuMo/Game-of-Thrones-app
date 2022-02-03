import "./Detail.scss"


const Detail = (props) => {



  return <div className='chardetail-container'>
      <h4 className='chardetail-container__tile'>{props.title}</h4>
      <div className="chardetail-container__div">
      {(props.detail)==="" ? <p>None</p>  : (typeof(props.detail)=="string" ? <p>{props.detail}</p> : (typeof(props.detail)=="undefined" ? <p>Unknown</p> : (props.detail.length===0 ? <p>None</p> : props.detail.map((prop, index) => (<p className="chardetail-container__div--detail" key={index}>{prop}</p>)))))}
      </div>
  </div>;
};

export default Detail;