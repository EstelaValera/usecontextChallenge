import React from 'react'
import { useTheme } from '../themes/ThemeContext'

const Button = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>Change {theme === 'light' ? 'dark' : 'light'}</button> 
    )
}

export default Button;