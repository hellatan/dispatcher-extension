/**
 * User: hella
 * Date: 9/22/15
 * Time: 12:28 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

import React from 'react';

class Radio extends React.Component {

    render() {

        const settings = this.props.settings;
        const groupClassName = settings.groupClassName || 'radioGroup';
        const labelClassName =  settings.groupClassName || 'input-label input-label-radio';

        const inputValue = settings.inputValue;
        const inputId = settings.inputId;
        const labelFor = inputId || settings.labelFor;
        const label = settings.label;

        return (
            <div className={groupClassName}>
                {label ? <label className={labelClassName} htmlFor={labelFor}>{label}</label> : ''}
                {inputId && inputValue ? <input type="radio" name="formPRStatus" id={inputId} value={inputValue} /> : ''}
            </div>
        );
    }

}

Radio.propTypes = {
    inputId: React.PropTypes.string.isRequired,
    inputValue: React.PropTypes.string.isRequired,
    labelFor: React.PropTypes.string,
    label: React.PropTypes.string.isRequired
};

let settings = {

};

export default class RadioGroup extends React.Component {

    render() {

        const groupLabel = this.props.groupLabel;
        const formClasses = this.props.formClasses || "input-wrap input-radio-groups-wrap cf";

        const radios = this.props.radios.map(val => {
            return <Radio key={val.id} settings={val} />
        });

        console.log(radios);
/*
                //<div className="radioGroup">
                //    <label class="input-label input-label-radio" htmlFor="prStatusClosed">Closed</label>
                //    <input type="radio" name="formPRStatus" id="prStatusClosed" value="closed" />
                //</div>
                */

        return(
            <div id={this.props.formId} className={formClasses}>
                {groupLabel ? <p className="input-label">{groupLabel}</p> : '' }
                {radios}
            </div>
        );
    }

}

RadioGroup.propTypes = {
    radios: React.PropTypes.array.isRequired,
    groupLabel: React.PropTypes.string,
    formClasses: React.PropTypes.string
};
