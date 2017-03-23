import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './Layouts/MainLayout.jsx';

import ResolutionWrapper from './Components/Resolution/ResolutionWrapper.jsx';

FlowRouter.route('/', {
	name: 'home',
	action(){
		mount(MainLayout, {
			content: (<ResolutionWrapper />)
		})
	}
});