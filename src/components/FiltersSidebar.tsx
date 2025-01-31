import { useState } from 'react';
import { List, ListItem, ListItemText, Slider } from '@mui/material';

export default function FiltersSidebar() {
  const [priceRange, setPriceRange] = useState([100, 1000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <List>
      <ListItem>
        <ListItemText primary="Price Range" />
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          min={100}
          max={1000}
        />
      </ListItem>
      {/* Add more filters here */}
    </List>
  );
}
