import { useState, useContext } from 'react'
import { Box, TextField, ClickAwayListener } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SearchOutlined as SearchIcon, ClearOutlined } from '@mui/icons-material'
import ListItemIcon from '@mui/material/ListItemIcon'

import { DataContext, ContextType } from '../context/DataProvider'

const Container = styled(Box)`
    display: flex;
    width: 720px;
    heigth: 46px;
    border-radius: 8px;
    margin-left: 70px;
`
const openStyle = {
    backgroundColor: '#fff',
    boxShadow: '0 1px 2px 0 rgb(60 64 67/ 20%), 0 2px 3px 2px rgb(60 64 67/ 15%)',
    borderColor: '#e0e0e0',
}

const closeStyle = {
    backgroundColor: '#f1f3f4',
}

const SearchBox = () => {
    const [isFocussed, setFocussed] = useState<Boolean>(false)
    const [filterText, setFilterText] = useState<String>()

    const { notes, setFormOpen, setFilterNotes } = useContext<ContextType>(DataContext)

    const handleClickAway = () => {
        setFocussed(false)
        setFormOpen(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const searchNotes = notes.filter(item => item.text.toLowerCase().includes(e.target.value) || item.heading.toLowerCase().includes(e.target.value))
        setFilterNotes(searchNotes)
        setFilterText(e.target.value)
        setFormOpen(false)
    }

    const onDeleteFilter = () => {
        setFilterNotes([])
        setFilterText('')
        setFormOpen(true)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container
                bgcolor={
                    isFocussed
                        ? openStyle
                        : closeStyle
                }
                onClick={() => setFocussed(true)}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        marginLeft: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SearchIcon />
                </ListItemIcon>
                <TextField
                    name='search'
                    placeholder='Поиск'
                    variant='standard'
                    InputProps={{ disableUnderline: true }}
                    style={{ height: '46px', width: '640px', marginLeft: '10px', justifyContent: 'center' }}
                    onChange={handleChange}
                    value={filterText || ''}
                />
                {
                    isFocussed
                        ? <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRigth: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                            onClick={onDeleteFilter}
                        >
                            <ClearOutlined titleAccess='Очистить поле запроса' />
                        </ListItemIcon>
                        : null
                }
            </Container>
        </ClickAwayListener>
    )
}

export default SearchBox