export default class Message {
    constructor(  public id:number
                , public body: String //TODO: limit body to 140 char in the getter/constructor
                , public dateCreation: Date
                , public dateLecture: Date) {
        
    }

  }