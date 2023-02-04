import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SignIn from './components/SignIn';
import Features from './components/Features';
import Begin from './components/Begin';
import MobileBegin from './components/MobileBegin';
import Slider from './components/Slider';
import Faq from './components/Faq';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <SignIn />
      <Features />
      <Begin />
      <MobileBegin />
      <Slider />
      <Faq />
    </div>
  );
}

export default App;
