import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Sidebar from './Sidebar'
import Notes from '../notes/Notes'
import DeleteNotes from '../trash/DeleteNotes'
import ArchiveNotes from '../archive/ArchiveNotes'

const Home = () => {
    return (
        <Box style={{ display: 'flex', width: '100%' }}>
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Notes />} />
                    <Route path='/archive' element={<ArchiveNotes />} />
                    <Route path='/delete' element={<DeleteNotes />} />
                </Routes>
            </BrowserRouter>
        </Box >
    )
}

export default Home