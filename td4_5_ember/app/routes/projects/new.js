import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return {copy:{},
      devs:this.store.findAll('developer')}
  },
  actions: {
    save(model) {
      let copy = model.copy;
      let pro = this.store.createRecord('project', EmberObject.create(copy));
      pro.save();
      this.transitionTo("projects");
    },
    cancel() {
      this.transitionTo("projects");
    },
  }
});
