import { Component } from 'react';
import Sidebar from './shared/Sidebar/Sidebar';
import Login from './pages/Authentication/Login';
import Dashboard from './pages/Dasboard/Dasboard';

class App extends Component {
  state={
    page:<Dashboard />,
    isAuthenticated: false,
  }
handlePage=(component) => {
    this.setState({page: component});
  }

  handleAuthentication=(status)=>{
    this.setState({
      isAuthenticated: status,
    })
  }
  render() {
    return (
      <>
        {this.state.isAuthenticated ?
              <div className='d-flex'>
              <Sidebar handlePage={this.handlePage}/>
              <main className='w-100 flex-grow-1'>
              
                {this.state.page}
              </main>
            </div>
            :
            <Login handleAuthentication={this.handleAuthentication}/>  
      }
      </>
    );
  }
}

export default App;