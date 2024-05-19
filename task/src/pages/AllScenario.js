import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../UserReducer";

const AllScenario = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div>
      <div className="all_scenarios pt-3">
        <div className="container">
          <div className="all_scenario-btns d-flex justify-content-between">
            <div>
              <h4 className="text-white">All Scenarios</h4>
            </div>
            <div className="scenario_btn">
              <button className="new_scenario">New Scenario</button>
              <button className="add_scenario">Add Vehicle</button>
              <button className="delete_all">Delete All</button>
            </div>
          </div>

          <div className="table_scn mt-5">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>Scenario Id</th>
                  <th>Scenario Name</th>
                  <th>Scenario Time</th>
                  <th>Add Vehicles</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.time}s</td>
                    <td>
                      <Link to="/addvehicle" className="nbtns">
                        <i className="ri-add-circle-fill"></i>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/edit/${user.id}`} className="nbtns">
                        <i className="ri-pencil-line"></i>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="nbtns"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllScenario;
