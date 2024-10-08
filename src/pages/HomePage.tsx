import React from "react";
import {Box} from "@chakra-ui/react";
import {Headers} from "../components/Headers.tsx";
import {OurApps} from "../components/OurApps.tsx";
import {Footer} from "../components/Footer.tsx";

const HelloMessage: React.FC = () => {
    return (
        <Box>
            <Box
                bg='tomato'
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <div>
                    <Headers/>
                </div>
            </Box>
            <Box
                bg='pink'
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <div>
                    <OurApps/>
                </div>
            </Box>
            <Box
                bg='green'
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="30vh"
            >
                <div>
                    <Footer/>
                </div>
            </Box>
        </Box>
    );
};

export default HelloMessage;
