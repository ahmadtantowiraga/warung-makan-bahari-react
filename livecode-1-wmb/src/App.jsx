import { Component } from "react";
import Sidebar from "./shared/Sidebar/Sidebar";
import Login from "./pages/Authentication/Login";
import Dashboard from "./pages/Dasboard/Dasboard";

class App extends Component {
  state = {
    page: <Dashboard />,
    isAuthenticated: false,
    dataTable: [],
    dataMenu: [],
  };
  handleDataTable = (data) => {
    this.setState({ dataTable: data});
  };
  handleDataMenu = (data) => {
    this.setState({ dataMenu: data });
  };
  handleShowLoading = () => {
    this.setState({
      isLoading: true,
    });
  };
  handleHideLoading = () => {
    this.setState({
      isLoading: false,
    });
  };
  handlePage = (component) => {
    this.setState({ page: component });
  };

  handleAuthentication = (status) => {
    this.setState({
      isAuthenticated: status,
    });
  };

  render() {
    return (
      <>
        {this.state.isAuthenticated ? (
          <div className="d-flex">
            <Sidebar
              handleAuthentication={this.handleAuthentication}
              handlePage={this.handlePage}
              handleDataMenu={this.handleDataMenu}
              handleDataTable={this.handleDataTable}
              dataMenu={this.state.dataMenu}
              dataTable={this.state.dataTable}
            />
            <main className="w-100 flex-grow-1">{this.state.page}</main>
          </div>
        ) : (
          <Login
            handlePage={this.handlePage}
            handleAuthentication={this.handleAuthentication}
          />
        )}
      </>
    );
  }
}

export default App;
