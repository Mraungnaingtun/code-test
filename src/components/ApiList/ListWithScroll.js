import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon'

const listItemStyle = {
    backgroundColor: '#FFFFFF', 
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'no-repeat',
    padding: 'padding-box',
    boxShadow: '0px 3px 10px #0000004D', 
};

const listItemSelectedStyle = {
    background: 'transparent linear-gradient(90deg, #2DC4EA 0%, #3AE7AB 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 10px #0000004D',
    opacity: 1,
    color: '#fff',
};


const ListWithScroll = () => {
    const [data, setData] = useState([]);

    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Box 
            sx={{
                maxHeight: 450,
                overflow: 'auto',
            }}
        >
            <List>
                {data.map(item => (
                    <ListItem key={item.id} component="div">
                        <ListItemButton
                            style={item.id === selectedIndex ? listItemSelectedStyle : listItemStyle}
                            selected={item.id === selectedIndex}
                            onClick={() => handleListItemClick(item.id)}
                            sx={{
                                mb:2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ListItemIcon sx={{
                                textAlign: 'center',
                                font: 'normal normal bold 40px/55px Open Sans',
                                letterSpacing: '0px',
                                color: '#3AE7AB',
                                opacity: 0.5,
                            }}>
                                {item.id < 10 ? "0" + item.id : item.id}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default ListWithScroll