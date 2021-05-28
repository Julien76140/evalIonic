export class OeuvreModel{
    public id: number;

    constructor(
        public name: string,
        public image: string,
        public latitude: number,
        public longitude: number,
        public note: number,
    ){}
}