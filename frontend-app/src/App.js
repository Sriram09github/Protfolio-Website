// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function DataDisplay() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error:', error));
//   }, []);

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// }

// export default DataDisplay;

import React from 'react';
import FormComponent from './ContactForm';

function App() {
    return (
        <div className="App">
            <h1>Submit Form</h1>
            <FormComponent />
        </div>
    );
}

export default App;

