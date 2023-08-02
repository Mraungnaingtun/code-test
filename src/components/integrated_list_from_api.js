import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon'

const ApiList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // API endpoint
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Box
            sx={{
                width: 400,
            }}
        >
            <List>
                {data.map(item => (
                    <ListItem key={item.id} component="div">
                        <ListItemButton
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: 'transparent linear-gradient(90deg, #2DC4EA 0%, #3AE7AB 100%) 0% 0% no-repeat padding-box', // Gradient background
                                boxShadow: '0px 3px 10px #0000004D', // Box shadow
                                opacity: 1, // Opacity
                                padding: '8px 16px', // Padding
                                margin: '8px',
                            }}
                        >
                            <ListItemIcon sx={{
                                
                            }}>
                                {item.id}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{
                                
                            }} />

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default ApiList