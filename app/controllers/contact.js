// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  texto:'',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  noValid: Ember.computed.not('isValid'),

  noVacio: Ember.computed.gte('texto.length', 5),
  vacio: Ember.computed.not('noVacio'),

  isDisabled: Ember.computed.or('noValid', 'vacio'),

  actions: {

      saveInvitation() {
        alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`); //Saca el alert
        this.set('emailAddress', ''); //Deja el campo vacío tras guardarlo
        this.set('responseMessage', `We got your message and we’ll get in touch soon`); //Mensaje de respuesta
      }
    }

});
