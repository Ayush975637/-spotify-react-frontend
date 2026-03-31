
import Header from './Components/Header';
import './App.css';

import Main from './Components/Main';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  
  const [query, setQuery] = useState("");

  return (
    <>
       <Header  query={query} setQuery={setQuery} />
      <Main
            
            
            qu={query}
          />
      

    
    </>
  );
}

export default App;
