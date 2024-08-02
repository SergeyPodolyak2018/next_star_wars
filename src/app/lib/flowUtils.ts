import { Edge, MarkerType, Node } from 'reactflow';
import { TNodeInitial, TTypeNode } from './node.types';
import { TAgregatedData } from './definitions';

type TTempData<T> = {
  [key: number | string]: T;
};

export const idCreator = (type: TTypeNode, id: number | string): string => {
  return type + '_' + id;
};
const idGeter = (id: string): number => {
  return Number(id.split('_')[1]);
};
const idCreatorDuplex = (id: string, id2: string): string => {
  return id + '-' + id2;
};

const getPosition = (
  id: number | string,
  type: TTypeNode,
  incrementor: number
): TNodeInitial['position'] => {
  if (type === 'person') {
    return {
      x: 250,
      y: 10,
    };
  }
  if (type === 'film') {
    return {
      x: 20 + incrementor * 300,
      y: 300,
    };
  }
  return {
    x: 20 + incrementor * 300,
    y: 600,
  };
};

export const getNodesFromConfig = (config: TAgregatedData): Node[] => {
  const tempPerson: TTempData<Node> = {};
  const tempFilms: TTempData<Node> = {};
  const tempShips: TTempData<Node> = {};
  let incrementator = 0;
  tempPerson[config.person.id] = {
    id: idCreator('person', config.person.id),
    type: 'person',
    data: { name: config.person.name, id: config.person.id },
    position: getPosition(config.person.id, 'person', 0),
  };
  for (const iterator of config.films) {
    tempFilms[iterator.id] = {
      id: idCreator('film', iterator.id),
      type: 'film',
      data: { name: iterator.title, id: iterator.id },
      position: getPosition(iterator.id, 'film', incrementator),
    };
    incrementator = incrementator + 1;
  }
  incrementator = 0;
  for (const iterator of config.ships) {
    tempShips[iterator.id] = {
      id: idCreator('ship', iterator.id),
      type: 'ship',
      data: { name: iterator.name, id: iterator.id },
      position: getPosition(iterator.id, 'ship', incrementator),
    };
    incrementator = incrementator + 1;
  }

  const result = [
    ...Object.values(tempPerson),
    ...Object.values(tempFilms),
    ...Object.values(tempShips),
  ];
  return result;
};

export const getEdgesFromConfig = (config: TAgregatedData): Edge[] => {
  const result: Edge[] = [];
  const personid = idCreator('person', config.person.id);
  for (const iterator of config.films) {
    const filmid = idCreator('film', iterator.id);
    const connection1: Edge = {
      id: idCreatorDuplex(personid, filmid),
      source: personid,
      target: filmid,
      style: {
        strokeWidth: 2,
        stroke: 'rgba(73, 216, 73, 0.658)',
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
      type: 'custom-edge',
      animated: false,
    };
    result.push(connection1);
  }
  for (const ship of config.ships) {
    const shipId = idCreator('ship', ship.id);
    for (const film of config.films) {
      const filmid = idCreator('film', film.id);
      if (film.starships.includes(ship.id)) {
        const connection2: Edge = {
          id: idCreatorDuplex(filmid, shipId),
          source: filmid,
          target: shipId,
          style: {
            strokeWidth: 2,
            stroke: 'rgb(162, 162, 35)',
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
          type: 'custom-edge',
          animated: false,
        };
        result.push(connection2);
      }
    }
  }

  return result;
};
