import './App.css';
import GreetingCard from './greeting';
import './greeting.css';

function App() {
  
  return (
    <div className='greet-card'>
      <GreetingCard  
        title="Happy Birthday!" 
        message="Hope your day is as amazing as you are!" 
       sender = 'Madrine Denla Nansimbi'
      
      />

      <GreetingCard  
        title="Well Done!" 
        message="You did a great job — keep it up!" 
       sender = 'Madrine Denla Nansimbi'
      />

      <GreetingCard  
        title="Get Well Soon" 
        message="Sending you hugs and healing vibes!" 
       sender = 'Madrine Denla Nansimbi'
      />
    </div>
   
  );
}

export default App;
