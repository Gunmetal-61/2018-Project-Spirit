import alt from '../alt';
import SubmitEventActions from 'mvp_actions/SubmitEventActions';

class SubmitEventStore {
    constructor() {
        this.bindActions(SubmitEventActions);
        this.state = {
            name: '',
            subtitle: '',
            description: '',
            rsvpCount: '',
            startDate: '',
            endDate: '',
            org: '',
            locName: '',
            street: '',
            city: '',
            state: '',
            country: '',
            zipcode: ''
        }
    }

    onAddEventSuccess(successMessage) {
        this.state.eventValidationState = 'has-success';
        this.state.helpBlock = successMessage;
    }
    
    onAddEventFail(errorMessage) {
        this.state.eventValidationState = 'has-error';
        this.state.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.state.name = event.target.value;
        this.state.nameValidationState = '';
        this.state.helpBlock = '';     
    }

    onUpdateSubtitle(event) {
        this.state.subtitle = event.target.value;
        this.state.subtitleValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateDescription(event) {
        this.state.description = event.target.value;
        this.state.descriptionValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateRSVPCount(event) {
        this.state.rsvpCount = event.target.value;
        this.state.rsvpCountValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateStartDate(event) {
        this.state.startDate = event.target.value;
        this.state.startDateValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateEndDate(event) {
        this.state.endDate = event.target.value;
        this.state.endDateValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateOrg(event) {
        this.state.org = event.target.value;
        this.state.orgValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateLocName(event) {
        this.state.locName = event.target.value;
        this.state.locNameValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateStreet(event) {
        this.state.street = event.target.value;
        this.state.streetValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateCity(event) {
        this.state.city = event.target.value;
        this.state.cityValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateState(event) {
        this.state.state = event.target.value;
        this.state.stateValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateCountry(event) {
        this.state.country = event.target.value;
        this.state.countryValidationState = '';
        this.state.helpBlock = '';
    }

    onUpdateZipcode(event) {
        this.state.zipcode = event.target.value;
        this.state.zipcodeValidationState = '';
        this.state.helpBlock = '';
    }
}
  
export default alt.createStore(SubmitEventStore);