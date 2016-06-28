export class Fighter {
    attacks: {[key:string]:string};
    name: string;

    constructor(name: string, attacks: {[key:string]:string}) {
        this.name = name;
        this.attacks = attacks;
    }
}