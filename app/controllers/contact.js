// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  texto:'',

  isValid: Ember.computed.match('model.emailAddress', /^.+@.+\..+$/),
  noValid: Ember.computed.not('isValid'),

  noVacio: Ember.computed.gte('model.texto.length', 5),
  vacio: Ember.computed.not('noVacio'),

  isDisabled: Ember.computed.or('noValid', 'vacio'),

  actions: {

      saveContact() {

        const email = this.get('model.emailAddress');
        const texto = this.get('model.texto');


        const newContact = this.store.createRecord('contact', { emailAddress: email, texto: texto });
        newContact.save().then((response) => {
        alert(`Saving of the following email address is in progress: ${this.get('model.emailAddress')}`); //Saca el alert
        this.set('model.emailAddress', ''); //Deja el campo del email vacío tras guardarlo
        this.set('model.texto', ''); //Lo mismo con el campo de texto
        this.set('responseMessage', "We got your message and we’ll get in touch soon"); //Mensaje de respuesta
      });
      }
    }

});
