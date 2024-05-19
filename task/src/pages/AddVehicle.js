import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../UserReducer";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const [vname, setVName] = useState("");
  const [positionx, setPositionx] = useState("");
  const [positiony, setPositiony] = useState("");
  const [speed, setSpeed] = useState("");

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        vname,
        positionx,
        positiony,
        speed,
      })
    );
    navigate("/home");
  };

  return (
    <div>
      <div className="add_vehicle pt-3">
        <div className="container">
          <div className="bread_cumb">
            <span className="px-1">Scenario</span>
            <span className="px-1">/</span>
            <span className="px-1">Add</span>
          </div>

          <div className="add_scenario mt-5">
            <h4 className="text_white">Add Scenarios</h4>

            <form onSubmit={handleSubmit}>
              <div className="form_hd">
                <div className="row mb-4">
                  <div className="col-4">
                    <div className="w-100">
                      <p className="text_white mb-0">Scenario Name</p>
                      <select>
                        <option>Test Scenario</option>
                        <option>My Scenario</option>
                        <option>Scenario ABC</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="w-100">
                      <p className="text_white mb-0">Vehicle Name</p>
                      <input
                        type="text"
                        placeholder="Target abc"
                        onChange={(e) => setVName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="w-100">
                      <p className="text_white mb-0">Speed</p>
                      <input
                        type="number"
                        placeholder="0"
                        onChange={(e) => setSpeed(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <div className="w-100">
                      <p className="text_white mb-0">Position X</p>
                      <input
                        type="number"
                        placeholder="0"
                        onChange={(e) => setPositionx(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="w-100">
                      <p className="text_white mb-0">Position Y</p>
                      <input
                        type="text"
                        placeholder="Target abc"
                        onChange={(e) => setPositiony(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="w-100">
                      <p className="text_white mb-0">Direction</p>
                      <select>
                        <option>Towards</option>
                        <option>Backwards</option>
                        <option>Upwards</option>
                        <option>Downloads</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btm_btns">
                <button className="add" type="submit">
                  Add
                </button>
                <button className="reset">Reset</button>
                <button className="back">Go Back</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
