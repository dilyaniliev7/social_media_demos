import { Text, VStack, Flex, Box, Heading, HStack, Image, Button } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
const UserProfile = () => {

    const get_username_from_url = () => {
        const url_split = window.location.pathname.split('/');
        return url_split[url_split.length-1]
    }

    const [username, setUsername] = useState(get_username_from_url())
    useEffect(() => {
        setUsername(get_username_from_url())
    }, [])
    return (
        <Flex w='100%' justifyContent='center'>
            <VStack w='75%'>
                <Box w='100%' mt='40px'>
                    <UserDetails username={username}/>
                </Box>
            </VStack>
        </Flex>
    )
}

const UserDetails = ({username}) => {
    return (
        <VStack w='100%' alignItems='start' gap='40px'>
            <Heading>@{username}</Heading>
            <HStack gap='20px'>
                <Box boxSize='150px' border='2px solid' borderColor='gray.700' bg='white' borderRadius='full' overflow='hidden'>
                    <Image src="http://127.0.0.1:8000/api/media/profile_image/" boxSize='100%' objectFit='cover'/>
                </Box>
                <VStack gap='20px'>
                    <HStack gap='20px' fontSize='18px'>
                        <VStack>
                            <Text>Followers</Text>
                            <Text>0</Text>
                        </VStack>
                        <VStack>
                            <Text>Following</Text>
                            <Text>0</Text>
                        </VStack>
                    </HStack>
                    <Button w='100%'>Edit Profile</Button>
                </VStack>
            </HStack>
            <Text fontSize='18px'>Hi its dilyaniliev</Text>
        </VStack>
    )
}

export default UserProfile