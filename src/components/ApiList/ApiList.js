import React, { useEffect, useState } from 'react'
import { Stack, Box, Typography, Button, Container } from '@mui/material'
import image from '../../assets/case-study-trip-pro-our-challenges.png'
import List_with_Scroll from './ListWithScroll'
import UseScrollPosition from '../animation/UseScrollPosition'
import '../animation/animation.css'
import Grid from '@mui/material/Grid'


const ApiList = () => {

    const [isVisible, setIsVisible] = useState(false);
    const scrollY = UseScrollPosition();

    useEffect(() => {
        if (scrollY > 100) {
            setIsVisible(true);
        }
    }, [scrollY]);

    return (
            <Container maxWidth='lg' className={`zoom-in-from-left ${isVisible ? 'visible' : ''}`}
                sx={{
                    mt: 10,
                    position:'relative'
                }}
            >
                <Box 
                    sx={{
                       position:'absolute',
                       top:'0',
                       right:{sx:'50%',md:'22%'},
                       pr:'4'
                    }}
                >
                    <Typography variant="h4" sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 'bold',
                    }}>
                        {'OUR '}
                        <Typography
                            variant="inherit"
                            component="span"
                            sx={{
                                color: '#2DC4EA',
                            }}
                        >
                            CHALLENGES
                        </Typography>
                    </Typography>
                </Box >
                <Grid container spacing={3} sx={{pt:5}}>
                    <Grid item sm={10} md={6}>
                        <Box>
                            <img src={image} alt='case study trip pro our challenges'
                                style={{ width: "550px", height: '100%' }} />
                        </Box>
                    </Grid>
                    {/* <Grid item sm={2} md={2}></Grid> */}
                    <Grid item sm={10} md={6}>
                        <Box sx={{
                            textAlign: 'left',
                        }}>
                            <List_with_Scroll />
                        </Box>
                    </Grid>
                </Grid>
                <Button
                sx={{
                    mt:2,
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
                View More
            </Button>
            </Container>
    )
}

export default ApiList