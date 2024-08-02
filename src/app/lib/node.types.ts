export type TTypeNode = 'person' | 'film' | 'ship';
export type TNodeData = {
  value: number;
  label: string;
};

export type TNodeInitial = {
  id: string;
  type: TTypeNode;
  data: TNodeData;
  position: { x: number; y: number };
};
