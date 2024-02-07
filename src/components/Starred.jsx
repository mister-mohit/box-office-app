import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from './lib/useStarredShows';
import { getShowByIds } from '../api/getApi';
import Shows from './Shows/Shows';

const Starred = () => {
  const [starredShowIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starredShows', starredShowIds],
    queryFn: () => 
      getShowByIds(starredShowIds).then(result =>
        result.map(show => ({ show }))
      )
    ,
    refetchOnWindowFocus: false,
  });

  console.log(starredShowsError);

  if(starredShowsError){
    return <div>Error: {starredShowsError.message}</div>
  }
  
  if(starredShows?.length > 0){
    return <Shows show={starredShows} />
  }
  if(starredShows?.length==0){
    return <div>No Shows Found</div>
  }

  return <div>Data is Loading</div>;
};

export default Starred;
