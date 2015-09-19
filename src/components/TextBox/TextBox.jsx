'use strict';


import React from 'react';
import styles from './TextBox-styles.scss';

export default class TextBox extends React.Component {

	render() {
		return (
			<div id="formMilestone" class="${styles.wrapper} input-wrap input-text-wrap">
                <label for="formMilestoneInput" class="${styles.label} input-label">Milestone</label>
                <input type="text" placeholder="milestone" id="formMilestoneInput" class="${styles.box} form-input" />
            </div>
		);
	}

}

TextBox.propTypes = {
	// address: React.PropTypes.object,
	// errors: React.PropTypes.object,
	// model: React.PropTypes.object
};