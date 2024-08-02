export type TPatch<T> = T & {
  next_internal: number;
  previous_internal: number;
};

export type TPagination = {
  next: string | null;
  previous: string | null;
};

export type TPeople = {
  count: number;
  results: TPerson[];
} & TPagination;

export type TPerson = {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: number;
  films: number[];
  species: number[];
  vehicles: number[];
  starships: number[];
  created: string;
  edited: string;
  url: string;
};

export type TParametr = {
  name: string;
  value: string;
};

export type TPlanets = {
  count: number;
  results: TPlanet[];
} & TPagination;

export type TPlanet = {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: number[];
  films: number[];
  created: string;
  edited: string;
  url: string;
};

export type TVehicls = {
  count: number;
  results: TPlanet[];
} & TPagination;

export type TVehicl = {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: number[];
  films: number[];
  created: string;
  edited: string;
  url: string;
};
export type TFilms = {
  count: number;
  results: TFilm[];
} & TPagination;

export type TFilm = {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: number[];
  planets: number[];
  starships: number[];
  vehicles: number[];
  species: number[];
  created: string;
  edited: string;
  url: string;
};

export type TAgregatedData = {
  person: TPerson;
  films: TFilm[];
  ships: TVehicl[];
};
