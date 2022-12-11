import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../../assets/images/logo.png"
import dashboard from "../../assets/images/dashboard (5).svg"
import setting from "../../assets/images/setting.svg"


import Image from 'next/image';
import OwnerDashboard from './owner-dashboard';

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}


const Index = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const drawerList = ["Dashboard", "Booking", "Clock in", "Time Sheet", "On Boarding", "Training", "Forms", "Updates", "Message", "Help Center"]

    // drawer 
    const drawer = (
        <div className='text-white'>
            {/* <Toolbar /> */}
            {/* <Divider /> */}
            <List>
                <ListItem >
                    <Image src={logo} alt="" />
                </ListItem>
                {drawerList.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                {index % 2 === 0 ? dashboard : <MailIcon />}  
                                
                            </ListItemIcon> */}
                            <Image src={dashboard} alt="" className='text-red-600 mr-2' />
                            <ListItemText className='text' primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Image src={setting} alt="" />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div>
            {/* sidebar  */}

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {/* <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar> */}
                <Box
                    className='relative'
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"

                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"

                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>

                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <OwnerDashboard/> 

                </Box>
            </Box>


        </div>
    );
};

export default Index;