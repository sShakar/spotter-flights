import Header from '@/components/TheHeader';
import FiltersSidebar from '@/components/FiltersSidebar';
import FlightResults from '@/components/FlightResults';

export default function ResultsPage() {
  const flights = [
    { airline: 'Airline A', price: 250, duration: '5h 30m' },
    { airline: 'Airline B', price: 300, duration: '6h 15m' },
  ];

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
