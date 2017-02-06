import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('contact')
  },

  actions: {

    saveInvitation(newInvitation) {
      newInvitation.save().then(() => this.transitionTo('contacts'));
    },

    willTransition() {
        // rollbackAttributes() removes the record from the store
        // if the model 'isNew'
        this.controller.get('model').rollbackAttributes();
      }
    }
  });
