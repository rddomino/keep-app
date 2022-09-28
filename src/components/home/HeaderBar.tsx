import { FC } from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import SearchBox from '../home/SearchBox'

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface IHeaderBar {
    open: boolean
    handleDrawer: () => void
}

const AppBar = styled(MuiAppBar
)<AppBarProps>(({ theme, open }) => ({
    zIndex: 1201,
    background: '#fff',
    height: 70,
    boxShadow: 'inset 0 -1px 0 0 #dadce0'
}),
)

const Heading = styled(Typography)`
    color: #5f6368;
    font-size: 24px;
    margin-left: 20px
`

const HeaderBar: FC<IHeaderBar> = ({ open, handleDrawer }) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png'

    return (
        <AppBar open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge="start"
                    sx={{ marginRight: 5 }}
                >
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt="logo" style={{ width: 30, marginLeft: -20 }} />
                <Heading>Keep</Heading>
                <SearchBox />
            </Toolbar>
        </AppBar>
    )
}

export default HeaderBar
