import { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    errors: {
      username: "",
      password: "",
    },
    alert: false,
    page: false,
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]:
          value.length == 0
            ? `${name} is required`
            : String(name) === "password" &&
              (value.length <= 6 ? "password harus lebih dari 6 karakter" : ""),
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.form.username == "admin" &&
      this.state.form.password == "12345678"
    ) {
      this.props.handleAuthentication(true);
    } else {
      this.setState({ alert: true }),
        setTimeout(() => {
          this.setState({ alert: false, page: true });
        }, 3000);
    }
  };

  render() {
    return (
      <>
        {this.state.alert && (
          <>
            <div className="alert alert-primary" role="alert">
              username atau password salah
            </div>
          </>
        )}
        {this.state.page && <Login handleAuthentication={this.props.handleAuthentication}/>}

        <div id="form-login">
          <div className="container-fluid">
            <div className="container">
              <div className="row justify-content-center align-items-center ">
                <div className="card w-50 shadow border">
                  <img
                    src="./public/login.png"
                    className="card-img-top w-50 m-auto"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="login text-center">
                      <h2>Login</h2>
                    </div>
                    <form className="form">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          username
                        </label>
                        <input
                          onChange={this.handleChange}
                          name="username"
                          type="username"
                          className={`form-control border-0 border-bottom shadow-none ${
                            this.state.errors.username && "is-invalid"
                          }`}
                          id="username"
                          aria-describedby="emailHelp"
                        />
                        <div className="invalid-feedback">
                          {this.state.errors.username}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          onChange={this.handleChange}
                          name="password"
                          type="password"
                          id="password"
                          className={`form-control border-0 border-bottom shadow-none ${
                            this.state.errors.password && "is-invalid"
                          }`}
                        />
                        <div className="invalid-feedback">
                          {this.state.errors.password}
                        </div>
                      </div>

                      <div className="container text-center">
                        <button
                          onClick={this.handleSubmit}
                          type="submit"
                          className="btn btn-primary w-75"
                          disabled={
                            this.state.form.username == "" ||
                            this.state.form.password == ""
                          }
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
Login.propTypes = {
  handleAuthentication: PropTypes.func,
};
