import DS from 'ember-data';

export default DS.Model.extend({
  emailAddress: DS.attr('string'),
  texto: DS.attr('string'),
  isValid: Ember.computed.match('model.emailAddress', /^.+@.+\..+$/),
  noValid: Ember.computed.not('isValid'),

  noVacio: Ember.computed.gte('model.texto.length', 5),
  vacio: Ember.computed.not('noVacio'),

  isDisabled: Ember.computed.or('noValid', 'vacio'),
});
