import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr('string'),
  dueDate: DS.attr('string'),
  owner: DS.belongsTo('developer')
});
