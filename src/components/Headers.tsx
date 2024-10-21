import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import Earth from '../components/models/Earth';

interface HeadersProps {
    cameraPosition?: [number, number, number];
    canvasBackground?: string;
    objectSize?: [number, number, number];
    canvasSize?: [number, number];
    end?: number;
    speed?: number;
    step?: number;
}

export const Headers: React.FC<HeadersProps> = ({
                                                    cameraPosition = [0, 9, 5],
                                                    canvasBackground = '#ff00ff00',
                                                    canvasSize = [1090, 800],
                                                    end = 10,             // Default end value for the counter
                                                    speed = 50,          // Default speed for the counter (in milliseconds)
                                                    step = 0.001,         // Default step value (e.g. increment by 0.001)
                                                }) => {
    const [count, setCount] = useState(0); // Initialize count to 0

    useEffect(() => {
        const incrementCount = () => {
            setCount((prevCount) => {
                if (prevCount + step <= end) {
                    return parseFloat((prevCount + step).toFixed(3)); // Increment by step size, ensure 3 decimal precision
                } else {
                    clearInterval(intervalId);
                    return prevCount;
                }
            });
        };

        const intervalId = setInterval(incrementCount, speed);
        return () => clearInterval(intervalId);
    }, [end, speed, step]);

    return (
        <Canvas
            style={{
                backgroundColor: canvasBackground,
                width: `${canvasSize[0]}px`,
                height: `${canvasSize[1]}px`,
            }}
        >
            <PerspectiveCamera makeDefault position={cameraPosition}/>
            <OrbitControls/>
            <ambientLight intensity={0.3}/>
            <directionalLight position={[10, 10, 5]} intensity={1}/>
            <Earth rotation={[0, 0, 0]}/>
        </Canvas>
    );
};
