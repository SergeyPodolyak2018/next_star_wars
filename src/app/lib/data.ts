import {
  TAgregatedData,
  TFilm,
  TFilms,
  TPeople,
  TPerson,
  TPlanet,
  TPlanets,
  TVehicl,
  TVehicls,
} from './definitions';
import { URLS } from './const';
import { addParamsToUrl, addNextPrevious } from './utils';

export async function fetchPeople(page?: number) {
  try {
    const url = addParamsToUrl(URLS.people, [
      { name: 'page', value: String(page) },
    ]);

    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });

    const rez: TPeople = await data.json();
    const patchRez = addNextPrevious(rez);
    return patchRez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch people.');
  }
}
export async function fetchPeopleById(id: number) {
  try {
    const url = addParamsToUrl(URLS.people + `/${id}`, []);
    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });
    const rez: TPerson = await data.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch people by id.');
  }
}

export async function fetchPlanets(page?: number) {
  try {
    const url = addParamsToUrl(URLS.planets, [
      { name: 'page', value: String(page) },
    ]);

    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });

    const rez: TPlanets = await data.json();
    const patchRez = addNextPrevious(rez);
    return patchRez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch planets.');
  }
}
export async function fetchPlanetsById(id: number) {
  try {
    const url = addParamsToUrl(URLS.planets + `/${id}`, []);
    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });
    const rez: TPlanet = await data.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch planets by Id.');
  }
}

export async function fetchShips(page?: number) {
  try {
    const url = addParamsToUrl(URLS.ships, [
      { name: 'page', value: String(page) },
    ]);

    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });

    const rez: TVehicls = await data.json();
    const patchRez = addNextPrevious(rez);
    return patchRez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch ships.');
  }
}

export async function fetchShipsById(id: number) {
  try {
    const url = addParamsToUrl(URLS.ships + `/${id}`, []);
    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });
    const rez: TVehicl = await data.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch ships by id.');
  }
}

export async function fetchFilms(page?: number) {
  try {
    const url = addParamsToUrl(URLS.films, [
      { name: 'page', value: String(page) },
    ]);

    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });

    const rez: TFilms = await data.json();
    const patchRez = addNextPrevious(rez);
    return patchRez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch ships.');
  }
}

export async function fetchFilmsById(id: number) {
  try {
    const url = addParamsToUrl(URLS.films + `/${id}`, []);
    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });
    const rez: TFilm = await data.json();
    return rez;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch film by id.');
  }
}

export async function fetchPersonById(id: string) {
  try {
    const personRezult: TPerson = await fetchPeopleById(parseInt(id));
    const filmsPromises = personRezult.films.map((el) => fetchFilmsById(el));
    const filmresp = await Promise.allSettled(filmsPromises);
    const films: TFilm[] = [];
    for (const el of filmresp) {
      if (el.status === 'fulfilled') {
        films.push(el.value);
      }
    }
    const shipsArr: number[] = [];
    films.forEach((el) => {
      shipsArr.push(...el.starships);
    });
    const starShipsSet = new Set(shipsArr);
    const shipsId = personRezult.starships.map((el) => {
      if (starShipsSet.has(el)) {
        return el;
      }
    });
    const shipsPromises = shipsId.map((el) => {
      if (el) return fetchShipsById(el);
    });
    const shipsData: TVehicl[] = [];
    const shipsresp = await Promise.allSettled(shipsPromises);
    for (const el of shipsresp) {
      if (el.status === 'fulfilled' && el.value) {
        shipsData.push(el.value);
      }
    }
    const finalData: TAgregatedData = {
      person: personRezult,
      films,
      ships: shipsData,
    };

    return finalData;
  } catch (error) {
    console.error('Third API Error:', error);
    throw new Error('Failed to fetch agregated data.');
  }
}
