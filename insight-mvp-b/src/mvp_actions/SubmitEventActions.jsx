import alt from '../alt';
import axios from 'axios';

class SubmitEventActions {
    constructor() {
        this.generateActions(
            'addEventSuccess',
            'addEventFail',
            'updateName',
            'updateSubtitle',
            'updateDescription',
            'updateRSVPCount',
            'updateStartDate',
            'updateEndDate',
            'updateOrg',
            'updateLocName',
            'updateStreet',
            'updateCity',
            'updateState',
            'updateCountry',
            'updateZipcode',
        );
    }

    addEvent(name, subtitle, description, rsvpCount, startDate, endDate, org,
        locName, street, city, state, country, zipcode) {
        axios.put('/api/event', {
            name: name,
            subtitle: subtitle,
            description: description,
            rsvpCount: rsvpCount,
            startDate: startDate,
            endDate: endDate,
            org: org,
            locName: locName,
            street: street,
            city: city,
            state: state,
            country: country,
            zipcode: zipcode
        })
        .then(function(response) {
            this.actions.addEventSuccess("Success");
        })
        .catch(function(error) {
            this.actions.addEventFail("Failed");
        });
    }
}

export default alt.createActions(SubmitEventActions);