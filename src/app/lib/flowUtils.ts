import { Edge, MarkerType, Node } from 'reactflow';
import { TNodeInitial, TTypeNode } from './node.types';
import { TAgregatedData } from './definitions';
import { EDGE_COLORS } from './const';

type TTempData<T> = {
  [key: number | string]: T;
};

type TNodeData = {
  name: string;
  id: number;
};

export const idCreator = (type: TTypeNode, id: number | string): string => {
  return type + '_' + id;
};
export const idCreatorDuplex = (id: string, id2: string): string => {
  return id + '-' + id2;
};

export const getPosition = (
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

export const createNode = (
  id: number,
  type: TTypeNode,
  data: TNodeData,
  increment: number
) => ({
  id: idCreator(type, id),
  type: type,
  data: data,
  position: getPosition(id, type, increment),
});

export const getNodesFromConfig = (config: TAgregatedData): Node[] => {
  const tempPerson: TTempData<Node> = {};
  const tempFilms: TTempData<Node> = {};
  const tempShips: TTempData<Node> = {};
  let incrementator = 0;
  tempPerson[config.person.id] = createNode(
    config.person.id,
    'person',
    { name: config.person.name, id: config.person.id },
    0
  );
  for (const iterator of config.films) {
    tempFilms[iterator.id] = createNode(
      iterator.id,
      'film',
      { name: iterator.title, id: iterator.id },
      incrementator
    );
    incrementator = incrementator + 1;
  }
  incrementator = 0;
  for (const iterator of config.ships) {
    tempShips[iterator.id] = createNode(
      iterator.id,
      'ship',
      { name: iterator.name, id: iterator.id },
      incrementator
    );
    incrementator = incrementator + 1;
  }

  const result = [
    ...Object.values(tempPerson),
    ...Object.values(tempFilms),
    ...Object.values(tempShips),
  ];
  return result;
};

export const createEdge = (
  idSource: string,
  idTarget: string,
  color: string
): Edge => ({
  id: idCreatorDuplex(idSource, idTarget),
  source: idSource,
  target: idTarget,
  style: {
    strokeWidth: 2,
    stroke: color,
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
  type: 'custom-edge',
  animated: false,
});

export const getEdgesFromConfig = (config: TAgregatedData): Edge[] => {
  const result: Edge[] = [];
  const personid = idCreator('person', config.person.id);
  for (const iterator of config.films) {
    const filmid = idCreator('film', iterator.id);
    const connection1: Edge = createEdge(personid, filmid, EDGE_COLORS.film);
    result.push(connection1);
  }
  for (const ship of config.ships) {
    const shipId = idCreator('ship', ship.id);
    for (const film of config.films) {
      const filmid = idCreator('film', film.id);
      if (film.starships.includes(ship.id)) {
        const connection2 = createEdge(filmid, shipId, EDGE_COLORS.ship);
        result.push(connection2);
      }
    }
  }

  return result;
};
