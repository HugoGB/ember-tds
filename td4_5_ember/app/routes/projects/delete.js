import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('projects', params.project_id);
  },
  actions: {
    delete(dev) {
      dev.destroyRecord(1);
      this.transitionTo("projects");
    },
    cancelDeletion() {
      this.transitionTo("projects");
    }
  }
});

