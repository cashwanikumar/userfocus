import styled from "styled-components"
import { ColorComponent } from './ColorComponent'

const Wrapper = styled.div`
    width: 150px;
    border-right: 1px solid;
    height: 100vh;
`

export const LeftBar = () => {
    return (
        <Wrapper>
            <h5>Docket</h5>
            <ColorComponent />
        </Wrapper>
    )
}