import React from 'react'

function Result(props){
	const wpm = (props.symbols/5 ) / (props.sec/60)
	if (props.finished === true){
		return(

			<div>
				<h5 className='result'>typeResult</h5>
	 			 	<span className='wpm_r'> {Math.round(wpm)} </span>
	 			 	words/min
	 				&nbsp; &nbsp; 
	 			 
	 			 	<span className='time_r'>{props.symbols} </span> charactes in <span className='time_r'> {props.sec} </span>Sec
	 			 	   
	 			<br /><br />
	 			<p className='quote_info'>
					The quote you typed was from {props.text_author}
				</p>
			</div>
		)
	}
	return null
	

}

export default Result