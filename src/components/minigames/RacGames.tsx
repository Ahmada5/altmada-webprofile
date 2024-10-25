// RectangleGame.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';

const RectangleGame: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [size] = useState({ width: 50, height: 50 });

    const handleKeyPress = (event: KeyboardEvent) => {
        const speed = 5; // Speed of movement
        switch (event.key) {
            case 'w': // Move up
                setPosition(prev => ({ ...prev, y: Math.max(0, prev.y - speed) }));
                break;
            case 's': // Move down
                setPosition(prev => ({ ...prev, y: Math.min(300 - size.height, prev.y + speed) }));
                break;
            case 'a': // Move left
                setPosition(prev => ({ ...prev, x: Math.max(0, prev.x - speed) }));
                break;
            case 'd': // Move right
                setPosition(prev => ({ ...prev, x: Math.min(900 - size.width, prev.x + speed) }));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas?.getContext('2d');

        // Clear the canvas
        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            // Draw the rectangle
            context.fillStyle = 'orange';
            context.fillRect(position.x, position.y, size.width, size.height);
        }

        // Attach keypress event
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [position]);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
            <canvas
                ref={canvasRef}
                width={900}
                height={300}
                style={{ border: '1px solid black' }}
            />
        </Box>
    );
};

export default RectangleGame;
