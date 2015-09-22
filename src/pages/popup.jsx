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
                    <div className="tab">
                        <form action="" id="githubForm" class="form-group">
                            <TextBox inputId="formMilestoneInput" label="Milestone" placeholder="i.e: 5.1, 5,2, etc" />
                            <RadioGroup groupLabel="Status" formId="formStatus" radios={radioGroups} />
                            <TextBox inputId="formUserNameInput" label="User Name/Author" placeholder="github user name" />

                            <button id="formMilestoneSearch" class="form-button">go to github!</button>
                        </form>
                    </div>

                    <div className="tab">
                        <form action="" id="jiraForm" class="form-group">
                            <TextBox inputId="formFixVersionInput" label="Fix Version" placeholder="fix version" />
                            <TextBox inputId="formMilestoneInput" label="Assignee(s)" placeholder="assignee(s), comma separated" />

                            <button id="formFixVersionSearch" class="form-button">go to jira!</button>
                        </form>
                        <form action="" id="jiraFormTicket" class="form-group">
                            <TextBox inputId="formJiraTicketInput" label="Ticket Number" placeholder="ticket number" />

                            <button id="formJiraTicketSearch" class="form-button">go to jira ticket!</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }

}
