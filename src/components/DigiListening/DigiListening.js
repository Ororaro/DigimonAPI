import { Box, Button, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DigiCardShow from '../Digicard/DigiCardShow'
import { Container, Grid } from '@mui/material'

const DigiListening = () => {
    const { lists } = useSelector((state) => state.lists)
    return (
        <Container maxWidth="lg" sx={{ marginTop: '5rem' }}>
            <Grid container spacing={1}>
                {lists.content?.map((lists) => {
                    return (
                        <Grid item md={4} sm={2} xs={6} key={lists.id}>
                            <Card sx={{margin:'10px'}} >
                                <DigiCardShow {...lists} />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default DigiListening