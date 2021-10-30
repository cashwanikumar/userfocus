import { Input, InputGroup, InputGroupText } from "reactstrap"
import { FaSearch } from "react-icons/fa";
import styled from "styled-components"

const SearchInput = styled.div`
    .form-control{
        &:focus {
            box-shadow: none;
        }
    }
    .input-group-text {
        background: transparent;
        border: none;
    }
    .searchInput{
        border: none;
    }
`

export const SearchNotes = (props) => {
    const { setSearch, search } = props
    return (
        <SearchInput>
            <InputGroup>
                <InputGroupText>
                    <FaSearch />
                </InputGroupText>
                <Input value={search} onChange={e => setSearch(e.target.value)} className="searchInput" />
            </InputGroup>

        </SearchInput>
    )
}