import React from "react";
import {Box, Flex, Link, Text} from '@chakra-ui/react';

export const Footer: React.FC = () => {
    return (
        <Box textAlign="center" padding="20px">
            <Text fontSize="lg" fontWeight="bold">
                connect with us in our social media
            </Text>
            <Flex justifyContent="center" gap="10px">
                <Link color='white' href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                </Link>
                <Link color='white' href="https://google.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </Link>
            </Flex>
        </Box>
    )
}
