import { Component } from "react";
import { IconDoorExit, IconHome2 } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { IconTable } from "@tabler/icons-react";
import { IconMeat } from "@tabler/icons-react";
import MenuComponent from "../../pages/Menu/Menu";
import TableComponent from "../../pages/Table/Table";
import Dasboard from "../../pages/Dasboard/Dasboard";

export default class Sidebar extends Component {
  render() {
    return (
      <div
        className={"bg-info text-white p-4 shadow"}
        style={{ width: 350, minHeight: "100dvh" }}
      >
        <div className="font-logo text-center mb-5">
          <h2 className="fs-3">
            <i>
              <b>Warung Makan Bahari</b> WMB
            </i>
          </h2>
        </div>
        <nav>
          <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
            <p className="fw-bold mt-4">Navigation</p>
            <li onClick={() => {
                    this.props.handlePage(<Dasboard />);
                }} className="cursor-pointer text-white">
              <i className="me-3">
                <IconHome2 />
              </i>
              <span>Dasboard</span>
            </li>
            <li onClick={() => {
                    this.props.handlePage(<MenuComponent dataMenu={this.props.dataMenu} handleDataMenu={this.props.handleDataMenu}/>);
                }} className="cursor-pointer text-white">
              <i className="me-3">
                <IconMeat />
              </i>
              <span>Menu</span>
            </li>
            <li onClick={() => {
                    this.props.handlePage(<TableComponent dataTable={this.props.dataTable} handleDataTable={this.props.handleDataTable}/>);
                }} className="cursor-pointer text-white">
              <i className="me-3">
                <IconTable />
              </i>
              <span>Table</span>
            </li>

            <hr />
            <li onClick={() => {
                    this.props.handleAuthentication(false);
                }} className="cursor-pointer text-white">
              <i className="me-3">
                <IconDoorExit />
              </i>
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Sidebar.propTypes = {
  handlePage: PropTypes.func,
  handleAuthentication: PropTypes.func,
  dataMenu: PropTypes.array,
  dataTable:PropTypes.array,
  handleDataMenu:PropTypes.func,
  handleDataTable: PropTypes.func,
};
