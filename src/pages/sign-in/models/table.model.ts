export default class TableModel{
    public id: number | null = null;
    public email: string | null = null;
    public username: string | null = null;
    public contactNumber: number | null = null;
    public password: React.Key | null = null;
    
    constructor(item: any) {
        this._setId(item);
        this._setEmail(item);
        this._setUsername(item);
        this._setContactNumber(item);
        this._setPassword(item);
    }
    
    private _setId({id}: any) {
        this.id = id
    }
    
    _setEmail({email}: any) {
        this.email = email;
    }
    
    _setUsername({username}: any) {
        this.username = username
    }
    
    _setContactNumber({contactNumber}: any) {
        this.contactNumber = contactNumber
    }
    
    private _setPassword({password}: any) {
        this.password = password
    }
}
