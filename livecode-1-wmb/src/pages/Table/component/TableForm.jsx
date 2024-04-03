import { Component } from "react";
import { IconDeviceFloppy, IconRefresh } from "@tabler/icons-react";
import PropTypes from "prop-types";
class TableForm extends Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      handleChangeAvailability,
      form,
      errors,
      clearForm,
    } = this.props;
    return (
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="shadow-sm p-4 rounded-2"
      >
        <h3>Form Table</h3>
       
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            className={`form-control ${errors.name && "is-invalid"}`}
            id="name"
            name="name"
            value={form.name}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>

        <div className="form-check">
          <input
            onChange={handleChangeAvailability}
            className="form-check-input"
            type="checkbox"
            id="availability"
            checked={form.availability}
          />
          <label className="form-check-label" htmlFor="availability">
            {form.availability ? "Tersedia":"Tidak Tersedia"}
          </label>
        </div>
        <div className="d-flex gap-2 mt-4">
          <button
            type="submit"
            className="btn btn-primary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconDeviceFloppy />
            </i>
            Submit
          </button>
          <button
            onClick={clearForm}
            type="reset"
            className="btn btn-secondary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconRefresh />
            </i>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default TableForm;

TableForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleChangeAvailability: PropTypes.func,
  form: PropTypes.object,
  clearForm: PropTypes.func,
  errors: PropTypes.object,
};
