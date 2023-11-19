import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface Room {
  _id: string;
  title: string;
  description: string;
  location: string[];
  price: number;
  images: string[];
  amenities: string[];
  availability: boolean;
  mid: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


interface RoomState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  rooms: Room[]
}

const initialState: RoomState = {
  status: 'idle',
  error: null,
  rooms: []
};




export const createRoomAsync = createAsyncThunk('room/createRoom', async (formData: FormData) => {

  const response = await fetch('http://localhost:3000/api/roomie/createRoom', {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  console.log(response);
  return data;
});
export const getRoomAsync = createAsyncThunk('room/getRooms', async () => {

  const response = await fetch('http://localhost:3000/api/roomie', {
    method: 'GET',
  });
  const data = await response.json();
  console.log('[GET] rooms :', response);
  return data;
});


export const roomSlice = createSlice({
  name: 'room', // This value must be unique
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRoomAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createRoomAsync.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(createRoomAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      })
      .addCase(getRoomAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRoomAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rooms = action.payload.rooms;
      })
      .addCase(getRoomAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});


// Export the reducer for the store
export default roomSlice.reducer;

// Selectors if needed
export const selectRoomStatus = (state: RootState) => state.room.status;
export const selectRoomError = (state: RootState) => state.room.error;

export const selectRooms = (state: RootState) => state.room.rooms;