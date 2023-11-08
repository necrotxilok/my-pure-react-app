import React, { useEffect, useState } from 'react'
import Button from '@components/button'
import './app.css'

export default function App(props) {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		// Component Did Mount
		console.log('Hello World App!')
	}, [])
	
	return (
		<>
			<h1>Hello World!</h1>
			<Button 
				label={"Clicker " + counter}
				onClick={() => {
					setCounter(counter + 1)
				}}
			/>
		</>
	)
}
