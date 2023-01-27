import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SignIn from './components/SignIn';
import Features from './components/Features';
import Begin from './components/Begin';
import MobileBegin from './components/MobileBegin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <SignIn />
      <Features />
      <Begin />
      <MobileBegin />
    </div>
  );
}

export default App;
