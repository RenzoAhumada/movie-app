import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <TextField
      fullWidth
      label="Search Movies"
      variant="outlined"
      value={query}
      onChange={handleInputChange}
      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
    />
  );
};

export default SearchBar;
