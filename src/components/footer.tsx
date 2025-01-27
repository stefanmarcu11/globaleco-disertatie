import { SiFacebook, SiGithub, SiLinkedin, SiX } from 'react-icons/si'
import phone from '../assets/images/call.png'
import address from '../assets/images/location.png'
import mail from '../assets/images/mail.png'

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

const socialLinks = [
  { href: 'https://x.com', icon: <SiX /> },
  { href: 'https://github.com', icon: <SiGithub /> },
  { href: 'https://www.linkedin.com', icon: <SiLinkedin /> },
]
