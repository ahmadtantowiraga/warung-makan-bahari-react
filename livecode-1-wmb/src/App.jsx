import { Component } from 'react';
import Sidebar from './shared/Sidebar/Sidebar';
import Login from './pages/Authentication/Login';

class App extends Component {
  render() {
    return (
      <div>
        < Login />
      </div>
    );
  }
}

export default App;