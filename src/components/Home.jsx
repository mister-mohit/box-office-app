import { searchActors, searchShows } from '../api/getApi';
import SearchBar from './SearchBar';
import Shows from './Shows/Shows';
import Actors from './Actors/Actors';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
//import { useSearchStr } from './lib/useSearchStr';



const Home = () => {
  const [filter, setFilter] = useState(null);
 
  const { data: apiData, error: searchError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchCategory === 'shows'
        ? searchShows(filter.searchedStr)
        : searchActors(filter.searchedStr),
    enabled: !!filter,
  });

  const handleSubmit = async ({ searchCategory, searchedStr }) => {
    setFilter({ searchedStr, searchCategory });
  };

  const returnApiData = () => {
    if (searchError) {
      console.log('hey');
      return <div>{searchError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <h2>Not Found</h2>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <Shows show={apiData} />
      ) : (
        <Actors show={apiData} />
      );
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <div>{returnApiData()}</div>
    </div>
  );
};

export default Home;
