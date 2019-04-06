import Route from '@ember/routing/route';
import EmberObject, {set,get} from '@ember/object';

export default Route.extend({
  templateName: 'projects/new',
  afterModel(model) {
    let copy = EmberObject.create(model.toJSON());
    set(model, 'copy', copy);
    set(model, 'devs', this.store.findAll('developer'));
    return model;
  },
  actions: {
    save(model) {
      let route = this;
      let copy = get(model,'copy');
      model.set('name',get(copy,'name'));
      model.set('description',get(copy,'description'));
      model.set('startDate',get(copy,'startDate'));
      model.set('dueDate',get(copy,'dueDate'));
      model.set('owner',get(copy,'owner'));
      model.save().then(function(){
          route.transitionTo("projects");
        }
      );
    },
    cancel() {
      this.transitionTo("projects");
    }
  }
});
