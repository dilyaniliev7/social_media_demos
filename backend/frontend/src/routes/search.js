import { VStack, Flex, HStack, Input, Button, Box, Image, FormLabel, Heading, Text } from "@chakra-ui/react";
import { useState } from 'react'
import { search_users } from "../api/endpoints"
import { SERVER_URL } from '../api/endpoints'

const Search = () => {

    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])

    const handleSearch = async () => {
        const users = await search_users(search)
        setUsers(users)
    }

    return (
        <Flex w='100%' justifyContent='center' pt='50px'>
            <VStack w='95%' maxW='500px' alignItems='start' gap='20px'>
                <Heading>Search Users</Heading>
                <HStack w='100%' gap='0'>
                    <Input onChange={(e) => setSearch(e.target.value)} bg='white'/>
                    <Button  onClick={handleSearch}colorScheme='blue'>Search</Button>
                </HStack>
                <VStack w='100%'>
                    {
                        users.map((user) => {
                            return <UserProfile  username={user.username} profile_image={user.profile_image} first_name={user.first_name} last_name={user.last_name}/>
                        })
                    }
                </VStack>
            </VStack>
        </Flex>
    )
}

const UserProfile = ({username, profile_image, first_name, last_name}) => {
    return (
        <Flex>
            <HStack>

                <Box boxSize='70px' borderRadius='full' overflow='hidden' bg='white' border='1px solid'>
                    <Image src={`${SERVER_URL}${profile_image}`}/>
                </Box>

                <VStack>
                    <Text>{first_name} {last_name}</Text>
                    <Text>{username}</Text>
                </VStack>

            </HStack>
        </Flex>
    )
}

export default Search