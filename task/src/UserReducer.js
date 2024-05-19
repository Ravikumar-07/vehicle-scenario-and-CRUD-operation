import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
import { VehicleList } from "./VehicleData";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  initialState1: VehicleList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, time, vname, positionx, positiony, speed } =
        action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.time = time;
        uu.vname = vname;
        uu.positionx = positionx;
        uu.positiony = positiony;
        uu.speed = speed;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
