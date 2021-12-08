import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
const HatsPage = () => (
  <div>
    <h1>HAts page</h1>
  </div>
);
class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" component={HomePage} />
//         </Routes>{' '}
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
