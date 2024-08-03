import {
  fetchPeople,
  fetchPlanets,
  fetchFilms,
  fetchShips,
} from '@/app/lib/data';
import { people, planets, ships, films } from './const';

import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();
//@ts-ignore

describe('Page', () => {
  it('fetchPeople returns expected data', async () => {
    //@ts-ignore
    fetch.mockResponseOnce(JSON.stringify(people));
    const data = await fetchPeople(1);
    const rez = {
      ...people,
      next_internal: 2,
      previous_internal: -1,
    };
    expect(data).toEqual(rez);
  });
  it('fetchPlanets returns expected data', async () => {
    //@ts-ignore
    fetch.mockResponseOnce(JSON.stringify(planets));
    const data = await fetchPlanets(1);
    const rez = {
      ...planets,
      next_internal: 2,
      previous_internal: -1,
    };
    expect(data).toEqual(rez);
  });
  it('fetchFilms returns expected data', async () => {
    //@ts-ignore
    fetch.mockResponseOnce(JSON.stringify(films));
    const data = await fetchFilms(1);
    const rez = {
      ...films,
      next_internal: -1,
      previous_internal: -1,
    };
    expect(data).toEqual(rez);
  });
  it('fetchShips returns expected data', async () => {
    //@ts-ignore
    fetch.mockResponseOnce(JSON.stringify(ships));
    const data = await fetchShips(1);
    const rez = {
      ...ships,
      next_internal: 2,
      previous_internal: -1,
    };
    expect(data).toEqual(rez);
  });
});
