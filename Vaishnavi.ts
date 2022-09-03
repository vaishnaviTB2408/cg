class bankaccount{
    public minbal:number|undefined;
public address:string|undefined;
protected mobnum:string|undefined;
constructor(add:string,mobnum:string){
    this.address=add;
    this.mobnum=mobnum;
    this.minbal=2000;

}
}
class savingaccount extends bankaccount{
    
}