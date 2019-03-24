import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return[
      {nom:'Dimitry',
        details:'Il est cool',
        age:19},
      {nom:'Simon',
        details:'Il est super beau',
        age:21},
      {nom:'Gérard',
        details:'Le grand-père de Nicolas',
        age:69}
    ];
  }
});
