import dp from '../assets/img.jpg';
const Sidebar = _ => {
  return (
    <div className='side_main'>
       <img src={dp} className='my_img' alt='pk_img'/>
       <h4>Pankaj Vaishnav</h4>
       <p className='side-para'>🏠 Home</p>
       <p className='side-para'>💸 Deposits</p>
       <p className='side-para'>🤹‍♀️ Offers</p>
       <p className='side-para'>💰 Payments</p>
       <p className='side-para'>⚒️ Settings</p>
      <div className='toggle'>
        <label class="switch">checkbox
        <input type="checkbox"/>
        <span class="slider round"></span>
        </label>
        </div>
    </div>
  )
}
export default Sidebar;