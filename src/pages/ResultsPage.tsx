import { useLocation } from 'react-router-dom';
import Header from '@/components/TheHeader';
import FlightResults from '@/components/FlightResults';
import FiltersSidebar from '@/components/FiltersSidebar';

export default function ResultsPage() {
  const location = useLocation();
  const flights = location.state?.flights || [];
  console.log(flights);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <FiltersSidebar />
        <FlightResults flights={flights} />
      </div>
    </>
  );
}
