import { Card, CardContent, Typography, Box } from '@mui/material';

export default function FlightResults({ flights }) {
  return (
    <Box>
      {flights.map((flight, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{flight.airline}</Typography>
            <Typography>Price: ${flight.price}</Typography>
            <Typography>Duration: {flight.duration}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
