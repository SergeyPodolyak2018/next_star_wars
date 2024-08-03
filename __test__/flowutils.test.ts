import { EDGE_COLORS } from '@/app/lib/const';
import {
  idCreator,
  idCreatorDuplex,
  getPosition,
  createNode,
  createEdge,
} from '@/app/lib/flowUtils';

describe('Flow utils', () => {
  it(' idCreator returns expected data', async () => {
    const data = idCreator('film', 1);
    expect(data).toEqual('film_1');
  });
  it(' idCreatorDuplex returns expected data', async () => {
    const data = idCreatorDuplex('film_1', 'ship_2');
    expect(data).toEqual('film_1-ship_2');
  });
  it(' getPosition returns expected data', async () => {
    const incrementor = 1;
    const data = getPosition(1, 'person', incrementor);
    const data2 = getPosition(1, 'film', incrementor);
    const data3 = getPosition(1, 'ship', incrementor);
    const expectedPerson = {
      x: 250,
      y: 10,
    };
    const expectedfilm = {
      x: 20 + incrementor * 300,
      y: 300,
    };
    const expectedShip = {
      x: 20 + incrementor * 300,
      y: 600,
    };
    expect(data).toEqual(expectedPerson);
    expect(data2).toEqual(expectedfilm);
    expect(data3).toEqual(expectedShip);
  });
  it('createNode returns expected data', async () => {
    const data = createNode(1, 'film', { name: 'test', id: 1 }, 0);
    const expectedData = {
      id: 'film_1',
      type: 'film',
      data: { name: 'test', id: 1 },
      position: {
        x: 20,
        y: 300,
      },
    };
    expect(data).toEqual(expectedData);
  });
  it('createEdge returns expected data', async () => {
    const data = createEdge('test_1', 'test_2', EDGE_COLORS.film);
    const expectedData = {
      id: 'test_1-test_2',
      source: 'test_1',
      target: 'test_2',
      style: {
        strokeWidth: 2,
        stroke: EDGE_COLORS.film,
      },
      markerEnd: {
        type: 'arrowclosed',
      },
      type: 'custom-edge',
      animated: false,
    };
    expect(data).toEqual(expectedData);
  });
});
