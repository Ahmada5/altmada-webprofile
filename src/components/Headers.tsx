import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import Earth from '../components/models/Earth';

interface HeadersProps {
    cameraPosition?: [number, number, number];
    canvasBackground?: string;
    objectSize?: [number, number, number];
    canvasSize?: [number, number];
}

export const Headers: React.FC<HeadersProps> = ({
                                                    cameraPosition = [0, 9, 5],
                                                    canvasBackground = '#ff00ff00',
                                                    canvasSize = [1090, 800],
                                                }) => {
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
