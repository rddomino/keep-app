import { FC, useContext } from 'react'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { UnarchiveOutlined, DeleteForeverOutlined } from '@mui/icons-material'

import { DataContext } from '../context/DataProvider'

import { INote } from '../../types'

interface IArchiveProps {
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

const ArchiveNote: FC<IArchiveProps> = ({ note }) => {
    const { setNotes, archiveNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext)

    const onToNotes = (note: INote) => {
        const updateNotes = archiveNotes.filter(item => item.id !== note.id)
        setArchiveNotes(updateNotes)
        setNotes((prevState: INote[]) => ([note, ...prevState]))
    }

    const onDeleteNote = (note: INote) => {
        const updateNotes = archiveNotes.filter(item => item.id !== note.id)
        setArchiveNotes(updateNotes)
        setDeleteNotes((prevState: INote[]) => ([note, ...prevState]))
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>{note.heading}</Typography>
                <Typography sx={{ fontSize: '16px' }}>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <UnarchiveOutlined
                    fontSize='small'
                    style={{ marginLeft: 'auto', color: '#4a4a4a' }}
                    onClick={() => onToNotes(note)}
                    titleAccess='Вернуть заметку из архива'
                />
                <DeleteForeverOutlined
                    fontSize='small'
                    style={{ color: '#4a4a4a' }}
                    onClick={() => onDeleteNote(note)}
                    titleAccess='Удалить заметку в корзину'
                />
            </CardActions>
        </StyledCard>
    )
}

export default ArchiveNote