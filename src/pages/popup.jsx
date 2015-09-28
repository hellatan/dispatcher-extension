'use strict';

import React from 'react';
import popupStyles from "../components/Dispatcher/Dispatcher-styles.scss"

import TextBox from '../components/TextBox/TextBox.jsx';
import RadioGroup from '../components/RadioGroup/RadioGroup.jsx';

console.log('gridStyles: ', popupStyles);

export default class Popup extends React.Component {

    render() {

        const radioGroups = [
            {
                'inputId': 'prStatusOpened',
                'inputValue': 'open',
                'label': 'Open'
            },
            {
                'inputId': 'prStatusClosed',
                'inputValue': 'closed',
                'label': 'Closed'
            }
        ];

        return (
            <div>
                <h1>1stdibs Dispatcher</h1>
                <div className={popupStyles.tabsWrapper}>
                    <div className={popupStyles.tabName}>Github</div>
                    <div className={popupStyles.tabContent}>
                        <form action="" id="githubForm" className="form-group">
                            <div className={popupStyles.rowFlexTransition}>
                                <TextBox inputId="formMilestoneInput" label="Milestone" placeholder="i.e: 5.1, 5,2, etc" />
                            </div>
                            <div className={popupStyles.rowFlexTransition}>
                                <RadioGroup groupLabel="Status" formId="formStatus" radios={radioGroups} />
                            </div>
                            <div className={popupStyles.rowFlexTransition}>
                                <TextBox inputId="formUserNameInput" label="User Name/Author" placeholder="github user name" />
                            </div>
                            <button id="formMilestoneSearch" className="form-button">go to github!</button>
                        </form>
                    </div>

                    <div className={popupStyles.tabName}>Jira</div>
                    <div className={popupStyles.tabContent}>
                        <form action="" id="jiraForm" className="form-group">
                            <TextBox inputId="formFixVersionInput" label="Fix Version" placeholder="fix version" />
                            <TextBox inputId="formMilestoneInput" label="Assignee(s)" placeholder="assignee(s), comma separated" />

                            <button id="formFixVersionSearch" className="form-button">go to jira!</button>
                        </form>
                        <form action="" id="jiraFormTicket" className="form-group">
                            <TextBox inputId="formJiraTicketInput" label="Ticket Number" placeholder="ticket number" />

                            <button id="formJiraTicketSearch" className="form-button">go to jira ticket!</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }

}
