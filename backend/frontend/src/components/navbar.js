import { Text, Flex, HStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io"
import { FaHouse } from "react-icons/fa6"

const Navbar = () => {

    const nav = useNavigate();

    const handleNavigate = (route) => {
        nav(`/${route}`)
    }

    return (
        <Flex w='100vw' h='90px' bg='blue.600' justifyContent='center' alignItems='center'>
            <HStack w='90%' justifyContent='space-between' color='white'>
                <Text fontSize='24px' fontWeight='bold'>SocialHub</Text>
                <HStack gap='20px'>
                    <Text onClick={(route) => handleNavigate('/dilyaniliev')}><IoPersonOutline size='20px'/></Text>
                    <Text onClick={(route) => handleNavigate('create/post')}><IoMdAddCircleOutline size='22px'/></Text>
                    <Text onClick={(route) => handleNavigate('')}><FaHouse size='20px'/></Text>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default Navbar;