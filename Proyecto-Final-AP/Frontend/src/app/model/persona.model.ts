export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    descripcion: string;
    img: string;


    constructor(nombre: string, apellido: string, descripcion:string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
    }
}