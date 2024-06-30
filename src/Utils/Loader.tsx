import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ display: 'grid', placeItems: 'center', border: 'solid', height: '100vh' }}>
        <CircularProgress />
    </Box>
  )
}

export default Loader