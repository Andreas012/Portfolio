import { Text, useColorMode, IconButton } from '@chakra-ui/react'

import './Header.css';

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div className='header'>
            <Text fontSize='2xl' color='#16A5E1'>A</Text>
            <Text fontSize='1xl' colorScheme='light'>ndersson</Text>
            <div className='darkmode-container'>
                <IconButton
                    className='darkmode-btn'
                    variant='outline'
                    colorScheme='light'
                    aria-label='Call Sage'
                    fontSize='20px'
                    onClick={toggleColorMode}
                    icon={colorMode == 'light' ? <span className="material-icons-outlined">nightlight</span> : <span className="material-icons-outlined">light_mode</span>}
                />
            </div>

        </div>
    )
}

export default Header;