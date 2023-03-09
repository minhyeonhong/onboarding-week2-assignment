import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';

function Header() {
    return (
        <div>
            Header
            <ButtonGroup gap="4">
                <Button colorScheme="yellow" type="button"><Link to="/main">main</Link></Button>
                <Button colorScheme="yellow" type="button"><Link to="/reservations">cart</Link></Button>
            </ButtonGroup>
        </div>
    );
}

export default Header;
