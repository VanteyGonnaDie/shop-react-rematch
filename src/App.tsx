import React from 'react';
import './App.css';
import ShopWrapper from './components/ShopWrapper';


interface AppConnectedProps {}

const AppConnected = React.memo((props: AppConnectedProps) => {
return (
  <ShopWrapper/>
)
})


function App() {
  return (
    <div className="App">
      <AppConnected/>
    </div>
  );
}

export default App;
