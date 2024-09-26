import React from "react";
import { Box, Text } from "@chakra-ui/react";

const HelloMessage: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Text fontSize="2xl" fontWeight="bold"> {}
                testing awal
            </Text>
        </Box>
    );
};

export default HelloMessage;
