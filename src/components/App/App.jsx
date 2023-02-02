import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App () {

  //fire off get request on page load
  useEffect(() => {
    axios.get('/giphy').then((response) => {
      console.log('get response data: ', response.data);
    }).catch(err => {
      console.log('error with get request: ', err);
    });
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
        </header>
        <br/>
      </div>
    );
  
}

export default App;
