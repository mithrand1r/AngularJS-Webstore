class Klas {
    private _leraar: string;
    get leraar(): string {
        return this._leraar;
    } 
    set leraar(value: string) {
        this._leraar = value;
    }
    public aantalLeerlingen: number;

}