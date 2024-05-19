import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div>
      <div className="right_b pt-3">
        <div className="container">
          <h5 className="text_white">Scenarios</h5>
          <select className="snr_s">
            <option>Test Scenario</option>
            <option>My Scenario</option>
          </select>

          <div className="table_scn mt-5">
            <table class="table w-100">
              <thead class="thead-dark">
                <tr>
                  <th>Vehicle Id</th>
                  <th>Vehicle Name</th>
                  <th>Position X</th>
                  <th>Position Y</th>
                  <th>Speed</th>
                  <th>Direction</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.vname}</td>
                    <td>{user.positionx}</td>
                    <td>{user.positiony}</td>
                    <td>{user.speed}</td>
                    <td>Direction</td>
                    <td>
                      <Link to={`/vedit/${user.id}`} className="nbtns">
                        <i className="ri-pencil-line"></i>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="nbtns"
                        onClick={() => handleDelete(user.id)}
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bottom_btns text-end">
            <button className="button01">Start Simulation</button>
            <button className="button02">Stop Simulation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
