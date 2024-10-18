import React from "react";
import SvgIcon from "./common/SvgIcon.tsx";
import {
    Box, Button,
    Card,
    CardBody,
    CardFooter,
    Divider, Flex,
    Heading, Image, SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/react';

export const OurApps: React.FC = () => {
    return (
        <Box w='100%' p={4} color='white'>
            <SimpleGrid columns={3} spacing={4} >
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Game ones</Heading>
                            <Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                FREE
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter flex={2} justifyContent="center">
                        <Flex align="center">
                            <Button ml={3}>
                                <SvgIcon name="GooglePlay" size={20} />
                                <Text fontWeight="bold" ml={3}>Play now</Text>
                            </Button>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Game two</Heading>
                            <Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                FREE
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter flex={2} justifyContent="center">
                        <Flex align="center">
                            <Button ml={3}>
                                <SvgIcon name="GooglePlay" size={20} />
                                <Text fontWeight="bold" ml={3}>Play now</Text>
                            </Button>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Game three</Heading>
                            <Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                FREE
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter flex={2} justifyContent="center">
                        <Flex align="center">
                            <Button ml={3}>
                                <SvgIcon name="GooglePlay" size={20} />
                                <Text fontWeight="bold" ml={3}>Play now</Text>
                            </Button>
                        </Flex>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    )
}

