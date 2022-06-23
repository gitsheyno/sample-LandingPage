import React from 'react'
import { Container } from './styles/Container.styled'
import Card from './Card'
const MainContainer = ({ content }) => {
    return (
        <Container>
            {content.map(item => (
                <Card
                    key={item.id}
                    item={item}
                />
            ))}
        </Container>
    )
}

export default MainContainer
