import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../api/getApi';
import { useQuery } from '@tanstack/react-query';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['shows', showId],
    queryFn: () => getShowById(showId),
  });

  let itemToReturn;

  if (showData) {
    itemToReturn = <div>Show name: {showData.name}</div>;
  } else if (showError) {
    itemToReturn = <div>{showError.message}</div>;
  } else {
    itemToReturn = <div>Data is loading</div>;
  }

  return (
    <div>
      {itemToReturn}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Show;
