import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {InputBase, Stack} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.8),
  '&:hover': {backgroundColor: alpha(theme.palette.common.white, 1)},
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: '100%',
  minWidth: '100px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function SearchBar(){
  const searchPlaceholder = "Search child name..."

  const [searchInput, setSearchInput] = React.useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Stack spacing={2} direction="row" sx={{width: '100%'}}>
      <Search>
        <SearchIconWrapper >
          <SearchIcon color="secondary"/>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={searchPlaceholder}
          inputProps={{ 'aria-label': 'search' }}
          sx={{
            width:'100%',
            color:"secondary.main",
          }}
          value={searchInput}
          onChange={handleInputChange}
        />
      </Search>
    </Stack>
  );
}