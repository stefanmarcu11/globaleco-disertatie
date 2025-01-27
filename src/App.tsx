import logo from './assets/images/GlobalEco-logo.png'
import './App.css'
import { DescriptionNature } from './components/descriptionNature'
import { Keywords } from './components/keys-list'
import { MultipleCard } from './components/multiple-card'
import { Block } from './components/footer'
import { Copyright } from './components/copyright'

function App() {

  return (
    <>
      <div className='main'>
        <div>
          <img src={logo} className="logo" alt="React logo" />
        </div>
        <Keywords></Keywords>
      </div>
      <div className='description-section'>
        <div className="text-section">
          <DescriptionNature></DescriptionNature>
        </div>
      </div>
      <div className='multiple-card'>
        <div>
          <MultipleCard></MultipleCard>
        </div>
      </div>
      <div className='footer'>
        <Block></Block>
        <hr className='line'></hr>
        <Copyright></Copyright>
      </div>
    </>
  )
}

export default App
