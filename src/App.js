import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
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
