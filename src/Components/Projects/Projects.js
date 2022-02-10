import { Box, Heading, Text, Slide, propNames } from '@chakra-ui/react'
import GithubLogo from '../../Assets/GithubLogo';
import ScrollAnimation from 'react-animate-on-scroll';

import './Projects.css';

const Projects = (props) => {

    return (
        <div className="projects">
            <ScrollAnimation animateIn="fadeInUp">
                <Box className='project-box' bg='#16A5E1' w='80%' p={4} color='white' marginRight='0'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Heading as='h4' size='md'>
                            DiscWeather
                        </Heading>
                        <GithubLogo width={25} height={25} />
                    </div>
                    <Text paddingTop={'1rem'}>
                        As a discgolf enthusiast, I wanted to create a web application that would help me keep track of the weather including wind speeds on different courses .
                        <br />
                        It also display the weather forecast for the next few hours including sunset times.
                    </Text>
                </Box>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
                <Box className='project-box' bg='#16A5E1' w='80%' p={4} color='white' marginTop='2rem'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Heading as='h4' size='md'>
                            DiscWeather
                        </Heading>
                        <GithubLogo width={25} height={25} />
                    </div>
                    <Text paddingTop={'1rem'}>
                        As a discgolf enthusiast, I wanted to create a web application that would help me keep track of the weather including wind speeds on different courses .
                        <br />
                        It also display the weather forecast for the next few hours including sunset times.
                    </Text>
                </Box>
            </ScrollAnimation>
        </div>
    )

}

export default Projects;