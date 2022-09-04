import './App.css';
import Header from './components/Header';
import pic from './images/IMG_5004.jpeg';
import pic2 from './images/IMG_2876.JPG';
import pic3 from './images/IMG_2880.JPG';
import './mycss.css';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (

    <div>
      <Header/>    
      <img className='me' src={pic}/>

      <Footer/>
      <img className='likes' src={pic2}/>
      <img className ='likes' src={pic3}/>
      

      <About/>

      <Project/>

      </div>
  );
}

export default App;
