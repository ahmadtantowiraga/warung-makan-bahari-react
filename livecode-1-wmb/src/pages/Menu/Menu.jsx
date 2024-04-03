import { Component } from "react";
import Loading from "../../shared/Loading/Loading";
import MenuForm from "./component/MenuForm";
import MenuList from "./component/MenuList";
import PropTypes from "prop-types";
import withLoading from "../../shared/hoc/withLoading";

class Menu extends Component {
  state = {
    form: {
      id: "",
      name: "",
      price: "",
      status: false,
    },
    menus: [],
    errors: {
      name: "",
      price: "",
    },
  };

  componentDidMount() {
    this.props.showLoading();
    setTimeout(() => {
      this.setState({
        menus: [
          {
            id: "1",
            name: "ikan",
            price: "10000",
            status: true,
          },
        ],
      });
      this.props.hideLoading();
    }, 2000);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
    console.log(this.state.form)
  };

  handleChangeStatus = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        status: event.target.checked,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (this.state.form.name === "") {
      errors.name = "Name wajib di isi";
    }
    if (this.state.form.price === "") {
      errors.price = "Price wajib di isi";
    }

    this.setState({
      errors: errors,
    });

    if (Object.keys(errors).length > 0) return;

    this.props.showLoading();

    setTimeout(() => {
      const menus = this.state.menus;

      if (this.state.form.id) {
        const index = menus.findIndex((menu) => menu.id === this.state.form.id);
        const menu = { ...this.state.form };
        menus.splice(index, 1, menu);
        this.setState({ menus: menus });
        this.props.hideLoading();
      } else {
        const menu = {
          ...this.state.form,
          id: new Date().getMilliseconds().toString(),
        };

        menus.push(menu);
        this.setState({ menus: menus });
        this.props.hideLoading();
        console.log(this.state.menus)
      }

      this.clearForm();
    }, 2000);
  };

  clearForm = () => {
    this.setState({
      form: {
        id: "",
        name: "",
        price: "",
        status: false,
      },
    });
  };

  handleDelete = (id) => {
    this.props.hideLoading();
    if (!confirm("Apakah yakin ingin menghapus menu ini?")) return;
    setTimeout(() => {
      const menus = this.state.menus.filter((menu) => menu.id !== id);
      this.setState({ menus: menus });
      this.props.hideLoading();
    }, 2000);
  };

  handleSelectedMenu = (menu) => {
    this.setState({ form: menu });
  };
  render() {
    return (
     <div className="container-fluid pt-4 px-4">
        <h2>Menu</h2>
        <MenuForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChangeStatus={this.handleChangeStatus}
          form={this.state.form}
          clearForm={this.clearForm}
          errors={this.state.errors}
        />
        {
          this.props.isLoading?
          <span>
          <Loading />
        </span>
        :
        <MenuList
        menus={this.state.menus}
        handleDelete={this.handleDelete}
        handleSelectedMenu={this.handleSelectedMenu}
      />
        }



      </div>
    );
  }
}
Menu.propTypes={
    isLoading:PropTypes.bool,
    showLoading:PropTypes.func,
    hideLoading: PropTypes.func,
  }
  const MenuComponent = withLoading(Menu);
  export default MenuComponent;
