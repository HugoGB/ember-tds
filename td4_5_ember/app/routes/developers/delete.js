import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('developers', params.developer_id, {include: "projects"});
  },
  actions: {
    delete(dev) {
      dev.destroyRecord();
      this.transitionTo("developers");
    },
    cancelDeletion() {
      this.transitionTo("developers");
    }
  }
});
