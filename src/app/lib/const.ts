export const URLS = {
  people: 'https://sw-api.starnavi.io/people',
  planets: 'https://sw-api.starnavi.io/planets',
  ships: 'https://sw-api.starnavi.io/starships',
  films: 'https://sw-api.starnavi.io/films',
};

export const LINKS = [
  { name: 'Home', href: '/' },
  {
    name: 'People',
    href: '/dashboard/people',
  },
  { name: 'Planets', href: '/dashboard/planets' },
  { name: 'Star Ships', href: '/dashboard/starships' },
  { name: 'Films', href: '/dashboard/films' },
];

export const LINK_TO_UNIT = {
  people: '/dashboard/people/',
  planets: '/dashboard/planets/',
  ships: '/dashboard/starships/',
  films: '/dashboard/films/',
};

export const FIELDS = {
  people: ['name', 'height', 'mass', 'hair_color', 'skin_color', 'gender'],
  planets: [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'population',
  ],
  ships: [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'max_atmosphering_speed',
    'passengers',
    'starship_class',
  ],
  films: ['title', 'director', 'producer', 'release_date'],
};

export const IMAGES = {
  people: 'https://starwars-visualguide.com/assets/img/characters/',
  planets: 'https://starwars-visualguide.com/assets/img/planets/',
  ships: 'https://starwars-visualguide.com/assets/img/starships/',
  films: 'https://starwars-visualguide.com/assets/img/films/',
  error: 'https://starwars-visualguide.com/assets/img/placeholder',
};

export const EDGE_COLORS = {
  film: 'rgba(73, 216, 73, 0.658)',
  ship: 'rgb(162, 162, 35)',
};
