import React from 'react';
import './App.css';


function App() {
  return (
    <div>
       {/* <div className="header">// #1
          Phone Directory
        </div> */}
        {/* <header/> #5
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span> */}
           <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>
    </div>
  );
}

export default App;
