import moment from "moment"
import { FiTrash } from "react-icons/fi";
import { Input } from "reactstrap"
import { Button } from "reactstrap"
import styled from "styled-components"

const NoteContainer = styled.div`
    height: 250px;
    overflow-y: auto;
    background-color: ${props => props.bgColor ? props.bgColor : "transparent"}; 
    border-radius: 5px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
    .delete {
        display: none;
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

    textarea {
        resize: none;
    }
`

const NoteFooter = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    .btn {
        border: none;
        padding: 0;
        margin: 0;
        height: fit-content;
        &:focus {
            box-shadow: none;
            
        }
        &:hover {
            box-shadow: none;
            background: none;
        }
    }
`

export const NoteCard = (props) => {
    const { note, onNoteContentChange, onNoteRemoved } = props
    const { content, createdAt, bgColor, id } = note
    return (
        <NoteContainer bgColor={bgColor}>
            <div>
                <Input
                    className="inputArea"
                    type="textarea"
                    rows={8}
                    value={content}
                    onChange={e => onNoteContentChange(id, e.target.value)}
                />
            </div>
            <NoteFooter>
                <div>{moment(createdAt).format('YYYY-MM-DD')}</div>
                <Button outline className="delete" onClick={() => onNoteRemoved(id)}><FiTrash size="1em" /></Button>
            </NoteFooter>
        </NoteContainer>
    )
}
