import React, { Component } from 'react';
import { render } from 'react-dom';


export default class ResolutionSingle extends Component {
	render(){
		return(
			<li>
				{this.props.resolution.text} - {this.props.resolution.createdAt.toString()} 
			</li>
		)
	}
}