import { FC, useContext } from 'react'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DeleteForeverOutlined, RestoreFromTrashOutlined } from '@mui/icons-material'

import { DataContext } from '../context/DataProvider'

import { INote } from '../../types'

interface INoteProps {
    note: INote
}

const StyledCard = styled(Card)`
    width: 630px;
    margin: 15px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    &:hover {
        box-shadow: 0 2px 3px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    }
`

const DeleteNote: FC<INoteProps> = ({ note }) => {
    const { setNotes, deleteNotes, setDeleteNotes } = useContext(DataContext)

    const onDeleteNote = (note: INote) => {
        const updateNotes = deleteNotes.filter(item => item.id !== note.id)
        setDeleteNotes(updateNotes)
    }

    const onRestoreNote = (note: INote) => {
        const updateNotes = deleteNotes.filter(item => item.id !== note.id)
        setDeleteNotes(updateNotes)
        setNotes((prevState: INote[]) => ([note, ...prevState]))
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>{note.heading}</Typography>
                <Typography sx={{ fontSize: '16px' }}>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <DeleteForeverOutlined
                    fontSize='small'
                    style={{ marginLeft: 'auto', color: '#4a4a4a' }}
                    onClick={() => onDeleteNote(note)}
                    titleAccess='Полностью Удалить заметку'
                />
                <RestoreFromTrashOutlined
                    fontSize='small'
                    style={{ color: '#4a4a4a' }}
                    onClick={() => onRestoreNote(note)}
                    titleAccess='Восстановить заметку'
                />
            </CardActions>
        </StyledCard>
    )
}

export default DeleteNote