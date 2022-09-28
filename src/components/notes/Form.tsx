import { useState, useContext } from 'react'
import { Box, TextField, ClickAwayListener } from '@mui/material'
import { styled } from '@mui/material/styles'
import { v4 as uuid } from 'uuid'

import { DataContext, ContextType } from '../context/DataProvider'
import { INote } from '../../types'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 600px;
    min-heigth: 30px;   
    padding: 10px 15px;
    box-shadow: 0 2px 3px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    border-radius: 8px;
    border-color: #e0e0e0;
    margin: auto;
`

const note: INote = {
    id: '',
    heading: '',
    text: '',
}

const Form = () => {
    const [showTextField, setShowTextField] = useState<boolean>(false)
    const [addNote, setAddNote] = useState<INote>({ ...note, id: uuid() })

    const { setNotes } = useContext<ContextType>(DataContext)

    const onTextClick = () => {
        setShowTextField(true)
    }

    const handleClickAway = () => {
        setShowTextField(false)
        setAddNote({ ...note, id: uuid() })

        if (addNote.heading || addNote.text) {
            setNotes((prevState: INote[]) => ([addNote, ...prevState]))
        }
    }

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let changeNote = { ...addNote, [(e.target as HTMLInputElement | HTMLTextAreaElement).name]: (e.target as HTMLInputElement | HTMLTextAreaElement).value }
        setAddNote(changeNote)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container>
                {showTextField &&
                    <TextField
                        name='heading'
                        placeholder='Введите заголовок'
                        variant='standard'
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        value={addNote.heading}
                    />
                }
                <TextField
                    name='text'
                    placeholder='Заметка...'
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    InputProps={{ disableUnderline: true }}
                    onClick={onTextClick}
                    onChange={(e) => onTextChange(e)}
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form