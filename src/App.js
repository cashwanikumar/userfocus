import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useReducer, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { LeftBar } from './component/LeftBar';
import { MainContent } from './component/MainContent';
import { initialState, reducer, types } from './store';

const Content = styled.div`
  display: flex;
  height: calc(100vh - 120px);
  width: calc(100vw - 120px);
  background-color: rgb(255, 255, 255);
  border-radius: 28px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
}


`

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { notes } = state

  const onAddNote = color => {
    dispatch({
      type: types.ADD_NOTES,
      payload: {
        id: uuidv4(),
        bgColor: color,
        createdAt: moment(),
        content: 'New note created!'
      }
    })
  }

  const onNoteContentChange = (noteId, content) => {
    dispatch({
      type: types.UPDATE_NOTE,
      id: noteId,
      content: content
    })
  }

  const onNoteRemoved = (noteId) => {
    dispatch({
      type: types.REMOVE_NOTE,
      id: noteId,
    })
  }

  return (
    <div className="App">
      <Content>
        <LeftBar onAddNote={onAddNote} />
        <MainContent notes={notes} onNoteContentChange={onNoteContentChange} onNoteRemoved={onNoteRemoved} />
      </Content>
    </div>
  );
}

export default App;
