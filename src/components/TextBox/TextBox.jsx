'use strict';


import React from 'react';
import styles from './TextBox-styles.scss';

export default class TextBox extends React.Component {

    render() {

        const wrapperClasses = `${styles.wrapper} ${this.props.wrapperClasses || ''} input-wrap input-text-wrap`;
        const inputId = this.props.inputId;

        const labelClasses = `${this.props.labelClasses || ''} input-label`;
        const inputClasses = `${this.props.inputClasses || ''} ${styles.box} form-input`;

        return (
            <div id={this.props.wrapperId || ''} className={wrapperClasses}>
                <label htmlFor={inputId} className={labelClasses}>{this.props.label}</label>
                <input type="text" placeholder={this.props.placeholder || ''} id={inputId} className={inputClasses} />
            </div>
        );
    }

}

TextBox.propTypes = {
    wrapperClasses: React.PropTypes.string,
    labelClasses: React.PropTypes.string,
    inputClasses: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    wrapperId: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    inputId: React.PropTypes.string.isRequired
};
