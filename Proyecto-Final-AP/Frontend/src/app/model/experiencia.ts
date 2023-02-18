export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    lapsoE : string;

    constructor(nombreE: string, descripcionE: string, lapsoE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.lapsoE = lapsoE;
    }
}
