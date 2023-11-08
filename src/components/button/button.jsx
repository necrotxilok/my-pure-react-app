import React from 'react'
import './button.css'

const Button = (props) => {
	return (
		<button
			className="btn"
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
