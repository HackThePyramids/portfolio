import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import './AnimatedBackground.css';
export default function AnimatedBackground() {
    const canvasRef = useRef(null);
    const nodesRef = useRef([]);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const nodeCount = 20;
        nodesRef.current = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: 1.5,
        }));
        const maxDistance = 300;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const nodes = nodesRef.current;
            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;
                if (node.x < 0 || node.x > canvas.width)
                    node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height)
                    node.vy *= -1;
                node.x = Math.max(0, Math.min(canvas.width, node.x));
                node.y = Math.max(0, Math.min(canvas.height, node.y));
            });
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3;
                        ctx.strokeStyle = `rgba(31, 203, 255, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
            nodes.forEach((node) => {
                ctx.fillStyle = 'rgba(31, 203, 255, 0.6)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };
        animate();
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return _jsx("canvas", { ref: canvasRef, className: "animated-background" });
}
