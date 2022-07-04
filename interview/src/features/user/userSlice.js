import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

//Slice yapısı ile Action’lar otomatik olarak oluşturuluyor. Bir Slice nesnesi, Redux Store’unun bir parçasını (key/value kısmını) temsil eder.
//Async istekleri yönetmek için standart yöntem createAsyncThunk’ı kullanmaktır.

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
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
  extraReducers: {
    // pending - vaat henüz bir değer kazanmadı, geleceği hala belirsiz.
    // fulfilled - the promise successfully got a result value "assigned"
    // rejected - the promise is given a reason why no result could be acquired, typically an error.

    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`Hello there ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
