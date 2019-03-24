import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {nom:'Amine',
      details:'Des détails sur Amine',
      age:20}
  }
});
