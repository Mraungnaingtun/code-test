import React from 'react'
import { Container } from '@mui/material'
import content from '../../assets/devwp.visibleone.net_tripprohk_.png'
import laptop from '../../assets/Laptop.png'

const Computer = () => {
  return (
    <Container 
      sx={{
        position: 'relative',
        backgroundImage: `url(${laptop})`,
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width:"850px",
        height:'480px',
        '@media (max-width: 768px)': {
          width:"700px",
          height: '400px', // Adjust the height for medium screens
        },
        '@media (max-width: 576px)': {
          height: '240px', // Adjust the height for small screens
        },
      }}
    >
      <img
        src={content}
        alt="Content"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '76%',
          maxHeight: '100%',
          zIndex: 1,
        }}
      />
    </Container>
  )
}

export default Computer