import React from 'react';
import {
  BaseEdge,
  EdgeProps,
  getBezierPath,
  Handle,
  Node,
  NodeProps,
  Position,
} from 'reactflow';

import styles from './customNode.module.css';
import Image from 'next/image';
import { IMAGES } from '../../../../lib/const';

type TNodeData = {
  id: number;
  name: string;
};

export type TCustomNode = Node<TNodeData>;

export const CustomNodePerson = ({ data }: NodeProps<TNodeData>) => {
  return (
    <div className={styles.nodePerson}>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.photo}>
          <Image
            src={`${IMAGES.people}${data.id}.jpg`}
            width={50}
            height={50}
            alt='Picture of the person'
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Handle
          type='source'
          position={Position.Bottom}
        />
      </div>
    </div>
  );
};

export const CustomNodeFilm = ({ data }: NodeProps<TNodeData>) => {
  return (
    <div className={styles.nodePerson}>
      <div className={styles.header}>
        <Handle
          type='target'
          position={Position.Top}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.photo}>
          <Image
            src={`${IMAGES.films}${data.id}.jpg`}
            width={50}
            height={50}
            alt='Picture of the film'
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Handle
          type='source'
          position={Position.Bottom}
        />
      </div>
    </div>
  );
};
export const CustomNodeShip = ({ data }: NodeProps<TNodeData>) => {
  return (
    <div className={styles.nodePerson}>
      <div className={styles.header}>
        <Handle
          type='target'
          position={Position.Top}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.photo}>
          <Image
            src={`${IMAGES.ships}${data.id}.jpg`}
            width={50}
            height={50}
            alt='Picture of the ship'
          />
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  selected,
  style,
  markerEnd,
  sourcePosition,
  targetPosition,
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{ ...style, stroke: selected ? 'red' : style?.stroke }}
        markerEnd={markerEnd}
      />
    </>
  );
};