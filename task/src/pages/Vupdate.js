import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../UserReducer";

const Vupdate = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.filter((f) => f.id == id);
  const { vname, positionx, positiony, speed } = existingUser[0];

  const [vvname, setName] = useState(vname);
  const [vpositionx, setPositionx] = useState(positionx);
  const [vpositiony, setPositiony] = useState(positiony);
  const [vspeed, setSpeed] = useState(speed);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        vname: vvname,
        positionx: vpositionx,
        positiony: vpositiony,
        speed: vspeed,
      })
    );
    navigate("/addvehicle");
  };

  return (
    <div className="add_vehicle pt-3">
      <div className="container">
        <div className="bread_cumb">
          <span className="px-1">Scenario</span>
          <span className="px-1">/</span>
          <span className="px-1">Add</span>
        </div>

        <div className="add_scenario mt-5">
          <h4 className="text_white">Add Scenarios</h4>

          <form onSubmit={handleUpdate}>
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
                      value={vvname}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="w-100">
                    <p className="text_white mb-0">Speed</p>
                    <input
                      type="number"
                      placeholder="0"
                      value={vspeed}
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
                      value={vpositionx}
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
                      value={vpositiony}
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
                Update
              </button>
              <button className="reset">Reset</button>
              <button className="back">Go Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vupdate;
