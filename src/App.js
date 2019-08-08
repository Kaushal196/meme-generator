import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

class App extends React.Component{
    

    render(){
      return(
        <div className="container">
          <div className="card">
            <Header/>
            <MemeGenerator/>
          </div>
        </div>
      )
    }
}

export default App;
