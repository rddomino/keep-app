import { FC } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'

import { LightbulbOutlined, ArchiveOutlined, DeleteOutlined } from '@mui/icons-material'

interface INavList {
    open: boolean
}

const NavList: FC<INavList> = ({ open }) => {
    const navList = [
        { id: 1, name: 'Заметки', icon: <LightbulbOutlined />, route: '/' },
        { id: 2, name: 'Архив', icon: <ArchiveOutlined />, route: '/archive' },
        { id: 3, name: 'Корзина', icon: <DeleteOutlined />, route: '/delete' },
    ]

    return (
        <List>
            {
                navList.map(list => (
                    <ListItem key={list.id} disablePadding sx={{ display: 'block' }}>
                        <Link to={list.route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {list.icon}
                                </ListItemIcon>
                                <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
        </List>
    )
}

export default NavList