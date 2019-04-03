import { LightningElement, wire, track } from 'lwc';

import getUserList from "@salesforce/apex/LWCSamplesController.getUserList";


export default class Sixth extends LightningElement {
    ourProperty = 'Six words could be a joke';

    @track
    users;

    @track
    selectedUserId = '';

    @track
    showDetails = false;

    @wire(getUserList)
    getUsers(payload) {

        if (payload.data) {
            this.users = payload.data;
        } else if (payload.error) {
            window.console.log(payload.error);
        }
    }

    handleSelectedUserIdEvent(event) {

        this.selectedUserId = event.detail;
        this.showDetails = true;

    }



}