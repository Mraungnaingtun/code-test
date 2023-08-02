import React from 'react';
import Bg_image from '../../assets/15740.png'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
// --------------Image-----------------
import BuiltFor from '../../assets/responsive.svg'
import Wordpress from '../../assets/wordpress-development-logo-banner.svg'
import Shopping from '../../assets/shopping-cart.svg'

const Home = () => {
  return (
    <Box sx={{ position: 'relative', maxWidth: '100%', height: '100vh', overflow: 'hidden' }}>
      <img
        src={Bg_image}
        alt="Description of the image"
        style={{ width: '100%', height: '630px', objectFit: 'cover', opacity: 1 }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% opacity dark overlay
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '70%',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
        }}
      >
        {/* ------TRIPPRO - AN ECOMMERCE SOLUTION ------- */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontWeight: 300,
            fontSize: '60px',
            lineHeight: '82px',
            letterSpacing: '0px',
            color: '#FFFFFF',
            opacity: 1,
          }}
        >
          TRIPPRO - AN ECOMMERCE SOLUTION
        </Typography>
        {/* ----- Lorem ------- */}
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontWeight: 'normal',
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '0px',
            color: '#FFFFFF',
            opacity: 1,
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </Typography>
        {/* -----------------------Main Grid Container---------------------------------------- */}
        <Grid container spacing={2}>
          {/* First column */}
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    lineHeight: '33px',
                    color: '#FFFFFF',
                  }}
                >
                  Built For:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img
                src={BuiltFor}
                alt="Responsive photo"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Second Column */}
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'left',
                    fontFamily: 'Open Sans',
                    fontWeight: 'normal',
                    fontSize: '24px',
                    lineHeight: '33px',
                    letterSpacing: '0px',
                    color: '#FFFFFF',
                  }}
                >
                  Technologies:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    lineHeight: '33px',
                    color: '#FFFFFF',
                  }}
                >
                  WordPress:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img
                src={Wordpress}
                alt='WordPress SVG'
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Third Column */}
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'left',
                    fontFamily: 'Open Sans',
                    fontWeight: 'normal',
                    fontSize: '24px',
                    lineHeight: '33px',
                    letterSpacing: '0px',
                    color: '#FFFFFF',
                  }}
                >
                  Industry:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    lineHeight: '33px',
                    color: '#FFFFFF',
                  }}
                >
                  Ecommerce:
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <img
                src={Shopping}
                alt='Shooping Cart SVG'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
