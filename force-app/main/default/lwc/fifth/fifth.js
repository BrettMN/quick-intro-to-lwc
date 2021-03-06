import { LightningElement, wire } from 'lwc';

import Id from '@salesforce/user/Id';

import { getRecord, getFieldValue } from 'lightning/uiRecordApi';


import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import TITLE_FIELD from '@salesforce/schema/User.Title';

const fields = [NAME_FIELD, EMAIL_FIELD, TITLE_FIELD];

export default class Fifth extends LightningElement {
    ourProperty = 'Five words at the top';

    userId = Id;

    @wire(getRecord, { recordId: '$userId', fields })
    user;

    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }

    get email() {
        return getFieldValue(this.user.data, EMAIL_FIELD);
    }

    get title() {
        return getFieldValue(this.user.data, TITLE_FIELD);
    }
}

