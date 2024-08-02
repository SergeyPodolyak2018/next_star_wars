import {
  TAgregatedData,
  TFilm,
  TFilms,
  TPeople,
  TPerson,
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

export async function fetchPersonById(id: string) {
  try {
    const url = addParamsToUrl(URLS.people + `/${id}`, []);

    const data = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });

    const personRezult: TPerson = await data.json();
    const filmsurl = personRezult.films.map((el) =>
      addParamsToUrl(URLS.films + `/${el}`, [])
    );
    const filmsPromises = filmsurl.map((el) =>
      fetch(el, {
        signal: AbortSignal.timeout(5000),
      })
    );
    const filmresp = await Promise.allSettled(filmsPromises);
    const films: TFilm[] = [];
    for (const el of filmresp) {
      if (el.status === 'fulfilled') {
        const tempObj = await el.value.json();
        films.push(tempObj);
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
    const shipsurl = shipsId.map((el) =>
      addParamsToUrl(URLS.ships + `/${el}`, [])
    );
    const shipsPromises = shipsurl.map((el) =>
      fetch(el, {
        signal: AbortSignal.timeout(5000),
      })
    );
    const shipsData: TVehicl[] = [];
    const shipsresp = await Promise.allSettled(shipsPromises);
    for (const el of shipsresp) {
      if (el.status === 'fulfilled') {
        const tempObj = await el.value.json();
        shipsData.push(tempObj);
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
    throw new Error('Failed to fetch ships.');
  }
}
