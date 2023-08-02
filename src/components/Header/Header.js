import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

// ---------------icons----------------
import SearchIcon from '@mui/icons-material/Search';
import { UilPhone } from '@iconscout/react-unicons';
import { UilWhatsapp } from '@iconscout/react-unicons';
import { UilEnvelopeAlt } from '@iconscout/react-unicons';
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'

const pages = ['Home', 'Servies', 'Company', 'Blog', 'Contant Us'];


function FirstHeader() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box>
            <AppBar position="static"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '35px',
                    px: 50,
                    backgroundColor: '#f0f0f0',
                    boxShadow: 'none',
                }}>

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                        >
                            VisibleOne
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'right',
                                alignItems:'center',
                                height: '35px',
                            }}>
                                {/* -----phone---- */}
                            <Button 
                            color="primary" 
                            startIcon={<UilPhone/>}
                            >
                                <Typography variant="button" color="black">62480838</Typography>
                            </Button>
                                {/* -----whatsapp---- */}
                            <Button color="primary" startIcon={<UilWhatsapp /> } >
                                <Typography variant="button" color="black">84849948</Typography>
                            </Button>
                                {/* -----email---- */}
                            <Button color="primary" startIcon={<UilEnvelopeAlt />} >
                                <Typography variant="button" color="black">info@visibleone.com</Typography>
                            </Button>
                                {/* -----QUOTE---- */}
                            <Button 
                            color="primary" 
                            startIcon={<UilFileAlt />}
                            sx={{
                                color: 'white', 
                                backgroundColor: 'green',
                                '&:hover': {
                                    backgroundColor: '#43A047', 
                                  },
                              }}
                             >
                                <Typography variant="button">QUOTE</Typography>
                            </Button>
                                {/* -----SG EN---- */}
                            <Button 
                            color="primary" 
                            endIcon={<UilAngleDown />}
                            variant='outlined'
                            sx={{
                                color: 'blue',
                              }}
                             >
                                <Typography variant="button">SG EN</Typography>
                            </Button>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            {/* -------------- Main Menu -----------------  */}
            <AppBar position="static"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40px',
                    px: 50,
                    backgroundColor: '#ffffff',
                    boxShadow: 'none'
                }}>

                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                        >
                            Visible One
                        </Typography>
                        {/* list of home,services,... */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'right'

                            }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                Home
                            </Button>

                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                Servies
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                Company
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                Blog
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                Contant Us
                            </Button>
                        </Box>

                        {/* ------------ Searh Icon ---------------- */}
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}
export default FirstHeader;