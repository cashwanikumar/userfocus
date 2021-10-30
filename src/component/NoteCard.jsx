import { Input } from "reactstrap"
import { Button } from "reactstrap"
import styled from "styled-components"

const NoteContainer = styled.div`
    height: 250px;
    overflow-y: auto;
    min-width: 250px;
    background-color: ${props => props.bgColor ? props.bgColor : "transparent"}; 
    border-radius: 5px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    .delete {
        display: block;
    }
    &:hover {
        .delete {
            display: block;
        }
    }

    .inputArea {
        background: transparent;
        border: transparent;
        &:focus {
            box-shadow: none;
        }
    }
`

const NoteFooter = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

export const NoteCard = (props) => {
    const { sub, createAt, bgColor } = props
    return (
        <NoteContainer bgColor={bgColor}>
            <div><Input className="inputArea" type="textarea" /></div>
            <NoteFooter>
                <div>{createAt}</div>
                <Button className="delete">Delete</Button>
            </NoteFooter>
        </NoteContainer>
    )
}
