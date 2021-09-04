import { createSlice } from '@reduxjs/toolkit'
import { defaultColors } from '../../common/utils/constants';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    isSoundEnabled: true,
    isVibrateEnabled: false,
    color: defaultColors
  },
  reducers: {
    toggleSound: (state) => {
      state.isSoundEnabled = !state.isSoundEnabled
    },
    toggleVibrate: (state) => {
      state.isVibrateEnabled = !state.isVibrateEnabled
    },
    setColor: (state, action) => {
      state.color = action.payload
    }
  }
})

export const { toggleSound, toggleVibrate, setColor } = settingsSlice.actions

export default settingsSlice.reducer