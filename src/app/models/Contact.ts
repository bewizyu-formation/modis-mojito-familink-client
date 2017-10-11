import Coordonne from './Coordonne';

export default class Contact {
    constructor(public nom:String
                , public prenom:String
                , public profil:Array<String>
                , public coordonne:Coordonne
                , public gravatar: String) {
    }

  }