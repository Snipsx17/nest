
function MyDecorator() {
    return function( target: Function ) {
        console.log(target);
        return Pokemon;
    }
}

@MyDecorator()
export class Pokemon {
  
    constructor(
        public readonly id: number, 
        public name: string,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

}

export const charmander = new Pokemon(4, 'Charmander');