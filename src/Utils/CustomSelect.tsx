import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CustomSelect = () => {
  const {i18n} = useTranslation()
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
      i18n.changeLanguage(event.target.value)
    };
  return (
    <Box  sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={'en'}>EN</MenuItem>
        <MenuItem value={'ru'}>RU</MenuItem>
        <MenuItem value={'uz'}>UZ</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default CustomSelect