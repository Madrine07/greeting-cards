import './App.css';
import GreetingCard from './greeting';
import './greeting.css';
import { Goal} from './goal';
import { Garage} from './garage';
import Form from './form';
import './form.css';
import TextareaForm from './textarea'
import SimpleForm from './dropdown'
 

function App() {
   const scored = true
   const cars = ['Ford', 'BMW', 'Audi'];
   

  return (
    
    <div className="page-wrapper">
      <div className="container">
        <GreetingCard  
          title="Happy Birthday!" 
          message="Hope your day is as amazing as you are!" 
          sender="Madrine Denla Nansimbi"
        />

        <GreetingCard  
          title="Well Done!" 
          message="You did a great job — keep it up!" 
          sender="Madrine Denla Nansimbi"
        />

        <GreetingCard  
          title="Get Well Soon" 
          message="Sending you hugs and healing vibes!" 
          sender="Madrine Denla Nansimbi"
        />

      
       <Goal isGoal={scored} />

       <Garage cars={cars} />

       <Form />

       <TextareaForm />

       < SimpleForm/>

       
       </div>
    </div>
   
   
  );

  
}

export default App;
