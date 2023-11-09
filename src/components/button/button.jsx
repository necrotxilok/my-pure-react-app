import React from 'react'
import './button.css'

const theme = window.MainTheme || {}

const Button = (props) => {
	return (
		<button
			className="btn"
			style={{
				backgroundColor: theme.primaryColor,
			}}
			onClick={() => {
				console.log('Button Pressed!!')
				props.onClick && props.onClick()
			}}
		>
			{props.label}
		</button>
	)
}

export default Button
