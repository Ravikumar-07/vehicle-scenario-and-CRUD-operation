import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.filter((f) => f.id == id);
  const { name, time } = existingUser[0];

  const [uname, setName] = useState(name);
  const [utime, setTime] = useState(time);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        time: utime,
      })
    );
    navigate("/addscenario");
  };
  return (
    <div className="right_b pt-3">
      <div className="container">
        <div className="bread_cumb">
          <span className="px-1">Scenario</span>
          <span className="px-1">/</span>
          <span className="px-1">Add</span>
        </div>

        <div className="add_scenario mt-5">
          <h4 className="text_white">Update Scenarios</h4>

          <form onSubmit={handleUpdate}>
            <div className="form_hd w-100 d-flex justify-content-between gap-2 px-5">
              <div className="w-100">
                <p className="text_white mb-0">Scenario Name</p>
                <input
                  type="text"
                  placeholder="text scenario"
                  value={uname}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-100">
                <p className="text_white mb-0">Scenario Time (Seconds)</p>
                <input
                  type="number"
                  placeholder="text scenario"
                  value={utime}
                  onChange={(e) => setTime(e.target.value)}
                />
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

export default Update;
