import React, { useState } from 'react'
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Skill = ({ skill }) => {
    const [skillCheck, setSkillCheck] = useState(false)
    return (
        <Box>
            <Grid container >
                <Grid item md={12} sm={12} xs={12}>
                    <Card sx={{ padding: '20px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: '700' }}>Skill : {skill.skill}</Typography>
                            {skillCheck === false ? <Button onClick={() => setSkillCheck(true)}><AddIcon sx={{ fontSize: '30px' }} /></Button> :
                                <Button onClick={() => setSkillCheck(false)}><RemoveIcon sx={{ fontSize: '30px' }} /> </Button>}
                        </Box>
                        {skillCheck && <Typography>Description : {skill.description}</Typography>}
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skill