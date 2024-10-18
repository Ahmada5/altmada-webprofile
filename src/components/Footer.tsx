import React from "react";
import {Box, Flex, Link, Text} from '@chakra-ui/react';

export const Footer: React.FC = () => {
    return (
        <Box textAlign="center" padding="20px">
            <Text fontSize="lg" fontWeight="bold">
                connect with us in our social media
            </Text>
            <Flex justifyContent="center" gap="10px">
                <Link color='brand.200' href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                </Link>
                <Link color="brand.200" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </Link>
            </Flex>
            <Text fontSize="md" color="brand.900" fontFamily="body">
                &copy; {new Date().getFullYear()} All rights reserved. Made with Chakra UI.
            </Text>
        </Box>
    )
}
