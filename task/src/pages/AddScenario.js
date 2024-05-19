import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../UserReducer";
import { useNavigate } from "react-router-dom";

const AddScenario = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, time }));
    navigate("/allscenario");
  };

  const handleClear = () => {
    setName("");
    setTime("");
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
          <h4 className="text_white">Add Scenarios</h4>

          <form onSubmit={handleSubmit}>
            <div className="form_hd w-100 d-flex justify-content-between gap-2 px-5">
              <div className="w-100">
                <p className="text_white mb-0">Scenario Name</p>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="text scenario"
                />
              </div>
              <div className="w-100">
                <p className="text_white mb-0">Scenario Time (Seconds)</p>
                <input
                  type="number"
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="text scenario"
                />
              </div>
            </div>

            <div className="btm_btns">
              <button className="add" type="submit">
                Add
              </button>
              <button onClick={handleClear} className="reset">
                Reset
              </button>
              <button className="back">Go Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddScenario;
