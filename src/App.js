import React from 'react';
import './App.css';
import Form from './Form';
import { DataProvider } from "./DataProvider";
function App() {
  return (
    <DataProvider>
       <Form />
     </DataProvider>
  );
}

export default App;