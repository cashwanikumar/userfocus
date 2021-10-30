import { Button } from "reactstrap"
import { useState } from "react"
import styled from "styled-components"
import { FaPlusCircle } from "react-icons/fa"

const ALLOWED_COLOR = [
    'rgb(254, 201, 113)', 'rgb(254, 155, 114)', 'rgb(182, 147, 253)', 'rgb(0, 212, 254)', 'rgb(228, 239, 144)'
]

const ColorContent = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.bgColor ? props.bgColor : "transparent"}; 
    margin: 10px;
    cursor: pointer;
`

const ColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
`

const ColorComponentWrappper = styled.div`
    .btn {
        background: transparent !important;
        border: none !important;
    }
`

export const ColorComponent = (props) => {
    const { onAddNote } = props
    const [showColor, setShowColor] = useState(false)
    return (
        <ColorComponentWrappper>
            <Button outline className="add-btn" onClick={() => setShowColor(!showColor)}><FaPlusCircle size="2em" color="black" /></Button>
            {
                showColor && (
                    <ColorContainer>
                        {
                            ALLOWED_COLOR.map((eachColor, index) => <ColorContent key={index} bgColor={eachColor} onClick={() => onAddNote(eachColor)} />)
                        }
                    </ColorContainer>
                )
            }

        </ColorComponentWrappper>
    )
}