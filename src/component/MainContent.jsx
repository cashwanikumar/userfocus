import { Container, Row } from "reactstrap"
import styled from "styled-components"
import { NoteCard } from "./NoteCard"

const NoteWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const MainContent = () => {
    return (
        <Container>
            <Row xs={12}>
                <h3>Notes</h3>
            </Row>
            <NoteWrapper>
                <NoteCard sub="test" createAt="2017-09-9" bgColor="red" />
            </NoteWrapper>
        </Container>
    )
}