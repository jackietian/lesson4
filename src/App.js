import React from 'react';
import Button, { ButtonV2 } from './components/Button';
import Status from './components/Status'
import Weather from './components/Weather';


function App() {
  return (
    <div className="App">
      {/* conditional rendering */}
      {/* <Status isOnline={true}/> */}

      {/* <Button color={'red'} buttonType="primary" label="button1" />
      <Button color={'green'} buttonType="primary" label={<h1>button2</h1>} /> */}
      
      {/* props.children */}
      {/* <ButtonV2 buttonType="primary">
        <h1>Hello</h1>
        <h1>Hello</h1>
      </ButtonV2> */}
      
      {/* ajax */}
      <Weather />
    </div>
  );
}

export default App;
