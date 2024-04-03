import { Component } from "react";
import {
  IconAsset,
  IconDoorExit,
  IconHome2,
  IconListDetails,

} from "@tabler/icons-react";
import PropTypes from "prop-types";


export default class Sidebar extends Component {
  render() {

    return (
      <div
        className={"bg-info text-white p-4 shadow"}
        style={{ width: 400, minHeight: "100dvh" }}
      >
        <div className="font-logo text-center mb-5">
          <h2 className="fs-2">
            <i>
              <b>Warung Makan Bahari</b> WMB
            </i>
          </h2>
         
        </div>
        <nav>
          <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
            <p className="fw-bold mt-4">Menu</p>
            <li className="cursor-pointer text-white">
            <i className="me-3">
                    <IconHome2 />
                  </i>
                  <span>Dasboard</span>
            </li>
            <li className="cursor-pointer text-white">
            <i className="me-3">
                    <IconAsset />
                  </i>
                  <span>Menu</span>
            </li>

            <li className="cursor-pointer text-white">
            <i className="me-3">
                    <IconListDetails />
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