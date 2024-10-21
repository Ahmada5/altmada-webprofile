import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {PerspectiveCamera} from '@react-three/drei';

interface HeadersProps {
    cameraPosition?: [number, number, number];
    canvasBackground?: string;
    objectSize?: [number, number, number];
    canvasSize?: [number, number];
}

export const Headers: React.FC<HeadersProps> = ({
                                                    cameraPosition = [0, 0, 5],
                                                    canvasBackground = '#ff00ff00',
                                                    objectSize = [1, 1, 1],
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

            <mesh>
                <boxGeometry args={objectSize}/>
                <meshNormalMaterial/>
            </mesh>
        </Canvas>
    );
};
