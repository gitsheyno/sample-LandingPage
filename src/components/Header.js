import { StyledHeader, Logo, Nav,Image } from "./styles/Header.Styled";
import { Container } from "./styles/Container.styled";
import { Button } from './styles/Button.styled'
import { Flex } from "./styles/Flex.styled";
const Header = () => {
    return (
        <StyledHeader bg={'black'}>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' />
                    <Button>Try It Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>
                            Build The Community Your Fans Will Love
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit necessitatibus, ipsam accusantium nisi deleniti aliquam. Itaque debitis magnam error asperiores excepturi soluta rem vitae necessitatibus voluptate officia eius, beatae consectetur accusamus maxime sed, iusto tempore recusandae illum voluptatibus saepe. Porro.
                        </p>
                        <Button bg={'#ff0099'} color={'white'}>Get Startet For Free</Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header
