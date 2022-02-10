import { Container, Box, Text, ListItem, ListIcon, List } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import ScrollAnimation from 'react-animate-on-scroll';

const Description = () => {
    return (
        <Container maxW='xl' centerContent>
            <ScrollAnimation animateIn="fadeInUp">
                <Box padding='4' marginTop='2rem' maxW='3xl'>
                    <Text>
                        Hi! 👋 My name is Andreas Andersson.
                        <br />
                        I am a software developer based in Stockholm, Sweden.
                        <br />
                        <br />
                        I have been working as a software developer for the last two years, mostly focused in ReactJS and .NET.
                        <br />
                        <br />
                        The projects I've worked on range from small to large scale, and I've worked on a variety of technologies including:
                        <br />
                        <br />
                        <ScrollAnimation animateIn="fadeInUp">
                            <List>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    ReactJS
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    .NET
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    SignalR
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    Redis
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    MSSQL
                                </ListItem>
                                {/* You can also use custom icons from react-icons */}
                            </List>
                        </ScrollAnimation>
                        <br />
                        <ScrollAnimation animateIn="fadeInUp">
                            Feel free to check out some of my projects below! 👇
                        </ScrollAnimation>
                    </Text>
                </Box>
            </ScrollAnimation>
        </Container >
    )
}

export default Description;