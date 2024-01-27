
import './App.css'
import LogoSearchbar from './Components/LogoSearchbar/LogoSearchbar';
import Navabr from './Components/Navbar/Navabr';
import Caousel from './Components/Carousel/Caousel';
import './assets/Css/Navbar.css';
import './assets/Css/Carosel.css';
import './assets/Css/TopBanner.css';
import './assets/Css/FlashSale.css';
import TopBanner from './Components/TopBanner/TopBanner';
import FlashSale from './Components/FlashSale/FlashSale';
import BarazMail from './Components/BarazMail/BarazMail';

function App() {
  

  return (
    <>
     <Navabr />
     <LogoSearchbar />
     <Caousel />
     <TopBanner />
     <FlashSale />
     <BarazMail />
       
    </>
  )
}

export default App
