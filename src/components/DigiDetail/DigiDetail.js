import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DigimonApi from '../../api/DigimonApi'
import Skill from './Skill'
const DigiDetail = () => {
  const [List, setList] = useState([])
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const fetchDetail = async () => {
    const res = await DigimonApi.get(`${id}`)
      .catch((er) => {
        console.console.error(("error", er));
      })
    setList(res.data)
    setLoading(true)
  }
  useEffect(() => {
    fetchDetail()
  }, [])
  console.log(List)
  return (
    <Box sx={{ marginTop: '5rem' }}>
      {loading ? (
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item md={12} sm={6} xs={12} >
              <Box sx={{ textAlign: 'center' }}>
                <img src={`${List.images[0].href}`} width="50%" />
              </Box>
            </Grid>
            <Grid item md={12} sm={6} xs={12}>
              <Box>
                <Typography variant="h2" sx={{ fontFamily: 'fantasy', letterSpacing: '3px' }}>{List.name}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {List.levels.map((List) => {
                  return <Typography variant="h5" sx={{ fontFamily: 'fantasy', letterSpacing: '3px' }}> Level : {List.level}</Typography>
                })}

                {List.types.map((List) => {
                  return <Typography variant="h5" sx={{ fontFamily: 'fantasy', letterSpacing: '3px' }}> Type : {List.type}</Typography>
                })}
              </Box>
              <Box sx={{ paddingTop: '1rem' }}>
                {List.descriptions.map((List) => {
                  return <Typography sx={{ fontFamily: 'initial', textAlign: 'justify', fontSize: '18px' }}>{List.description}</Typography>
                })}
              </Box>
            </Grid>
            {List.skills.map((skill) => {
              return (
                <Grid item md={6} sm={12} xs={12} >
                  <Skill skill={skill} />
                </Grid>
              )
            })}

          </Grid>
        </Container>
      ) : (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='h1'>loading...</Typography>
        </Box>
      )}

    </Box>
  )
}

export default DigiDetail