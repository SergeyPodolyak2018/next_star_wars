'use client';
import React, { useState, useEffect, useCallback } from 'react';

import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  ReactFlowInstance,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {
  defaultEdgeOptions,
  defaultViewport,
  edgeTypes,
  fitViewOptions,
  initialEdges,
  initialNodes,
  nodeTypes,
} from './flow-const';
import { getEdgesFromConfig, getNodesFromConfig } from '../../../lib/flowUtils';
import { TAgregatedData } from '../../../lib/definitions';
import Loader from '../loader';
import styles from './flowchart.module.css';

export default function FlowChart(props: { data: TAgregatedData }) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [loading, setLoading] = useState<boolean>(true);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>();

  useEffect(() => {
    setNodes(getNodesFromConfig(props.data));
    setEdges(getEdgesFromConfig(props.data));
    setLoading(false);
  }, []);

  useEffect(() => {
    reactFlowInstance?.fitView();
  }, [reactFlowInstance]);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );
  // const data = await fetchPersonById(id);

  // if (!invoice) {
  //   notFound();
  // }
  //console.log(props.edge);

  return (
    <>
      {loading ? (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitViewOptions={fitViewOptions}
          defaultEdgeOptions={defaultEdgeOptions}
          nodeTypes={nodeTypes}
          defaultViewport={defaultViewport}
          onInit={(instance) => setReactFlowInstance(instance)}
          fitView
        />
      )}
    </>
  );
}
