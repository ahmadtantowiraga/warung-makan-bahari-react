import { Component } from 'react';
import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import PropTypes from "prop-types";

class MenuList extends Component {
    render() {
        const {menus, handleDelete, handleSelectedMenu}=this.props;
        return (
            <div className="shadow-sm p-4 rounded-2 mt-4">
            <h3>List Menu</h3>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Selesai</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                      {menus.map((menu, idx)=>{
                          return (
                              <tr key={idx}>
                                  <td>{++idx}</td>
                                  <td>{menu.name}</td>
                                  <td>{menu.price}</td>
                                  <td>
                                      <span className={`badge text-white ${menu.status ? "text-bg-success":"text-bg-danger"}`}>
                                          {menu.status ? "Selesai" : "Belum Selesai"}
                                      </span>
                                  </td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button onClick={()=>handleSelectedMenu(menu)} className="btn btn-primary">
                                              <IconEdit size={22} />
                                          </button>
                                          <button onClick={() => handleDelete(menu.id)} className="btn btn-danger text-white">
                                              <IconTrash size={22} />
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                          )
                      })}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}

export default MenuList;
MenuList.propTypes = {
    menus :PropTypes.array,
    handleDelete : PropTypes.func, 
    handleSelectedMenu : PropTypes.func,
  };