
export interface ILocation {
    id:                 number;
    url:                string;
    name:               string;
    coordinate?:        Coordinate
    names:              Name[];
    pokemon_encounters: PokemonEncounter[];
}

interface Coordinate {
    latitude: number;
    longitude: number;
}

interface Name {
    language: Language;
    name:     string;
}

interface Language {
    name: string;
    url:  string;
}

interface PokemonEncounter {
    base_score:      number;
    pokemon_species: Language;
    rate:            number;
    coordinate?:     Coordinate
}
