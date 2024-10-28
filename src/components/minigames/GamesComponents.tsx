//Main character
import React from "react";

const MainCharacter: React.FC<{positionX:number; positionY:number; widthObject:number; heightObject:number;}> = ({ positionX, positionY, widthObject, heightObject }) => {
    return <rect x={positionX} y={positionY} width={widthObject} height={heightObject} fill="red" />
};

export default MainCharacter;
