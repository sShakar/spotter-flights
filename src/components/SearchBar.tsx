import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface SearchBarProps {
  onSearch: (searchParams: { departure: string; destination: string }) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ departure, destination });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
        <Grid size={5}>
          <TextField
            label="From"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid size={5}>
          <TextField
            label="To"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid size={2}>
          <Button type="submit" variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
