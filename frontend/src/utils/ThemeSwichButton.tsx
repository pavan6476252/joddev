import React from 'react'
import { toggleDarkMode } from '../store/theme/darkModeSlice'
import { useDispatch } from 'react-redux'

function ThemeSwitchButton() {
    const dispatch = useDispatch()
    function switchTheme() {
        dispatch(toggleDarkMode())
    }
    return (

        <button onClick={() => switchTheme()}>Theme</button>
    )
}

export default ThemeSwitchButton