// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

      saveInvitation() {
        alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`); //Saca el alert
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`); //Mensaje de respuesta
        this.set('emailAddress', ''); //Deja el campo vacío tras guardarlo
      }
    }

});
