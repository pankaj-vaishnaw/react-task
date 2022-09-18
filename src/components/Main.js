import TableRow from "./TableRow";

//import timage from '../assets/img.jpeg';
const Main = (props) =>{
  const style_1 = {
    colspan : '3',
  }
    return (
      <div className='table-cont'>
        <table>
          <thead>
            <tr>
            <th style={style_1}>Property</th>
            <th></th>
            <th></th>
            <th>Move In Date</th>
            <th>Rent</th>
            <th>Deposit</th>
            <th>Status</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
           <TableRow color='yellow'/> 
           <TableRow status='Bank Processed' />       
            </tbody>
        </table>
        {props.name==='active'? <div className="tb-outer">
          <button className="tb-outer-btn">All Active Deposits</button>
        </div>: <div className="tb-outer">
          <button className="tb-outer-btn">All Closed Deposits</button>
        </div>}
      </div>
    )
  }
  export default Main;