import React from 'react'

export default (props) => {
	if (props.symbols !== 0 && props.sec !== 0 && props.finished !== true){
		const wpm = (props.symbols/5 ) / (props.sec/60)

		return(
		<div >{Math.round(wpm)} WPM 
		&nbsp; &nbsp;&nbsp;  {props.sec} sec
		</div>

		)
	}
	return null
	
}