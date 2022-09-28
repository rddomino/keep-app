import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext } from 'react'


import DeleteNote from './DeleteNote'
import EmptyNotes from '../notes/EmptyNotes'

import { DataContext, ContextType } from '../context/DataProvider'

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
    const { deleteNotes } = useContext<ContextType>(DataContext)

    return (
        <Box sx={{ display: 'flex', margin: 'auto', marginTop: '22px' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {
                    deleteNotes.length > 0
                        ? <Box style={{ marginTop: '30px', justifyContent: 'center' }}>
                            {
                                deleteNotes.map(note => (
                                    <DeleteNote note={note} key={note.id} />
                                ))
                            }
                        </Box>
                        : <EmptyNotes />
                }
            </Box>
        </Box>
    )
}

export default DeleteNotes