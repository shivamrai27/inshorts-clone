import React from 'react'
import { useEffect } from 'react';
import { Box } from '@mui/material'
import { getNews } from '../services/api';
const Artcles = () => {
    useEffect(() => {
        dailyNews();
    }, []);

    const dailyNews = async () => {
        let response = await getNews();
    }
    return (
        <Box>

        </Box>
    )
}

export default Artcles