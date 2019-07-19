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
        console.log("IOEJFOISDJFOISJD");
        console.log(this.name);
    }
    
    onAddEventSuccess(successMessage) {
        this.eventValidationState = 'has-success';
        this.helpBlock = successMessage;
    }
    
    onAddEventFail(errorMessage) {
        this.eventValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        // return {
        //     this.name = event.target.value;
        //     this.nameValidationState = '';
        //     this.helpBlock = '';
        // }
        console.log(this.state.name);
        console.log(event.target.value);
        console.log(this.state.name);
        this.state.name = event.target.value;
        this.nameValidationState = '';
        this.helpBlock = '';
        
    }

    onUpdateSubtitle(event) {
        this.subtitle = event.target.value;
        this.subtitleValidationState = '';
        this.helpBlock = '';
    }

    onUpdateDescription(event) {
        this.description = event.target.value;
        this.descriptionValidationState = '';
        this.helpBlock = '';
    }

    onUpdateRSVPCount(event) {
        this.rsvpCount = event.target.value;
        this.rsvpCountValidationState = '';
        this.helpBlock = '';
    }

    onUpdateStartDate(event) {
        this.startDate = event.target.value;
        this.startDateValidationState = '';
        this.helpBlock = '';
    }

    onUpdateEndDate(event) {
        this.endDate = event.target.value;
        this.endDateValidationState = '';
        this.helpBlock = '';
    }

    onUpdateOrg(event) {
        this.org = event.target.value;
        this.orgValidationState = '';
        this.helpBlock = '';
    }

    onUpdateLocName(event) {
        this.locName = event.target.value;
        this.locNameValidationState = '';
        this.helpBlock = '';
    }

    onUpdateStreet(event) {
        this.street = event.target.value;
        this.streetValidationState = '';
        this.helpBlock = '';
    }

    onUpdateCity(event) {
        this.city = event.target.value;
        this.cityValidationState = '';
        this.helpBlock = '';
    }

    onUpdateState(event) {
        this.state = event.target.value;
        this.stateValidationState = '';
        this.helpBlock = '';
    }

    onUpdateCountry(event) {
        this.country = event.target.value;
        this.countryValidationState = '';
        this.helpBlock = '';
    }

    onUpdateZipcode(event) {
        this.zipcode = event.target.value;
        this.zipcodeValidationState = '';
        this.helpBlock = '';
    }
}
  
export default alt.createStore(SubmitEventStore);