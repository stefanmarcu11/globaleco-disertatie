import { SiFacebook } from 'react-icons/si'
import phone from '../../assets/images/call.png'
import address from '../../assets/images/location.png'
import mail from '../../assets/images/mail.png'

export const Block = () => {
  return (
    <div className="row">
      <div className="column side">
        <h2>SC GLOBALECO SRL</h2>
        <div className='details'>
          <img src={address} className='details-icon'></img>
          <p>comuna Casin, strada Andresesti, nr. 66, judetul Bacau</p>
        </div>
        <div className='details'>
          <img src={phone} className='details-icon'></img>
          0754286653
        </div>
        <div className='details'>
          <img src={mail} className='details-icon'></img>
          office@globaleco.org
        </div>
      </div>

      <div className="column middle">
        <div>
          <h2 className='hover-underline-animation'>Our mission</h2>
          <p>
          GLOBALECO’s mission is to actively contribute to a cleaner and healthier environment through proper waste management and the promotion of recycling.
          The company is committed to using sustainable methods to reduce pollution and optimize collection and transportation processes.
          </p>
        </div>
      </div>

      <div className="column side">
        <h2>Follow us</h2>
        <div className="column-side-right">
          <SiFacebook className='facebook-icon'></SiFacebook>
        </div>
      </div>
    </div>
  )
}
