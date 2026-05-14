import { VStack, Text, HStack, Flex, Button, Box } from "@chakra-ui/react"
import { FaHeart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'

const Post = ({username, description, formatted_date, likes, like_count}) => {
    return (
        <VStack w='400px' h='400px' border='1px solid' borderColor='gray.400' borderRadius='8px'>
            <HStack w='100%' flex='1' borderBottom='1px solid' borderColor='gray.300' p='0 20px' bg='gray.50' borderRadius='8px 8px 0 0'>
                <Text>@{username}</Text>
            </HStack>
            <Flex flex='6' w='100%' h='100%' justifyContent='center' alignItems='center'>
                <Text textAlign='center'>{description}</Text>
            </Flex>
            <Flex flex='2' w='100%' justifyContent='center' alignItems='center' borderTop='1px solid' bg='gray.50' borderColor='gray.400' borderRadius='0 0 8px 8px'>
                <HStac w='90%' justifyContent='space-between'>
                    <HStack>
                        <Box>
                            <FaRegHeart />
                        </Box>
                        <Text>{like_count</Text>
                    </HStack>
                    <Text>{formatted_date}</Text>
                </HStack>
            </Flex>
        </VStack>
    )
}

export default Post;