import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import SettingsView from './Settings.view';
import {
    toggleSound as toggleSoundAction,
    toggleVibrate as toggleVibrateAction,
    setColor as setColorAction
} from '../Settings/Settings.slice';

const SettingsScreen = props => {
    const dispatch = useDispatch();
    const soundValue = useSelector(state => state.settings.isSoundEnabled);
    const vibrateValue = useSelector(state => state.settings.isVibrateEnabled);
    const color = useSelector(state => state.settings.color)
    const toggleSound = () => {
        dispatch(toggleSoundAction());
    }

    const toggleVibrate = () => {
        dispatch(toggleVibrateAction());
    }

    const onChooseColor = (color) => {
        dispatch(setColorAction(color));
    }

    return (
        <SettingsView
            soundValue={soundValue}
            vibrateValue={vibrateValue}
            color={color}
            toggleSound={toggleSound}
            toggleVibrate={toggleVibrate}
            onChooseColor={onChooseColor}
        />
    )
}

export default (SettingsScreen);