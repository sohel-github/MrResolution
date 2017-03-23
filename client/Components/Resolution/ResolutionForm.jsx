import React, { Component } from 'react';
import { render } from 'react-dom';

import { Resolution } from '../../../imports/api/AllCollectionsList.js';

export default class ResolutionForm extends Component {
	
	addResolution(event){
		event.preventDefault();
		let resText = this.refs.resolution.value.trim();

		Resolution.insert({
			text: resText,
			createdAt: new Date()
		});
		
		this.refs.resolution.value="";
	}

	render(){
		return(
			<form onSubmit={this.addResolution.bind(this)}>
				<input 
					type="text"
					ref="resolution"
					placeholder="Enter your Resolution" />
			</form>
		)
	}
}