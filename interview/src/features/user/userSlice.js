import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

//Slice yapısı ile Action’lar otomatik olarak oluşturuluyor. Bir Slice nesnesi, Redux Store’unun bir parçasını (key/value kısmını) temsil eder.
//Async istekleri yönetmek için standart yöntem createAsyncThunk’ı kullanmaktır.

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    console.log(`Register user: ${JSON.stringify(user)}`);
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login user: ${JSON.stringify(user)}`);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export default userSlice.reducer;
