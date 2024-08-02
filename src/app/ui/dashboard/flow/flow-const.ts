import {
  DefaultEdgeOptions,
  Edge,
  FitViewOptions,
  Node,
  NodeTypes,
} from 'reactflow';

import {
  CustomEdge,
  CustomNodeFilm,
  CustomNodePerson,
  CustomNodeShip,
} from './nodes/CustomNode';

export const initialNodes: Node[] = [];
export const initialEdges: Edge[] = [];

export const fitViewOptions: FitViewOptions = {
  padding: 0.2,
  minZoom: 0.2,
  maxZoom: 1,
};
export const defaultViewport = { x: 0, y: 0, zoom: 1 };

export const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};
export const edgeTypes = {
  'custom-edge': CustomEdge,
};
export const nodeTypes: NodeTypes = {
  person: CustomNodePerson,
  film: CustomNodeFilm,
  ship: CustomNodeShip,
};
