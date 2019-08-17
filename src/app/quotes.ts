export class Quotes {
    public show : boolean ;
    constructor( public id : number, public author : string ,public uploadedBy : string,public quote : string , public postDate : Date , public like : number , public disLike : number){
        this.show = false;
    }
}
