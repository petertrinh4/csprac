import { useRef, useEffect } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // BFS Visualization
    const cols = Math.floor(width / 20); // More columns for better side coverage
    const rows = Math.floor(height / 20);
    const nodeRadius = 7;
    const hSpacing = width / (cols + 0.2); // Reduce spacing to fill sides
    const vSpacing = height / (rows + 0.2);
    // Node type
    type Node = {
      x: number;
      y: number;
      visited: boolean;
      closed: boolean;
      parent: number | null;
      g: number;
      h: number;
      f: number;
    };
    const nodes: Node[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push({
          x: hSpacing * (c + 1),
          y: vSpacing * (r + 1),
          visited: false,
          closed: false,
          parent: null,
          g: Infinity,
          h: 0,
          f: Infinity,
        });
      }
    }
    // Pathfinding setup
    const startIdx = 0;
    const endIdx = nodes.length - 1;
    if (nodes[startIdx]) {
      nodes[startIdx].g = 0;
      nodes[startIdx].h =
        Math.abs(Math.floor(startIdx / cols) - Math.floor(endIdx / cols)) +
        Math.abs((startIdx % cols) - (endIdx % cols));
      nodes[startIdx].f = nodes[startIdx].h;
    }
    let openSet: number[] = [startIdx];
    let foundPath: number[] = [];

    const neighbors = (idx: number): number[] => {
      const r = Math.floor(idx / cols);
      const c = idx % cols;
      const result: number[] = [];
      const directions: [number, number][] = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
      directions.forEach(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          const neighborIdx = nr * cols + nc;
          if (typeof neighborIdx === 'number' && nodes[neighborIdx] !== undefined) {
            result.push(neighborIdx);
          }
        }
      });
      return result;
    };

    function reconstructPath(idx: number) {
      const path: number[] = [];
      let current: number | null = idx;
      while (current !== null && typeof current === 'number' && nodes[current]) {
        path.push(current);
        const parent: number | null = nodes[current]?.parent ?? null;
        current = typeof parent === 'number' ? parent : null;
      }
      return path.reverse();
    }

    function resetAlgorithm() {
      nodes.forEach(node => {
        node.visited = false;
        node.closed = false;
        node.parent = null;
        node.g = Infinity;
        node.h = 0;
        node.f = Infinity;
      });
      if (nodes[startIdx]) {
        nodes[startIdx].g = 0;
        nodes[startIdx].h =
          Math.abs(Math.floor(startIdx / cols) - Math.floor(endIdx / cols)) +
          Math.abs((startIdx % cols) - (endIdx % cols));
        nodes[startIdx].f = nodes[startIdx].h;
      }
      openSet = [startIdx];
      foundPath = [];
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw edges
      nodes.forEach((node, idx) => {
        neighbors(idx).forEach(nIdx => {
          const neighborNode = nodes[nIdx];
          if (!neighborNode) return;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(neighborNode.x, neighborNode.y);
          ctx.strokeStyle = 'rgba(255,255,255,0.15)';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      });
      // Draw nodes
      nodes.forEach((node, idx) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
        // Gradient: top row is thickest color, bottom is lightest
        const rowIdx = Math.floor(idx / cols);
        const gradientStrength = 1 - rowIdx / (rows - 1);
        let color;
        if (foundPath.includes(idx)) {
          color = '#ffd700'; // gold for path
        } else if (idx === startIdx) {
          color = '#00ff00'; // green for start
        } else if (idx === endIdx) {
          color = '#ff0000'; // red for end
        } else if (node.closed) {
          color = `rgba(255,255,255,${0.5 * gradientStrength + 0.2})`;
        } else if (node.visited) {
          color = `rgba(255,255,255,${0.8 * gradientStrength + 0.2})`;
        } else {
          color = `rgba(255,255,255,${0.2 * gradientStrength + 0.2})`;
        }
        ctx.fillStyle = color;
        ctx.globalAlpha = 1;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
      // A* step (increase speed: do 6 steps per frame)
      const astarStepsPerFrame = 6;
      let finished = false;
      for (let step = 0; step < astarStepsPerFrame; step++) {
        if (openSet.length > 0 && foundPath.length === 0) {
          // Find node with lowest f
          let lowestIdx = openSet[0];
          for (let i = 1; i < openSet.length; i++) {
            const candidateIdx = openSet[i];
            if (
              typeof candidateIdx === 'number' &&
              candidateIdx >= 0 &&
              candidateIdx < nodes.length &&
              typeof lowestIdx === 'number' &&
              lowestIdx >= 0 &&
              lowestIdx < nodes.length
            ) {
              const candidateNode = nodes[candidateIdx];
              const lowestNode = nodes[lowestIdx];
              if (
                candidateNode !== undefined &&
                lowestNode !== undefined &&
                typeof candidateNode.f === 'number' &&
                typeof lowestNode.f === 'number' &&
                candidateNode.f < lowestNode.f
              ) {
                lowestIdx = candidateIdx;
              }
            }
          }
          const currentIdx = lowestIdx;
          if (currentIdx === endIdx) {
            foundPath = reconstructPath(currentIdx);
            finished = true;
            break;
          }
          openSet = openSet.filter(idx => idx !== currentIdx);
          if (typeof currentIdx === 'number' && nodes[currentIdx]) nodes[currentIdx].closed = true;
          if (typeof currentIdx === 'number' && currentIdx >= 0 && currentIdx < nodes.length) {
            neighbors(currentIdx)
              .filter(
                (nIdx): nIdx is number => typeof nIdx === 'number' && nodes[nIdx] !== undefined
              )
              .forEach(nIdx => {
                const neighborNode = nodes[nIdx];
                if (
                  !neighborNode ||
                  neighborNode.closed ||
                  !(typeof currentIdx === 'number' && nodes[currentIdx] !== undefined)
                )
                  return;
                const tentativeG = nodes[currentIdx]!.g + 1;
                if (!neighborNode.visited || tentativeG < neighborNode.g) {
                  neighborNode.visited = true;
                  neighborNode.parent = typeof currentIdx === 'number' ? currentIdx : null;
                  neighborNode.g = tentativeG;
                  neighborNode.h =
                    Math.abs(Math.floor(nIdx / cols) - Math.floor(endIdx / cols)) +
                    Math.abs((nIdx % cols) - (endIdx % cols));
                  neighborNode.f = neighborNode.g + neighborNode.h;
                  if (!openSet.includes(nIdx)) {
                    openSet.push(nIdx);
                  }
                }
              });
          }
        }
      }
      if (finished) {
        setTimeout(() => {
          resetAlgorithm();
        }, 1200); // Pause before repeating
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: '#a06a7b', display: 'block' }}
    />
  );
};
export default Background;
