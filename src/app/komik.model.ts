import { kategoriModel } from "./kategori.model";

export class komikModel{
    constructor(public id: number, 
        public judul: string, 
        public deskripsi: string,
        public url_poster:string, 
        public nilai:string,
        public kategoris: kategoriModel[]) {
    }
}