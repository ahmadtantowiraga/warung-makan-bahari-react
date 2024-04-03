import { Component } from "react";
import Loading from "../../shared/Loading/Loading";

import PropTypes from "prop-types";
import withLoading from "../../shared/hoc/withLoading";
import TableList from "./component/TableList";
import TableForm from "./component/TableForm";

class Table extends Component {
  state = {
    form: {
      id: "",
      name: "",
      availability: false,
      
    },
    tables: [],
    errors: {
      name: "",
    },
  };

  componentDidMount() {
    this.props.showLoading();
    setTimeout(() => {
      this.setState({
        tables: [
          {
            id: "1",
            name: "Table01",
            availability: true,
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

  handleChangeAvailability = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        availability: event.target.checked,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (this.state.form.name === "") {
      errors.name = "Name wajib di isi";
    }

    this.setState({
      errors: errors,
    });

    if (Object.keys(errors).length > 0) return;

    this.props.showLoading();

    setTimeout(() => {
      const tables = this.state.tables;

      if (this.state.form.id) {
        const index = tables.findIndex((table) => table.id === this.state.form.id);
        const table = { ...this.state.form };
        tables.splice(index, 1, table);
        this.setState({ tables: tables });
        this.props.hideLoading();
      } else {
        const table = {
          ...this.state.form,
          id: new Date().getMilliseconds().toString(),
        };

        tables.push(table);
        this.setState({ tables: tables });
        this.props.hideLoading();
        console.log(this.state.tables)
      }

      this.clearForm();
    }, 2000);
  };

  clearForm = () => {
    this.setState({
      form: {
        id: "",
        name: "",
        availability: "false",
      },
    });
  };

  handleDelete = (id) => {
    this.props.hideLoading();
    if (!confirm("Apakah yakin ingin menghapus Table ini?")) return;
    setTimeout(() => {
      const tables = this.state.tables.filter((table) => table.id !== id);
      this.setState({ tables: tables });
      this.props.hideLoading();
    }, 2000);
  };

  handleSelectedTable = (table) => {
    this.setState({ form: table });
  };
  render() {
    return (
     <div className="container-fluid pt-4 px-4">
        <h2>Table</h2>
        <TableForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChangeAvailability={this.handleChangeAvailability}
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
        <TableList
        tables={this.state.tables}
        handleDelete={this.handleDelete}
        handleSelectedTable={this.handleSelectedTable}
      />
        }



      </div>
    );
  }
}
Table.propTypes={
    isLoading:PropTypes.bool,
    showLoading:PropTypes.func,
    hideLoading: PropTypes.func,
  }
  const TableComponent = withLoading(Table);
  export default TableComponent;
