import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext } from 'react'

import Form from './Form'
import Note from './Note'
import EmptyNotes from './EmptyNotes'

import { DataContext, ContextType } from '../context/DataProvider'

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {
    const { notes, filterNotes, formOpen } = useContext<ContextType>(DataContext)

    return (
        <Box sx={{ display: 'flex', margin: 'auto', marginTop: '22px' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {
                    formOpen
                        ? <Form />
                        : null
                }
                {
                    filterNotes.length > 0
                        ?
                        <Box style={{ marginTop: '30px', justifyContent: 'center' }}>
                            {
                                filterNotes.map(filterNote => (
                                    <Note note={filterNote} key={filterNote.id} />
                                ))
                            }
                        </Box>
                        : formOpen === true
                            ?
                            notes.length > 0
                                ? <Box style={{ marginTop: '30px', justifyContent: 'center' }}>
                                    {
                                        notes.map(note => (
                                            <Note note={note} key={note.id} />
                                        ))
                                    }
                                </Box>
                                : <EmptyNotes />
                            : <EmptyNotes />
                }
            </Box>
        </Box>
    )
}

export default Notes