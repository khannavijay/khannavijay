import React, { useRef, useEffect } from 'react';
import './NeuralBrainBackground.css';

const NODE_COUNT = 60;
const LINE_DISTANCE = 120;
const COLORS = ['#64f4ac', '#00bfff', '#fff', '#ff6bcb', '#ffe156'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createNodes(width, height) {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-0.3, 0.3),
    vy: randomBetween(-0.3, 0.3),
    r: randomBetween(2, 4),
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  }));
}

export default function NeuralBrainBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    nodesRef.current = createNodes(width, height);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const a = nodesRef.current[i];
          const b = nodesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.save();
            ctx.globalAlpha = 1 - dist / LINE_DISTANCE;
            ctx.strokeStyle = a.color;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw nodes
      for (let node of nodesRef.current) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 16;
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.restore();
      }
    }

    function update() {
      for (let node of nodesRef.current) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      nodesRef.current = createNodes(width, height);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="neural-brain-bg-canvas" />
  );
} 