interface Pokemon {
    name: string;
    type: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    name: 'Bulbasaur',
    type: "water",
    age: 5
}