import styled from "styled-components"
import { ColorComponent } from './ColorComponent'

const Wrapper = styled.div`
    width: 150px;
    border-right: 1px solid #eeeeee;
    height: 100%;
    padding: 15px;
`

export const LeftBar = (props) => {
    const { onAddNote } = props
    return (
        <Wrapper>
            <p>Docket</p>
            <ColorComponent onAddNote={onAddNote} />
        </Wrapper>
    )
}