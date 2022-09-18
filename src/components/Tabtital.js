const Tabtital = (props) =>{
    return (
      <div className="tab-title">
        <div className="tt-left">
            <h2 className='tt-head'>{props.title}</h2>
            <button className='tt-btn'>{props.num}</button>
        </div>
        {props.name==='active'? <div className="tt-right">
          <button className="tt-r-btn">+</button>
        </div>:false}
        
      </div>
    )
  }
  export default Tabtital;