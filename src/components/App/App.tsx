import React from 'react';
import './App.css';
import Sample from '../Sample/Sample';
import NameType from '../../NameType';

const App: React.FC = () => {
  return (
    <div className="App">
      <input />
      <Sample name="Matt" nameType={NameType.FIRST} />
    </div>
  );
};

export default App;
