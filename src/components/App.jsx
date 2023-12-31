import '../styles/App.css'
import { Navbar } from './Navbar'
import * as MainStyles from '../styles/mainStyles'
import { Hero } from './Hero'

function App() {

  return (
    <div className={`${MainStyles.MainBgGradientReversed} relative`}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
