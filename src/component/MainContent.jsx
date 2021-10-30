import { useEffect, useState } from "react"
import { Container, Row } from "reactstrap"
import styled from "styled-components"
import { NoteCard } from "./NoteCard"
import { SearchNotes } from "./SearchNotes"

const NoteWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    height: calc(100% - 100px);
    overflow-y: auto;
`



export const MainContent = (props) => {
    const { notes, onNoteContentChange, onNoteRemoved } = props
    const [search, setSearch] = useState('')
    const [notesList, setNotesList] = useState(notes)

    useEffect(() => {
        if (!search) {
            setNotesList(notes)
            return
        }
        const filteredNotes = notes.filter(note => note.content.includes(search))
        setNotesList(filteredNotes)
    }, [search, notes])

    return (
        <Container padding="10px">
            <Row xs={12}>
                <SearchNotes setSearch={setSearch} search={search} />
            </Row>
            <Row xs={12}>
                <h3>Notes</h3>
            </Row>
            <NoteWrapper>
                {
                    notesList.map(note =>
                        <NoteCard
                            key={note.id}
                            note={note}
                            onNoteContentChange={onNoteContentChange}
                            onNoteRemoved={onNoteRemoved}
                        />
                    )
                }
            </NoteWrapper>
        </Container>
    )
}