import alt from '../alt';
import SubmitEventActions from 'mvp_actions/SubmitEventActions';

class SubmitEventStore {
    constructor() {
        this.bindActions(SubmitEventActions);
        this.name = '';
        this.gender = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
    }
    
    onAddCharacterSuccess(successMessage) {
        this.nameValidationState = 'has-success';
        this.helpBlock = successMessage;
    }
    
    onAddCharacterFail(errorMessage) {
        this.nameValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }
    
    onUpdateName(event) {
        this.name = event.target.value;
        this.nameValidationState = '';
        this.helpBlock = '';
    }
    
    onUpdateGender(event) {
        this.gender = event.target.value;
        this.genderValidationState = '';
    }
    
    onInvalidName() {
        this.nameValidationState = 'has-error';
        this.helpBlock = 'Please enter a character name.';
    }
    
    onInvalidGender() {
        this.genderValidationState = 'has-error';
    }
}
  
export default alt.createActions(SubmitEventStore);