import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { Stack, Box, Typography, Button, Container, Divider } from '@mui/material'
import PhoneImg from '../../assets/Tablet.png'
import UseScrollPosition from '../animation/UseScrollPosition'
import '../animation/animation.css'


const AboutTirppro = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollY = UseScrollPosition();

    useEffect(() => {
        if (scrollY > 100) {
            setIsVisible(true);
        }
    }, [scrollY]);


    return (
        <Container
            maxWidth='lg'
            sx={{
                mt: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container spacing={3}>
                <Grid item sm={12} md={6}>
                    <Box
                        sx={{
                            justifyContent: 'center',
                        }}
                        className={`zoom-in-from-left ${isVisible ? 'visible' : ''}`}>
                        <Stack direction='column' spacing={4} alignItems="flex-start" sx={{ pt: 10 }}>
                            <Typography variant="h4" sx={{
                                fontFamily: 'Open Sans, sans-serif',
                                fontWeight: 'bold',
                            }}>
                                {'ABOUT '}
                                <Typography
                                    variant="inherit"
                                    component="span"
                                    sx={{
                                        color: '#2DC4EA',
                                    }}
                                >
                                    TRIPPRO
                                </Typography>
                            </Typography>

                            <Typography variant='body1' textAlign='left'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            </Typography>
                            <Button
                                sx={{
                                    p: 2,
                                    background:
                                        'transparent linear-gradient(270deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0% no-repeat padding-box',
                                    borderRadius: '50px',
                                    opacity: 1,
                                    color: '#fff',
                                    '&:hover': {
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                Tour To Website
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item sm={12} md={6} >
                    <Box className={`zoom-in ${isVisible ? 'visible' : ''}`}>
                        <img src={PhoneImg} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutTirppro