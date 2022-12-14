import React, { useState, useEffect } from 'react';
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
import booking from "../../assets/images/booking.svg"
import setting from "../../assets/images/setting.svg"
import styles from "../../styles/Owner.module.css"


import Image from 'next/image';
import OwnerDashboard from './owner-dashboard';
import Booking from './Booking';
import ClockIn from './ClockIn';
import TimeSheet from './TimeSheet';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;


}

// get window dimension 

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}








const Index = (props: Props) => {
    const { window } = props;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [value, setValue] = useState("Dashboard")
    const { height, width } = useWindowSize();


    // console.log(size);
    const drawerWidth = width >= 1200 ? 300 : width >= 1024 ? 300 : width >= 768 ? 250 : width >= 640 ? 230 : 200;

    const drawerList = ["Dashboard", "Booking", "Clock in", "Time Sheet", "On Boarding", "Training", "Forms", "Updates", "Message", "Help Center"]

    const url = (id: number) => {
        const newValue = drawerList[id]
        console.log(newValue);
        setValue(newValue)
    }

    // drawer 
    const drawer = (
        <div className='ml-4 md:ml-8 lg:ml-10 relative h-screen'>
            <div className={`text-white h-[85vh] overflow-auto ${styles.scrollbar }`}>  
                {/* <Toolbar />
            <Divider /> */}
                <List>
                    <ListItem className='px-0'>
                        <Image className=' mb-2' src={logo} alt="" />
                    </ListItem>
                    {drawerList.map((text, index) => (
                        <ListItem key={text} disablePadding onClick={() => { url(index) }}  >
                            <ListItemButton className='px-0 '>
                                {/* <ListItemIcon>
                                {index % 2 === 0 ? dashboard : <MailIcon />}   
                                
                            </ListItemIcon> */}
                                <div className={drawerList[index] == value ? "" : "opacity-50"}>
                                    <Image src={booking} alt="" className=' mr-2' />
                                </div>

                                <ListItemText style={{ fontFamily: 'Poppins, sans-serif !important' }} className={drawerList[index] == value ? "fontDiv" : "fontDiv opacity-50"} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>


            </div>
            <div className='absolute bottom-5 bg-[#39698F] p-1 rounded'>
            <Image src={setting} alt=""  /> 

            </div>
            

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const renderSwitch = (param: any) => {
        switch (param) {
            case "Dashboard":
                return <OwnerDashboard />;
            case "Booking":
                return <Booking />;
            case "Clock in":
                return <ClockIn />;
            case "Time Sheet":
                return <TimeSheet />;


        }
    }

    return (
        <div>
            {/* sidebar  */}

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        display: { xs: 'block', sm: 'none' },
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
                </AppBar>
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
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#014275" },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"

                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#014275" },
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

                    {renderSwitch(value)}


                </Box>
            </Box>


        </div>
    );
};

export default Index;