import React from "react";
import {Box} from '@chakra-ui/react';
import SvgIcon from "./common/SvgIcon";

export const Footer: React.FC = () => {
    return (
        <Box>
            <h1>FOOTER</h1>
            <SvgIcon name="Instagram" />
            <SvgIcon name="GooglePlay" />
            <SvgIcon name="Gmail" />
        </Box>
    )
}

