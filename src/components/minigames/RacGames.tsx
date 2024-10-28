import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import MainCharacter from "./GamesComponents.tsx";

// Game logic with gravity and jumping
const Game: React.FC = () => {
    const [position, setPosition] = useState({ x: 50, y: 200 });
    const [velocity, setVelocity] = useState(0);
    const [isJumping, setIsJumping] = useState(false);

    const rectangleSize = { width: 30, height: 70 };
    const gravity = 1;  // Gravity force
    const jumpStrength = -100;  // Initial velocity for jump
    const groundLevel = 200;  // Ground level on canvas

    const handleKeyPress = (event: KeyboardEvent) => {
        console.log(position)
        const speed = 1;
        if (event.key === 'a') {
            setPosition(prev => ({ ...prev, x: Math.max(0, prev.x - speed) }));  // Move left
        } else if (event.key === 'd') {
            setPosition(prev => ({ ...prev, x: Math.min(300 - rectangleSize.width, prev.x + speed) }));  // Move right
        } else if (event.key === 'w' && !isJumping) {
            setVelocity(jumpStrength);  // Apply jump force
            setIsJumping(true);  // Set jumping flag
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isJumping]);

    useEffect(() => {
        // Gravity effect and position update
        const gameLoop = setInterval(() => {
            setPosition(prev => {
                const newY = prev.y + velocity;
                if (newY >= groundLevel) {
                    // Stop at ground level
                    setIsJumping(false);
                    return { ...prev, y: groundLevel };
                } else {
                    return { ...prev, y: newY };
                }
            });
            setVelocity(prev => (position.y < groundLevel ? prev + gravity : 0));
        }, 20);

        return () => clearInterval(gameLoop);
    }, [position.y, velocity]);

    return (
        <svg width="300" height="300" style={{ border: '1px solid black' }}>
            <MainCharacter positionX={position.x} positionY={position.y} widthObject={rectangleSize.width} heightObject={rectangleSize.height}/>
        </svg>
    );
};

// Final game container
const FinalGame: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
            <Game />
        </Box>
    );
};

export default FinalGame;
