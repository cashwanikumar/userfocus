import { Button } from "reactstrap"
import { useState } from "react"
import styled from "styled-components"

const ALLOWED_COLOR = [
    'red', 'green', 'blue', 'yellow', 'orange'
]

const ColorContent = styled.div`
    width: 25px;
    height: 25px;
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

export const ColorComponent = () => {
    const [showColor, setShowColor] = useState(false)
    return (
        <div>
            <Button onClick={() => setShowColor(!showColor)}>Add</Button>
            {
                showColor && (
                    <ColorContainer>
                        {
                            ALLOWED_COLOR.map((eachColor, index) => <ColorContent key={index} bgColor={eachColor} />)
                        }
                    </ColorContainer>
                )
            }

        </div>
    )
}