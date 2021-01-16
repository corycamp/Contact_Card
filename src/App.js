import logo from './logo.svg';
import './App.css';

import ContactCard from './components/ContactCard'

function App() {
  return (
    <div className="App">
    <ContactCard
      name = "Cory"
      email = "campbellcory2360@gmail.com"
      phone = "111-222-3333"  
      id = "first"    
    />
    <br></br>
    <ContactCard
      name = "John"
      email = "JohnStewart@gmail.com"
      phone = "222-222-2222"  
      id = "second"   
    />
    <br></br>
    <ContactCard
      name = "Steve"
      email = "Steve32@gmail.com"
      phone = "111-333-9999" 
      work = "999-333-1111" 
      id = "third"  
    />
    </div>
  );
}

export default App;
