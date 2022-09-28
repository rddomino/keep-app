import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext } from 'react'


import ArchiveNote from './ArchiveNote'
import EmptyNotes from '../notes/EmptyNotes'

import { DataContext, ContextType } from '../context/DataProvider'

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const ArchiveNotes = () => {
    const { archiveNotes } = useContext<ContextType>(DataContext)

    return (
        <Box sx={{ display: 'flex', margin: 'auto', marginTop: '22px' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {
                    archiveNotes.length > 0
                        ? <Box style={{ marginTop: '30px', justifyContent: 'center' }}>
                            {
                                archiveNotes.map(archive => (
                                    <ArchiveNote note={archive} key={archive.id} />
                                ))
                            }
                        </Box>
                        : <EmptyNotes />
                }
            </Box>
        </Box>
    )
}

export default ArchiveNotes