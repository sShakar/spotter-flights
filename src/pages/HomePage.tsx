import TheHeader from '@/components/TheHeader';
import SearchBar from '@/components/SearchBar';

export default function HomePage() {
  const handleSearch = (searchParams) => {
    console.log('Search Params:', searchParams);
    // Navigate to ResultsPage with searchParams
  };

  return (
    <>
      <TheHeader />
      <SearchBar onSearch={handleSearch} />
    </>
  );
}
