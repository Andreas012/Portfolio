import { Avatar, Text, Button, IconButton, Container, Box } from '@chakra-ui/react'
import GithubLogo from '../../Assets/GithubLogo';

import './Presentation.css';

const Presentation = () => {
    return (
        <div className="presentation">
            <Avatar className='avatar' name='Andreas Andersson' src='https://media-exp1.licdn.com/dms/image/C4E03AQEzfTuQ7t5CFg/profile-displayphoto-shrink_200_200/0/1583948705230?e=1649894400&v=beta&t=W5p5caXhfNIYYA_D8Qq2FzpGBVp0JjlbCBExjmj5cns' />

            <Container maxW='xl' centerContent>
                <Box padding='3' maxW='3xl' alignContent={'center'} alignItems={'center'}>
                    <GithubLogo width={50} height={50} />
                    <Text fontSize='1xl' as='em' colorScheme='light'>GitHub</Text>
                </Box>
            </Container>

            <Text className='name-text' fontSize='3xl' fontWeight={600} colorScheme='light'>Andreas Andersson</Text>
            <Text fontSize='2xl' as='em' colorScheme='light'>Software Developer</Text>
            <Button className='contact-btn' colorScheme='light'>CONTACT</Button>

        </div >
    )
}

export default Presentation;