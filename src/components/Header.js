import dp from '../assets/img.jpg'
import msg from '../assets/msg.jpg'
const Header = _ =>{
    return (
      <div className='head-section'>
        <div className='right-cont'>
           <img src={msg} className = 'msg_img' alt='hey_buddy'/> 
          <img src={dp} className='profile_img' alt='hey_howdy'/></div>
      </div>
    )
  }
  export default Header;