import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import DigimonApi from '../../api/DigimonApi';
import { useDispatch } from 'react-redux'
import { addList } from '../../store/Reducer';
import DigiListening from '../DigiListening/DigiListening';
const Home = () => {
  const dispatch = useDispatch();
  const [newList, setNewList] = useState([])
  const fetchListNames = async (newurl) => {
    const res = await DigimonApi.get(newurl)
    setNewList(res.data);
    setTimeout(() => {
      dispatch(addList(res.data))
    }, 500)
  }
  useEffect(() => {
    fetchListNames();
  }, [])
  const paginationBack = async () => {
    fetchListNames(newList.pageable.previousPage)
  }
  const paginationNext = async () => {
    fetchListNames(newList.pageable.nextPage)
  }
  return (
    <Box>
      <DigiListening />
      <Box sx={{ textAlign: 'center', padding: '1rem' }}>
        <Typography sx={{ fontSize: '18px', fontFamily: 'initial' }}>{newList.pageable?.currentPage + 1}/{newList.pageable?.totalPages}</Typography>
        {newList.pageable?.previousPage ? <Button variant='outlined' sx={{ fontSize: '20px', color: '#000', marginRight: '10px' }} onClick={paginationBack}>Back</Button> : ""}
        {newList.pageable?.nextPage ? <Button variant='outlined' sx={{ fontSize: '20px', color: '#000' }} onClick={paginationNext}>Next</Button> : ""}
      </Box>
    </Box>
  )
}

export default Home