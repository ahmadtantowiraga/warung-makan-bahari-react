import { Component } from 'react';
import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import PropTypes from "prop-types";

class TableList extends Component {
    render() {
        const {tables, handleDelete, handleSelectedTable}=this.props;
        return (
            <div className="shadow-sm p-4 rounded-2 mt-4">
            <h3>List Table</h3>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Availability</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                      {tables.map((table, idx)=>{
                          return (
                              <tr key={idx}>
                                  <td>{++idx}</td>
                                  <td>{table.name}</td>
                                  <td>
                                      <span className={`badge text-white ${table.availability ? "text-bg-success":"text-bg-danger"}`}>
                                          {table.availability ? "Tersedia" : "Tidak Tersedia"}
                                      </span>
                                  </td>
                                  <td>
                                      <div className="d-flex gap-2">
                                          <button onClick={()=>handleSelectedTable(table)} className="btn btn-primary">
                                              <IconEdit size={22} />
                                          </button>
                                          <button onClick={() => handleDelete(table.id)} className="btn btn-danger text-white">
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

export default TableList;
TableList.propTypes = {
    tables :PropTypes.array,
    handleDelete : PropTypes.func, 
    handleSelectedTable : PropTypes.func,
  };