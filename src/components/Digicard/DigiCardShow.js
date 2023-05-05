import { Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const DigiCardShow = ( lists ) => {
  
  const [ListDetail,setListDetail] = useState([])
  const fetchDetail = async () => {
      const res = await fetch(`https://digimon-api.com/api/v1/digimon/${lists.id}`)
      const data = await res.json()
      setListDetail(data)
    };
  useEffect(() => {
    fetchDetail();
  }, [])
  return (
    <Container maxWidth="lg">
      <Box>
      <img src={`${lists.image}`} width="100%" />
        <Typography sx={{ textAlign: 'center',fontWeight:'700' }}>{ListDetail.name}</Typography>
        <Typography sx={{ textAlign: 'center' }}>ReleaseDate {ListDetail.releaseDate}</Typography>
        <Box sx={{ padding: '0.8rem 0', }}>
          <Link to={`Lists/${ListDetail.id}`} ><Button sx={{ padding: '10px', backgroundColor: '#000 !important', color: 'white' }}>Read More</Button></Link>
        </Box>
      </Box>
    </Container>
  )
  }
export default DigiCardShow