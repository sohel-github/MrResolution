import React, { Component } from 'react';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionForm from './ResolutionForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

import { Resolution } from '../../../imports/api/AllCollectionsList.js';

export default class ResolutionWrapper extends TrackerReact(Component) {
	
	getResolution(){
		return Resolution.find({}, { sort: { createdAt: -1 } }).fetch();
	}

	render(){
		return(
			<div className="">
				<h1>My ResolutionList</h1>
				<ResolutionForm />
				<ul>
					{this.getResolution().map( (res)=>{
						return <ResolutionSingle key={res._id} resolution={res} />	
					})}
				</ul>
			</div>
		)
	}
}

