import { LightningElement, api } from 'lwc';

export default class SixthListItem extends LightningElement {
    @api
    user

    dispatchSelectUser() {

        // Creates the event with the contact ID data.
        const selectedEvent = new CustomEvent('selecteduseridevent', { detail: this.user.Id });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);

    }
}