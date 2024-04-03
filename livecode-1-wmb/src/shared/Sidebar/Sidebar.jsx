import { Component } from "react";
import { IconDoorExit, IconHome2 } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { IconTable } from "@tabler/icons-react";
import { IconMeat } from "@tabler/icons-react";

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
            <li className="cursor-pointer text-white">
              <i className="me-3">
                <IconHome2 />
              </i>
              <span>Dasboard</span>
            </li>
            <li className="cursor-pointer text-white">
              <i className="me-3">
                <IconMeat />
              </i>
              <span>Menu</span>
            </li>
            <li className="cursor-pointer text-white">
              <i className="me-3">
                <IconTable />
              </i>
              <span>Table</span>
            </li>

            <hr />
            <li className="cursor-pointer text-white">
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
  navigateTo: PropTypes.func,
};
