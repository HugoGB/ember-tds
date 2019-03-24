import Route from '@ember/routing/route';
import EmberObject, { computed, get } from '@ember/object';


const Contacts = EmberObject.extend({
  filtre: "",
  contacts: computed('datas.@each.isDeleted', 'filtre', function(){
    let datas = this.get('datas');
    let contactsNonDeleteds = datas.filter(item=> !item.get('isDeleted'));

    if(contactsNonDeleteds.length == 0){
      return {};
    }

    if(this.get('filtre') == "") {
      return contactsNonDeleteds;
    }

    return contactsNonDeleteds.filter(item=> item.get('nom').toLowerCase().includes(this.get('filtre').toLowerCase())
      || (item.get('prenom')!=null && item.get('prenom').toLowerCase().includes(this.get('filtre').toLowerCase())));
  }),
  contactsCount: computed('contacts', function(){
    return this.get('contacts').length;
  }),
  deleteds: computed('datas.@each.isDeleted', function(){
    return this.get('datas').filter(item=> item.get('isDeleted'));
  }),
  deletedsCount: computed('deleteds', function(){
    return this.get('deleteds').length;
  })
});

export default Route.extend({
  model(){
    return Contacts.create({datas: this.store.findAll('contact')});
  }
});
