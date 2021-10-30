export const types = {
    ADD_NOTES: 'ADD_NOTES',
    UPDATE_NOTE: 'UPDATE_NOTE',
    REMOVE_NOTE: 'REMOVE_NOTE'
}

export const initialState = {
    notes: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case types.ADD_NOTES:
            return { ...state, notes: [...state.notes, action.payload] }

        case types.UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.id) {
                        return {
                            ...note,
                            content: action.content
                        }
                    }
                    return note
                })
            }

        case types.REMOVE_NOTE:
            return { ...state, notes: state.notes.filter(note => note.id !== action.id) }

        default:
            return { ...state }
    }
}

