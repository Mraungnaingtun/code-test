import React from 'react';
import bg from '../../assets/15740.png'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
// --------------Image-----------------
import { ReactComponent as BuiltFor } from '../../assets/responsive.svg'
import { ReactComponent as Wordpress } from '../../assets/wordpress-development-logo-banner.svg'
import { ReactComponent as Shopping } from '../../assets/shopping-cart.svg'
import Computer from './Computer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
    fontSize: {
        xs: theme.typography.pxToRem(16),
        sm: theme.typography.pxToRem(18),
        md: theme.typography.pxToRem(24),
        lg: theme.typography.pxToRem(28),
        xl: theme.typography.pxToRem(32),
    },
}));

const SmallTypography = styled(Typography)(({ theme }) => ({
    fontSize: {
        xs: theme.typography.pxToRem(20),
        sm: theme.typography.pxToRem(22),
        md: theme.typography.pxToRem(26),
        lg: theme.typography.pxToRem(30),
        xl: theme.typography.pxToRem(34),
    },
}));

const NewHome = () => {
    return (
        <Box
            sx={{
                position: 'relative',          /// relative
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '630px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* --------- Add Dark to Image ------------- */}
            <Box
                sx={{
                    position: 'absolute',               /// absolute
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '630px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% opacity dark overlay
                    zIndex: 0,
                }}
            />
            <Stack spacing={4}
                sx={{
                    position:'absolute',
                    top:'5%',
                    zIndex: 1,
                    width: {
                        xs: '100%',
                        md: '70%',
                    },
                }}
            >
                {/* ------TRIPPRO - AN ECOMMERCE SOLUTION ------- */}
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Open Sans',
                        fontWeight: 300,
                        fontSize: {
                            xs: '20px', // Font size for extra small screens
                            sm: '30px', // Font size for small screens
                            md: '40px', // Font size for medium screens
                            lg: '50px', // Font size for large screens
                            xl: '60px', // Font size for extra large screens
                        },
                        lineHeight: '82px',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        opacity: 1,
                    }}
                >
                    TRIPPRO - AN ECOMMERCE SOLUTION
                </Typography>
                {/* ---------- Lorem ---------------- */}
                <Typography
                    sx={{
                        pt: 2,
                        textAlign: 'center',
                        fontFamily: 'Open Sans',
                        fontWeight: 'normal',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        opacity: 1,
                    }}
                >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </Typography>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: 'white' }} />}
                    spacing={2}
                    alignItems="center"   
                    justifyContent="center" 
                    sx={{
                        pt: 2
                    }}
                >
                    {/* ---------- Frist -----------  */}
                    <Grid item xs={3} >
                        <Grid container spacing={1}>
                            <Grid item xs={8} >
                                <ResponsiveTypography
                                    variant="h5"
                                    textAlign="center"
                                    fontFamily="Open Sans"
                                    fontWeight="bold"
                                    color="#FFFFFF"
                                >
                                    Built For:
                                </ResponsiveTypography>
                            </Grid>
                            <Grid item xs={4} sx={{display:{xs:'none', sm:'block'}}}>
                                <BuiltFor/>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* ------------ Second ------------- */}
                    <Grid item xs={3}>
                        <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <SmallTypography
                                    variant="h6"
                                    textAlign="left"
                                    fontFamily="Open Sans"
                                    fontWeight="normal"
                                    lineHeight="33px"
                                    color="#FFFFFF"
                                >
                                    Technologies:
                                </SmallTypography>
                                <ResponsiveTypography
                                    variant="h5"
                                    textAlign="left"
                                    fontFamily="Open Sans"
                                    fontWeight="bold"
                                    color="#FFFFFF"
                                >
                                    WordPress
                                </ResponsiveTypography>
                            </Grid>
                            <Grid item xs={6} sx={{display:{xs:'none',sm:'block'}}}>
                                <Wordpress sx={{ width: '50%', height: '50%' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Third Column */}
                    <Grid item xs={3}>
                        <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <SmallTypography
                                    variant="h6"
                                    textAlign="left"
                                    fontFamily="Open Sans"
                                    fontWeight="normal"
                                    lineHeight="33px"
                                    color="#FFFFFF"
                                >
                                    Industry:
                                </SmallTypography>
                                <ResponsiveTypography
                                    variant="h5"
                                    textAlign="left"
                                    fontFamily="Open Sans"
                                    fontWeight="bold"
                                    color="#FFFFFF"
                                >
                                    Ecommerce
                                </ResponsiveTypography>
                            </Grid>
                            <Grid item xs={6} sx={{display:{xs:'none',sm:'block'}}}>
                                <Shopping />
                            </Grid>
                        </Grid>
                    </Grid>
                </Stack>
                <Box sx={{
                    mt:50
                }}>
                <Computer/>
                </Box>
            </Stack>
            
        </Box>
    );
};

export default NewHome;
